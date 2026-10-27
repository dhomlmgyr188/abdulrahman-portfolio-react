
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import {
  SectionSTitle,
  SectionLightDesc,
} from "../../Components/ui/T";

import ProjectGrid from "../../Components/projects/ProjectsGrid";

/* =====================================
   Section
===================================== */

const FeaturedProjectsSection = styled(Section)`
  width: 100%;
  min-height: auto;

  padding-block: clamp(64px, 8vw, 110px);

  background: var(--color-background);

  @media (max-width: 600px) {
    padding-block: 54px 64px;
  }
`;

const FeaturedProjectsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: clamp(28px, 4vw, 44px);

  width: 100%;
  min-width: 0;
`;

/* =====================================
   Heading
===================================== */

const ProjectsHeading = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  gap: 28px;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;
  max-width: 690px;
  min-width: 0;

  text-align: start;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;

  & > * {
    margin: 0;
    text-align: start;
  }
`;

const DescriptionWrapper = styled.div`
  max-width: 650px;

  & > * {
    margin: 0;
    text-align: start;

    color: var(--color-text-secondary);
    line-height: 1.9;
  }
`;

/* =====================================
   View All Link
===================================== */

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  flex-shrink: 0;
  min-height: 44px;

  color: var(--color-primary);
  font-size: 0.95rem;
  font-weight: 700;

  text-decoration: none;

  transition:
    color 0.2s ease,
    gap 0.2s ease;

  & svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    gap: 15px;
    text-decoration: underline;
    text-underline-offset: 6px;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (max-width: 700px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MobileViewAll = styled(ViewAllLink)`
  display: none;

  @media (max-width: 700px) {
    display: inline-flex;

    align-self: center;
    justify-content: center;

    width: fit-content;
    margin-top: 4px;
  }
`;

const ArrowIcon = () => (
  <>
    <FiArrowUpLeft className="arrow-rtl" />
    <FiArrowUpRight className="arrow-ltr" />
  </>
);

const ArrowStyles = styled.div`
  display: contents;

  .arrow-ltr {
    display: none;
  }

  [dir="ltr"] & .arrow-rtl {
    display: none;
  }

  [dir="ltr"] & .arrow-ltr {
    display: block;
  }
`;

/* =====================================
   Component
===================================== */

const FeaturedProjects = () => {
  const { t } = useTranslation();

  const viewAllText = t(
    "home:featuredProjects.header.view_projects"
  );

  return (
    <FeaturedProjectsSection id="featured-projects">
      <FeaturedProjectsContainer>

        <ProjectsHeading>
          <HeadingText>
            <TitleWrapper>
              <SectionSTitle
                value="home:featuredProjects.header.title"
              />
            </TitleWrapper>

            <DescriptionWrapper>
              <SectionLightDesc
                value="home:featuredProjects.header.desc"
              />
            </DescriptionWrapper>
          </HeadingText>

          <ViewAllLink to="/projects">
            {viewAllText}
            <ArrowStyles>
              <ArrowIcon />
            </ArrowStyles>
          </ViewAllLink>
        </ProjectsHeading>

        <ProjectGrid />

        <MobileViewAll to="/projects">
          {viewAllText}
          <ArrowStyles>
            <ArrowIcon />
          </ArrowStyles>
        </MobileViewAll>

      </FeaturedProjectsContainer>
    </FeaturedProjectsSection>
  );
};

export default FeaturedProjects;
