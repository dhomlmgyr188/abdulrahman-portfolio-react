
import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Settings from "./Settings";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   RESPONSIVE NAVIGATION

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Desktop navigation
   - Mobile dropdown
   - Active route highlighting
   - RTL / LTR support
   - Keyboard accessibility
   - Outside-click handling
   - Mobile settings

   Compatible with:
   - Header.js
   - Logo.js
   - Settings.js
   - React Router
   - react-router-hash-link
========================================================= */


/* =========================================================
   01 — NAVIGATION LINKS

   Original routes preserved.
========================================================= */

const links = [
  {
    id: "home",
    label: "nav.home",
    to: "/#home",
  },
  {
    id: "about",
    label: "nav.about",
    to: "/about",
  },
  {
    id: "projects",
    label: "nav.projects",
    to: "/projects",
  },
  {
    id: "contact",
    label: "nav.contact",
    to: "/contact",
  },
];


/* =========================================================
   02 — NAVIGATION WRAPPER
========================================================= */

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;

  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`;


/* =========================================================
   03 — DESKTOP NAVIGATION
========================================================= */

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(
    12px,
    2vw,
    28px
  );

  min-width: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;


/* =========================================================
   04 — DESKTOP NAVIGATION LINK
========================================================= */

const NavigationLink = styled(HashLink)`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 44px;

  padding: 10px 4px;

  color: ${({ $active }) =>
    $active
      ? "var(--color-primary)"
      : "var(--color-text-primary)"
  };

  font-size: 0.95rem;

  font-weight: ${({ $active }) =>
    $active ? 700 : 500
  };

  line-height: 1.5;

  text-align: center;
  text-decoration: none;

  white-space: nowrap;

  transition:
    color var(--transition-fast);

  /* -------------------------------------------------------
     ACTIVE UNDERLINE
  ------------------------------------------------------- */

  &::after {
    content: "";

    position: absolute;

    inset-inline-start: 0;
    inset-block-end: 3px;

    width: ${({ $active }) =>
      $active ? "100%" : "0"
    };

    height: 3px;

    border-radius: var(--radius-full);

    background-color:
      var(--color-primary);

    transition:
      width var(--transition-fast);
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  &:hover {
    color: var(--color-primary);
  }

  &:hover::after {
    width: 100%;
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 4px;

    border-radius: var(--radius-sm);
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`;


/* =========================================================
   05 — MOBILE MENU BUTTON
========================================================= */

const MenuButton = styled.button`
  display: none;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 44px;
  height: 44px;

  min-width: 44px;
  min-height: 44px;

  padding: 0;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-button);

  background-color:
    var(--color-surface-secondary);

  color:
    var(--color-text-primary);

  cursor: pointer;

  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);

  /* -------------------------------------------------------
     OPEN STATE
  ------------------------------------------------------- */

  &[aria-expanded="true"] {
    background-color:
      var(--color-primary-soft);

    color:
      var(--color-primary);

    border-color:
      var(--color-border-strong);
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {
    &:hover {
      background-color:
        var(--color-surface-hover);

      color:
        var(--color-primary);

      border-color:
        var(--color-border-strong);

      transform: translateY(-1px);
    }
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
     MOBILE VISIBILITY
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    display: inline-flex;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;


/* =========================================================
   06 — MOBILE MENU ICON

   Displays:
   - Hamburger icon when closed
   - Close icon when opened
========================================================= */

const MenuIcon = ({ open }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="M6 6 18 18" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
};


/* =========================================================
   07 — MOBILE DROPDOWN

   Positioned below the fixed header.

   Visibility is controlled by $open.
========================================================= */

const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 900px) {
    position: absolute;

    inset-block-start: 100%;
    inset-inline: 0;

    z-index: 1000;

    display: ${({ $open }) =>
      $open ? "flex" : "none"
    };

    flex-direction: column;

    width: 100%;

    gap: 6px;

    padding:
      18px
      var(--container-gutter)
      24px;

    max-height: calc(
      100dvh - var(--header-height)
    );

    overflow-y: auto;
    overscroll-behavior: contain;

    background-color:
      var(--color-background-secondary);

    border-bottom:
      1px solid var(--color-border);

    box-shadow:
      var(--shadow-md);

    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding-block:
      12px
      20px;

    gap: 4px;
  }
`;


/* =========================================================
   08 — MOBILE NAVIGATION LINK
========================================================= */

const MobileLink = styled(HashLink)`
  display: flex;
  align-items: center;

  width: 100%;

  min-height: 46px;

  padding: 12px 16px;

  border:
    1px solid
    ${({ $active }) =>
      $active
        ? "var(--color-border)"
        : "transparent"
    };

  border-radius:
    var(--radius-button);

  background-color: ${({ $active }) =>
    $active
      ? "var(--color-primary-soft)"
      : "transparent"
  };

  color: ${({ $active }) =>
    $active
      ? "var(--color-primary)"
      : "var(--color-text-primary)"
  };

  font-size: 0.95rem;

  font-weight: ${({ $active }) =>
    $active ? 700 : 500
  };

  line-height: 1.6;

  text-align: start;
  text-decoration: none;

  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  &:hover {
    background-color:
      var(--color-surface-hover);

    color:
      var(--color-primary);

    text-decoration: none;
  }

  /* -------------------------------------------------------
     FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: -2px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   09 — MOBILE SETTINGS SECTION
========================================================= */

const MobileSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  margin-block-start: 12px;

  padding:
    14px
    8px
    4px;

  border-top:
    1px solid var(--color-border);
`;


/* =========================================================
   10 — NAVIGATION COMPONENT
========================================================= */

function Navigation({ activeLink }) {

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { t, i18n } = useTranslation();

  /* -------------------------------------------------------
     ROUTING
  ------------------------------------------------------- */

  const location = useLocation();

  /* -------------------------------------------------------
     STATE
  ------------------------------------------------------- */

  const [menuOpen, setMenuOpen] = useState(false);

  /* -------------------------------------------------------
     REFS
  ------------------------------------------------------- */

  const navigationRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  /* -------------------------------------------------------
     UNIQUE MOBILE MENU ID
  ------------------------------------------------------- */

  const generatedId = useId();

  const mobileMenuId =
    `mobile-navigation-${generatedId.replace(/:/g, "")}`;

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
     MOBILE MENU LABELS
  ------------------------------------------------------- */

  const mainNavigationLabel = isArabic
    ? "التنقل الرئيسي"
    : "Main navigation";

  const mobileNavigationLabel = isArabic
    ? "قائمة الجوال"
    : "Mobile navigation";

  const openMenuLabel = isArabic
    ? "فتح القائمة"
    : "Open menu";

  const closeMenuLabel = isArabic
    ? "إغلاق القائمة"
    : "Close menu";

  /* -------------------------------------------------------
     CLOSE ON ROUTE CHANGE

     Close when the pathname or hash
     changes after navigation.
  ------------------------------------------------------- */

  useEffect(() => {
    setMenuOpen(false);
  }, [
    location.pathname,
    location.hash,
  ]);

  /* -------------------------------------------------------
     CLOSE ON LANGUAGE CHANGE

     Prevent the mobile menu from staying
     open with stale positioning or labels.
  ------------------------------------------------------- */

  useEffect(() => {
    setMenuOpen(false);
  }, [currentLanguage]);

  /* -------------------------------------------------------
     OUTSIDE CLICK AND ESCAPE
  ------------------------------------------------------- */

  useEffect(() => {

    if (!menuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const navigation = navigationRef.current;

      if (
        navigation &&
        !navigation.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        setMenuOpen(false);

        menuButtonRef.current?.focus();
      }

    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [menuOpen]);

  /* -------------------------------------------------------
     CLOSE ON DESKTOP RESIZE

     If the viewport becomes wider
     than 900px, close the mobile menu.
  ------------------------------------------------------- */

  useEffect(() => {

    const mediaQuery = window.matchMedia(
      "(min-width: 901px)"
    );

    const handleBreakpointChange = (event) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener(
        "change",
        handleBreakpointChange
      );
    } else {
      mediaQuery.addListener(
        handleBreakpointChange
      );
    }

    return () => {

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener(
          "change",
          handleBreakpointChange
        );
      } else {
        mediaQuery.removeListener(
          handleBreakpointChange
        );
      }

    };

  }, []);

  /* -------------------------------------------------------
     PREVENT BACKGROUND SCROLL

     Keep the mobile dropdown scrollable,
     while preventing the page behind it
     from scrolling.

     Restore the original body overflow
     when the menu closes.
  ------------------------------------------------------- */

  useEffect(() => {

    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };

  }, [menuOpen]);

  /* -------------------------------------------------------
     MOBILE MENU KEYBOARD SUPPORT

     Move focus to the first link when
     the menu opens using the button.
  ------------------------------------------------------- */

  const handleMenuToggle = () => {
    setMenuOpen((previous) => !previous);
  };

  /* -------------------------------------------------------
     MOBILE LINK CLICK
  ------------------------------------------------------- */

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <NavigationWrapper ref={navigationRef}>

      {/* ===================================
          DESKTOP NAVIGATION
      =================================== */}

      <NavbarContainer
        aria-label={mainNavigationLabel}
      >
        {links.map((link) => {

          const isActive =
            activeLink === link.id;

          return (
            <NavigationLink
              key={link.id}
              to={link.to}
              smooth
              $active={isActive}
              aria-current={
                isActive
                  ? "page"
                  : undefined
              }
            >
              {t(link.label)}
            </NavigationLink>
          );

        })}
      </NavbarContainer>

      {/* ===================================
          MOBILE MENU BUTTON
      =================================== */}

      <MenuButton
        ref={menuButtonRef}
        type="button"
        aria-label={
          menuOpen
            ? closeMenuLabel
            : openMenuLabel
        }
        aria-expanded={menuOpen}
        aria-controls={mobileMenuId}
        onClick={handleMenuToggle}
      >
        <MenuIcon open={menuOpen} />
      </MenuButton>

      {/* ===================================
          MOBILE NAVIGATION
      =================================== */}

      <MobileMenu
        ref={mobileMenuRef}
        id={mobileMenuId}
        $open={menuOpen}
        aria-label={mobileNavigationLabel}
      >

        {/* -------------------------------
            NAVIGATION LINKS
        ------------------------------- */}

        {links.map((link) => {

          const isActive =
            activeLink === link.id;

          return (
            <MobileLink
              key={link.id}
              to={link.to}
              smooth
              $active={isActive}
              aria-current={
                isActive
                  ? "page"
                  : undefined
              }
              onClick={handleMobileLinkClick}
            >
              {t(link.label)}
            </MobileLink>
          );

        })}

        {/* -------------------------------
            LANGUAGE & THEME SETTINGS

            Settings.js already manages:
            - Language switching
            - Theme switching
            - Dropdown positioning
            - Keyboard interaction
        ------------------------------- */}

        <MobileSettings>
          <Settings mobile />
        </MobileSettings>

      </MobileMenu>

    </NavigationWrapper>
  );
}


/* =========================================================
   11 — EXPORT
========================================================= */

export default Navigation;
