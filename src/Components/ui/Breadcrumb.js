
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FiHome,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import Container from "../layout/PageContainer";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   BREADCRUMB NAVIGATION

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Arabic / English
   - RTL / LTR
   - Responsive layout
   - Dynamic page titles
   - Project details support
   - Accessible navigation

   Original API preserved:

   <BreadCrumb value="about" />

   <BreadCrumb value="projects" />

   <BreadCrumb
     value="projects"
     projectTitle="Project Name"
   />
========================================================= */


/* =========================================================
   01 — BREADCRUMB WRAPPER

   The parent page controls the
   background and vertical spacing.
========================================================= */

const BCPageContainer = styled.nav`
  width: 100%;
  min-width: 0;

  margin: 0;
  padding: 0;

  background: transparent;

  border: none;
  box-shadow: none;

  box-sizing: border-box;
`;


/* =========================================================
   02 — CONTENT CONTAINER

   Uses the shared PageContainer
   to maintain consistent alignment.
========================================================= */

const BCContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;
`;


/* =========================================================
   03 — BREADCRUMB LIST
========================================================= */

const BCContainer = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;

  column-gap: 10px;
  row-gap: 6px;

  width: fit-content;
  max-width: 100%;
  min-width: 0;

  margin: 0;
  padding: 0;

  list-style: none;

  box-sizing: border-box;

  @media (max-width: 480px) {
    column-gap: 7px;
    row-gap: 4px;
  }
`;


/* =========================================================
   04 — BREADCRUMB ITEM
========================================================= */

const BCItem = styled.li`
  display: inline-flex;
  align-items: center;

  min-width: 0;
  max-width: 100%;
`;


/* =========================================================
   05 — BREADCRUMB LINK
========================================================= */

const BCLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  gap: 7px;

  min-height: 34px;

  padding: 3px 0;

  color:
    var(
      --color-text-secondary,
      var(--color-text-primary)
    );

  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.6;

  text-decoration: none;

  transition:
    color 0.2s ease;

  svg {
    display: block;

    width: 16px;
    height: 16px;

    flex-shrink: 0;

    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }

  &:focus-visible {
    outline:
      2px solid
      var(
        --focus-ring-color,
        var(--color-primary)
      );

    outline-offset: 4px;

    border-radius:
      var(--radius-sm, 4px);
  }

  @media (max-width: 480px) {
    gap: 5px;

    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   06 — SEPARATOR
========================================================= */

const Separator = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  color:
    var(
      --color-text-secondary,
      var(--color-text-primary)
    );

  opacity: 0.65;

  svg {
    display: block;

    width: 15px;
    height: 15px;
  }

  @media (max-width: 480px) {
    svg {
      width: 13px;
      height: 13px;
    }
  }
`;


/* =========================================================
   07 — CURRENT PAGE
========================================================= */

const CurrentPage = styled.span`
  display: inline-flex;
  align-items: center;

  min-width: 0;
  max-width: 100%;

  min-height: 34px;

  padding: 3px 0;

  color: var(--color-primary);

  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.6;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;


/* =========================================================
   08 — BREADCRUMB COMPONENT
========================================================= */

function BreadCrumb({
  value = "",
  projectTitle = "",
}) {

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { t, i18n } = useTranslation([
    "common",
    "home",
    "about",
    "projects",
    "contact",
  ]);

  /* -------------------------------------------------------
     LANGUAGE
  ------------------------------------------------------- */

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    language.startsWith("ar");

  /* -------------------------------------------------------
     DIRECTIONAL SEPARATOR

     Arabic:
     Chevron Left

     English:
     Chevron Right
  ------------------------------------------------------- */

  const SeparatorIcon = isArabic
    ? FiChevronLeft
    : FiChevronRight;

  /* -------------------------------------------------------
     SUPPORTED PAGE NAMESPACES
  ------------------------------------------------------- */

  const namespaces = [
    "home",
    "about",
    "projects",
    "contact",
  ];

  const pageNamespace =
    namespaces.includes(value)
      ? value
      : null;

  /* -------------------------------------------------------
     FALLBACK PAGE TITLE
  ------------------------------------------------------- */

  const fallbackTitle = t(
    `nav.${value}`,
    {
      ns: "common",
      defaultValue: value,
    }
  );

  /* -------------------------------------------------------
     CURRENT PAGE TITLE

     Preserve the original About page
     translation behavior.
  ------------------------------------------------------- */

  const currentPageTitle =
    value === "about"
      ? t("about:pageTitle", {
          defaultValue: isArabic
            ? "عني"
            : "About Me",
        })
      : pageNamespace
        ? t(
            `${pageNamespace}:pageTitle`,
            {
              defaultValue: fallbackTitle,
            }
          )
        : fallbackTitle;

  /* -------------------------------------------------------
     PROJECT DETAILS

     A project title adds an additional
     breadcrumb level.
  ------------------------------------------------------- */

  const isProjectDetails =
    value === "projects" &&
    typeof projectTitle === "string" &&
    projectTitle.trim().length > 0;

  /* -------------------------------------------------------
     PROJECTS PAGE TITLE
  ------------------------------------------------------- */

  const projectsTitle = t(
    "pageTitle",
    {
      ns: "projects",
      defaultValue: isArabic
        ? "مشاريعي"
        : "My Projects",
    }
  );

  /* -------------------------------------------------------
     HOME TITLE
  ------------------------------------------------------- */

  const homeTitle = t(
    "nav.home",
    {
      ns: "common",
      defaultValue: isArabic
        ? "الرئيسية"
        : "Home",
    }
  );

  /* -------------------------------------------------------
     ACCESSIBLE LABEL
  ------------------------------------------------------- */

  const navigationLabel = isArabic
    ? "مسار التنقل"
    : "Breadcrumb navigation";

  /* =====================================================
     09 — RENDER
  ===================================================== */

  return (
    <BCPageContainer
      aria-label={navigationLabel}
      dir={isArabic ? "rtl" : "ltr"}
    >

      <BCContent>

        <BCContainer>

          {/* =================================
              HOME
          ================================= */}

          <BCItem>

            <BCLink to="/">

              <FiHome
                aria-hidden="true"
                focusable="false"
              />

              <span>
                {homeTitle}
              </span>

            </BCLink>

          </BCItem>

          {/* =================================
              FIRST SEPARATOR
          ================================= */}

          <Separator aria-hidden="true">

            <SeparatorIcon />

          </Separator>

          {/* =================================
              PROJECT DETAILS
          ================================= */}

          {isProjectDetails ? (
            <>

              {/* ---------------------------
                  PROJECTS PAGE
              --------------------------- */}

              <BCItem>

                <BCLink to="/projects">
                  {projectsTitle}
                </BCLink>

              </BCItem>

              {/* ---------------------------
                  SECOND SEPARATOR
              --------------------------- */}

              <Separator aria-hidden="true">

                <SeparatorIcon />

              </Separator>

              {/* ---------------------------
                  CURRENT PROJECT
              --------------------------- */}

              <BCItem aria-current="page">

                <CurrentPage>
                  {projectTitle}
                </CurrentPage>

              </BCItem>

            </>
          ) : (
            <>

              {/* ---------------------------
                  CURRENT PAGE
              --------------------------- */}

              <BCItem aria-current="page">

                <CurrentPage>
                  {currentPageTitle}
                </CurrentPage>

              </BCItem>

            </>
          )}

        </BCContainer>

      </BCContent>

    </BCPageContainer>
  );
}


/* =========================================================
   10 — EXPORT
========================================================= */

export default BreadCrumb;
