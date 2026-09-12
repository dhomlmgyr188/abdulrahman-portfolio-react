import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import { CardsGrid } from "../ui/card/CardsGrid";
import styled from "styled-components";
import ProjectGallery from "./ProjectGallery";

const ProjGrid = styled(CardsGrid)`
  grid-template-columns: 1fr;
`;

const ProjectItem = styled(CardsGrid)`
  grid-template-columns: 1.5fr 1fr;
  gap: var(--space-xl);
  align-items: center;
`;

const ProjectGrid = () => {
  const { t } = useTranslation();

  const projects = t("featuredProjects.items", {
    returnObjects: true,
  });

  return (
    <ProjGrid>
      {projects.map((project) => (
        <ProjectItem key={project.id}>
          <ProjectCard
            title={project.title}
            description={project.desc}
            value1={project.view_project}
            toLink={`/projects/${project.id}`}
            value2={project.demo.text}
            toHref={project.demo.link}
          />

          <ProjectGallery images={project.project_img} />
        </ProjectItem>
      ))}
    </ProjGrid>
  );
};

export default ProjectGrid;