
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   RESPONSIVE BRAND LOGO

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Arabic / English
   - RTL / LTR
   - Responsive typography
   - Home section navigation
   - Keyboard accessibility
   - Reduced motion support

   Original export preserved:
   - Logo (default)
========================================================= */


/* =========================================================
   01 — LOGO CONTAINER

   Keeps the logo aligned correctly
   inside the shared Header component.
========================================================= */

const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;

  flex: 0 1 auto;
  flex-shrink: 0;

  width: max-content;
  max-width: 100%;

  min-width: 0;

  box-sizing: border-box;
`;


/* =========================================================
   02 — LOGO LINK

   Uses HashLink to preserve navigation
   to the home section:

   /#home

   React Router basename is already
   configured in index.js.
========================================================= */

const LogoLink = styled(HashLink)`
  display: inline-flex;
  align-items: baseline;
  justify-content: flex-start;

  gap: 2px;

  max-width: 100%;
  min-width: 0;

  padding: 4px 0;

  color:
    var(--color-primary);

  font-size: clamp(
    1.2rem,
    2vw,
    1.65rem
  );

  font-weight: 800;
  line-height: 1.3;

  letter-spacing: -0.02em;

  text-decoration: none;

  white-space: nowrap;

  direction: inherit;

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast),
    transform var(--transition-fast);

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {
    &:hover {
      color:
        var(--color-primary);

      opacity: 0.88;

      transform: translateY(-1px);
    }
  }

  /* -------------------------------------------------------
     KEYBOARD FOCUS
  ------------------------------------------------------- */

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 5px;

    border-radius:
      var(--radius-sm);
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    font-size: clamp(
      1.15rem,
      3vw,
      1.45rem
    );
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    font-size: 1.2rem;
    letter-spacing: -0.015em;
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    font-size: 1.08rem;
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
   03 — LOGO TEXT
========================================================= */

const LogoText = styled.span`
  display: inline-block;

  min-width: 0;

  color: inherit;

  font-weight: inherit;
  line-height: inherit;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


/* =========================================================
   04 — LOGO DOT

   Decorative accent using the
   secondary theme color.
========================================================= */

const LogoDot = styled.span`
  display: inline-block;

  flex-shrink: 0;

  color:
    var(--color-secondary);

  font-size: 1.3em;
  font-weight: 800;
  line-height: 1;

  user-select: none;
`;


/* =========================================================
   05 — LOGO COMPONENT
========================================================= */

function Logo() {

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { t } = useTranslation();

  /* -------------------------------------------------------
     BRAND NAME

     The same translation key is used
     in the original Logo component.
  ------------------------------------------------------- */

  const brandName = t("logo.me");

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <LogoContainer>

      <LogoLink
        to="/#home"
        smooth
        aria-label={brandName}
        title={brandName}
      >

        <LogoText>
          {brandName}
        </LogoText>

        <LogoDot
          aria-hidden="true"
        >
          .
        </LogoDot>

      </LogoLink>

    </LogoContainer>
  );
}


/* =========================================================
   06 — EXPORT
========================================================= */

export default Logo;
