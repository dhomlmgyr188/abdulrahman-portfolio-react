
import {
  useEffect,
  useState,
} from "react";

import styled, {
  keyframes,
} from "styled-components";

import { useTranslation } from "react-i18next";
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

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   HOME — HERO SECTION

   Design:
   - Modern Professional
   - Ocean / Orca

   Preserved features:
   - Profile photo
   - Availability status
   - Animated job titles
   - Personal introduction
   - Technology stack
   - Contact button
   - CV button
   - Animated statistics
   - Arabic / English
   - Light / Dark
   - Responsive layout
========================================================= */


/* =========================================================
   01 — RESOURCES
========================================================= */

const myCV =
  `${process.env.PUBLIC_URL}/documents/cv.pdf`;


/* =========================================================
   02 — ANIMATIONS
========================================================= */

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
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    box-shadow:
      0 0 0 0
      color-mix(
        in srgb,
        var(--color-primary) 20%,
        transparent
      );
  }

  60% {
    box-shadow:
      0 0 0 8px transparent;
  }
`;


/* =========================================================
   03 — HERO SECTION
========================================================= */

const HeroSection = styled(Section)`
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;

  width: 100%;
  min-width: 0;

  min-height: min(740px, 90svh);

  padding-block:
    clamp(56px, 7vw, 92px);

  overflow: hidden;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  box-sizing: border-box;

  /* -------------------------------------------------------
     SUBTLE BACKGROUND ACCENT
  ------------------------------------------------------- */

  &::before {
    content: "";

    position: absolute;

    z-index: -1;

    inset-block-start: -25%;
    inset-inline-end: -12%;

    width: clamp(
      260px,
      40vw,
      560px
    );

    aspect-ratio: 1;

    border-radius: 50%;

    background-color:
      var(--color-background-secondary);

    opacity: 0.45;

    filter: blur(80px);

    pointer-events: none;
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    min-height: auto;

    padding-block:
      42px 64px;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    padding-block:
      30px 50px;
  }
`;


/* =========================================================
   04 — HERO CONTENT
========================================================= */

const HeroContent = styled(Container)`
  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(0, 1fr);

  align-items: center;

  gap: clamp(
    28px,
    4vw,
    64px
  );

  width: 100%;
  min-width: 0;

  /* -------------------------------------------------------
     TABLET & MOBILE
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    grid-template-columns:
      minmax(0, 1fr);

    justify-items: center;

    gap: 24px;

    > :first-child {
      order: 2;
    }

    > :last-child {
      order: 1;
    }
  }
`;


/* =========================================================
   05 — TEXT CONTENT
========================================================= */

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: clamp(
    16px,
    2vw,
    24px
  );

  width: 100%;
  min-width: 0;

  animation:
    ${fadeUp} 0.75s ease both;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;

    max-width: 680px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;


/* =========================================================
   06 — AVAILABILITY BADGE
========================================================= */

const Availability = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  max-width: 100%;

  padding: 8px 14px;

  border:
    1px solid var(--color-border);

  border-radius: 999px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.6;

  text-align: start;

  /* -------------------------------------------------------
     STATUS DOT
  ------------------------------------------------------- */

  &::before {
    content: "";

    width: 9px;
    height: 9px;

    flex-shrink: 0;

    border-radius: 50%;

    background-color:
      var(--color-primary);

    animation:
      ${pulse} 2.5s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;


/* =========================================================
   07 — HEADING GROUP
========================================================= */

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  width: 100%;
  min-width: 0;
`;


/* =========================================================
   08 — HERO NAME
========================================================= */

const HeroName = styled(PTitle)`
  margin: 0;

  color:
    var(--color-text-primary);

  font-size: clamp(
    2.3rem,
    4.7vw,
    4.3rem
  );

  font-weight: 800;
  line-height: 1.25;

  letter-spacing: -0.025em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(
      2rem,
      8.5vw,
      2.8rem
    );
  }
`;


/* =========================================================
   09 — ANIMATED JOB TITLE
========================================================= */

const JobTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  min-height: 2.7rem;
  min-width: 0;

  color:
    var(--color-primary);

  font-size: clamp(
    1.1rem,
    2.3vw,
    1.55rem
  );

  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const JobTitleText = styled.strong`
  display: block;

  font-weight: inherit;

  overflow-wrap: break-word;

  animation:
    ${fadeUp} 0.4s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;


