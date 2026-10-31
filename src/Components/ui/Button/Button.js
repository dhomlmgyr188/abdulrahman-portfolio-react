
import styled, { css } from "styled-components";
import { LinkU } from "../T";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   SHARED BUTTON DESIGN SYSTEM

   Theme:
   - Ocean (Light)
   - Orca (Dark)

   Original exports preserved:
   - Actions
   - Button (default)
   - NavLink
   - IconButton

   Supported props:
   - $variant
   - $size
   - $rounded

   Supported polymorphic rendering:
   - as="a"
   - as={Link}
   - as={NavLink}
========================================================= */


/* =========================================================
   01 — ACTIONS CONTAINER

   Shared wrapper for groups of buttons.
========================================================= */

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;

  gap: clamp(
    10px,
    1.5vw,
    16px
  );

  @media (max-width: 480px) {
    gap: 10px;

    justify-content: flex-start;
  }
`;


/* =========================================================
   02 — BUTTON VARIANTS

   All colors come from variables.css.

   This avoids inconsistent colors
   between pages and themes.
========================================================= */

const buttonVariants = {

  /* -------------------------------------------------------
     PRIMARY
  ------------------------------------------------------- */

  primary: css`
    --button-bg:
      var(--button-primary-bg);

    --button-text:
      var(--button-primary-text);

    --button-border:
      var(--button-primary-border);

    --button-hover-bg:
      var(--button-primary-hover-bg);

    --button-hover-text:
      var(--button-primary-hover-text);

    --button-hover-border:
      var(--button-primary-hover-border);

    --button-shadow:
      var(--shadow-sm);
  `,

  /* -------------------------------------------------------
     SECONDARY
  ------------------------------------------------------- */

  secondary: css`
    --button-bg:
      var(--button-secondary-bg);

    --button-text:
      var(--button-secondary-text);

    --button-border:
      var(--button-secondary-border);

    --button-hover-bg:
      var(--button-secondary-hover-bg);

    --button-hover-text:
      var(--button-secondary-hover-text);

    --button-hover-border:
      var(--button-secondary-hover-border);

    --button-shadow: none;
  `,

  /* -------------------------------------------------------
     TERTIARY
  ------------------------------------------------------- */

  tertiary: css`
    --button-bg:
      var(--button-tertiary-bg);

    --button-text:
      var(--button-tertiary-text);

    --button-border:
      var(--button-tertiary-border);

    --button-hover-bg:
      var(--button-tertiary-hover-bg);

    --button-hover-text:
      var(--button-tertiary-hover-text);

    --button-hover-border:
      var(--button-tertiary-hover-border);

    --button-shadow: none;
  `,

  /* -------------------------------------------------------
     GHOST
  ------------------------------------------------------- */

  ghost: css`
    --button-bg:
      var(--button-ghost-bg);

    --button-text:
      var(--button-ghost-text);

    --button-border:
      var(--button-ghost-border);

    --button-hover-bg:
      var(--button-ghost-hover-bg);

    --button-hover-text:
      var(--button-ghost-hover-text);

    --button-hover-border:
      var(--button-ghost-border);

    --button-shadow: none;
  `,

};


/* =========================================================
   03 — BUTTON SIZES
========================================================= */

const buttonSizes = {

  sm: css`
    min-height: 38px;

    padding: 8px 14px;

    font-size: 0.85rem;

    gap: 7px;

    svg,
    img {
      width: 16px;
      height: 16px;
    }
  `,

  md: css`
    min-height: var(--button-height);

    padding:
      var(--button-padding-block)
      var(--button-padding-inline);

    font-size: var(--button-font-size);

    gap: 10px;
  `,

  lg: css`
    min-height: 52px;

    padding: 13px 26px;

    font-size: 1rem;

    gap: 10px;

    svg,
    img {
      width: 20px;
      height: 20px;
    }
  `,

};


/* =========================================================
   04 — BASE BUTTON

   Works as:
   - HTML button
   - React Router Link
   - External anchor

   Examples:
   <Button>Submit</Button>

   <Button $variant="secondary">
     Download
   </Button>

   <Button as={Link} to="/contact">
     Contact
   </Button>
========================================================= */

const Button = styled.button`

  /* -------------------------------------------------------
     VARIANT
  ------------------------------------------------------- */

  ${({ $variant = "primary" }) =>
    buttonVariants[$variant] ||
    buttonVariants.primary
  }

  /* -------------------------------------------------------
     LAYOUT
  ------------------------------------------------------- */

  display: inline-flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  position: relative;

  width: auto;
  max-width: 100%;

  min-width: 0;

  gap: 10px;

  /* -------------------------------------------------------
     SIZE
  ------------------------------------------------------- */

  ${({ $size = "md" }) =>
    buttonSizes[$size] ||
    buttonSizes.md
  }

  /* -------------------------------------------------------
     APPEARANCE
  ------------------------------------------------------- */

  border:
    1px solid var(--button-border);

  border-radius:
    var(--button-radius);

  background-color:
    var(--button-bg);

  color:
    var(--button-text);

  box-shadow:
    var(--button-shadow);

  /* -------------------------------------------------------
     TYPOGRAPHY
  ------------------------------------------------------- */

  font: inherit;

  font-weight:
    var(--button-font-weight);

  line-height: 1.45;

  text-align: center;
  text-decoration: none;

  white-space: normal;
  overflow-wrap: break-word;

  /* -------------------------------------------------------
     INTERACTION
  ------------------------------------------------------- */

  cursor: pointer;

  user-select: none;

  -webkit-tap-highlight-color: transparent;

  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  /* -------------------------------------------------------
     ICONS
  ------------------------------------------------------- */

  svg,
  img {
    display: block;

    width: 18px;
    height: 18px;

    flex-shrink: 0;

    object-fit: contain;

    transition:
      transform var(--transition-fast);
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {

    &:hover:not(:disabled):not([aria-disabled="true"]) {
      transform: translateY(-2px);

      background-color:
        var(--button-hover-bg);

      color:
        var(--button-hover-text);

      border-color:
        var(--button-hover-border);

      box-shadow:
        var(--shadow-sm);

      text-decoration: none;
    }

    &:hover:not(:disabled):not([aria-disabled="true"]) svg {
      transform: translateY(-1px);
    }

  }

  /* -------------------------------------------------------
     ACTIVE
  ------------------------------------------------------- */

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(0);

    box-shadow: none;
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 4px;
  }

  /* -------------------------------------------------------
     DISABLED
  ------------------------------------------------------- */

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.55;

    cursor: not-allowed;
    pointer-events: none;

    box-shadow: none;
    transform: none;
  }

  /* -------------------------------------------------------
     ACTIVE CLASS

     Preserved for compatibility with
     existing components.
  ------------------------------------------------------- */

  &.active {
    --button-bg:
      var(--button-primary-bg);

    --button-text:
      var(--button-primary-text);

    --button-border:
      var(--button-primary-border);

    --button-hover-bg:
      var(--button-primary-hover-bg);

    --button-hover-text:
      var(--button-primary-hover-text);

    --button-hover-border:
      var(--button-primary-hover-border);
  }

  /* -------------------------------------------------------
     FULL WIDTH

     Optional prop:
     $fullWidth
  ------------------------------------------------------- */

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {

    ${({ $size = "md" }) =>
      $size === "md" &&
      css`
        min-height: 44px;

        padding: 10px 16px;

        font-size: 0.875rem;
      `
    }

  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {

    transition: none;

    svg,
    img {
      transition: none;
    }

    &:hover,
    &:active {
      transform: none !important;
    }

    &:hover svg,
    &:hover img {
      transform: none !important;
    }

  }

`;


/* =========================================================
   05 — NAVIGATION LINK

   This component is for navigation,
   not for primary call-to-action buttons.

   It preserves the original LinkU base.
========================================================= */

export const NavLink = styled(LinkU)`
  position: relative;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-height: 40px;

  padding: 9px 13px;

  gap: 7px;

  border:
    1px solid transparent;

  border-radius: 10px;

  background-color: transparent;

  color:
    var(--color-text-primary);

  font-size: 0.94rem;
  font-weight: 500;

  line-height: 1.5;

  text-decoration: none;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  &:hover {
    color: var(--color-primary);

    background-color:
      var(--color-surface-hover);

    border-color:
      var(--color-border);

    text-decoration: none;

    opacity: 1;
  }

  /* -------------------------------------------------------
     CURRENT PAGE
  ------------------------------------------------------- */

  &.active,
  &[aria-current="page"] {
    color:
      var(--color-primary);

    font-weight: 700;

    background-color:
      var(--color-primary-soft);

    border-color:
      var(--color-border);
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   06 — ICON BUTTON

   Uses the shared Button component.

   Supported props:
   - $size="sm"
   - $size="md"
   - $size="lg"
   - $rounded

   Example:
   <IconButton
     aria-label="Open settings"
     $rounded
   >
     <SettingsIcon />
   </IconButton>
========================================================= */

export const IconButton = styled(Button)`

  /* -------------------------------------------------------
     DEFAULT COLORS

     Uses the secondary button palette
     unless a different $variant is passed.
  ------------------------------------------------------- */

  ${({ $variant = "secondary" }) =>
    buttonVariants[$variant] ||
    buttonVariants.secondary
  }

  /* -------------------------------------------------------
     DEFAULT DIMENSIONS
  ------------------------------------------------------- */

  width: 44px;
  height: 44px;

  min-width: 44px;
  min-height: 44px;

  padding: 0;

  flex-shrink: 0;

  gap: 0;

  border-radius:
    var(--radius-button);

  /* -------------------------------------------------------
     ICON DIMENSIONS
  ------------------------------------------------------- */

  svg,
  img {
    width: 20px;
    height: 20px;
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {

    &:hover:not(:disabled):not([aria-disabled="true"]) {
      transform: translateY(-2px);

      box-shadow:
        var(--shadow-sm);
    }

    &:hover:not(:disabled):not([aria-disabled="true"]) svg,
    &:hover:not(:disabled):not([aria-disabled="true"]) img {
      transform: scale(1.08);
    }

  }

  /* -------------------------------------------------------
     ACTIVE
  ------------------------------------------------------- */

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: scale(0.96);
  }

  /* -------------------------------------------------------
     SMALL SIZE
  ------------------------------------------------------- */

  ${({ $size }) =>
    $size === "sm" &&
    css`
      width: 36px;
      height: 36px;

      min-width: 36px;
      min-height: 36px;

      border-radius: 10px;

      svg,
      img {
        width: 17px;
        height: 17px;
      }
    `
  }

  /* -------------------------------------------------------
     LARGE SIZE
  ------------------------------------------------------- */

  ${({ $size }) =>
    $size === "lg" &&
    css`
      width: 52px;
      height: 52px;

      min-width: 52px;
      min-height: 52px;

      border-radius: 15px;

      svg,
      img {
        width: 24px;
        height: 24px;
      }
    `
  }

  /* -------------------------------------------------------
     CIRCULAR VARIANT

     Applied last so it overrides
     small and large corner radii.
  ------------------------------------------------------- */

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 50%;
    `
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {

    &:hover,
    &:active {
      transform: none !important;
    }

    &:hover svg,
    &:hover img {
      transform: none !important;
    }

  }

`;


/* =========================================================
   07 — DEFAULT EXPORT
========================================================= */

export default Button;
