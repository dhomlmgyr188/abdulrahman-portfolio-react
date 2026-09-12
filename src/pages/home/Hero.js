import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Button from "../../Components/ui/Button/Button";
import { Link } from "react-router-dom";
import Statistics, { Statistic, AnimatedNumber } from "./Statistics";
import { TechStack, Tech, PTitle, Desc } from "../../Components/ui/T";
import { Actions } from "../../Components/ui/Button/Acttions";

const HeroSection = styled.section`
  padding: var(--space-3xl) 0;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-sm);
`;

const HeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);
`;

const HeroContent = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
`;

const HeroFigure = styled.figure`
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  object-fit: cover;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-secondary);
  box-shadow: var(--shadow-sm);
`;

const JobTitleComponent = () => {
  const { t } = useTranslation();

  const jobTitles = t("hero.job_titles", {
    returnObjects: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [jobTitles.length]);

  return <strong>{jobTitles[currentIndex]}</strong>;
};

const Hero = () => {
  const { t } = useTranslation();

  const techStack = t("hero.tech_stack", {
    returnObjects: true,
  });

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <span style={{ color: "var(--color-secondary)" }}>
            {t("hero.availability_status")}
          </span>

          <PTitle>{t("hero.name")}</PTitle>

          <JobTitleComponent />

          <Desc style={{maxWidth: "650px"}}>{t("hero.introduction")}</Desc>

          <TechStack>
            {techStack.map((tech) => (
              <Tech key={tech}>{tech}</Tech>
            ))}
          </TechStack>

          <Actions>
            <Button as={Link} to="/contact">
              {t("hero.buttons.contact")}
            </Button>

            <Button
              as="a"
              $variant="secondary"
              href={t("hero.buttons.my_resume.link")}
              rel="noopener noreferrer"
            >
              {t("hero.buttons.my_resume.text")}
            </Button>
          </Actions>
        </HeroContent>

        <HeroFigure>
          <Statistics>
            <HeroImage src={t("hero.image.link")} alt={t("hero.image.alt")} />

            <Statistic className="top">
              <AnimatedNumber value={5} />
              <span>{t("hero.statistic.projects")}</span>
            </Statistic>

            <Statistic className="left">
              <AnimatedNumber value={2} />
              <span>{t("hero.statistic.years")}</span>
            </Statistic>

            <Statistic className="right">
              <AnimatedNumber value={10} />
              <span>{t("hero.statistic.technologies")}</span>
            </Statistic>
          </Statistics>
        </HeroFigure>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
