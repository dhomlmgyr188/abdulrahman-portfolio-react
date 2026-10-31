
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

import {
  FiChevronLeft,
  FiChevronRight,
  FiImage,
} from "react-icons/fi";

import { IconButton } from "../ui/Button/Button";

/* =========================================================
   ANIMATIONS
========================================================= */

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

/* =========================================================
   GALLERY STYLES
========================================================= */

const GalleryWrapper = styled.div`
  position: relative;
  isolation: isolate;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 180px;

  overflow: hidden;

  background: var(
    --color-background-tertiary,
    var(--color-background-secondary)
  );

  color: var(--color-text-primary);

  border-radius: inherit;

  user-select: none;
  -webkit-user-select: none;

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }
`;

const GalleryImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;
  min-height: 180px;

  object-fit: cover;
  object-position: center;

  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};

  transition:
    opacity 0.3s ease,
    transform 0.45s ease;

  @media (hover: hover) {
    ${GalleryWrapper}:hover & {
      transform: scale(1.025);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   SHARED NAVIGATION BUTTONS
========================================================= */

const NavigationButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  z-index: 3;

  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;

  padding: 0;

  border: 1px solid var(--color-border);

  border-radius: 50%;

  background: var(
    --color-background-secondary,
    var(--color-background)
  );

  color: var(--color-text-primary);

  box-shadow: var(--shadow-sm, none);

  transform: translateY(-50%);

  opacity: 0;

  transition:
    opacity 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  ${({ $side }) =>
    $side === "start"
      ? "inset-inline-start: 12px;"
      : "inset-inline-end: 12px;"}

  svg {
    width: 20px;
    height: 20px;
  }

  ${GalleryWrapper}:hover &,
  ${GalleryWrapper}:focus-within & {
    opacity: 1;
  }

  &:hover {
    background: var(
      --color-surface-hover,
      var(--color-background-tertiary)
    );
    border-color: var(--color-border-strong);
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (hover: none) {
    opacity: 1;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;

    ${({ $side }) =>
      $side === "start"
        ? "inset-inline-start: 9px;"
        : "inset-inline-end: 9px;"}
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   IMAGE INDICATORS
========================================================= */

const Indicators = styled.div`
  position: absolute;
  inset-inline-start: 50%;
  bottom: 12px;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 7px;

  max-width: calc(100% - 24px);

  padding: 9px 12px;

  border: 1px solid var(--color-border);
  border-radius: 999px;

  background: var(
    --color-background-secondary,
    var(--color-background)
  );

  box-shadow: var(--shadow-sm, none);

  transform: translateX(-50%);

  @media (max-width: 480px) {
    bottom: 9px;
    gap: 6px;
    padding: 8px 10px;
  }
`;

const Indicator = styled.button`
  display: block;
  flex-shrink: 0;

  width: ${({ $active }) =>
    $active ? "22px" : "8px"};

  height: 8px;
  padding: 0;

  border: 0;
  border-radius: 999px;

  background: ${({ $active }) =>
    $active
      ? "var(--color-primary)"
      : "var(--color-border-strong, var(--color-border))"};

  cursor: pointer;

  transition:
    width 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   LOADING AND EMPTY STATES
========================================================= */

const EmptyGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;

  width: 100%;
  height: 100%;
  min-height: 180px;

  padding: 24px;

  color: var(--color-text-secondary);
  text-align: center;

  svg {
    width: 32px;
    height: 32px;
    opacity: 0.65;
  }

  span {
    font-size: 0.86rem;
    line-height: 1.8;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;

  padding: 20px;

  background: var(
    --color-background-tertiary,
    var(--color-background-secondary)
  );

  color: var(--color-text-secondary);

  font-size: 0.84rem;
  line-height: 1.8;
  text-align: center;

  pointer-events: none;
`;

const Spinner = styled.span`
  width: 30px;
  height: 30px;

  border: 3px solid var(--color-border);
  border-top-color: var(--color-primary);

  border-radius: 50%;

  animation: ${spin} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* =========================================================
   PROJECT GALLERY
========================================================= */

const ProjectGallery = ({
  images = [],
  alt = "Project preview",
}) => {
  const { i18n } = useTranslation();

  const isArabic = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar"
  )
    .toLowerCase()
    .startsWith("ar");

  const galleryRef = useRef(null);
  const touchStartRef = useRef(null);

  const imageList = useMemo(() => {
    const source = Array.isArray(images)
      ? images
      : images
        ? [images]
        : [];

    return source.filter(
      (image) =>
        typeof image === "string" &&
        image.trim().length > 0
    );
  }, [images]);

  const totalImages = imageList.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const [imageLoaded, setImageLoaded] =
    useState(false);

  const [imageError, setImageError] =
    useState(false);

  const currentIndex =
    totalImages > 0
      ? ((activeIndex % totalImages) + totalImages) %
        totalImages
      : 0;

  const currentImage = imageList[currentIndex];

  const hasMultipleImages = totalImages > 1;

  /* -------------------------
     LANGUAGE LABELS
  ------------------------- */

  const labels = {
    empty: isArabic
      ? "لا تتوفر صور لهذا المشروع"
      : "No preview available",

    loading: isArabic
      ? "يرجى الانتظار، جارٍ تحميل الصورة..."
      : "Please wait, loading image...",

    error: isArabic
      ? "تعذر تحميل الصورة"
      : "Unable to load image",

    previous: isArabic
      ? "الصورة السابقة"
      : "Previous image",

    next: isArabic
      ? "الصورة التالية"
      : "Next image",

    image: (number) =>
      isArabic
        ? `عرض الصورة ${number}`
        : `Show image ${number}`,

    position: (current, total) =>
      isArabic
        ? `الصورة ${current} من ${total}`
        : `Image ${current} of ${total}`,
  };

  /* -------------------------
     NAVIGATION
  ------------------------- */

  const nextImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveIndex((previous) =>
      (previous + 1) % totalImages
    );
  }, [hasMultipleImages, totalImages]);

  const previousImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveIndex((previous) =>
      (previous - 1 + totalImages) % totalImages
    );
  }, [hasMultipleImages, totalImages]);

  const goToImage = (index) => {
    if (
      index < 0 ||
      index >= totalImages ||
      index === currentIndex
    ) {
      return;
    }

    setActiveIndex(index);
  };

  /* -------------------------
     RESET WHEN IMAGES CHANGE
  ------------------------- */

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentImage]);

  /* -------------------------
     KEYBOARD NAVIGATION
  ------------------------- */

  const handleKeyDown = (event) => {
    if (!hasMultipleImages) return;

    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();

      if (isArabic) {
        nextImage();
      } else {
        previousImage();
      }
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();

      if (isArabic) {
        previousImage();
      } else {
        nextImage();
      }
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToImage(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goToImage(totalImages - 1);
    }
  };

  /* -------------------------
     TOUCH SWIPE
  ------------------------- */

  const handleTouchStart = (event) => {
    if (!hasMultipleImages) return;

    const touch = event.touches[0];

    if (!touch) return;

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event) => {
    const start = touchStartRef.current;

    touchStartRef.current = null;

    if (!start || !hasMultipleImages) {
      return;
    }

    const touch = event.changedTouches[0];

    if (!touch) return;

    const deltaX = start.x - touch.clientX;
    const deltaY = start.y - touch.clientY;

    /*
      Only navigate on a clear horizontal swipe.
      Vertical scrolling remains unaffected.
    */

    if (
      Math.abs(deltaX) < 50 ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX > 0) {
      if (isArabic) {
        previousImage();
      } else {
        nextImage();
      }
    } else if (isArabic) {
      nextImage();
    } else {
      previousImage();
    }
  };

  const handleTouchCancel = () => {
    touchStartRef.current = null;
  };

  /* -------------------------
     EMPTY STATE
  ------------------------- */

  if (totalImages === 0) {
    return (
      <GalleryWrapper
        role="group"
        aria-label={alt}
      >
        <EmptyGallery>
          <FiImage aria-hidden="true" />

          <span>{labels.empty}</span>
        </EmptyGallery>
      </GalleryWrapper>
    );
  }

  /* -------------------------
     RENDER
  ------------------------- */

  const StartArrow = isArabic
    ? FiChevronRight
    : FiChevronLeft;

  const EndArrow = isArabic
    ? FiChevronLeft
    : FiChevronRight;

  return (
    <GalleryWrapper
      ref={galleryRef}
      role="group"
      aria-label={alt}
      aria-roledescription={
        isArabic ? "معرض صور" : "Image gallery"
      }
      tabIndex={hasMultipleImages ? 0 : undefined}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* IMAGE LOADING */}

      {!imageLoaded && !imageError && (
        <LoadingOverlay role="status">
          <Spinner aria-hidden="true" />

          <span>{labels.loading}</span>
        </LoadingOverlay>
      )}

      {/* IMAGE / ERROR */}

      {imageError ? (
        <EmptyGallery role="status">
          <FiImage aria-hidden="true" />

          <span>{labels.error}</span>
        </EmptyGallery>
      ) : (
        <GalleryImage
          key={currentImage}
          src={currentImage}
          alt={`${alt} - ${currentIndex + 1}`}
          $loaded={imageLoaded}
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => {
            setImageLoaded(true);
            setImageError(false);
          }}
          onError={() => {
            setImageLoaded(false);
            setImageError(true);
          }}
        />
      )}

      {/* NAVIGATION */}

      {hasMultipleImages && (
        <>
          <NavigationButton
            type="button"
            $variant="secondary"
            $side="start"
            onClick={previousImage}
            aria-label={labels.previous}
            title={labels.previous}
          >
            <StartArrow aria-hidden="true" />
          </NavigationButton>

          <NavigationButton
            type="button"
            $variant="secondary"
            $side="end"
            onClick={nextImage}
            aria-label={labels.next}
            title={labels.next}
          >
            <EndArrow aria-hidden="true" />
          </NavigationButton>

          {/* IMAGE INDICATORS */}

          <Indicators
            role="group"
            aria-label={labels.position(
              currentIndex + 1,
              totalImages
            )}
          >
            {imageList.map((_, index) => (
              <Indicator
                key={index}
                type="button"
                $active={currentIndex === index}
                onClick={() => goToImage(index)}
                aria-label={labels.image(index + 1)}
                aria-current={
                  currentIndex === index
                    ? "true"
                    : undefined
                }
                title={labels.image(index + 1)}
              />
            ))}
          </Indicators>
        </>
      )}
    </GalleryWrapper>
  );
};

export default ProjectGallery;
