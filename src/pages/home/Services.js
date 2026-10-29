
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import ServicesGrid from "../../Components/services/ServiceGrid";

/* =========================================
   Animations
========================================= */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lineGrow = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

/* =========================================
   Section
========================================= */

const ServicesSection = styled(Section)`
  position: relative;
  isolation: isolate;

  width: 100%;
  min-height: auto;

  padding-block: clamp(85px, 10vw, 145px);

  overflow: hidden;

  background: var(--color-background-secondary);

  border-block: 1px solid var(--color-border);

  &::before {
    content: "";
    position: absolute;

    width: 460px;
    height: 460px;

    inset-block-start: -230px;
    inset-inline-end: -200px;

    border-radius: 50%;

    background: var(--color-secondary-soft);

    filter: blur(100px);
    opacity: 0.55;

    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding-block: 75px 95px;

    &::before {
      width: 300px;
      height: 300px;
      opacity: 0.3;
    }
  }
`;

const ServicesContent = styled(Container)`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: clamp(35px, 5vw, 65px);
`;

/* =========================================
   Section Header
========================================= */

const Header = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: clamp(26px, 4vw, 42px);
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 16px;
`;

const SectionIndex = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  color: var(--color-text-secondary);

  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;

  direction: ltr;

  &::before {
    content: "";
    display: block;

    width: 26px;
    height: 1px;

    background: var(--color-primary);
  }
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 34px;
  padding: 7px 16px;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);

  background: var(--color-background);

  color: var(--color-text-secondary);

  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

const HeaderDivider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--color-border);
`;

const HeaderMain = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);

  align-items: center;

  gap: clamp(30px, 5vw, 85px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;
  min-width: 0;
`;

const SectionTitle = styled.h2`
  position: relative;

  margin: 0;
  max-width: 650px;

  color: var(--color-text-primary);

  font-size: clamp(2.1rem, 4.5vw, 4rem);
  font-weight: 850;
  line-height: 1.35;

  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 3rem);
  }
`;

const TitleUnderline = styled.span`
  display: block;

  width: 95px;
  height: 4px;

  border-radius: var(--radius-full);

  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-secondary-light)
  );

  transform-origin: right;

  animation: ${lineGrow} 0.8s ease both;

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

  padding-inline-start: clamp(0px, 2vw, 30px);

  border-inline-start: 2px solid var(--color-border);

  @media (max-width: 768px) {
    padding-inline-start: 18px;
  }
`;

const SectionDescription = styled.p`
  margin: 0;
  max-width: 570px;

  color: var(--color-text-secondary);

  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  font-weight: 400;
  line-height: 2.1;

  text-wrap: pretty;
`;

/* =========================================
   Services Grid Wrapper
========================================= */

const ServicesArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 25px;
`;

const GridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  flex-wrap: wrap;
`;

const GridLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  color: var(--color-text-secondary);

  font-size: 0.78rem;
  font-weight: 700;

  &::before {
    content: "";

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(--color-secondary);
  }
`;

const GridLine = styled.div`
  flex: 1;
  height: 1px;

  background: var(--color-border);
`;

const AnimatedContent = styled.div`
  width: 100%;
  min-width: 0;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(28px)"};

  animation: ${({ $visible }) =>
    $visible ? fadeUp : "none"} 0.75s ease both;

  transition:
    opacity 0.75s ease,
    transform 0.75s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }
`;

/* =========================================
   Services Component
========================================= */

const Services = () => {
  const { i18n } = useTranslation();

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const isArabic = i18n.language
    ?.toLowerCase()
    .startsWith("ar");

  const content = isArabic
    ? {
        index: "01 / SERVICES",
        label: "ما أقدمه",
        title: "حلول رقمية تصنع فرقًا.",
        description:
          "أقدم مجموعة من الخدمات التقنية والرقمية التي تجمع بين الدقة والتنظيم والتصميم العصري، لمساعدتك على تحويل أفكارك ومتطلباتك إلى حلول عملية ونتائج احترافية.",
        gridLabel: "استكشف الخدمات",
      }
    : {
        index: "01 / SERVICES",
        label: "What I Offer",
        title: "Digital solutions that make a difference.",
        description:
          "I provide a range of technical and digital services that combine precision, organization, and modern design to transform your ideas and requirements into practical, professional results.",
        gridLabel: "Explore Services",
      };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      typeof IntersectionObserver === "undefined" ||
      reduceMotion
    ) {
      setIsVisible(true);
      return;
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

    return () => observer.disconnect();
  }, []);

  return (
    <ServicesSection
      id="services"
      ref={sectionRef}
    >
      <ServicesContent>

        {/* Header */}

        <Header>
          <HeaderTop>
            <SectionIndex>
              {content.index}
            </SectionIndex>

            <SectionLabel>
              {content.label}
            </SectionLabel>
          </HeaderTop>

          <HeaderDivider />

          <HeaderMain>
            <TitleGroup>
              <SectionTitle>
                {content.title}
              </SectionTitle>

              <TitleUnderline />
            </TitleGroup>

            <DescriptionGroup>
              <SectionDescription>
                {content.description}
              </SectionDescription>
            </DescriptionGroup>
          </HeaderMain>
        </Header>

        {/* Services Grid */}

        <ServicesArea>
          <GridHeader>
            <GridLabel>
              {content.gridLabel}
            </GridLabel>

            <GridLine />
          </GridHeader>

          <AnimatedContent $visible={isVisible}>
            <ServicesGrid />
          </AnimatedContent>
        </ServicesArea>

      </ServicesContent>
    </ServicesSection>
  );
};

export default Services;
