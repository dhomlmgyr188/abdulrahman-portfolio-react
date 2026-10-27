
import styled, { css } from "styled-components";
import { LinkU } from "../T";

/* =====================================
   Actions Container
===================================== */

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(10px, 1.5vw, 16px);

  @media (max-width: 480px) {
    justify-content: center;
    gap: 10px;
  }
`;

/* =====================================
   Button Variants
===================================== */

const buttonVariants = {
  primary: css`
    --button-bg: var(--color-primary);
    --button-text: var(--color-background);
    --button-border: var(--color-primary);

    --button-hover-bg: var(--color-primary-dark);
    --button-hover-text: var(--color-white);
    --button-hover-border: var(--color-primary-dark);

    --button-shadow: 0 4px 12px
      color-mix(
        in srgb,
        var(--color-primary) 18%,
        transparent
      );
  `,

  secondary: css`
    --button-bg: var(--color-background);
    --button-text: var(--color-primary);
    --button-border: color-mix(
      in srgb,
      var(--color-primary) 22%,
      var(--color-border)
    );

    --button-hover-bg: var(--color-background-secondary);
    --button-hover-text: var(--color-primary);
    --button-hover-border: var(--color-primary);

    --button-shadow: none;
  `,

  tertiary: css`
    --button-bg: var(--color-tertiary);
    --button-text: var(--color-background);
    --button-border: var(--color-tertiary);

    --button-hover-bg: var(--color-tertiary-dark);
    --button-hover-text: var(--color-white);
    --button-hover-border: var(--color-tertiary-dark);

    --button-shadow: 0 4px 12px
      color-mix(
        in srgb,
        var(--color-tertiary) 15%,
        transparent
      );
  `,

  ghost: css`
    --button-bg: transparent;
    --button-text: var(--color-text-primary);
    --button-border: transparent;

    --button-hover-bg: var(--color-background-secondary);
    --button-hover-text: var(--color-primary);
    --button-hover-border: transparent;

    --button-shadow: none;
  `,
};

/* =====================================
   Base Button
===================================== */

const Button = styled.button`
  ${({ $variant = "primary" }) =>
    buttonVariants[$variant] || buttonVariants.primary}

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  min-height: 46px;
  padding: 11px 22px;

  border: 1px solid var(--button-border);
  border-radius: 12px;

  background-color: var(--button-bg);
  color: var(--button-text);

  font: inherit;
  font-size: 0.94rem;
  font-weight: 700;
  line-height: 1.45;

  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  box-shadow: var(--button-shadow);

  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  & svg,
  & img {
    display: block;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    object-fit: contain;

    transition: transform var(--transition-fast);
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(-2px);

    background-color: var(--button-hover-bg);
    color: var(--button-hover-text);
    border-color: var(--button-hover-border);

    box-shadow: var(--shadow-md);
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) svg {
    transform: translateY(-1px);
  }

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
    transform: none;
  }

  &.active {
    --button-bg: var(--color-secondary);
    --button-border: var(--color-secondary);
    --button-text: var(--color-background);

    --button-hover-bg: var(--color-secondary-dark);
    --button-hover-border: var(--color-secondary-dark);
    --button-hover-text: var(--color-white);
  }

  @media (max-width: 480px) {
    min-height: 44px;
    padding: 10px 16px;
    font-size: 0.875rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    & svg,
    & img {
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

/* =====================================
   Navigation Link
===================================== */

export const NavLink = styled(LinkU)`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
  padding: 9px 13px;

  border: 1px solid transparent;
  border-radius: 10px;

  color: var(--color-text-primary);

  font-size: 0.94rem;
  font-weight: 500;
  text-decoration: none;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    color: var(--color-primary);

    background-color: var(--color-background-secondary);
    border-color: var(--color-border);

    opacity: 1;
  }

  &.active,
  &[aria-current="page"] {
    color: var(--color-primary);
    font-weight: 700;

    background-color: color-mix(
      in srgb,
      var(--color-primary) 7%,
      var(--color-background)
    );

    border-color: color-mix(
      in srgb,
      var(--color-primary) 12%,
      transparent
    );
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;

/* =====================================
   Icon Button
===================================== */

export const IconButton = styled(Button)`
  --button-bg: var(--color-background-secondary);
  --button-text: var(--color-primary);
  --button-border: var(--color-border);

  --button-hover-bg: var(--color-background-tertiary);
  --button-hover-text: var(--color-primary);
  --button-hover-border: var(--color-primary);

  --button-shadow: none;

  width: 44px;
  height: 44px;
  min-height: 44px;

  padding: 0;
  flex-shrink: 0;

  border-radius: 12px;

  & svg,
  & img {
    width: 20px;
    height: 20px;
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) svg,
  &:hover:not(:disabled):not([aria-disabled="true"]) img {
    transform: scale(1.08);
  }

  &:active:not(:disabled):not([aria-disabled="true"]) {
    transform: scale(0.96);
  }

  /* Circular variant */
  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 50%;
    `}

  /* Small size */
  ${({ $size }) =>
    $size === "sm" &&
    css`
      width: 36px;
      height: 36px;
      min-height: 36px;

      border-radius: 10px;

      & svg,
      & img {
        width: 17px;
        height: 17px;
      }
    `}

  /* Large size */
  ${({ $size }) =>
    $size === "lg" &&
    css`
      width: 52px;
      height: 52px;
      min-height: 52px;

      border-radius: 15px;

      & svg,
      & img {
        width: 24px;
        height: 24px;
      }
    `}

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 50%;
    `}
`;

export default Button;
