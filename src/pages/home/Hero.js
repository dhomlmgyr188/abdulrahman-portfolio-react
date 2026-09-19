import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { Section } from "../../Components/layout/PageContainer";
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

const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  background: var(--color-background);
`;

const HeroContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-lg);

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
  max-width: 250px;
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

  const iconBgMap = {
    React: {
      bgColor: "var(--color-shadow-react)",
    },
    JavaScript: {
      bgColor: "var(--color-shadow-js)",
    },
    HTML: {
      bgColor: "var(--color-shadow-html)",
    },
    CSS: {
      bgColor: "var(--color-shadow-css)",
    },
    Git: {
      bgColor: "var(--color-shadow-git)",
    },
    SQL: {
      bgColor: "var(--color-shadow-sql)",
    },
    "REST API": {
      bgColor: "var(--color-shadow-rest_api)",
    },
    "Microsoft 365": {
      bgColor: "var(--color-shadow-ms365)",
    }
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText>
          <span style={{ color: "var(--color-secondary)" }}>
            {t("home:hero.availability_status")}
          </span>

          <PTitle>{t("home:hero.name")}</PTitle>

          <JobTitleComponent />

          <Desc style={{ maxWidth: "650px" }}>{t("home:hero.introduction")}</Desc>

          <TechStack>
            {techStack.map((tech) => {
              const bgIcon = iconBgMap[tech.icon];

              return <Tech key={tech.text} style={{ boxShadow: `inset -2px -1px 3px 2px ${bgIcon.bgColor}` }}>
                <TechIcon name={tech.icon} />
                {tech.text}
              </Tech>
            })}
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
        </HeroText>

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
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
