
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
} from "react-icons/fi";

import BreadCrumb from "../Components/ui/Breadcrumb";
import Container from "../Components/layout/PageContainer";

import { PageHeader, PageHeaderContainer } from "../Components/ui/T";

import react1 from "../assets/images/react1.png";
import anaalmughyir1 from "../assets/images/anaalmughyir1.png";

const images = {
  react1,
  anaalmughyir1,
};

const Content = styled(Container)`
  padding-top: 50px;
  padding-bottom: 80px;
`;

const ProjectHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 36px;
`;

const Title = styled.h1`
  margin: 0;
  color: var(--color-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.5;
`;

const Description = styled.p`
  max-width: 850px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 2;
`;

const DateText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 320px), 1fr)
  );
  gap: 20px;
  margin-bottom: 45px;
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-card-background);
  box-shadow: var(--shadow-card);
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 18px;
  color: var(--color-heading);
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  font-weight: 800;
`;

const FeaturesList = styled.ul`
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--color-text-secondary);
  line-height: 1.8;

  svg {
    flex-shrink: 0;
    margin-top: 5px;
    color: var(--color-primary);
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Tech = styled.li`
  padding: 9px 15px;
  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.9rem;
  font-weight: 600;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 35px;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 12px 22px;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  background: var(--color-button-background);
  color: var(--color-button-text);
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
    color: var(--color-button-text);
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { t, i18n } = useTranslation("projects");

  const projects = t("items", {
    returnObjects: true,
    defaultValue: [],
  });

  const project = Array.isArray(projects)
    ? projects.find((item) => item.id === projectId)
    : undefined;

  const isArabic = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar"
  ).startsWith("ar");

  const BackArrow = isArabic
    ? FiArrowRight
    : FiArrowLeft;

  if (!project) {
    return (
      <>
        <PageHeader>
          <BreadCrumb value="projects" />
          <PageHeaderContainer>
            <Title>
              {t("details.notFound")}
            </Title>
          </PageHeaderContainer>
        </PageHeader>

        <Content>
          <Description>
            {t("details.notFoundDescription")}
          </Description>

          <BackLink to="/projects">
            <BackArrow />
            {t("details.backToProjects")}
          </BackLink>
        </Content>
      </>
    );
  }

  const projectImages = Array.isArray(project.project_img)
    ? project.project_img
        .map((key) => images[key])
        .filter(Boolean)
    : [];

  return (
    <>
      <PageHeader>
        <BreadCrumb
          value="projects"
          projectTitle={project.title}
        />

        <PageHeaderContainer>
          <Title>{project.title}</Title>
          <Description>
            {project.shortDescription}
          </Description>
        </PageHeaderContainer>
      </PageHeader>

      <Content>
        <ProjectHeading>
          {project.date && (
            <DateText>
              <FiCalendar aria-hidden="true" />
              {t("details.date")}:{" "}
              <span dir="ltr">{project.date}</span>
            </DateText>
          )}
        </ProjectHeading>

        {projectImages.length > 0 && (
          <Section>
            <SectionTitle>
              {t("details.gallery")}
            </SectionTitle>

            <Gallery>
              {projectImages.map((src, index) => (
                <GalleryImage
                  key={`${project.id}-${index}`}
                  src={src}
                  alt={`${project.title} - ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </Gallery>
          </Section>
        )}

        {project.overview && (
          <Section>
            <SectionTitle>
              {t("details.overview")}
            </SectionTitle>

            <Description>
              {project.overview}
            </Description>
          </Section>
        )}

        {Array.isArray(project.features) &&
          project.features.length > 0 && (
            <Section>
              <SectionTitle>
                {t("details.features")}
              </SectionTitle>

              <FeaturesList>
                {project.features.map((feature, index) => (
                  <Feature key={index}>
                    <FiCheckCircle aria-hidden="true" />
                    <span>{feature}</span>
                  </Feature>
                ))}
              </FeaturesList>
            </Section>
          )}

        {Array.isArray(project.tech_stack) &&
          project.tech_stack.length > 0 && (
            <Section>
              <SectionTitle>
                {t("details.technologies")}
              </SectionTitle>

              <TechList>
                {project.tech_stack.map((tech) => (
                  <Tech key={tech}>
                    {tech}
                  </Tech>
                ))}
              </TechList>
            </Section>
          )}

        <Actions>
          {project.demo && (
            <ActionLink
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("details.liveDemo")}
              <FiExternalLink aria-hidden="true" />
            </ActionLink>
          )}

          {project.github && (
            <ActionLink
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("details.sourceCode")}
              <FiGithub aria-hidden="true" />
            </ActionLink>
          )}
        </Actions>

        <BackLink to="/projects">
          <BackArrow aria-hidden="true" />
          {t("details.backToProjects")}
        </BackLink>
      </Content>
    </>
  );
};

export default ProjectDetails;
