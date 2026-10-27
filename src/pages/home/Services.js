
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import ServicesGrid from "../../Components/services/ServiceGrid";

import {
  SectionSTitle,
  SectionLightDesc,
  SectionHeader,
} from "../../Components/ui/T";

/* Animations */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* Section */

const ServicesSection = styled(Section)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: auto;
  padding-block: clamp(55px, 7vw, 95px);

  background-color: var(--color-background-secondary);
  overflow: hidden;

  @media (max-width: 768px) {
    padding-block: 45px 60px;
  }
`;

/* Container */

const ServicesContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  gap: clamp(30px, 4vw, 50px);
`;

/* Header */

const ServicesHeading = styled(SectionHeader)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
  width: 100%;
  max-width: 750px;
  margin-inline: auto;

  text-align: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

/* Content Animation */

const AnimatedContent = styled.div`
  width: 100%;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(25px)"};

  animation: ${({ $visible }) => ($visible ? fadeUp : "none")}
    0.7s ease both;

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }
`;

/* Component */

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
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
    <ServicesSection id="services" ref={sectionRef}>
      <ServicesContent>
        <ServicesHeading>
          <SectionSTitle value="home:services.title" />

          <SectionLightDesc
            value="home:services.description"
          />
        </ServicesHeading>

        <AnimatedContent $visible={isVisible}>
          <ServicesGrid />
        </AnimatedContent>
      </ServicesContent>
    </ServicesSection>
  );
};

export default Services;
