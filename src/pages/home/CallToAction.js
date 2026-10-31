
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import {
  STitle,
  Desc,
} from "../../Components/ui/T";

import Button, {
  Actions,
} from "../../Components/ui/Button/Button";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   HOME — CALL TO ACTION

   Design System:
   - Modern Professional
   - Ocean / Orca

   Preserved Features:
   - Translated title
   - Translated description
   - Contact button
   - Projects button
   - Internal React Router navigation
   - Arabic / English
   - RTL / LTR
   - Light / Dark theme
   - Responsive layout

   Original export:
   - CTA (default)
========================================================= */


/* =========================================================
   01 — CTA SECTION

   The section uses the secondary
   background color to distinguish it
   from the Featured Projects section.
========================================================= */

const CTAContainer = styled(Section)`
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  padding-block:
    clamp(68px, 8vw, 108px);

  overflow: hidden;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border-top:
    1px solid var(--color-border);

  box-sizing: border-box;

  /* -------------------------------------------------------
     SUBTLE DECORATIVE CIRCLES
  ------------------------------------------------------- */

  &::before,
  &::after {
    content: "";

    position: absolute;
    z-index: -1;

    width: 240px;
    height: 240px;

    border:
      1px solid var(--color-border);

    border-radius: 50%;

    opacity: 0.55;

    pointer-events: none;
  }

  &::before {
    inset-block-start: -165px;
    inset-inline-start: -100px;
  }

  &::after {
    inset-block-end: -170px;
    inset-inline-end: -100px;
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 768px) {
    padding-block: 64px;

    &::before,
    &::after {
      width: 190px;
      height: 190px;
    }
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    padding-block: 54px;

    &::before,
    &::after {
      opacity: 0.35;
    }
  }
`;


/* =========================================================
   02 — CTA CONTENT

   Uses the shared Container to keep
   the same horizontal alignment as
   the rest of the website.
========================================================= */

const CTAContent = styled(Container)`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: clamp(
    16px,
    2vw,
    23px
  );

  width: 100%;
  max-width: 900px;
  min-width: 0;

  text-align: center;

  box-sizing: border-box;
`;


/* =========================================================
   03 — CTA TITLE
========================================================= */

const CTATitle = styled(STitle)`
  margin: 0;

  max-width: 760px;

  color:
    var(--color-text-primary);

  font-size: clamp(
    1.75rem,
    3.5vw,
    2.65rem
  );

  font-weight: 800;
  line-height: 1.45;

  letter-spacing: -0.02em;

  overflow-wrap: break-word;
  text-wrap: balance;

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    font-size: clamp(
      1.5rem,
      6.5vw,
      1.95rem
    );

    line-height: 1.5;
  }
`;


/* =========================================================
   04 — CTA DESCRIPTION
========================================================= */

const CTADescription = styled(Desc)`
  margin: 0;

  width: 100%;
  max-width: 650px;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.95rem,
    1.5vw,
    1.04rem
  );

  font-weight: 400;
  line-height: 1.95;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 480px) {
    font-size: 0.93rem;
    line-height: 1.9;
  }
`;


/* =========================================================
   05 — CTA ACTIONS

   Uses the shared Actions component.

   The button colors, border radius,
   typography and interactions come
   from the approved Button.js file.
========================================================= */

const CTAActions = styled(Actions)`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  gap: 12px;

  width: 100%;

  margin-block-start: 12px;

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;

    gap: 10px;

    max-width: 360px;

    > * {
      width: 100%;
    }
  }
`;


/* =========================================================
   06 — CTA COMPONENT
========================================================= */

function CTA() {

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { t } = useTranslation();

  /* -------------------------------------------------------
     TRANSLATED CONTENT

     All original translation keys
     are preserved.
  ------------------------------------------------------- */

  const title = t(
    "home:callToAction.title"
  );

  const description = t(
    "home:callToAction.paragraph"
  );

  const contactLabel = t(
    "buttons.contact"
  );

  const projectsLabel = t(
    "buttons.projects"
  );

  /* =====================================================
     07 — RENDER
  ===================================================== */

  return (
    <CTAContainer
      id="call-to-action"
      aria-labelledby="cta-title"
    >

      <CTAContent>

        {/* =================================
            TITLE
        ================================= */}

        <CTATitle
          as="h2"
          id="cta-title"
        >

          {title}

        </CTATitle>

        {/* =================================
            DESCRIPTION
        ================================= */}

        <CTADescription>

          {description}

        </CTADescription>

        {/* =================================
            ACTION BUTTONS
        ================================= */}

        <CTAActions>

          {/* -------------------------------
              CONTACT BUTTON

              Original destination:
              /contact
          ------------------------------- */}

          <Button
            as={Link}
            to="/contact"
            $variant="primary"
            $size="lg"
          >

            {contactLabel}

          </Button>

          {/* -------------------------------
              PROJECTS BUTTON

              Original destination:
              /projects
          ------------------------------- */}

          <Button
            as={Link}
            to="/projects"
            $variant="secondary"
            $size="lg"
          >

            {projectsLabel}

          </Button>

        </CTAActions>

      </CTAContent>

    </CTAContainer>
  );
}


/* =========================================================
   08 — EXPORT
========================================================= */

export default CTA;
