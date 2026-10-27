
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import Button, {
  Actions,
} from "../../Components/ui/Button/Button";

import {
  PTitle,
  Desc,
} from "../../Components/ui/T";

import Statistics, {
  Statistic,
  AnimatedNumber,
} from "./Statistics";

import TechIcon from "./TechIcon";
import abdulrahmanPhoto from "../../assets/images/me.png";

const myCV = `${process.env.PUBLIC_URL}/docs/cv.pdf`;

/* =====================================
   Animations
===================================== */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0
      color-mix(
        in srgb,
        var(--color-secondary) 25%,
        transparent
      );
  }

  50% {
    box-shadow: 0 0 0 7px transparent;
  }
`;

/* =====================================
   Hero Section
===================================== */

const HeroSection = styled(Section)`
  position: relative;
  display: flex;
  align-items: center;

  /* Same background as the default header */
  background: var(--color-background);

  min-height: auto;
  padding-block: clamp(45px, 6vw, 85px);

  overflow: hidden;

  @media (max-width: 768px) {
    padding-block: 35px 55px;
  }
`;

/* =====================================
   Hero Layout
===================================== */

const HeroContent = styled(Container)`
  position: relative;

  display: grid;
  grid-template-columns:
    minmax(0, 1.3fr)
    minmax(0, 1fr);

  align-items: center;
  gap: clamp(35px, 5vw, 75px);

  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: 25px;

    & > :first-child {
      order: 2;
    }

    & > :last-child {
      order: 1;
    }
  }

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

/* =====================================
   Hero Text
===================================== */

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 23px;
  min-width: 0;

  animation: ${fadeUp} 0.8s ease both;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* =====================================
   Availability
===================================== */

const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 9px 15px;

  border-radius: var(--radius-full);

  background: color-mix(
    in srgb,
    var(--color-secondary) 7%,
    var(--color-background)
  );

  border: 1px solid
    color-mix(
      in srgb,
      var(--color-secondary) 22%,
      var(--color-border)
    );

  color: var(--color-secondary);

  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.6;

  &::before {
    content: "";
    width: 9px;
    height: 9px;

    flex-shrink: 0;
    border-radius: 50%;

    background: var(--color-secondary);
    animation: ${pulse} 2.5s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

/* =====================================
   Heading
===================================== */

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeroName = styled(PTitle)`
  margin: 0;

  color: var(--color-text-primary);

  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.25;
  letter-spacing: -0.025em;

  @media (max-width: 480px) {
    font-size: clamp(2.1rem, 9vw, 3rem);
  }
`;

/* =====================================
   Job Title
===================================== */

const JobTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  min-height: 2.6rem;

  color: var(--color-primary);

  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const JobTitleText = styled.strong`
  display: block;
  animation: ${fadeUp} 0.45s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* =====================================
   Description
===================================== */

const HeroDescription = styled(Desc)`
  max-width: 610px;
  margin: 0;

  color: var(--color-text-secondary);

  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 1.95;
`;

/* =====================================
   Skills
===================================== */

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const SkillCard = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  min-height: 46px;
  padding: 6px 13px 6px 7px;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  background: var(--color-background);
  color: var(--color-text-primary);

  font-size: 0.86rem;
  font-weight: 600;
  white-space: nowrap;

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);

    border-color: color-mix(
      in srgb,
      var(--color-primary) 35%,
      var(--color-border)
    );

    box-shadow: var(--shadow-md);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const SkillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 33px;
  height: 33px;
  flex-shrink: 0;

  border-radius: 9px;

  background: color-mix(
    in srgb,
    var(--skill-color, var(--color-primary)) 12%,
    var(--color-background)
  );

  color: var(--skill-color, var(--color-primary));

  & > svg {
    width: 19px;
    height: 19px;
  }

  & > img {
    width: 19px;
    height: 19px;
    object-fit: contain;
  }
`;

const SkillName = styled.span`
  color: var(--color-text-primary);
`;

/* =====================================
   Actions
===================================== */

const HeroActions = styled(Actions)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 14px;
  margin-top: 10px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;

    & > * {
      flex: 1;
      text-align: center;
    }
  }
