
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import projectImages from "./projectImages";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   COMPONENTS — PROJECTS GRID

   Design System:
   - Modern Professional
   - Ocean / Orca

   Preserved:
   - All featured projects
   - Project IDs
   - Project titles
   - Project dates
   - Descriptions with embedded links
   - Technology stacks
   - Project details routes
   - Live preview URLs
   - Arabic / English translations
   - Light / Dark theme support
   - Responsive layout

   Added:
   - Image resolution from projectImages.js
   - Image data passed to ProjectCard
   - Safe handling of missing image keys

   Export:
   - ProjectGrid (default)
========================================================= */


/* =========================================================
   01 — PROJECTS LIST

   Keep the original vertical layout.

   ProjectCard currently uses a wide
   horizontal-content design, so a
   single-column list preserves the
   intended presentation.
========================================================= */

const ProjectsList = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr);

  align-items: stretch;

  gap: clamp(
    16px,
    2.5vw,
    24px
  );

  width: 100%;
  min-width: 0;

  box-sizing: border-box;

  > * {
    min-width: 0;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    gap: 16px;
  }
`;


/* =========================================================
   02 — EMPTY STATE

   Displayed only if no featured
   projects are found in home.json.
========================================================= */

const EmptyState = styled.p`
  margin: 0;

  padding:
    clamp(28px, 4vw, 40px) 20px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-secondary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 14px);

  font-size: 0.95rem;
  line-height: 1.8;

  text-align: center;
`;


/* =========================================================
   03 — IMAGE RESOLVER

   Source:
   projectImages.js

   Example:
   project.project_img = ["react1"]

   Result:
   projectImages.react1

   This helper does not change
   image names or source files.
========================================================= */

const resolveProjectImages = (imageKeys) => {

  /* -------------------------------------------------------
     NORMALIZE INPUT

     Support:
     - Array of image keys
     - Single image key
     - Missing image data
  ------------------------------------------------------- */

  const keys = Array.isArray(imageKeys)
    ? imageKeys
    : typeof imageKeys === "string"
      ? [imageKeys]
      : [];

  /* -------------------------------------------------------
     RESOLVE AVAILABLE IMAGES

     Preserve the original order.
  ------------------------------------------------------- */

  return keys
    .map((key) => {

      if (typeof key !== "string") {
        return null;
      }

      return projectImages[key] || null;

    })
    .filter(Boolean);
};


/* =========================================================
   04 — PROJECTS GRID COMPONENT
========================================================= */

function ProjectGrid() {

  /* -------------------------------------------------------
     TRANSLATIONS
  ------------------------------------------------------- */

  const { t, i18n } = useTranslation([
    "home",
    "projects",
    "common",
  ]);

  /* -------------------------------------------------------
     CURRENT LANGUAGE
  ------------------------------------------------------- */

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    language.toLowerCase().startsWith("ar");

  /* =====================================================
     05 — FEATURED PROJECTS DATA

     Keep the original data source:

     home:featuredProjects.items

     Full project details remain
     in projects.json.
  ===================================================== */

  const translatedProjects = t(
    "featuredProjects.items",
    {
      ns: "home",
      returnObjects: true,
      defaultValue: [],
    }
  );

  /* -------------------------------------------------------
     NORMALIZE PROJECTS
  ------------------------------------------------------- */

  const projects =
    Array.isArray(translatedProjects)
      ? translatedProjects
      : [];

  /* =====================================================
     06 — TRANSLATED BUTTON LABELS

     Preserve original translation
     keys and fallback text.
  ===================================================== */

  const detailsLabel = t(
    "buttons.view_project",
    {
      ns: "common",
      defaultValue: isArabic
        ? "تفاصيل المشروع"
        : "Project Details",
    }
  );

  const demoLabel = t(
    "buttons.demo",
    {
      ns: "common",
      defaultValue: isArabic
        ? "معاينة المشروع"
        : "Live Preview",
    }
  );

  /* =====================================================
     07 — EMPTY STATE
  ===================================================== */

  if (projects.length === 0) {

    return (
      <EmptyState role="status">

        {isArabic
          ? "لا توجد مشاريع متاحة للعرض حاليًا."
          : "No projects available at the moment."}

      </EmptyState>
    );
  }

  /* =====================================================
     08 — RENDER PROJECT CARDS
  ===================================================== */

  return (
    <ProjectsList>

      {projects.map((project, index) => {

        /* -----------------------------------------------
           PROJECT ID
        ----------------------------------------------- */

        const projectId =
          project.id;

        /* -----------------------------------------------
           PROJECT DETAILS LINK

           Preserve the existing route:
           /projects/:projectId
        ----------------------------------------------- */

        const detailsLink = projectId
          ? `/projects/${encodeURIComponent(
              projectId
            )}`
          : "/projects";

        /* -----------------------------------------------
           PROJECT DESCRIPTION

           Preserve:
           - shortDescription
           - desc

           Descriptions may be arrays
           containing text and links.
        ----------------------------------------------- */

        const description =
          project.shortDescription ||
          project.desc ||
          "";

        /* -----------------------------------------------
           PROJECT TECHNOLOGIES
        ----------------------------------------------- */

        const technologies =
          Array.isArray(project.tech_stack)
            ? project.tech_stack
            : [];

        /* -----------------------------------------------
           PROJECT IMAGES

           Example:
           ["react1"]

           Resolve using:
           projectImages.js
        ----------------------------------------------- */

        const images =
          resolveProjectImages(
            project.project_img
          );

        /* -----------------------------------------------
           PRIMARY IMAGE

           The first image can be
           displayed in ProjectCard.

           All resolved images are
           also passed separately.
        ----------------------------------------------- */

        const primaryImage =
          images.length > 0
            ? images[0]
            : null;

        /* -----------------------------------------------
           STABLE KEY
        ----------------------------------------------- */

        const projectKey =
          projectId || `project-${index}`;

        /* =================================================
           09 — PROJECT CARD

           Existing ProjectCard props
           are preserved.

           Additional image props:
           - image
           - images
           - imageAlt

           The current ProjectCard
           safely ignores these extra
           props until it is updated.
        ================================================= */

        return (
          <ProjectCard
            key={projectKey}

            index={index}

            title={project.title}

            date={project.date}

            description={description}

            techStack={technologies}

            toLink={detailsLink}

            toHref={project.link}

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


/* =========================================================
   10 — EXPORT
========================================================= */

export default ProjectGrid;
