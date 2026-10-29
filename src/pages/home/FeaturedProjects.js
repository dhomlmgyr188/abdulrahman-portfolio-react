
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FiArrowUpLeft,
  FiArrowUpRight,
} from "react-icons/fi";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import ProjectGrid from "../../Components/projects/ProjectsGrid";

const FeaturedSection = styled(Section)`
  width: 100%;
  min-height: auto;
  padding-block: clamp(70px, 8vw, 110px);
  background: var(--color-background);
  color: var(--color-text-primary);

  @media (max-width: 600px) {
    padding-block: 55px 70px;
  }
`;

const FeaturedContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: clamp(30px, 4vw, 45px);
  width: 100%;
  min-width: 0;
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 700px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
  }
`;

const HeadingTitle = styled.h2`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(1.85rem, 3.5vw, 2.7rem);
  font-weight: 800;
  line-height: 1.4;
`;

const HeadingDescription = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.93rem, 1.5vw, 1.03rem);
  line-height: 1.95;
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
  min-height: 45px;
  padding: 10px 16px;

  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-background-secondary);
  color: var(--color-text-primary);

  font-size: 0.87rem;
  font-weight: 700;
  text-decoration: none;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    background: var(--color-background-tertiary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  svg {
    width: 17px;
    height: 17px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileViewAll = styled(ViewAllLink)`
  display: none;

  @media (max-width: 700px) {
    display: inline-flex;
    align-self: center;
  }
`;

const Arrow = styled.span`
  display: inline-flex;

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

const FeaturedProjects = () => {
  const { t } = useTranslation();

  const viewAll = t(
    "home:featuredProjects.header.view_projects"
  );

  return (
    <FeaturedSection id="featured-projects">
      <FeaturedContainer>
        <Heading>
          <HeadingContent>
            <Eyebrow>
              {t(
                "home:featuredProjects.header.label",
                { defaultValue: "PORTFOLIO" }
              )}
            </Eyebrow>

            <HeadingTitle>
              {t("home:featuredProjects.header.title")}
            </HeadingTitle>

            <HeadingDescription>
              {t("home:featuredProjects.header.desc")}
            </HeadingDescription>
          </HeadingContent>

          <ViewAllLink to="/projects">
            {viewAll}
            <Arrow>
              <FiArrowUpLeft className="arrow-rtl" />
              <FiArrowUpRight className="arrow-ltr" />
            </Arrow>
          </ViewAllLink>
        </Heading>

        <ProjectGrid />

        <MobileViewAll to="/projects">
          {viewAll}
          <Arrow>
            <FiArrowUpLeft className="arrow-rtl" />
            <FiArrowUpRight className="arrow-ltr" />
          </Arrow>
        </MobileViewAll>
      </FeaturedContainer>
    </FeaturedSection>
  );
};

export default FeaturedProjects;
