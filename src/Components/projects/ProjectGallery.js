
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

import {
  FiChevronLeft,
  FiChevronRight,
  FiImage,
} from "react-icons/fi";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const GalleryWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  background: var(--color-background-tertiary);
  border-radius: 0;
  user-select: none;
  -webkit-user-select: none;
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
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

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 37px;
  height: 37px;
  padding: 0;

  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-background-secondary);
  color: var(--color-text-primary);

  cursor: pointer;
  transform: translateY(-50%);
  opacity: 0;

  transition:
    opacity 0.2s ease,
    background 0.2s ease;

  ${({ $side }) =>
    $side === "start"
      ? "inset-inline-start: 12px;"
      : "inset-inline-end: 12px;"}

  & svg {
    width: 19px;
    height: 19px;
  }

  ${GalleryWrapper}:hover &,
  ${GalleryWrapper}:focus-within & {
    opacity: 1;
  }

  &:hover {
    background: var(--color-background-tertiary);
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
    width: 33px;
    height: 33px;

    ${({ $side }) =>
      $side === "start"
        ? "inset-inline-start: 9px;"
        : "inset-inline-end: 9px;"}
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  max-width: calc(100% - 24px);
  padding: 8px 11px;

  border: 1px solid var(--color-border);
  border-radius: 30px;
  background: var(--color-background-secondary);
  box-shadow: var(--shadow-sm);

  transform: translateX(-50%);
`;

const Indicator = styled.button`
  display: block;
  flex-shrink: 0;

  width: ${({ $active }) => ($active ? "20px" : "7px")};
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 20px;

  background: ${({ $active }) =>
    $active
      ? "var(--color-primary)"
      : "var(--color-border)"};

  cursor: pointer;

  transition:
    width 0.2s ease,
    background 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;

const EmptyGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: 100%;
  min-height: 180px;

  color: var(--color-text-secondary);
  text-align: center;

  & svg {
    width: 32px;
    height: 32px;
    opacity: 0.6;
  }

  & span {
    font-size: 0.85rem;
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

  background: var(--color-background-tertiary);
  color: var(--color-text-secondary);

  font-size: 0.84rem;
  text-align: center;
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

const ProjectGallery = ({
  images = [],
  alt = "Project preview",
}) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const imageList = Array.isArray(images)
    ? images.filter(Boolean)
    : images
      ? [images]
      : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const totalImages = imageList.length;

  const currentIndex =
    totalImages > 0
      ? activeIndex % totalImages
      : 0;

  const currentImage = imageList[currentIndex];
  const hasMultipleImages = totalImages > 1;

  const nextImage = () => {
    if (!hasMultipleImages) return;

    setActiveIndex((prev) =>
      (prev + 1) % totalImages
    );
  };

  const previousImage = () => {
    if (!hasMultipleImages) return;

    setActiveIndex((prev) =>
      (prev - 1 + totalImages) % totalImages
    );
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentImage]);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null || !hasMultipleImages) {
      return;
    }

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      const isRTL =
        document.documentElement.dir === "rtl";

      if (distance > 0) {
        isRTL ? previousImage() : nextImage();
      } else {
        isRTL ? nextImage() : previousImage();
      }
    }

    setTouchStart(null);
  };

  if (totalImages === 0) {
    return (
      <GalleryWrapper>
        <EmptyGallery>
          <FiImage aria-hidden="true" />
          <span>
            {isArabic
              ? "لا تتوفر صور لهذا المشروع"
              : "No preview available"}
          </span>
        </EmptyGallery>
      </GalleryWrapper>
    );
  }

  return (
    <GalleryWrapper
      role="group"
      aria-label={alt}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {!imageLoaded && !imageError && (
        <LoadingOverlay role="status">
          <Spinner aria-hidden="true" />
          <span>
            {isArabic
              ? "يرجى الانتظار، جارٍ تحميل الصورة..."
              : "Please wait, loading image..."}
          </span>
        </LoadingOverlay>
      )}

      {imageError ? (
        <EmptyGallery>
          <FiImage aria-hidden="true" />
          <span>
            {isArabic
              ? "تعذر تحميل الصورة"
              : "Unable to load image"}
          </span>
        </EmptyGallery>
      ) : (
        <GalleryImage
          key={currentImage}
          src={currentImage}
          alt={`${alt} - ${currentIndex + 1}`}
          $loaded={imageLoaded}
          loading="lazy"
          decoding="async"
          draggable="false"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}

      {hasMultipleImages && (
        <>
          <NavigationButton
            type="button"
            $side="start"
            onClick={previousImage}
            aria-label={
              isArabic
                ? "الصورة السابقة"
                : "Previous image"
            }
          >
            <FiChevronRight aria-hidden="true" />
          </NavigationButton>

          <NavigationButton
            type="button"
            $side="end"
            onClick={nextImage}
            aria-label={
              isArabic
                ? "الصورة التالية"
                : "Next image"
            }
          >
            <FiChevronLeft aria-hidden="true" />
          </NavigationButton>

          <Indicators>
            {imageList.map((_, index) => (
              <Indicator
                key={index}
                type="button"
                $active={currentIndex === index}
                onClick={() => setActiveIndex(index)}
                aria-label={
                  isArabic
                    ? `عرض الصورة ${index + 1}`
                    : `Show image ${index + 1}`
                }
                aria-current={
                  currentIndex === index
                    ? "true"
                    : undefined
                }
              />
            ))}
          </Indicators>
        </>
      )}
    </GalleryWrapper>
  );
};

export default ProjectGallery;