/* =========================================================
   10 — HERO DESCRIPTION
========================================================= */

const HeroDescription = styled(Desc)`
  max-width: 620px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.95rem,
    1.4vw,
    1.04rem
  );

  line-height: 1.95;

  overflow-wrap: break-word;

  @media (max-width: 480px) {
    line-height: 1.85;
  }
`;


/* =========================================================
   11 — TECHNOLOGY STACK
========================================================= */

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  width: 100%;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 9px;

  width: 100%;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const SkillCard = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  min-height: 42px;

  padding:
    6px 11px;

  border:
    1px solid var(--color-border);

  border-radius:
    10px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  font-size: 0.83rem;
  font-weight: 600;
  line-height: 1.5;

  box-sizing: border-box;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);

      border-color:
        var(--color-primary);
    }
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

  width: 29px;
  height: 29px;

  flex-shrink: 0;

  border-radius: 8px;

  background-color:
    var(--color-background);

  color:
    var(--color-primary);

  svg {
    display: block;

    width: 18px;
    height: 18px;
  }
`;

const SkillName = styled.span`
  color:
    var(--color-text-primary);

  white-space: nowrap;
`;


/* =========================================================
   12 — ACTION BUTTONS

   Uses the shared Button component.

   No custom button colors or radius
   are introduced here.
========================================================= */

const HeroActions = styled(Actions)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 12px;

  width: 100%;

  margin-block-start: 4px;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;

    > * {
      flex: 1 1 140px;
      min-width: 0;
    }
  }
`;


/* =========================================================
   13 — PROFILE FIGURE
========================================================= */

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

  animation:
    ${fadeUp} 0.9s ease 0.1s both;

  @media (max-width: 900px) {
    max-width: 390px;
  }

  @media (max-width: 480px) {
    max-width: 310px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;


/* =========================================================
   14 — PHOTO BACKGROUND
========================================================= */

const PhotoBackground = styled.div`
  position: absolute;

  z-index: -1;

  width: 85%;

  aspect-ratio: 1;

  border-radius: 50%;

  background-color:
    var(--color-background-secondary);

  border:
    1px solid var(--color-border);

  box-shadow:
    var(--shadow-sm);

  pointer-events: none;

  &::after {
    content: "";

    position: absolute;

    inset: -14px;

    border-radius: 50%;

    border:
      1px dashed var(--color-border);

    opacity: 0.7;
  }
`;


/* =========================================================
   15 — PROFILE IMAGE FRAME
========================================================= */

const ImageFrame = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 68%;

  aspect-ratio: 1;

  border-radius: 50%;

  overflow: hidden;

  background-color:
    var(--color-background-secondary);

  border:
    5px solid var(--color-background);

  box-shadow:
    var(--shadow-md);

  animation:
    ${float} 6s ease-in-out infinite;

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


/* =========================================================
   16 — STATISTICS LAYOUT

   Preserve the original Statistics,
   Statistic and AnimatedNumber APIs.
========================================================= */

const StyledStatistics = styled(Statistics)`
  position: relative;

  width: 100%;
  min-height: 420px;

  @media (max-width: 900px) {
    min-height: 370px;
  }

  @media (max-width: 480px) {
    min-height: 310px;
  }
`;


/* =========================================================
   17 — JOB TITLE COMPONENT

   Rotates translated job titles
   every 3500 milliseconds.

   Resets when language changes.

   Respects reduced-motion preference.
========================================================= */

function JobTitleComponent() {

  const { t, i18n } = useTranslation();

  const translatedTitles = t(
    "home:hero.job_titles",
    {
      returnObjects: true,
    }
  );

  const jobTitles =
    Array.isArray(translatedTitles)
      ? translatedTitles
      : [];

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  /* -------------------------------------------------------
     RESET WHEN LANGUAGE CHANGES
  ------------------------------------------------------- */

  useEffect(() => {
    setCurrentIndex(0);
  }, [language]);

  /* -------------------------------------------------------
     ROTATE TITLES
  ------------------------------------------------------- */

  useEffect(() => {

    if (jobTitles.length <= 1) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) {
      return undefined;
    }

    const interval = window.setInterval(
      () => {

        setCurrentIndex((previous) =>
          (previous + 1) % jobTitles.length
        );

      },
      3500
    );

    return () => {
      window.clearInterval(interval);
    };

  }, [
    jobTitles.length,
    language,
  ]);

  /* -------------------------------------------------------
     EMPTY TITLES
  ------------------------------------------------------- */

  if (jobTitles.length === 0) {
    return null;
  }

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <JobTitleWrapper
      aria-live="off"
    >

      <JobTitleText
        key={`${language}-${currentIndex}`}
      >
        {
          jobTitles[
            currentIndex % jobTitles.length
          ]
        }
      </JobTitleText>

    </JobTitleWrapper>
  );
}


