
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { useTheme } from "../../../context/ThemeContext";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   LANGUAGE & THEME SETTINGS

   Features:
   - Arabic / English
   - Light / Dark theme
   - Desktop and mobile
   - Portal dropdown
   - Responsive positioning
   - Outside click
   - Escape key
   - Keyboard navigation
   - RTL / LTR

   Original API preserved:
   <Settings />
   <Settings mobile />
========================================================= */


/* =========================================================
   01 — SETTINGS WRAPPER
========================================================= */

const SettingsWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  width: max-content;
  max-width: 100%;

  min-width: 0;
  flex-shrink: 0;
`;


/* =========================================================
   02 — SETTINGS TRIGGER
========================================================= */

const SettingsTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  min-height: 42px;
  max-width: 100%;

  padding: 9px 13px;

  border: 1px solid
    ${({ $open }) =>
      $open
        ? "var(--color-border-strong)"
        : "transparent"
    };

  border-radius: var(--radius-button);

  background-color: ${({ $open }) =>
    $open
      ? "var(--color-surface-secondary)"
      : "transparent"
  };

  color: var(--color-text-primary);

  font: inherit;
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.5;

  white-space: nowrap;

  cursor: pointer;

  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    color: var(--color-primary);

    background-color:
      var(--color-surface-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   03 — CHEVRON
========================================================= */

const Chevron = styled.svg`
  width: 17px;
  height: 17px;

  flex-shrink: 0;

  transform: rotate(
    ${({ $open }) =>
      $open ? "180deg" : "0deg"
    }
  );

  transition:
    transform var(--transition-fast);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   04 — FLOATING DROPDOWN
========================================================= */

const SettingsDropdown = styled.div`
  position: fixed;
  z-index: 2000;

  display: flex;
  flex-direction: column;

  gap: 8px;

  width: min(
    290px,
    calc(100vw - 24px)
  );

  max-height: calc(100dvh - 24px);

  padding: 10px;

  overflow-y: auto;
  overscroll-behavior: contain;

  background-color:
    var(--color-background-secondary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card);

  box-shadow:
    var(--shadow-lg);

  box-sizing: border-box;

  animation:
    settingsFadeIn 0.18s ease both;

  @keyframes settingsFadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;


/* =========================================================
   05 — SETTING OPTION
========================================================= */

const SettingOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  width: 100%;
  min-height: 60px;

  padding: 12px 14px;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-button);

  background-color:
    var(--color-surface-secondary);

  color:
    var(--color-text-primary);

  font: inherit;
  text-align: start;

  cursor: pointer;

  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);

  @media (hover: hover) {
    &:hover {
      background-color:
        var(--color-surface-hover);

      border-color:
        var(--color-border-strong);

      transform: translateY(-1px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: -3px;
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
   06 — OPTION CONTENT
========================================================= */

const OptionInfo = styled.span`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 4px;

  min-width: 0;
`;


const OptionTitle = styled.span`
  color: var(--color-text-primary);

  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
`;


const OptionDescription = styled.span`
  color: var(--color-text-secondary);

  font-size: 0.78rem;
  font-weight: 400;
  line-height: 1.5;
`;


const OptionValue = styled.span`
  flex-shrink: 0;

  color: var(--color-primary);

  font-size: 0.85rem;
  font-weight: 700;

  white-space: nowrap;
