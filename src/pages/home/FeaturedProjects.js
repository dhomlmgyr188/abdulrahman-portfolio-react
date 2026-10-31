
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
  FiArrowUpLeft,
  FiArrowUpRight,
} from "react-icons/fi";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import Button from "../../Components/ui/Button/Button";

import ProjectGrid from "../../Components/projects/ProjectsGrid";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   HOME — FEATURED PROJECTS

   Design System:
   - Modern Professional
   - Ocean / Orca

   Preserved features:
   - Featured projects from home.json
   - Project titles and descriptions
   - Project technologies
   - Project details links
   - Live preview links
   - View all projects link
   - Arabic / English
   - RTL / LTR arrows
   - Light / Dark theme
   - Responsive layout

   Existing project components:
   - ProjectsGrid.js
   - ProjectCard.js
========================================================= */


/* =========================================================
   01 — FEATURED SECTION
========================================================= */

const FeaturedSection = styled(Section)`
  position: relative;

  width: 100%;
  min-width: 0;

  padding-block:
    clamp(64px, 8vw, 104px);

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  box-sizing: border-box;

  @media (max-width: 600px) {
    padding-block: 52px 68px;
  }
`;


/* =========================================================
   02 — CONTENT CONTAINER
========================================================= */

const FeaturedContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  gap: clamp(
    28px,
    4vw,
    42px
  );

  width: 100%;
  min-width: 0;
`;


/* =========================================================
   03 — SECTION HEADING
========================================================= */

const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 24px;

  width: 100%;
  min-width: 0;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  flex: 1;

  max-width: 700px;
  min-width: 0;
`;


/* =========================================================
   04 — SECTION LABEL
========================================================= */

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  width: fit-content;

  color:
    var(--color-primary);

  font-size: 0.79rem;
  font-weight: 700;
  line-height: 1.5;

  letter-spacing: 0.04em;

  &::before {
    content: "";

    width: 24px;
    height: 2px;

    flex-shrink: 0;

    border-radius: 2px;

    background-color:
      currentColor;
  }
`;


/* =========================================================
   05 — SECTION TITLE
========================================================= */

const HeadingTitle = styled.h2`
  margin: 0;

  color:
    var(--color-text-primary);

  font-size: clamp(
    1.85rem,
    3.5vw,
    2.65rem
  );

  font-weight: 800;
  line-height: 1.4;

  letter-spacing: -0.025em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(
      1.75rem,
      7vw,
      2.2rem
    );
  }
`;


/* =========================================================
   06 — SECTION DESCRIPTION
========================================================= */

const HeadingDescription = styled.p`
  margin: 0;

  max-width: 640px;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.93rem,
    1.5vw,
    1.02rem
  );

  font-weight: 400;
  line-height: 1.95;

  overflow-wrap: break-word;
  text-wrap: pretty;
`;


/* =========================================================
   07 — VIEW ALL BUTTON

   Uses the approved shared Button
   component instead of creating
   independent button styling.
========================================================= */

const ViewAllLink = styled(Button)`
  flex-shrink: 0;

  gap: 10px;

  white-space: nowrap;

  svg {
    display: block;

    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;


/* =========================================================
   08 — MOBILE VIEW ALL BUTTON
========================================================= */

const MobileViewAll = styled(Button)`
  display: none;

  gap: 10px;

  svg {
    display: block;

    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }

  @media (max-width: 700px) {
    display: inline-flex;

    align-self: center;

    max-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;


/* =========================================================
   09 — DIRECTIONAL ARROW

   Arabic:
   Up Left

   English:
   Up Right

   The arrow direction is determined
   directly by the current language.
========================================================= */

const Arrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  svg {
    display: block;

    width: 17px;
    height: 17px;
  }
`;


/* =========================================================
   10 — PROJECT GRID WRAPPER

   ProjectGrid retains control over
   project data and project cards.
========================================================= */

const ProjectsArea = styled.div`
  width: 100%;
  min-width: 0;

  > * {
    min-width: 0;
  }
`;


/* =========================================================
   11 — FEATURED PROJECTS COMPONENT
========================================================= */

function FeaturedProjects() {

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { t, i18n } = useTranslation();

  /* -------------------------------------------------------
     LANGUAGE
  ------------------------------------------------------- */

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    language.toLowerCase().startsWith("ar");

  /* -------------------------------------------------------
     VIEW ALL LABEL
  ------------------------------------------------------- */

  const viewAll = t(
    "home:featuredProjects.header.view_projects"
  );

  /* -------------------------------------------------------
     SECTION LABEL
  ------------------------------------------------------- */

  const sectionLabel = t(
    "home:featuredProjects.header.label",
    {
      defaultValue: "PORTFOLIO",
    }
  );

  /* -------------------------------------------------------
     SECTION TITLE
  ------------------------------------------------------- */

  const sectionTitle = t(
    "home:featuredProjects.header.title"
  );

  /* -------------------------------------------------------
     SECTION DESCRIPTION
  ------------------------------------------------------- */

  const sectionDescription = t(
    "home:featuredProjects.header.desc"
  );

  /* -------------------------------------------------------
     DIRECTIONAL ARROW
  ------------------------------------------------------- */

  const DirectionArrow = isArabic
    ? FiArrowUpLeft
    : FiArrowUpRight;

  /* =====================================================
     12 — RENDER
  ===================================================== */

  return (
    <FeaturedSection
      id="featured-projects"
      aria-labelledby="featured-projects-title"
    >

      <FeaturedContainer>

        {/* =================================
            SECTION HEADER
        ================================= */}

        <Heading>

          <HeadingContent>

            {/* ---------------------------
                EYEBROW
            --------------------------- */}

            <Eyebrow>

              {sectionLabel}

            </Eyebrow>

            {/* ---------------------------
                TITLE
            --------------------------- */}

            <HeadingTitle
              id="featured-projects-title"
            >

              {sectionTitle}

            </HeadingTitle>

            {/* ---------------------------
                DESCRIPTION
            --------------------------- */}

            <HeadingDescription>

              {sectionDescription}

            </HeadingDescription>

          </HeadingContent>

          {/* =================================
              DESKTOP VIEW ALL
          ================================= */}

          <ViewAllLink
            as={Link}
            to="/projects"
            $variant="secondary"
            $size="md"
          >

            {viewAll}

            <Arrow aria-hidden="true">

              <DirectionArrow />

            </Arrow>

          </ViewAllLink>

        </Heading>

        {/* =================================
            FEATURED PROJECT CARDS

            All project data, links,
            descriptions and technologies
            remain inside ProjectsGrid.
        ================================= */}

        <ProjectsArea>

          <ProjectGrid />

        </ProjectsArea>

        {/* =================================
            MOBILE VIEW ALL
        ================================= */}

        <MobileViewAll
          as={Link}
          to="/projects"
          $variant="secondary"
          $size="md"
        >

          {viewAll}

          <Arrow aria-hidden="true">

            <DirectionArrow />

          </Arrow>

        </MobileViewAll>

      </FeaturedContainer>

    </FeaturedSection>
  );
}


/* =========================================================
   13 — EXPORT
========================================================= */

export default FeaturedProjects;
