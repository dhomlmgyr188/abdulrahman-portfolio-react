
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { IconButton } from "../ui/Button/Button";

import sa from "../../assets/icons/flag-for-flag-saudi-arabia-svgrepo-com.svg";
import uusa from "../../assets/icons/usa-svgrepo-com.svg";

/* =========================================================
   LANGUAGE TOGGLE — MODERN PROFESSIONAL

   Features:
   - Arabic / English switching
   - Existing flag icons
   - Ocean / Orca theme support
   - Responsive button
   - Accessible labels
   - Prevent duplicate clicks
   - Reduced motion support

   Preserved:
   - react-i18next integration
   - changeLanguage()
   - Saudi and USA flag assets
   - Shared IconButton component
   - Default export: LangToggle
========================================================= */

/* =========================================================
   01 — LANGUAGE BUTTON
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
    transform 0.2s ease;

  &:disabled {
    cursor: wait;
    opacity: 0.65;
  }

  @media (hover: hover) and (pointer: fine) {
    &:not(:disabled):hover {
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

  &:not(:disabled):active {
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
   02 — FLAG WRAPPER
========================================================= */

const FlagWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  flex-shrink: 0;
`;

/* =========================================================
   03 — FLAG IMAGE
========================================================= */

const FlagImage = styled.img`
  display: block;

  width: 25px;
  height: 19px;

  max-width: 100%;

  object-fit: cover;
  object-position: center;

  border-radius: 3px;

  box-shadow:
    0 0 0 1px rgba(128, 128, 128, 0.15);

  @media (max-width: 480px) {
    width: 23px;
    height: 18px;
  }
`;

/* =========================================================
   04 — LANGUAGE TOGGLE COMPONENT
========================================================= */

function LangToggle() {
  const { i18n } = useTranslation();

  const [isChanging, setIsChanging] =
    useState(false);

  /* -------------------------------------------------------
     CURRENT LANGUAGE
  ------------------------------------------------------- */

  const currentLanguage =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    currentLanguage.startsWith("ar");

  /* -------------------------------------------------------
     NEXT LANGUAGE
  ------------------------------------------------------- */

  const nextLanguage =
    isArabic ? "en" : "ar";

  const nextLanguageLabel =
    isArabic ? "English" : "العربية";

  const buttonLabel = isArabic
    ? "Switch to English"
    : "التبديل إلى اللغة العربية";

  /* -------------------------------------------------------
     FLAG ICON

     Show the language that will
     be activated after clicking.
  ------------------------------------------------------- */

  const flagSource =
    isArabic ? uusa : sa;

  /* -------------------------------------------------------
     LANGUAGE SWITCH
  ------------------------------------------------------- */

  const toggleLanguage = async () => {
    if (isChanging) {
      return;
    }

    setIsChanging(true);

    try {
      await i18n.changeLanguage(nextLanguage);
    } catch (error) {
      console.error(
        "Failed to change language:",
        error
      );
    } finally {
      setIsChanging(false);
    }
  };

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <ToggleButton
      type="button"
      onClick={toggleLanguage}
      disabled={isChanging}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      <FlagWrapper>
        <FlagImage
          src={flagSource}
          alt={nextLanguageLabel}
          loading="eager"
          decoding="async"
        />
      </FlagWrapper>
    </ToggleButton>
  );
}

export default LangToggle;
