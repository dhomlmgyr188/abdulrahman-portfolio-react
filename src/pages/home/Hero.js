import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Button from "../../Components/ui/Button/Button";
import { Link } from "react-router-dom";
import Statistics, { Statistic, AnimatedNumber } from "./Statistics";
import { TechStack, Tech, PTitle, Desc } from "../../Components/ui/T";
import { Actions } from "../../Components/ui/Button/Button";
import abdulrahmanPhoto from "../../assets/images/me.png";
import TechIcon from "./TechIcon";
const myCV = `${process.env.PUBLIC_URL}/docs/cv.pdf`;

const HeroSection = styled.section`
  padding: var(--space-3xl) 0;
  display: flex;
  align-items: center;
  background: var(--color-background);
`;

const HeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const HeroContent = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
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


  @media (max-width: 768px) {
    max-width: 200px;
    border-radius: 50%;
  }
`;

const JobTitleComponent = () => {
  const { t } = useTranslation();

  const jobTitles = t("home:hero.job_titles", {
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

  const techStack = t("home:hero.tech_stack", {
    returnObjects: true,
  });

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <span style={{ color: "var(--color-secondary)" }}>
            {t("home:hero.availability_status")}
          </span>

          <PTitle>{t("home:hero.name")}</PTitle>

          <JobTitleComponent />

          <Desc style={{ maxWidth: "650px" }}>{t("home:hero.introduction")}</Desc>

          <TechStack>
            {techStack.map((tech) => (
              <Tech key={tech.text}>
                <TechIcon name={tech.icon} />
                {tech.text}
              </Tech>
            ))}
          </TechStack>

          <Actions>
            <Button as={Link} to="/contact">
              {t("buttons.contact")}
            </Button>

            <Button
              as="a"
              $variant="secondary"
              href={myCV}
              rel="noopener noreferrer"
            >
              {t("buttons.cv")}
            </Button>
          </Actions>
        </HeroContent>

        <HeroFigure>
          <Statistics>
            <HeroImage src={abdulrahmanPhoto} alt={t("home:hero.profileAlt")} />

            <Statistic className="top">
              <AnimatedNumber value={5} />
              <span>{t("home:hero.statistic.projects")}</span>
            </Statistic>

            <Statistic className="left">
              <AnimatedNumber value={2} />
              <span>{t("home:hero.statistic.years")}</span>
            </Statistic>

            <Statistic className="right">
              <AnimatedNumber value={10} />
              <span>{t("home:hero.statistic.technologies")}</span>
            </Statistic>
          </Statistics>
        </HeroFigure>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
