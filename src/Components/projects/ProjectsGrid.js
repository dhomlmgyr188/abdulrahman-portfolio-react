import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import { CardsGrid } from "../ui/card/CardsGrid";
import styled from "styled-components";
import ProjectGallery from "./ProjectGallery";
import projectImages from "./projectImages";

const ProjGrid = styled(CardsGrid)`
  grid-template-columns: 1fr;
`;

const ProjectItem = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectGrid = () => {
  const { t } = useTranslation();

  const projects = t("home:featuredProjects.items", {
    returnObjects: true,
  });

  return (
    <ProjGrid>
      {projects.map((project) => (
        <ProjectItem key={project.id}>
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

          <ProjectGallery 
          images={project.project_img.map(
              (image) => projectImages[image]
            )}
          />
        </ProjectItem>
      ))}
    </ProjGrid>
  );
};

export default ProjectGrid;