
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";

/* =====================================
   PROJECTS GRID STYLES
===================================== */

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.5vw, 22px);

  width: 100%;
  min-width: 0;
`;

const EmptyState = styled.p`
  margin: 0;
  padding: 40px 20px;

  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-background-secondary);

  color: var(--color-text-secondary);
  text-align: center;
  line-height: 1.8;
`;

/* =====================================
   PROJECTS GRID COMPONENT
===================================== */

const ProjectGrid = () => {
  const { t, i18n } = useTranslation([
    "home",
    "projects",
    "common",
  ]);

  const isArabic = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar"
  ).startsWith("ar");

  /*
    Fetch project cards from home.json.
    Full project information remains in projects.json.
  */

  const translatedProjects = t(
    "featuredProjects.items",
    {
      ns: "home",
      returnObjects: true,
      defaultValue: [],
    }
  );

  const projects = Array.isArray(translatedProjects)
    ? translatedProjects
    : [];

  /* =====================================
     EMPTY STATE
  ===================================== */

  if (projects.length === 0) {
    return (
      <EmptyState>
        {isArabic
          ? "لا توجد مشاريع متاحة للعرض حاليًا."
          : "No projects available at the moment."}
      </EmptyState>
    );
  }

  /* =====================================
     PROJECT CARDS
  ===================================== */

  return (
    <ProjectsList>
      {projects.map((project, index) => {
        const projectId = project.id;

        const detailsLink = projectId
          ? `/projects/${encodeURIComponent(projectId)}`
          : "/projects";

        /*
          Use a short description when available.
          Otherwise preserve the original desc.
        */

        const description =
          project.shortDescription ||
          project.desc ||
          "";

        return (
          <ProjectCard
            key={projectId || index}
            index={index}
            title={project.title}
            date={project.date}
            description={description}
            techStack={project.tech_stack}
            toLink={detailsLink}
            toHref={project.link}
            value1={t("buttons.view_project", {
              ns: "common",
              defaultValue: isArabic
                ? "تفاصيل المشروع"
                : "Project Details",
            })}
            value2={t("buttons.demo", {
              ns: "common",
              defaultValue: isArabic
                ? "معاينة المشروع"
                : "Live Preview",
            })}
          />
        );
      })}
    </ProjectsList>
  );
};

export default ProjectGrid;
