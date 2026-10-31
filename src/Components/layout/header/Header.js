
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* =========================================================
   LAYOUT COMPONENTS
========================================================= */

import Container from "../PageContainer";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Settings from "./Settings";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   RESPONSIVE HEADER

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Fixed header
   - Scroll-aware appearance
   - Desktop navigation
   - Mobile navigation
   - Language and theme settings
   - RTL / LTR support
   - Accessible skip link

   Existing component interfaces preserved.
========================================================= */


/* =========================================================
   01 — HEADER WRAPPER

   Fixed to the top of the viewport.

   Changes background, border and shadow
   when the page is scrolled.
========================================================= */

const HeaderContainer = styled.header`
  position: fixed;

  inset-block-start: 0;
  inset-inline: 0;

  z-index: 999;

  display: flex;
  align-items: center;

  width: 100%;

  height: var(--header-height);
  min-height: var(--header-height);

  background-color: ${({ $scrolled }) =>
    $scrolled
      ? "var(--color-background-secondary)"
      : "var(--color-background)"
  };

  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled
        ? "var(--color-border)"
        : "transparent"
    };

  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "var(--shadow-sm)"
      : "none"
  };

  transition:
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal);

  box-sizing: border-box;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   02 — HEADER CONTENT

   Desktop:
   Logo | Navigation | Settings

   Mobile:
   Logo | Menu Button

   Navigation.js handles the mobile menu.
========================================================= */

const HeaderContent = styled(Container)`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto
    minmax(0, 1fr);

  align-items: center;

  width: 100%;

  height: 100%;
  min-height: var(--header-height);

  gap: clamp(
    12px,
    2vw,
    24px
  );

  /* -------------------------------------------------------
     LOGO
  ------------------------------------------------------- */

  > :first-child {
    justify-self: start;

    min-width: 0;
  }

  /* -------------------------------------------------------
     NAVIGATION
  ------------------------------------------------------- */

  > :nth-child(2) {
    justify-self: center;

    min-width: 0;
  }

  /* -------------------------------------------------------
     SETTINGS
  ------------------------------------------------------- */

  > :last-child {
    justify-self: end;

    min-width: 0;
  }

  /* -------------------------------------------------------
     TABLET & MOBILE
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 12px;

    > :first-child {
      flex: 0 1 auto;
      min-width: 0;
    }

    > :nth-child(2) {
      flex: 0 0 auto;
      margin-inline-start: auto;
    }

    /*
      Hide desktop settings.

      Navigation.js already renders
      <Settings mobile /> inside the
      mobile menu.
    */

    > :last-child {
      display: none;
    }
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    gap: 8px;
  }
`;


/* =========================================================
   03 — ACCESSIBLE SKIP LINK

   Allows keyboard users to skip the
   header and jump to page content.

   The target is:
   #main-content

   This ID was added in App.js.
========================================================= */

const SkipLink = styled.a`
  position: fixed;

  inset-block-start: 12px;
  inset-inline-start: 12px;

  z-index: 1001;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 42px;

  padding: 10px 16px;

  border-radius: var(--button-radius);

  background-color:
    var(--button-primary-bg);

  color:
    var(--button-primary-text);

  font-size: 0.9rem;
  font-weight: 700;

  text-decoration: none;

  transform: translateY(-160%);

  transition:
    transform var(--transition-fast);

  &:focus,
  &:focus-visible {
    transform: translateY(0);

    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   04 — HEADER COMPONENT
========================================================= */

function Header() {

  /* -------------------------------------------------------
     ROUTING
  ------------------------------------------------------- */

  const location = useLocation();

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { i18n } = useTranslation();

  /* -------------------------------------------------------
     SCROLL STATE
  ------------------------------------------------------- */

  const [scrolled, setScrolled] = useState(false);

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
     ACTIVE NAVIGATION LINK

     Examples:

     /                  -> home
     /about             -> about
     /projects          -> projects
     /projects/react    -> projects
     /contact           -> contact
  ------------------------------------------------------- */

  const activeLink =
    location.pathname === "/"
      ? "home"
      : location.pathname
          .split("/")
          .filter(Boolean)[0] || "home";

  /* -------------------------------------------------------
     SCROLL LISTENER

     Update header appearance when the
     document is scrolled more than 15px.

     Uses a passive event listener for
     better scrolling performance.
  ------------------------------------------------------- */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    /*
      Set the correct initial state,
      including after page refresh.
    */

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <>
      {/* -----------------------------------
          Accessibility:
          Skip directly to page content
      ----------------------------------- */}

      <SkipLink href="#main-content">
        {isArabic
          ? "تخطي إلى المحتوى الرئيسي"
          : "Skip to main content"
        }
      </SkipLink>

      {/* -----------------------------------
          Fixed header
      ----------------------------------- */}

      <HeaderContainer
        $scrolled={scrolled}
      >
        <HeaderContent>

          {/* -------------------------------
              Brand logo
          ------------------------------- */}

          <Logo />

          {/* -------------------------------
              Main navigation

              Navigation.js manages:
              - Desktop links
              - Mobile menu button
              - Mobile dropdown
              - Mobile settings
          ------------------------------- */}

          <Navigation
            activeLink={activeLink}
          />

          {/* -------------------------------
              Desktop settings

              Hidden below 900px because
              mobile settings are inside
              Navigation.js.
          ------------------------------- */}

          <Settings />

        </HeaderContent>
      </HeaderContainer>
    </>
  );
}


/* =========================================================
   05 — EXPORT
========================================================= */

export default Header;
