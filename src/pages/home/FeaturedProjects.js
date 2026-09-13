import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { useTranslation } from "react-i18next";
import Button from "../../Components/ui/Button/Button";
import { Link } from "react-router-dom";
import { Clearfix, STitle, LightDesc } from "../../Components/ui/T";
import ProjectGrid from "../../Components/projects/ProjectsGrid";

const FeaturedProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-3xl) 0;
  background-color: var(--color-background);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
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
            <STitle>{t("featuredProjects.header.title")}</STitle>
            <Button as={Link} to="/projects">
              {t("featuredProjects.header.view_all")}
            </Button>
          </Clearfix>
          <LightDesc>{t("featuredProjects.header.desc")}</LightDesc>
        </SectionHeader>
        <ProjectGrid />
      </FeaturedProjectsContainer>
    </FeaturedProjectsSection>
  );
};

export default FeaturedProjects;