`;


/* =========================================================
   07 — SETTINGS COMPONENT
========================================================= */

function Settings({ mobile = false }) {

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { i18n } = useTranslation();

  /* -------------------------------------------------------
     THEME
  ------------------------------------------------------- */

  const { theme, toggleTheme } = useTheme();

  /* -------------------------------------------------------
     STATE
  ------------------------------------------------------- */

  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  /* -------------------------------------------------------
     REFS
  ------------------------------------------------------- */

  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  const dropdownId = useId();

  /* -------------------------------------------------------
     CURRENT VALUES
  ------------------------------------------------------- */

  const isDark = theme === "dark";

  const currentLanguage =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    currentLanguage.startsWith("ar");

  /* -------------------------------------------------------
     LABELS
  ------------------------------------------------------- */

  const labels = isArabic
    ? {
        settings: "الإعدادات",
        changeLanguage: "تغيير اللغة",
        changeTheme: "تغيير المظهر",
        arabic: "العربية",
        english: "English",
        lightMode: "الوضع الفاتح",
        darkMode: "الوضع الداكن",
        light: "فاتح",
        dark: "داكن",
      }
    : {
        settings: "Settings",
        changeLanguage: "Change language",
        changeTheme: "Change theme",
        arabic: "العربية",
        english: "English",
        lightMode: "Light mode",
        darkMode: "Dark mode",
        light: "Light",
        dark: "Dark",
      };

  /* =====================================================
     08 — POSITION CALCULATION

     The dropdown is rendered in a portal.

     This function positions it relative
     to the trigger while keeping it
     inside the viewport.
  ===================================================== */

  const updatePosition = useCallback(() => {

    const trigger = triggerRef.current;

    if (!trigger) {
      return;
    }

    const rect =
      trigger.getBoundingClientRect();

    const viewportWidth =
      window.innerWidth;

    const viewportHeight =
      window.innerHeight;

    const margin = 12;
    const offset = 8;

    const dropdownWidth = Math.min(
      290,
      viewportWidth - margin * 2
    );

    const preferredLeft = isArabic
      ? rect.right - dropdownWidth
      : rect.left;

    const left = Math.max(
      margin,
      Math.min(
        preferredLeft,
        viewportWidth -
          dropdownWidth -
          margin
      )
    );

    const dropdownHeight =
      dropdownRef.current?.offsetHeight ||
      160;

    const spaceBelow =
      viewportHeight - rect.bottom;

    const spaceAbove =
      rect.top;

    const shouldOpenAbove =
      spaceBelow < dropdownHeight + offset + margin &&
      spaceAbove > spaceBelow;

    let top;

    if (shouldOpenAbove) {

      top =
        rect.top -
        dropdownHeight -
        offset;

    } else {

      top =
        rect.bottom +
        offset;

    }

    top = Math.max(
      margin,
      Math.min(
        top,
        viewportHeight -
          dropdownHeight -
          margin
      )
    );

    setPosition((previous) => {

      if (
        previous.top === top &&
        previous.left === left
      ) {
        return previous;
      }

      return {
        top,
        left,
      };

    });

  }, [isArabic]);

  /* =====================================================
     09 — POSITION ON OPEN
  ===================================================== */

  useLayoutEffect(() => {

    if (!open) {
      return;
    }

    updatePosition();

  }, [open, updatePosition]);

  /* =====================================================
     10 — CLOSE ON OUTSIDE CLICK

     Important:
     Both the trigger and portal dropdown
     count as part of the settings UI.
  ===================================================== */

  useEffect(() => {

    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event) => {

      const clickedTrigger =
        triggerRef.current?.contains(
          event.target
        );

      const clickedDropdown =
        dropdownRef.current?.contains(
          event.target
        );

      if (
        !clickedTrigger &&
        !clickedDropdown
      ) {
        setOpen(false);
      }

    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {

      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

    };

  }, [open]);

  /* =====================================================
     11 — KEYBOARD SUPPORT

     Escape closes settings and returns
     focus to the trigger.

     ArrowDown and ArrowUp move between
     the available setting options.
  ===================================================== */

  useEffect(() => {

    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {

        event.preventDefault();
        event.stopImmediatePropagation();

        setOpen(false);

        triggerRef.current?.focus();

        return;
      }

      if (
        event.key !== "ArrowDown" &&
        event.key !== "ArrowUp"
      ) {
        return;
      }

      const dropdown =
        dropdownRef.current;

      if (!dropdown) {
        return;
      }

      const options = Array.from(
        dropdown.querySelectorAll(
          "button:not(:disabled)"
        )
      );

      if (options.length === 0) {
        return;
      }

      const currentIndex =
        options.indexOf(
          document.activeElement
        );

      let nextIndex;

      if (event.key === "ArrowDown") {

        nextIndex =
          currentIndex < 0
            ? 0
            : (currentIndex + 1) %
              options.length;

      } else {

        nextIndex =
          currentIndex < 0
            ? options.length - 1
            : (
                currentIndex -
                1 +
                options.length
              ) % options.length;

      }

      event.preventDefault();

      options[nextIndex]?.focus();

    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
      true
    );

    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown,
        true
      );

    };

  }, [open]);

  /* =====================================================
     12 — REPOSITION ON RESIZE / SCROLL
  ===================================================== */

  useEffect(() => {

    if (!open) {
      return undefined;
    }

    const handleReposition = () => {
      updatePosition();
    };

    window.addEventListener(
      "resize",
      handleReposition
    );

    window.addEventListener(
      "scroll",
      handleReposition,
      true
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleReposition
      );

      window.removeEventListener(
        "scroll",
        handleReposition,
        true
      );

    };

  }, [open, updatePosition]);

  /* =====================================================
     13 — CHANGE LANGUAGE
  ===================================================== */

  const changeLanguage = async () => {

    const nextLanguage =
      isArabic ? "en" : "ar";

    try {

      await i18n.changeLanguage(
        nextLanguage
      );

      setOpen(false);

    } catch (error) {

      console.error(
        "Failed to change language:",
        error
      );

    }

  };

  /* =====================================================
     14 — CHANGE THEME
  ===================================================== */

  const changeTheme = () => {

    toggleTheme();

    setOpen(false);

  };

  /* =====================================================
     15 — TOGGLE DROPDOWN
  ===================================================== */

  const toggleDropdown = () => {

    setOpen((previous) => !previous);

  };

  /* =====================================================
     16 — RENDER
  ===================================================== */

  return (
    <SettingsWrapper
      data-mobile={mobile}
    >

      {/* =================================
          SETTINGS TRIGGER
      ================================= */}

      <SettingsTrigger
        ref={triggerRef}
        type="button"
        $open={open}
        aria-label={labels.settings}
        aria-expanded={open}
        aria-controls={dropdownId}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >

        <span>
          {labels.settings}
        </span>

        <Chevron
          $open={open}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m6 9 6 6 6-6" />
        </Chevron>

      </SettingsTrigger>

      {/* =================================
          SETTINGS DROPDOWN

          Rendered outside the header
          using React Portal.
      ================================= */}

      {open &&
        createPortal(

          <SettingsDropdown
            ref={dropdownRef}
            id={dropdownId}
            dir={isArabic ? "rtl" : "ltr"}
            role="group"
            aria-label={labels.settings}
            style={{
              top: position.top,
              left: position.left,
            }}
            onPointerDown={(event) => {
              event.stopPropagation();
            }}
          >

            {/* ---------------------------
                LANGUAGE OPTION
            --------------------------- */}

            <SettingOption
              type="button"
              onClick={changeLanguage}
              aria-label={
                isArabic
                  ? "التبديل إلى الإنجليزية"
                  : "Switch to Arabic"
              }
            >

              <OptionInfo>

                <OptionTitle>
                  {labels.changeLanguage}
                </OptionTitle>

                <OptionDescription>
                  {isArabic
                    ? labels.arabic
                    : labels.english
                  }
                </OptionDescription>

              </OptionInfo>

              <OptionValue>
                {isArabic
                  ? labels.english
                  : labels.arabic
                }
              </OptionValue>

            </SettingOption>

            {/* ---------------------------
                THEME OPTION
            --------------------------- */}

            <SettingOption
              type="button"
              onClick={changeTheme}
              aria-label={
                isDark
                  ? isArabic
                    ? "التبديل إلى الوضع الفاتح"
                    : "Switch to light mode"
                  : isArabic
                    ? "التبديل إلى الوضع الداكن"
                    : "Switch to dark mode"
              }
            >

              <OptionInfo>

                <OptionTitle>
                  {labels.changeTheme}
                </OptionTitle>

                <OptionDescription>
                  {isDark
                    ? labels.darkMode
                    : labels.lightMode
                  }
                </OptionDescription>

              </OptionInfo>

              <OptionValue>
                {isDark
                  ? labels.light
                  : labels.dark
                }
              </OptionValue>

            </SettingOption>

          </SettingsDropdown>,

          document.body

        )
      }

    </SettingsWrapper>
  );
}


/* =========================================================
   17 — EXPORT
========================================================= */

export default Settings;
