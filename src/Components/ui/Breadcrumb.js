
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FiHome,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import Container from "../layout/PageContainer";

/* =========================================
   BREADCRUMB STYLES
========================================= */

const BCPageContainer = styled.nav`
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;

  background: transparent;
  border: none;
  box-shadow: none;
`;

const BCContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;
`;

const BCContainer = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  width: fit-content;
  max-width: 100%;
  min-width: 0;

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 480px) {
    gap: 7px;
  }
`;

const BCItem = styled.li`
  display: inline-flex;
  align-items: center;
  min-width: 0;
`;

const BCLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;

  color: var(--color-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;

  transition: color 0.2s ease;

  svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Separator = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  color: var(--color-text-light);
  opacity: 0.65;

  svg {
    width: 15px;
    height: 15px;
  }
`;

const CurrentPage = styled.span`
  display: inline-flex;
  align-items: center;

  min-width: 0;
  min-height: 32px;

  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.6;
  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

/* =========================================
   BREADCRUMB COMPONENT
========================================= */

const BreadCrumb = ({
  value = "",
  projectTitle = "",
}) => {
  const { t, i18n } = useTranslation([
    "common",
    "home",
    "about",
    "projects",
    "contact",
  ]);

  /* Language */

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic = language.startsWith("ar");

  const SeparatorIcon = isArabic
    ? FiChevronLeft
    : FiChevronRight;

  /* Page title */

  const namespaces = [
    "home",
    "about",
    "projects",
    "contact",
  ];

  const pageNamespace = namespaces.includes(value)
    ? value
    : null;

  const fallbackTitle = t(`nav.${value}`, {
    ns: "common",
    defaultValue: value,
  });

  const currentPageTitle = value === "about"
    ? t("about:pageTitle", {
      defaultValue: isArabic ? "عني" : "About Me",
    })
    : pageNamespace
      ? t(`${pageNamespace}:pageTitle`, {
        defaultValue: fallbackTitle,
      })
      : fallbackTitle;

  /* Project details */

  const isProjectDetails =
    value === "projects" &&
    typeof projectTitle === "string" &&
    projectTitle.trim().length > 0;

  const projectsTitle = t("pageTitle", {
    ns: "projects",
    defaultValue: isArabic
      ? "مشاريعي"
      : "My Projects",
  });

  const homeTitle = t("nav.home", {
    ns: "common",
    defaultValue: isArabic
      ? "الرئيسية"
      : "Home",
  });

  /* Render */

  return (
    <BCPageContainer
      aria-label={
        isArabic
          ? "مسار التنقل"
          : "Breadcrumb navigation"
      }
      dir={isArabic ? "rtl" : "ltr"}
    >
      <BCContent>
        <BCContainer>

          {/* Home - First item */}
          <BCItem>
            <BCLink to="/">
              <FiHome aria-hidden="true" />
              <span>{homeTitle}</span>
            </BCLink>
          </BCItem>

          <Separator aria-hidden="true">
            <SeparatorIcon />
          </Separator>

          {isProjectDetails ? (
            <>
              {/* My Projects - Second item */}
              <BCItem>
                <BCLink to="/projects">
                  {projectsTitle}
                </BCLink>
              </BCItem>

              <Separator aria-hidden="true">
                <SeparatorIcon />
              </Separator>

              {/* Project Name - Last item */}
              <BCItem aria-current="page">
                <CurrentPage>
                  {projectTitle}
                </CurrentPage>
              </BCItem>
            </>
          ) : (
            <>
              {/* Current Page */}
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
};

export default BreadCrumb;
