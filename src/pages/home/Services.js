
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import ServicesGrid from "../../Components/services/ServiceGrid";

/* =========================================
   ANIMATIONS
========================================= */

const lineGrow = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

/* =========================================
   SERVICES SECTION
========================================= */

const ServicesSection = styled(Section)`
  position: relative;
  isolation: isolate;

  width: 100%;
  min-width: 0;

  padding-block: clamp(64px, 8vw, 108px);

  overflow: hidden;

  background-color:
    var(--color-background-secondary);

  color: var(--color-text-primary);

  border-block:
    1px solid var(--color-border);

  box-sizing: border-box;

  &::before {
    content: "";

    position: absolute;
    z-index: -1;

    width: 420px;
    height: 420px;

    inset-block-start: -210px;
    inset-inline-end: -180px;

    border-radius: 50%;

    background-color: var(
      --color-secondary-soft,
      var(--color-background)
    );

    filter: blur(90px);
    opacity: 0.4;

    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding-block: 60px 76px;

    &::before {
      width: 280px;
      height: 280px;
      opacity: 0.25;
    }
  }

  @media (max-width: 480px) {
    padding-block: 50px 64px;
  }
`;

/* =========================================
   CONTENT
========================================= */

const ServicesContent = styled(Container)`
  display: flex;
  flex-direction: column;

  gap: clamp(30px, 4vw, 48px);

  width: 100%;
  min-width: 0;
`;

/* =========================================
   HEADER
========================================= */

const Header = styled.div`
  display: flex;
  flex-direction: column;

  gap: clamp(22px, 3vw, 34px);

  width: 100%;
  min-width: 0;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  gap: 14px;

  width: 100%;
`;

const SectionIndex = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  color: var(--color-text-secondary);

  font-size: 0.75rem;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 1.5px;

  direction: ltr;

  &::before {
    content: "";

    display: block;

    width: 24px;
    height: 1px;

    background-color: var(--color-primary);
  }
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 34px;

  padding: 7px 14px;

  border: 1px solid var(--color-border);

  border-radius:
    var(--radius-full, 999px);

  background-color:
    var(--color-background);

  color:
    var(--color-text-secondary);

  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.5;

  text-align: center;
`;

const HeaderDivider = styled.div`
  width: 100%;
  height: 1px;

  background-color: var(--color-border);
`;

const HeaderMain = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 0.9fr);

  align-items: center;

  gap: clamp(24px, 4vw, 64px);

  width: 100%;
  min-width: 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  min-width: 0;
`;

const SectionTitle = styled.h2`
  margin: 0;

  max-width: 650px;

  color: var(--color-text-primary);

  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.35;

  letter-spacing: -0.025em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: clamp(1.9rem, 6vw, 2.8rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
  }
`;

const TitleUnderline = styled.span`
  display: block;

  width: 82px;
  height: 3px;

  border-radius:
    var(--radius-full, 999px);

  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(
      --color-secondary-light,
      var(--color-secondary)
    )
  );

  transform-origin: right;

  animation: ${lineGrow} 0.7s ease both;

  [dir="ltr"] & {
    transform-origin: left;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const DescriptionGroup = styled.div`
  display: flex;
  align-items: center;

  min-width: 0;

  padding-inline-start:
    clamp(16px, 2vw, 26px);

  border-inline-start:
    2px solid var(--color-border);
`;

const SectionDescription = styled.p`
  margin: 0;

  max-width: 570px;

  color: var(--color-text-secondary);

  font-size: clamp(
    0.94rem,
    1.4vw,
    1.04rem
  );

  font-weight: 400;
  line-height: 2;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 480px) {
    line-height: 1.9;
  }
`;

/* =========================================
   SERVICES AREA
========================================= */

const ServicesArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  width: 100%;
  min-width: 0;
`;

const GridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  width: 100%;
  min-width: 0;
`;

const GridLabel = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  flex-shrink: 0;

  color: var(--color-text-secondary);

  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.5;

  &::before {
    content: "";

    width: 8px;
    height: 8px;

    flex-shrink: 0;

    border-radius: 50%;

    background-color:
      var(--color-secondary);
  }
`;

const GridLine = styled.div`
  flex: 1;

  height: 1px;

  background-color: var(--color-border);
`;

/* =========================================
   REVEAL ANIMATION
========================================= */

const AnimatedContent = styled.div`
  width: 100%;
  min-width: 0;

  opacity: ${({ $visible }) =>
    $visible ? 1 : 0};

  transform: ${({ $visible }) =>
    $visible
      ? "translateY(0)"
      : "translateY(22px)"};

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

/* =========================================
   MAIN COMPONENT
========================================= */

function Services() {
  const { t } = useTranslation();

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  /* -----------------------------------------
     TRANSLATIONS FROM HOME.JSON
  ----------------------------------------- */

  const content = {
    index: t("home:services.index", {
      defaultValue: "SERVICES",
    }),

    label: t("home:services.label", {
      defaultValue: "",
    }),

    title: t("home:services.title", {
      defaultValue: "",
    }),

    description: t(
      "home:services.description",
      {
        defaultValue: "",
      }
    ),

    gridLabel: t(
      "home:services.gridLabel",
      {
        defaultValue: "",
      }
    ),
  };

  /* -----------------------------------------
     INTERSECTION OBSERVER
  ----------------------------------------- */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      typeof IntersectionObserver === "undefined" ||
      reduceMotion
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* -----------------------------------------
     RENDER
  ----------------------------------------- */

  return (
    <ServicesSection
      id="services"
      ref={sectionRef}
    >
      <ServicesContent>

        <Header>

          <HeaderTop>
            <SectionIndex>
              {content.index}
            </SectionIndex>

            <SectionLabel>
              {content.label}
            </SectionLabel>
          </HeaderTop>

          <HeaderDivider aria-hidden="true" />

          <HeaderMain>

            <TitleGroup>
              <SectionTitle>
                {content.title}
              </SectionTitle>

              <TitleUnderline
                aria-hidden="true"
              />
            </TitleGroup>

            <DescriptionGroup>
              <SectionDescription>
                {content.description}
              </SectionDescription>
            </DescriptionGroup>

          </HeaderMain>

        </Header>

        <ServicesArea>

          <GridHeader>
            <GridLabel>
              {content.gridLabel}
            </GridLabel>

            <GridLine aria-hidden="true" />
          </GridHeader>

          <AnimatedContent
            $visible={isVisible}
          >
            <ServicesGrid />
          </AnimatedContent>

        </ServicesArea>

      </ServicesContent>
    </ServicesSection>
  );
}

export default Services;
