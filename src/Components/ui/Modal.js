
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

/* =========================================================
   IMAGE MODAL — MODERN PROFESSIONAL

   Features:
   - Responsive image viewer
   - Ocean / Orca theme support
   - RTL / LTR compatibility
   - Escape key to close
   - Click outside to close
   - Body scroll lock
   - Focus management
   - Accessible dialog
   - Reduced motion support

   Preserved:
   - Named export: ImgModal
   - ImgSource
   - ImgAlt
   - isOpen
   - onClose
========================================================= */

/* =========================================================
   01 — MODAL OVERLAY
========================================================= */

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  padding: clamp(12px, 3vw, 28px);

  background-color: rgba(0, 0, 0, 0.78);

  box-sizing: border-box;

  overflow-y: auto;
  overscroll-behavior: contain;

  animation: modalFadeIn 0.2s ease both;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* =========================================================
   02 — MODAL CONTENT
========================================================= */

const ModalContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: min(100%, 1000px);
  min-width: 0;

  max-height: calc(100dvh - 32px);

  margin: auto;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 16px);

  box-shadow:
    var(--shadow-md);

  overflow: hidden;

  box-sizing: border-box;

  animation: modalEnter 0.25s ease both;

  @keyframes modalEnter {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.985);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    max-height: calc(100dvh - 24px);

    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* =========================================================
   03 — MODAL HEADER
========================================================= */

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  min-height: 60px;

  padding: 12px 18px;

  background-color:
    var(
      --color-background-tertiary,
      var(--color-background-secondary)
    );

  border-block-end:
    1px solid var(--color-border);

  box-sizing: border-box;

  @media (max-width: 600px) {
    min-height: 54px;

    padding: 10px 12px;
  }
`;

const ModalTitle = styled.h2`
  margin: 0;

  min-width: 0;

  color:
    var(--color-text-primary);

  font-size: clamp(0.9rem, 1.5vw, 1rem);
  font-weight: 700;
  line-height: 1.6;

  overflow-wrap: anywhere;
`;

/* =========================================================
   04 — CLOSE BUTTON
========================================================= */

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  padding: 0;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius: 10px;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    width: 21px;
    height: 21px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color:
        var(--color-primary);

      color: #ffffff;

      border-color:
        var(--color-primary);
    }
  }

  &:focus-visible {
    outline:
      2px solid var(--color-primary);

    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   05 — MODAL IMAGE AREA
========================================================= */

const ModalMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;
  min-height: 0;

  padding: clamp(12px, 2vw, 24px);

  overflow: auto;

  background-color:
    var(--color-background);

  box-sizing: border-box;

  img {
    display: block;

    width: auto;
    height: auto;

    max-width: 100%;
    max-height: calc(100dvh - 150px);

    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 600px) {
    padding: 10px;

    img {
      max-height: calc(100dvh - 115px);
    }
  }
`;

/* =========================================================
   06 — IMAGE MODAL COMPONENT
========================================================= */

export const ImgModal = ({
  ImgSource,
  ImgAlt = "",
  isOpen = false,
  onClose,
}) => {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  const previousFocusRef = useRef(null);

  /* -------------------------------------------------------
     CLOSE ON ESCAPE
     LOCK BACKGROUND SCROLL
     RESTORE FOCUS ON CLOSE
  ------------------------------------------------------- */

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    previousFocusRef.current =
      document.activeElement;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();

        if (typeof onClose === "function") {
          onClose();
        }

        return;
      }

      if (event.key === "Tab") {
        const dialog = dialogRef.current;

        if (!dialog) {
          return;
        }

        const focusableElements =
          dialog.querySelectorAll(
            'button:not([disabled]), ' +
            'a[href], ' +
            'input:not([disabled]), ' +
            'select:not([disabled]), ' +
            'textarea:not([disabled]), ' +
            '[tabindex]:not([tabindex="-1"])'
          );

        const elements = Array.from(
          focusableElements
        );

        if (elements.length === 0) {
          event.preventDefault();
          dialog.focus();
          return;
        }

        const firstElement = elements[0];

        const lastElement =
          elements[elements.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      const previousFocus =
        previousFocusRef.current;

      if (
        previousFocus &&
        typeof previousFocus.focus === "function"
      ) {
        previousFocus.focus();
      }
    };
  }, [isOpen, onClose]);

  /* -------------------------------------------------------
     DO NOT RENDER WHEN CLOSED
  ------------------------------------------------------- */

  if (!isOpen) {
    return null;
  }

  /* -------------------------------------------------------
     CLOSE ON OVERLAY CLICK
  ------------------------------------------------------- */

  const handleOverlayClick = (event) => {
    if (
      event.target === event.currentTarget &&
      typeof onClose === "function"
    ) {
      onClose();
    }
  };

  /* -------------------------------------------------------
     ACCESSIBLE LABELS
  ------------------------------------------------------- */

  const imageDescription =
    typeof ImgAlt === "string"
      ? ImgAlt.trim()
      : "";

  const modalTitle =
    imageDescription || "Image Preview";

  /* -------------------------------------------------------
     PORTAL RENDERING

     Rendering inside document.body
     prevents clipping caused by
     parent containers.
  ------------------------------------------------------- */

  return createPortal(
    <ModalOverlay
      onClick={handleOverlayClick}
    >
      <ModalContent
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={modalTitle}
        tabIndex={-1}
      >
        {/* MODAL HEADER */}

        <ModalHeader>
          <ModalTitle>
            {imageDescription}
          </ModalTitle>

          <CloseButton
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
          >
            <IoMdClose
              aria-hidden="true"
            />
          </CloseButton>
        </ModalHeader>

        {/* MODAL IMAGE */}

        <ModalMain>
          {ImgSource && (
            <img
              src={ImgSource}
              alt={ImgAlt}
              decoding="async"
            />
          )}
        </ModalMain>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};
