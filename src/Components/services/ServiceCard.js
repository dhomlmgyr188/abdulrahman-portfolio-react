
import styled from "styled-components";

import { FiCode } from "react-icons/fi";

import { Card } from "../ui/card/Card";

import {
  TTitle,
  Desc,
} from "../ui/T";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   COMPONENTS — SERVICE CARD

   Design System:
   - Modern Professional
   - Ocean / Orca

   Preserved:
   - Original service icons
   - Service titles
   - Service descriptions
   - Original component props
   - Arabic / English support
   - Light / Dark theme support
   - Responsive layout

   Component API:

   <ServicesCard
     icon={Icon}
     title={title}
     description={description}
   />
========================================================= */


/* =========================================================
   01 — SERVICE CARD

   Uses the existing shared Card
   component to maintain consistency
   across the portfolio.
========================================================= */

const ServCard = styled(Card)`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  gap: 16px;

  width: 100%;
  min-width: 0;
  height: 100%;

  padding:
    clamp(24px, 3vw, 36px);

  overflow: hidden;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 16px);

  box-shadow:
    var(--shadow-sm);

  text-align: center;

  box-sizing: border-box;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  /* -------------------------------------------------------
     TOP ACCENT
  ------------------------------------------------------- */

  &::before {
    content: "";

    position: absolute;

    inset-block-start: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;

    height: 3px;

    background-color:
      var(--color-primary);

    opacity: 0;

    transition:
      opacity 0.25s ease;

    pointer-events: none;
  }

  /* -------------------------------------------------------
     HOVER

     Apply hover effects only on
     devices with a real pointer.
  ------------------------------------------------------- */

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-4px);

      border-color:
        var(--color-primary);

      box-shadow:
        var(--shadow-md);
    }

    &:hover::before {
      opacity: 1;
    }
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    padding: 28px 24px;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    gap: 14px;

    padding: 26px 22px;
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    padding: 22px 18px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }

    &:hover {
      transform: none;
    }
  }
`;


/* =========================================================
   02 — ICON WRAPPER

   The icon itself comes from
   ServiceGrid.js.

   Supported icons:
   - FaCode
   - FaDesktop
   - FaCogs

   The wrapper adapts its colors
   automatically to the active theme.
========================================================= */

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 66px;
  height: 66px;

  flex-shrink: 0;

  background-color:
    var(
      --color-surface-secondary,
      var(--color-background-secondary)
    );

  color:
    var(--color-primary);

  border:
    1px solid var(--color-border);

  border-radius: 18px;

  box-sizing: border-box;

  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;

  svg {
    display: block;

    width: 29px;
    height: 29px;

    flex-shrink: 0;
  }

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) and (pointer: fine) {
    ${ServCard}:hover & {
      border-color:
        var(--color-primary);

      background-color:
        var(
          --color-surface-hover,
          var(--color-background-secondary)
        );
    }
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;

    border-radius: 16px;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   03 — TEXT CONTENT

   Keeps the title and description
   together with consistent spacing.
========================================================= */

const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 12px;

  width: 100%;
  min-width: 0;

  text-align: center;
`;


/* =========================================================
   04 — SERVICE TITLE

   Extends the existing shared
   TTitle component.
========================================================= */

const ServiceTitle = styled(TTitle)`
  margin: 0;

  width: 100%;

  color:
    var(--color-text-primary);

  font-size: clamp(
    1.12rem,
    1.8vw,
    1.3rem
  );

  font-weight: 800;
  line-height: 1.5;

  overflow-wrap: break-word;
  text-wrap: balance;
`;


/* =========================================================
   05 — SERVICE DESCRIPTION

   Extends the existing shared
   Desc component.
========================================================= */

const ServiceDescription = styled(Desc)`
  margin: 0;

  width: 100%;
  max-width: 340px;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.9rem,
    1.3vw,
    0.97rem
  );

  font-weight: 400;
  line-height: 1.9;

  overflow-wrap: break-word;
  text-wrap: pretty;
`;


/* =========================================================
   06 — SERVICE CARD COMPONENT

   Original props are preserved:
   - icon
   - title
   - description
========================================================= */

function ServicesCard({
  icon: Icon,
  title,
  description,
}) {

  /* -------------------------------------------------------
     ICON FALLBACK

     ServiceGrid.js already supplies
     FaCode as its fallback.

     FiCode is a second safeguard
     when the card is used separately.
  ------------------------------------------------------- */

  const ServiceIcon =
    Icon || FiCode;

  /* =====================================================
     07 — RENDER
  ===================================================== */

  return (
    <ServCard>

      {/* =================================
          SERVICE ICON
      ================================= */}

      <IconWrapper
        aria-hidden="true"
      >

        <ServiceIcon
          aria-hidden="true"
          focusable="false"
        />

      </IconWrapper>

      {/* =================================
          SERVICE CONTENT
      ================================= */}

      <CardContent>

        {/* -------------------------------
            SERVICE TITLE
        ------------------------------- */}

        <ServiceTitle>

          {title}

        </ServiceTitle>

        {/* -------------------------------
            SERVICE DESCRIPTION
        ------------------------------- */}

        <ServiceDescription>

          {description}

        </ServiceDescription>

      </CardContent>

    </ServCard>
  );
}


/* =========================================================
   08 — EXPORT
========================================================= */

export default ServicesCard;
