
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

/* =====================================
   Settings Wrapper
===================================== */

const SettingsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
  max-width: 100%;
  flex-shrink: 0;
`;

/* =====================================
   Settings Trigger
===================================== */

const SettingsTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  width: max-content;
  min-height: 40px;
  padding: 8px 12px;

  border: 1px solid
    ${({ $open }) =>
      $open ? "var(--color-primary)" : "transparent"};

  border-radius: 10px;

  background: ${({ $open }) =>
    $open
      ? "var(--color-background-secondary)"
      : "transparent"};

  color: var(--color-text-primary, var(--color-text));

  font: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--color-primary);
    background: var(--color-background-secondary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;

/* =====================================
   Chevron
===================================== */

const Chevron = styled.svg`
  width: 17px;
  height: 17px;
  flex-shrink: 0;

  transform: rotate(
    ${({ $open }) => ($open ? "180deg" : "0deg")}
  );

  transition: transform 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =====================================
   Floating Dropdown
===================================== */

const SettingsDropdown = styled.div`
  position: fixed;
  z-index: 2000;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: min(290px, calc(100vw - 24px));
  padding: 10px;

  max-height: calc(100dvh - 24px);
  overflow-y: auto;

  background: var(--color-background-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 14px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.14);

  animation: settingsFadeIn 0.18s ease both;

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

/* =====================================
   Setting Option
===================================== */

const SettingOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  width: 100%;
  min-height: 58px;
  padding: 12px 14px;

  border: 1px solid transparent;
  border-radius: 10px;

  background: var(--color-background-secondary);
  color: var(--color-text-primary, var(--color-text));

  font: inherit;
  text-align: start;
  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =====================================
   Option Text
===================================== */

const OptionInfo = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const OptionTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

const OptionDescription = styled.span`
  font-size: 0.78rem;
  color: var(
    --color-text-secondary,
    var(--color-text-light, var(--color-text))
  );
`;

const OptionValue = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary);
  white-space: nowrap;
`;

/* =====================================
   Settings Component
===================================== */

const Settings = ({ mobile = false }) => {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownId = useId();

  const isDark = theme === "dark";

  const isArabic = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar"
  ).startsWith("ar");

  /* =====================================
     Calculate Dropdown Position
  ===================================== */

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();

    const dropdownWidth = Math.min(
      290,
      window.innerWidth - 24
    );

    const preferredLeft = isArabic
      ? rect.right - dropdownWidth
      : rect.left;

    const left = Math.max(
      12,
      Math.min(
        preferredLeft,
        window.innerWidth - dropdownWidth - 12
      )
    );

    const dropdownHeight =
      dropdownRef.current?.offsetHeight || 150;

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const openAbove =
      spaceBelow < dropdownHeight + 12 &&
      spaceAbove > spaceBelow;

    const top = openAbove
      ? Math.max(12, rect.top - dropdownHeight - 8)
      : Math.min(
          rect.bottom + 8,
          window.innerHeight - 12
        );

    setPosition({ top, left });
  }, [isArabic]);

  /* =====================================
     Position on Open
  ===================================== */

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition]);

  /* =====================================
     Outside Click / Escape / Resize
  ===================================== */

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      const clickedTrigger =
        triggerRef.current?.contains(event.target);

      const clickedDropdown =
        dropdownRef.current?.contains(event.target);

      if (!clickedTrigger && !clickedDropdown) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleReposition = () => {
      updatePosition();
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

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
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );

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

  /* =====================================
     Change Language
  ===================================== */

  const changeLanguage = async () => {
    try {
      await i18n.changeLanguage(
        isArabic ? "en" : "ar"
      );

      setOpen(false);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  /* =====================================
     Change Theme
  ===================================== */

  const changeTheme = () => {
    toggleTheme();
    setOpen(false);
  };

  /* =====================================
     Render
  ===================================== */

  return (
    <SettingsWrapper data-mobile={mobile}>
      <SettingsTrigger
        ref={triggerRef}
        type="button"
        $open={open}
        aria-expanded={open}
        aria-controls={open ? dropdownId : undefined}
        aria-haspopup="true"
        onClick={() => setOpen((previous) => !previous)}
      >
        <span>
          {isArabic ? "الإعدادات" : "Settings"}
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
        >
          <path d="m6 9 6 6 6-6" />
        </Chevron>
      </SettingsTrigger>

      {open &&
        createPortal(
          <SettingsDropdown
            ref={dropdownRef}
            id={dropdownId}
            dir={isArabic ? "rtl" : "ltr"}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {/* Language */}

            <SettingOption
              type="button"
              onClick={changeLanguage}
            >
              <OptionInfo>
                <OptionTitle>
                  {isArabic
                    ? "تغيير اللغة"
                    : "Change language"}
                </OptionTitle>

                <OptionDescription>
                  {isArabic ? "العربية" : "English"}
                </OptionDescription>
              </OptionInfo>

              <OptionValue>
                {isArabic ? "English" : "العربية"}
              </OptionValue>
            </SettingOption>

            {/* Theme */}

            <SettingOption
              type="button"
              onClick={changeTheme}
            >
              <OptionInfo>
                <OptionTitle>
                  {isArabic
                    ? "تغيير المظهر"
                    : "Change theme"}
                </OptionTitle>

                <OptionDescription>
                  {isDark
                    ? isArabic
                      ? "الوضع الداكن"
                      : "Dark mode"
                    : isArabic
                      ? "الوضع الفاتح"
                      : "Light mode"}
                </OptionDescription>
              </OptionInfo>

              <OptionValue>
                {isDark
                  ? isArabic
                    ? "فاتح"
                    : "Light"
                  : isArabic
                    ? "داكن"
                    : "Dark"}
              </OptionValue>
            </SettingOption>
          </SettingsDropdown>,
          document.body
        )}
    </SettingsWrapper>
  );
};

export default Settings;
