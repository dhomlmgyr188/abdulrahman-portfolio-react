
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";
import projectImages from "./projectImages";

/* =====================================
   Projects Grid
===================================== */

const ProjGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  align-items: stretch;

  gap: clamp(20px, 3vw, 30px);

  width: 100%;
  min-width: 0;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

/* =====================================
   Project Card
===================================== */

const ProjectItem = styled.article`
  display: flex;
  flex-direction: column;

  min-width: 0;
  height: 100%;

  overflow: hidden;

  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 18px;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);

      border-color: color-mix(
        in srgb,
        var(--color-primary) 35%,
        var(--color-border)
      );

      box-shadow: var(--shadow-md, 0 12px 30px rgba(0, 0, 0, 0.08));
    }
  }

  @media (max-width: 480px) {
    border-radius: 15px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

/* =====================================
   Project Media
===================================== */

const ProjectMedia = styled.div`
  width: 100%;
  min-width: 0;

  aspect-ratio: 16 / 10;

  overflow: hidden;

  background: var(--color-background-tertiary, var(--color-background));

  border-bottom: 1px solid var(--color-border);

  & > * {
    width: 100%;
    height: 100%;
  }

  & img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    transition: transform 0.4s ease;
  }

  @media (hover: hover) {
    ${ProjectItem}:hover & img {
      transform: scale(1.025);
    }
  }

  @media (max-width: 480px) {
    aspect-ratio: 16 / 10;
  }

  @media (prefers-reduced-motion: reduce) {
    & img {
      transition: none;
    }
  }
`;

/* =====================================
   Project Content
===================================== */

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  min-width: 0;

  padding: clamp(18px, 2.5vw, 26px);

  & > * {
    width: 100%;
    min-width: 0;
  }

  @media (max-width: 480px) {
    padding: 18px 16px 20px;
  }
`;

/* =====================================
   Component
===================================== */

const ProjectGrid = () => {
  const { t } = useTranslation();

  const translatedProjects = t(
    "home:featuredProjects.items",
    { returnObjects: true }
  );

  const projects = Array.isArray(translatedProjects)
    ? translatedProjects
    : [];

  return (
    <ProjGrid>
      {projects.map((project, index) => {
        const images = Array.isArray(project.project_img)
          ? project.project_img
            .map((image) => projectImages[image])
            .filter(Boolean)
          : [];

        return (
          <ProjectItem key={project.id ?? index}>

            <ProjectMedia>
              <ProjectGallery
                images={images}
                alt={project.title}
              />
            </ProjectMedia>

            <ProjectInfo>
              <ProjectCard
                title={project.title}
                date={project.date}
                description={project.desc}
                value1={t("buttons.view_project")}
                toLink={`/projects/${project.id}`}
                value2={t("buttons.demo")}
                toHref={project.link}
                techStack={project.tech_stack}
                from={project.desc}
              />
            </ProjectInfo>

          </ProjectItem>
        );
      })}
    </ProjGrid>
  );
};

export default ProjectGrid;
