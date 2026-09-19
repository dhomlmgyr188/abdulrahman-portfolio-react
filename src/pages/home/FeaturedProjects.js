import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { Section } from "../../Components/layout/PageContainer";
import { useTranslation } from "react-i18next";
import Button from "../../Components/ui/Button/Button";
import { Link } from "react-router-dom";
import { SectionSTitle, SectionLightDesc, SectionHeader, Clearfix } from "../../Components/ui/T";
import ProjectGrid from "../../Components/projects/ProjectsGrid";

const FeaturedProjectsSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
`;

const FeaturedProjectsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const FeaturedProjects = () => {
  const { t } = useTranslation();

  return (
    <FeaturedProjectsSection>
      <FeaturedProjectsContainer>
        <SectionHeader>
          <Clearfix>
            <SectionSTitle value="home:featuredProjects.header.title" />
            <Button as={Link} to="/projects">
              {t("home:featuredProjects.header.view_projects")}
            </Button>
          </Clearfix>
          <SectionLightDesc value="home:featuredProjects.header.desc" />
        </SectionHeader>
        <ProjectGrid />
      </FeaturedProjectsContainer>
    </FeaturedProjectsSection>
  );
};

export default FeaturedProjects;
