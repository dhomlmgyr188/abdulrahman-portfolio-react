
import { useEffect, useState } from "react";
import styled from "styled-components";

import {
  FiChevronLeft,
  FiChevronRight,
  FiImage,
} from "react-icons/fi";

/* =====================================
   Gallery Wrapper
===================================== */

const GalleryWrapper = styled.div`
  position: relative;
  isolation: isolate;

  width: 100%;
  height: 100%;
  min-width: 0;

  overflow: hidden;

  background: var(
    --color-background-tertiary,
    var(--color-background)
  );

  /* Border radius is controlled by ProjectItem */
  border-radius: 0;

  user-select: none;
  -webkit-user-select: none;
`;

/* =====================================
   Gallery Image
===================================== */

const GalleryImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  transition: transform 0.45s ease;

  @media (hover: hover) {
    ${GalleryWrapper}:hover & {
      transform: scale(1.025);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =====================================
   Navigation Buttons
===================================== */

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;

  background: rgba(15, 23, 42, 0.68);
  color: #ffffff;

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
    background: rgba(15, 23, 42, 0.9);
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  @media (hover: none) {
    opacity: 1;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    ${({ $side }) =>
      $side === "start"
        ? "inset-inline-start: 9px;"
        : "inset-inline-end: 9px;"}
  }
`;

/* =====================================
   Image Indicators
===================================== */

const Indicators = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  max-width: calc(100% - 24px);
  padding: 7px 10px;

  border-radius: 30px;

  background: rgba(15, 23, 42, 0.55);

  transform: translateX(-50%);
`;

const Indicator = styled.button`
  display: block;
  flex-shrink: 0;

  width: ${({ $active }) => ($active ? "20px" : "6px")};
  height: 6px;

  padding: 0;
  border: none;
  border-radius: 20px;

  background: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};

  cursor: pointer;

  transition:
    width 0.2s ease,
    background 0.2s ease;

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
`;

/* =====================================
   Empty State
===================================== */

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

  & svg {
    width: 32px;
    height: 32px;
    opacity: 0.55;
  }

  & span {
    font-size: 0.85rem;
  }
`;

/* =====================================
   Component
===================================== */

const ProjectGallery = ({
  images = [],
  alt = "Project preview",
}) => {
  const imageList = Array.isArray(images)
    ? images.filter(Boolean)
    : images
      ? [images]
      : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const totalImages = imageList.length;

  const currentIndex =
    totalImages > 0 ? activeIndex % totalImages : 0;

  const hasMultipleImages = totalImages > 1;

  const nextImage = () => {
    setActiveIndex((prev) =>
      (prev + 1) % totalImages
    );
  };

  const previousImage = () => {
    setActiveIndex((prev) =>
      (prev - 1 + totalImages) % totalImages
    );
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

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
          <span>No preview available</span>
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
      <GalleryImage
        src={imageList[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        loading="lazy"
        decoding="async"
        draggable="false"
      />

      {hasMultipleImages && (
        <>
          <NavigationButton
            type="button"
            $side="start"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <FiChevronRight aria-hidden="true" />
          </NavigationButton>

          <NavigationButton
            type="button"
            $side="end"
            onClick={nextImage}
            aria-label="Next image"
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
                aria-label={`Show image ${index + 1}`}
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