`;

/* =====================================
   Hero Figure
===================================== */

const HeroFigure = styled.figure`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 430px;
  min-width: 0;

  margin: 0;
  isolation: isolate;

  animation: ${fadeUp} 1s ease 0.15s both;

  @media (max-width: 480px) {
    max-width: 300px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* =====================================
   Photo Background
===================================== */

const PhotoBackground = styled.div`
  position: absolute;
  z-index: -1;

  width: 85%;
  aspect-ratio: 1;

  border-radius: 50%;

  background: var(--color-background-secondary);

  border: 1px solid
    color-mix(
      in srgb,
      var(--color-primary) 18%,
      var(--color-border)
    );

  box-shadow: var(--shadow-sm);

  &::after {
    content: "";
    position: absolute;
    inset: -15px;

    border-radius: 50%;

    border: 1px dashed
      color-mix(
        in srgb,
        var(--color-primary) 30%,
        var(--color-border)
      );

    opacity: 0.7;
  }
`;

/* =====================================
   Image Frame
===================================== */

const ImageFrame = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 68%;
  aspect-ratio: 1;

  border-radius: 50%;
  overflow: hidden;

  background: var(--color-background-secondary);

  border: 4px solid var(--color-background);
  box-shadow: var(--shadow-md);

  animation: ${float} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

/* =====================================
   Statistics
===================================== */

const StyledStatistics = styled(Statistics)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 420px;

  @media (max-width: 480px) {
    min-height: 310px;
  }
`;

/* =====================================
   Job Title Component
===================================== */

const JobTitleComponent = () => {
  const { t, i18n } = useTranslation();

  const translatedTitles = t(
    "home:hero.job_titles",
    { returnObjects: true }
  );

  const jobTitles = Array.isArray(translatedTitles)
    ? translatedTitles
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [i18n.language]);

  useEffect(() => {
    if (jobTitles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (previous) =>
          (previous + 1) % jobTitles.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [jobTitles.length, i18n.language]);

  if (!jobTitles.length) return null;

  return (
    <JobTitleWrapper aria-live="off">
      <JobTitleText
        key={`${i18n.language}-${currentIndex}`}
      >
        {jobTitles[currentIndex % jobTitles.length]}
      </JobTitleText>
    </JobTitleWrapper>
  );
};

/* =====================================
   Skill Colors
===================================== */

const skillColors = {
  React: "var(--color-react)",
  JavaScript: "var(--color-js)",
  HTML: "var(--color-html)",
  CSS: "var(--color-css)",
  Git: "var(--color-git)",
  SQL: "var(--color-sql)",
  "REST API": "var(--color-rest_api)",
  "Microsoft 365": "var(--color-ms365)",
};

/* =====================================
   Hero Component
===================================== */

const Hero = () => {
  const { t } = useTranslation();

  const translatedStack = t(
    "home:hero.tech_stack",
    { returnObjects: true }
  );

  const techStack = Array.isArray(translatedStack)
    ? translatedStack
    : [];

  return (
    <HeroSection id="home">
      <HeroContent>
        {/* Hero Text */}

        <HeroText>
          <Availability>
            {t("home:hero.availability_status")}
          </Availability>

          <HeadingGroup>
            <HeroName as="h1">
              {t("home:hero.name")}
            </HeroName>

            <JobTitleComponent />
          </HeadingGroup>

          <HeroDescription>
            {t("home:hero.introduction")}
          </HeroDescription>

          {/* Skills */}

          <SkillsWrapper>
            <SkillsList>
              {techStack.map((tech) => (
                <SkillCard key={tech.icon}>
                  <SkillIcon
                    style={{
                      "--skill-color":
                        skillColors[tech.icon] ||
                        "var(--color-primary)",
                    }}
                  >
                    <TechIcon name={tech.icon} />
                  </SkillIcon>

                  <SkillName>
                    {tech.text}
                  </SkillName>
                </SkillCard>
              ))}
            </SkillsList>
          </SkillsWrapper>

          {/* Buttons */}

          <HeroActions>
            <Button as={Link} to="/contact">
              {t("buttons.contact")}
            </Button>

            <Button
              as="a"
              $variant="secondary"
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("buttons.cv")}
            </Button>
          </HeroActions>
        </HeroText>

        {/* Hero Image */}

        <HeroFigure>
          <PhotoBackground />

          <StyledStatistics>
            <ImageFrame>
              <HeroImage
                src={abdulrahmanPhoto}
                alt={t("home:hero.profileAlt")}
                fetchPriority="high"
              />
            </ImageFrame>

            <Statistic className="top">
              <AnimatedNumber value={5} />
              <span>
                {t("home:hero.statistic.projects")}
              </span>
            </Statistic>

            <Statistic className="left">
              <AnimatedNumber value={2} />
              <span>
                {t("home:hero.statistic.years")}
              </span>
            </Statistic>

            <Statistic className="right">
              <AnimatedNumber value={10} />
              <span>
                {t("home:hero.statistic.technologies")}
              </span>
            </Statistic>
          </StyledStatistics>
        </HeroFigure>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
