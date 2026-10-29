
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

import { PTitle, Desc } from "../../Components/ui/T";

import Statistics, {
  Statistic,
  AnimatedNumber,
} from "./Statistics";

import TechIcon from "./TechIcon";
import abdulrahmanPhoto from "../../assets/images/me.png";

const myCV = `${process.env.PUBLIC_URL}/documents/cv.pdf`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0
      color-mix(in srgb, var(--color-primary) 20%, transparent);
  }
  60% {
    box-shadow: 0 0 0 8px transparent;
  }
`;

const HeroSection = styled(Section)`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: min(790px, 95svh);
  padding-block: clamp(65px, 8vw, 110px);
  overflow: hidden;
  background: var(--color-background);
  color: var(--color-text-primary);

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: clamp(280px, 42vw, 620px);
    aspect-ratio: 1;
    inset-inline-end: -15%;
    top: -30%;
    border-radius: 50%;
    background: var(--color-background-secondary);
    opacity: 0.55;
    filter: blur(80px);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding-block: 48px 72px;
  }

  @media (max-width: 480px) {
    padding-block: 35px 55px;
  }
`;

const HeroContent = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(36px, 5vw, 80px);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: 20px;

    & > :first-child { order: 2; }
    & > :last-child { order: 1; }
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(18px, 2.5vw, 27px);
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

const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 15px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-background-secondary);
  color: var(--color-text-primary);
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.6;

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--color-primary);
    animation: ${pulse} 2.5s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }
`;

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const HeroName = styled(PTitle)`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.025em;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(2rem, 9vw, 3rem);
  }
`;

const JobTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.7rem;
  color: var(--color-primary);
  font-size: clamp(1.15rem, 2.5vw, 1.65rem);
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

const HeroDescription = styled(Desc)`
  max-width: 620px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 2;
`;

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
  gap: 9px;
  min-height: 44px;
  padding: 6px 12px 6px 7px;
  border: 1px solid var(--color-border);
  border-radius: 11px;
  background: var(--color-background-secondary);
  color: var(--color-text-primary);
  font-size: 0.84rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: var(--shadow-sm, 0 3px 12px rgba(0,0,0,0.04));
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-primary);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

const SkillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--color-background);
  color: var(--color-primary);

  & svg {
    width: 19px;
    height: 19px;
  }
`;

const SkillName = styled.span`
  color: var(--color-text-primary);
`;

const HeroActions = styled(Actions)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 8px;

  & > * {
    min-height: 48px;
    min-width: 155px;
    padding: 12px 22px;
    border-radius: 11px;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;

    & > * {
      flex: 1 1 140px;
      min-width: 0;
    }
  }
`;

const HeroFigure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  min-width: 0;
  margin: 0;
  isolation: isolate;
  animation: ${fadeUp} 1s ease 0.15s both;

  @media (max-width: 480px) {
    max-width: 310px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PhotoBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 85%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);

  &::after {
    content: "";
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    border: 1px dashed var(--color-border);
    opacity: 0.8;
  }
`;

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
  border: 5px solid var(--color-background);
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

const StyledStatistics = styled(Statistics)`
  position: relative;
  width: 100%;
  min-height: 420px;

  @media (max-width: 480px) {
    min-height: 310px;
  }
`;

const JobTitleComponent = () => {
  const { t, i18n } = useTranslation();

  const translatedTitles = t("home:hero.job_titles", {
    returnObjects: true,
  });

  const jobTitles = Array.isArray(translatedTitles)
    ? translatedTitles
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [i18n.language]);

  useEffect(() => {
    if (jobTitles.length <= 1) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((previous) =>
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

const Hero = () => {
  const { t } = useTranslation();

  const translatedStack = t("home:hero.tech_stack", {
    returnObjects: true,
  });

  const techStack = Array.isArray(translatedStack)
    ? translatedStack
    : [];

  return (
    <HeroSection id="home">
      <HeroContent>
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

          <SkillsWrapper>
            <SkillsList>
              {techStack.map((tech, index) => (
                <SkillCard
                  key={`${tech.icon || tech.text}-${index}`}
                >
                  <SkillIcon>
                    <TechIcon name={tech.icon} />
                  </SkillIcon>
                  <SkillName>{tech.text}</SkillName>
                </SkillCard>
              ))}
            </SkillsList>
          </SkillsWrapper>

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