/* =========================================================
   18 — HERO COMPONENT
========================================================= */

function Hero() {

  const { t } = useTranslation();

  /* -------------------------------------------------------
     TRANSLATED TECHNOLOGY STACK
  ------------------------------------------------------- */

  const translatedStack = t(
    "home:hero.tech_stack",
    {
      returnObjects: true,
    }
  );

  const techStack =
    Array.isArray(translatedStack)
      ? translatedStack
      : [];

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <HeroSection id="home">

      <HeroContent>

        {/* =================================
            TEXT CONTENT
        ================================= */}

        <HeroText>

          {/* -------------------------------
              AVAILABILITY
          ------------------------------- */}

          <Availability>

            {t(
              "home:hero.availability_status"
            )}

          </Availability>

          {/* -------------------------------
              NAME & JOB TITLES
          ------------------------------- */}

          <HeadingGroup>

            <HeroName as="h1">

              {t("home:hero.name")}

            </HeroName>

            <JobTitleComponent />

          </HeadingGroup>

          {/* -------------------------------
              INTRODUCTION
          ------------------------------- */}

          <HeroDescription>

            {t("home:hero.introduction")}

          </HeroDescription>

          {/* -------------------------------
              TECHNOLOGY STACK
          ------------------------------- */}

          <SkillsWrapper>

            <SkillsList>

              {techStack.map(
                (tech, index) => (

                  <SkillCard
                    key={
                      `${
                        tech.icon ||
                        tech.text
                      }-${index}`
                    }
                  >

                    <SkillIcon
                      aria-hidden="true"
                    >

                      <TechIcon
                        name={tech.icon}
                      />

                    </SkillIcon>

                    <SkillName>

                      {tech.text}

                    </SkillName>

                  </SkillCard>

                )
              )}

            </SkillsList>

          </SkillsWrapper>

          {/* -------------------------------
              ACTION BUTTONS
          ------------------------------- */}

          <HeroActions>

            <Button
              as={Link}
              to="/contact"
              $variant="primary"
              $size="lg"
            >

              {t("buttons.contact")}

            </Button>

            <Button
              as="a"
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
              $variant="secondary"
              $size="lg"
            >

              {t("buttons.cv")}

            </Button>

          </HeroActions>

        </HeroText>

        {/* =================================
            PROFILE PHOTO & STATISTICS
        ================================= */}

        <HeroFigure>

          <PhotoBackground
            aria-hidden="true"
          />

          <StyledStatistics>

            {/* ---------------------------
                PROFILE PHOTO
            --------------------------- */}

            <ImageFrame>

              <HeroImage
                src={abdulrahmanPhoto}
                alt={t(
                  "home:hero.profileAlt"
                )}
                fetchPriority="high"
                decoding="async"
              />

            </ImageFrame>

            {/* ---------------------------
                PROJECTS STATISTIC
            --------------------------- */}

            <Statistic className="top">

              <AnimatedNumber value={5} />

              <span>
                {t(
                  "home:hero.statistic.projects"
                )}
              </span>

            </Statistic>

            {/* ---------------------------
                EXPERIENCE STATISTIC
            --------------------------- */}

            <Statistic className="left">

              <AnimatedNumber value={2} />

              <span>
                {t(
                  "home:hero.statistic.years"
                )}
              </span>

            </Statistic>

            {/* ---------------------------
                TECHNOLOGIES STATISTIC
            --------------------------- */}

            <Statistic className="right">

              <AnimatedNumber value={10} />

              <span>
                {t(
                  "home:hero.statistic.technologies"
                )}
              </span>

            </Statistic>

          </StyledStatistics>

        </HeroFigure>

      </HeroContent>

    </HeroSection>
  );
}


/* =========================================================
   19 — EXPORT
========================================================= */

export default Hero;
