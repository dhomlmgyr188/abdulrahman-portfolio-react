
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { IconButton } from "../ui/Button/Button";
import { useTheme } from "../../context/ThemeContext";

import {
  FaSun,
  FaMoon,
} from "react-icons/fa";

/* =========================================================
   THEME TOGGLE — MODERN PROFESSIONAL

   Features:
   - Ocean / Orca theme switching
   - Arabic / English accessibility labels
   - Keyboard accessibility
   - Responsive icon sizes
   - Theme-aware appearance
   - Reduced motion support

   Preserved:
   - ThemeContext integration
   - useTheme hook
   - theme value
   - toggleTheme function
   - Shared IconButton component
   - Default export: ThemeToggle
========================================================= */

/* =========================================================
   01 — THEME TOGGLE BUTTON
========================================================= */

const ToggleButton = styled(IconButton)`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  min-width: 42px;
  min-height: 42px;

  padding: 0;

  flex-shrink: 0;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-button, 12px);

  cursor: pointer;

  box-sizing: border-box;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color:
        var(
          --color-surface-hover,
          var(--color-background-secondary)
        );

      border-color:
        var(--color-primary);

      transform: translateY(-1px);
    }
  }

  &:focus-visible {
    outline:
      2px solid var(--color-primary);

    outline-offset: 3px;
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;

    min-width: 40px;
    min-height: 40px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:active {
      transform: none;
    }
  }
`;

/* =========================================================
   02 — ICON WRAPPER
========================================================= */

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;

  flex-shrink: 0;

  svg {
    display: block;

    width: 19px;
    height: 19px;
  }
`;

/* =========================================================
   03 — LIGHT MODE ICON

   When the current theme is light,
   show the moon icon to indicate
   switching to dark mode.
========================================================= */

const MoonIcon = styled(FaMoon)`
  color:
    var(--color-primary);
`;

/* =========================================================
   04 — DARK MODE ICON

   When the current theme is dark,
   show the sun icon to indicate
   switching to light mode.
========================================================= */

const SunIcon = styled(FaSun)`
  color: #f4c95d;
`;

/* =========================================================
   05 — THEME TOGGLE COMPONENT
========================================================= */

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const { i18n } = useTranslation();

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    language.startsWith("ar");

  const isDark =
    theme === "dark";

  /* -------------------------------------------------------
     ACCESSIBLE LABELS

     The label describes the action
     that will happen after clicking.
  ------------------------------------------------------- */

  const buttonLabel = isDark
    ? (
        isArabic
          ? "التبديل إلى الوضع الفاتح"
          : "Switch to light mode"
      )
    : (
        isArabic
          ? "التبديل إلى الوضع الداكن"
          : "Switch to dark mode"
      );

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <ToggleButton
      type="button"
      onClick={toggleTheme}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      <IconWrapper aria-hidden="true">
        {isDark ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </IconWrapper>
    </ToggleButton>
  );
}

export default ThemeToggle;
