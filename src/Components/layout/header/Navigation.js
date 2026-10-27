
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Settings from "./Settings";

/* ==============================
   Navigation Wrapper
============================== */

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ==============================
   Desktop Navigation
============================== */

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 30px);

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavigationLink = styled(HashLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 4px;
  white-space: nowrap;
  text-decoration: none;

  color: ${({ $active }) =>
    $active
      ? "var(--color-primary)"
      : "var(--color-text-primary, var(--color-text))"};

  font-size: 0.95rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};

  transition: color 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    inset-inline-start: 0;

    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 3px;
    border-radius: 4px;

    background: var(--color-primary);
    transition: width 0.25s ease;
  }

  &:hover {
    color: var(--color-primary);
  }

  &:hover::after {
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

/* ==============================
   Mobile Menu Button
============================== */

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  flex-shrink: 0;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  background: var(--color-background-secondary);
  color: var(--color-primary);

  cursor: pointer;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  @media (max-width: 900px) {
    display: inline-flex;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* ==============================
   Mobile Dropdown
============================== */

const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 900px) {
    position: absolute;
    top: 100%;
    inset-inline: 0;
    z-index: 1000;

    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;

    gap: 6px;
    padding: 18px clamp(16px, 5vw, 35px) 24px;

    max-height: calc(100dvh - var(--header-height));
    overflow-y: auto;

    background: var(--color-background-tertiary);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
  }
`;

/* ==============================
   Mobile Links
============================== */

const MobileLink = styled(HashLink)`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 13px 16px;

  border-radius: 10px;
  text-decoration: none;

  font-size: 0.95rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};

  color: ${({ $active }) =>
    $active
      ? "var(--color-primary)"
      : "var(--color-text-primary, var(--color-text))"};

  background: ${({ $active }) =>
    $active
      ? "var(--color-background-secondary)"
      : "transparent"};

  transition:
    background-color 0.25s ease,
    color 0.25s ease;

  &:hover {
    background: var(--color-background-secondary);
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -2px;
  }
`;

/* ==============================
   Mobile Settings
============================== */


const MobileSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin-top: 12px;
  padding: 14px 8px 4px;

  border-top: 1px solid var(--color-border);
`;


const SettingsLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;

  color: var(
    --color-text-secondary,
    var(--color-text)
  );
`;

/* ==============================
   Menu Icon
============================== */

const MenuIcon = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
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

/* ==============================
   Navigation Links
============================== */

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

/* ==============================
   Component
============================== */

function Navigation({ activeLink }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const navigationRef = useRef(null);

  const isArabic = i18n.resolvedLanguage?.startsWith("ar") ??
    i18n.language?.startsWith("ar");

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [menuOpen]);

  return (
    <NavigationWrapper ref={navigationRef}>
      {/* Desktop Navigation */}

      <NavbarContainer
        aria-label={
          isArabic ? "التنقل الرئيسي" : "Main navigation"
        }
      >
        {links.map((link) => {
          const isActive = activeLink === link.id;

          return (
            <NavigationLink
              key={link.id}
              to={link.to}
              smooth
              $active={isActive}
              aria-current={isActive ? "page" : undefined}
            >
              {t(link.label)}
            </NavigationLink>
          );
        })}
      </NavbarContainer>

      {/* Mobile Menu Button */}

      <MenuButton
        type="button"
        aria-label={
          menuOpen
            ? isArabic
              ? "إغلاق القائمة"
              : "Close menu"
            : isArabic
              ? "فتح القائمة"
              : "Open menu"
        }
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <MenuIcon open={menuOpen} />
      </MenuButton>

      {/* Mobile Navigation */}

      <MobileMenu
        id="mobile-navigation"
        $open={menuOpen}
        aria-label={
          isArabic ? "قائمة الجوال" : "Mobile navigation"
        }
      >
        {links.map((link) => {
          const isActive = activeLink === link.id;

          return (
            <MobileLink
              key={link.id}
              to={link.to}
              smooth
              $active={isActive}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {t(link.label)}
            </MobileLink>
          );
        })}

        {/* Language & Theme Settings */}

        <MobileSettings>
          <Settings mobile />
        </MobileSettings>
      </MobileMenu>
    </NavigationWrapper>
  );
}

export default Navigation;
