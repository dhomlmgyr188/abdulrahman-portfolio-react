
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import projectImages from "./projectImages";

/* =========================================
   PROJECTS GRID STYLES
========================================= */

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;

  gap: clamp(16px, 2.5vw, 24px);

  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  > * {
    min-width: 0;
  }

  @media (max-width: 600px) {
    gap: 16px;
  }
`;

const EmptyState = styled.p`
  margin: 0;
  padding: clamp(28px, 4vw, 40px) 20px;

  background: var(--color-background-secondary);
  color: var(--color-text-secondary);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 14px);

  font-size: 0.95rem;
  line-height: 1.8;
  text-align: center;
`;

/* =========================================
   PROJECT IMAGE RESOLVER
========================================= */

const resolveProjectImages = (imageKeys) => {
  const keys = Array.isArray(imageKeys)
    ? imageKeys
    : typeof imageKeys === "string"
      ? [imageKeys]
      : [];

  return keys
    .map((key) => {
      if (typeof key !== "string") {
        return null;
      }

      if (
        Object.prototype.hasOwnProperty.call(
          projectImages,
          key
        )
      ) {
        return projectImages[key];
      }

      if (/^https?:\/\//i.test(key)) {
        return key;
      }

      return null;
    })
    .filter(Boolean);
};

/* =========================================
   PROJECTS GRID COMPONENT
========================================= */

function ProjectGrid({ source = "auto" }) {
  const { t, i18n } = useTranslation([
    "home",
    "projects",
    "common",
  ]);

  const location = useLocation();

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic = language
    .toLowerCase()
    .startsWith("ar");

  /* =========================================
     DETERMINE PROJECT SOURCE

     home     => Featured projects only
     projects => All projects
     auto     => Detect current page
  ========================================= */

  const pathname = location.pathname.replace(/\/+$/, "");

  const isProjectsPage =
    pathname === "/projects" ||
    pathname.endsWith("/projects");

  const dataSource =
    source === "home" || source === "projects"
      ? source
      : isProjectsPage
        ? "projects"
        : "home";

  /* =========================================
     ALL PROJECTS

     projects.json is the single source
     for project information.
  ========================================= */

  const translatedProjects = t("items", {
    ns: "projects",
    returnObjects: true,
    defaultValue: [],
  });

  const allProjects = Array.isArray(
    translatedProjects
  )
    ? translatedProjects
    : [];

  /* =========================================
     FEATURED PROJECT IDS

     home.json determines only:
     - Which projects are featured
     - Their display order
  ========================================= */

  const featuredProjectsData = t(
    "featuredProjects.items",
    {
      ns: "home",
      returnObjects: true,
      defaultValue: [],
    }
  );

  const featuredProjectIds = Array.isArray(
    featuredProjectsData
  )
    ? featuredProjectsData
        .map((item) => {
          if (typeof item === "string") {
            return item;
          }

          if (
            item &&
            typeof item === "object"
          ) {
            return item.id;
          }

          return null;
        })
        .filter(
          (id) =>
            typeof id === "string" &&
            id.trim() !== ""
        )
    : [];

  /* =========================================
     PROJECT LOOKUP

     Match by stable project ID.
  ========================================= */

  const projectsById = new Map(
    allProjects
      .filter(
        (project) =>
          project &&
          typeof project.id === "string" &&
          project.id.trim() !== ""
      )
      .map((project) => [
        project.id,
        project,
      ])
  );

  /* =========================================
     SELECT PROJECTS

     Home:
       Featured IDs mapped to projects.json

     Projects:
       All projects from projects.json
  ========================================= */

  const projects =
    dataSource === "projects"
      ? allProjects
      : featuredProjectIds
          .map((id) => projectsById.get(id))
          .filter(Boolean);

  /* =========================================
     TRANSLATED BUTTON LABELS
  ========================================= */

  const detailsLabel = t("buttons.view_project", {
    ns: "common",
    defaultValue: isArabic
      ? "تفاصيل المشروع"
      : "Project Details",
  });

  const demoLabel = t("buttons.demo", {
    ns: "common",
    defaultValue: isArabic
      ? "معاينة المشروع"
      : "Live Preview",
  });

  /* =========================================
     EMPTY STATE
  ========================================= */

  if (projects.length === 0) {
    return (
      <EmptyState role="status">
        {isArabic
          ? "لا توجد مشاريع متاحة للعرض حاليًا."
          : "No projects available at the moment."}
      </EmptyState>
    );
  }

  /* =========================================
     PROJECT CARDS
  ========================================= */

  return (
    <ProjectsList>
      {projects.map((project, index) => {
        const projectId = project.id;

        /* =====================================
           PROJECT DETAILS LINK
        ===================================== */

        const detailsLink = projectId
          ? `/projects/${encodeURIComponent(projectId)}`
          : "/projects";

        /* =====================================
           PROJECT DESCRIPTION

           Always from projects.json
        ===================================== */

        const description =
          project.shortDescription ||
          project.desc ||
          "";

        /* =====================================
           TECHNOLOGIES
        ===================================== */

        const technologies = Array.isArray(
          project.tech_stack
        )
          ? project.tech_stack
          : [];

        /* =====================================
           PROJECT IMAGES
        ===================================== */

        const images = resolveProjectImages(
          project.project_img
        );

        const primaryImage =
          images.length > 0 ? images[0] : null;

        /* =====================================
           LIVE DEMO

           No demo URL = no preview button
        ===================================== */

        const demoUrl =
          typeof project.demo === "string" &&
          project.demo.trim()
            ? project.demo.trim()
            : typeof project.link === "string" &&
                project.link.trim()
              ? project.link.trim()
              : undefined;

        /* =====================================
           UNIQUE PROJECT KEY
        ===================================== */

        const projectKey =
          projectId || `project-${index}`;

        /* =====================================
           PROJECT CARD
        ===================================== */

        return (
          <ProjectCard
            key={projectKey}
            index={index}
            title={project.title}
            date={project.date}
            description={description}
            techStack={technologies}
            toLink={detailsLink}
            toHref={demoUrl}
            value1={detailsLabel}
            value2={demoLabel}
            image={primaryImage}
            images={images}
            imageAlt={project.title}
          />
        );
      })}
    </ProjectsList>
  );
}

export default ProjectGrid;
