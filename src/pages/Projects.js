
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FiGrid } from "react-icons/fi";

import BreadCrumb from "../Components/ui/Breadcrumb";
import Container from "../Components/layout/PageContainer";
import ProjectsGrid from "../Components/projects/ProjectsGrid";

import { PageHeader } from "../Components/ui/T";

/* =========================================
   PROJECTS PAGE
========================================= */

const ProjectsPage = styled.main`
  width: 100%;
  min-width: 0;
  overflow-x: clip;

  background: var(
    --color-background,
    #f4f7fb
  );

  color: var(
    --color-text-primary,
    #172435
  );
`;

/* =========================================
   PROJECTS CONTENT
========================================= */

const ProjectsSection = styled.section`
  width: 100%;

  padding-block:
    clamp(35px, 5vw, 65px)
    clamp(65px, 8vw, 100px);

  background: var(
    --color-background,
    #f4f7fb
  );
`;

const ProjectsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 35px);
`;

/* =========================================
   SECTION HEADING
========================================= */

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  width: 100%;

  padding-bottom: 20px;

  border-bottom: 1px solid
    var(
      --color-border,
      #d5e0eb
    );

  text-align: start;

  @media (max-width: 600px) {
    gap: 11px;
    padding-bottom: 15px;
  }
`;

const SectionIcon = styled.span`
  display: grid;
  place-items: center;

  flex-shrink: 0;

  width: 46px;
  height: 46px;

  border: 1px solid
    var(
      --color-border,
      #d5e0eb
    );

  border-radius: 10px;

  background: var(
    --color-card-background,
    #ffffff
  );

  color: var(
    --color-primary,
    #0065a8
  );

  font-size: 1.3rem;

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;
    font-size: 1.15rem;
  }
`;

const SectionHeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;
`;

const SectionTitle = styled.h2`
  margin: 0;

  color: var(
    --color-text-primary,
    #172435
  );

  font-size: clamp(
    1.25rem,
    2.5vw,
    1.65rem
  );

  font-weight: 800;
  line-height: 1.5;
`;

const SectionDescription = styled.p`
  margin: 0;

  color: var(
    --color-text-secondary,
    #475569
  );

  font-size: 0.88rem;
  line-height: 1.85;
`;

/* =========================================
   PROJECTS GRID WRAPPER
========================================= */

const GridWrapper = styled.div`
  width: 100%;
  min-width: 0;

  & > * {
    max-width: 100%;
  }
`;

/* =========================================
   PROJECTS COMPONENT
========================================= */

const Projects = () => {
  const { t, i18n } = useTranslation([
    "projects",
    "common",
  ]);

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic = language.startsWith("ar");

  /* SECTION TITLE */

  const sectionTitle = t(
    "projects:section.title",
    {
      defaultValue: isArabic
        ? "استكشف مشاريعي"
        : "Explore My Projects",
    }
  );

  /* SECTION DESCRIPTION */

  const sectionDescription = t(
    "projects:section.description",
    {
      defaultValue: isArabic
        ? "تصفح المشاريع واطلع على تفاصيل كل مشروع والتقنيات المستخدمة في تطويره."
        : "Browse my projects and explore their details and the technologies used to build them.",
    }
  );

  return (
    <ProjectsPage
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* =================================
          PAGE HEADER — BREADCRUMB ONLY
      ================================= */}

      <PageHeader>
        <BreadCrumb value="projects" />
      </PageHeader>

      {/* =================================
          PROJECTS SECTION
      ================================= */}

      <ProjectsSection
        aria-label={sectionTitle}
      >
        <ProjectsContainer>
          {/* SECTION HEADER */}

          <SectionHeader>
            <SectionIcon
              aria-hidden="true"
            >
              <FiGrid />
            </SectionIcon>

            <SectionHeadingContent>
              <SectionTitle>
                {sectionTitle}
              </SectionTitle>

              <SectionDescription>
                {sectionDescription}
              </SectionDescription>
            </SectionHeadingContent>
          </SectionHeader>

          {/* PROJECTS GRID */}

          <GridWrapper>
            <ProjectsGrid />
          </GridWrapper>
        </ProjectsContainer>
      </ProjectsSection>
    </ProjectsPage>
  );
};

export default Projects;
