
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";

import {
  FiArrowUpLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiCalendar,
} from "react-icons/fi";

/* =====================================
   Project Card
===================================== */

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 27px);

  width: 100%;
  min-width: 0;
  padding: clamp(22px, 3.5vw, 36px);

  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 18px;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-primary);
      box-shadow: var(--shadow-md);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 600px) {
    padding: 21px 19px;
    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

/* =====================================
   Card Header
===================================== */

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(14px, 2.5vw, 24px);
`;

const ProjectNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background);

  color: var(--color-text-secondary);
  font-size: 1rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;

  @media (max-width: 480px) {
    width: 41px;
    height: 41px;
    border-radius: 10px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  min-width: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 7px;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 800;
  line-height: 1.55;
  overflow-wrap: anywhere;
`;

const ProjectDate = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;

  color: var(--color-text-secondary);
  font-size: 0.82rem;
  line-height: 1.5;

  svg {
    width: 15px;
    height: 15px;
  }
`;

/* =====================================
   Project Description
===================================== */

const ProjectDescription = styled.p`
  margin: 0;
  max-width: 850px;

  color: var(--color-text-secondary);
  font-size: clamp(0.9rem, 1.4vw, 0.98rem);
  line-height: 1.95;
  overflow-wrap: anywhere;
`;

const DescriptionLink = styled.a`
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: var(--color-primary-dark);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;

const Description = ({ content }) => {
  if (typeof content === "string") {
    return (
      <ProjectDescription>
        {content}
      </ProjectDescription>
    );
  }

  if (!Array.isArray(content)) return null;

  return (
    <ProjectDescription>
      {content.map((item, index) => {
        if (typeof item === "string") {
          return <span key={index}>{item}</span>;
        }

        if (item?.type === "link" && item.href) {
          return (
            <DescriptionLink
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </DescriptionLink>
          );
        }

        return (
          <span key={index}>
            {item?.value ?? item?.text ?? ""}
          </span>
        );
      })}
    </ProjectDescription>
  );
};

/* =====================================
   Technologies
===================================== */

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 9px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

const TechItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;
  padding: 6px 12px;

  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background);

  color: var(--color-text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.4;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-text-primary);
  }
`;

/* =====================================
   Card Footer
===================================== */

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

/* =====================================
   Unified Project Buttons
===================================== */

const ProjectButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-width: 170px;
  min-height: 48px;
  padding: 12px 24px;

  border-radius: 12px;

  font-size: 0.96rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  /*
    Secondary button:
    Transparent live preview
  */

  ${({ $variant }) =>
    $variant === "secondary" &&
    `
      background: transparent;
      color: var(--color-text-primary);
      border: 1px solid var(--color-border);

      &:hover {
        background: var(--color-background-tertiary);
        color: var(--color-text-primary);
        border-color: var(--color-primary);
      }

      &:active {
        background: var(--color-background-tertiary);
      }
    `}

  & svg {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    flex: 1 1 140px;
    min-width: 0;
    min-height: 48px;
    padding: 12px 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =====================================
   Direction Arrow RTL / LTR
===================================== */

const DirectionArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .ltr-arrow {
    display: none;
  }

  [dir="ltr"] & .rtl-arrow {
    display: none;
  }

  [dir="ltr"] & .ltr-arrow {
    display: block;
  }
`;

/* =====================================
   Project Card Component
===================================== */

const ProjectCard = ({
  index = 0,
  title,
  date,
  description,
  techStack,
  toLink,
  value1,
  value2,
  toHref,
}) => {
  const technologies = Array.isArray(techStack)
    ? techStack
    : [];

  const hasDemo =
    typeof toHref === "string" &&
    toHref.trim().length > 0 &&
    toHref !== "#";

  const number = String(index + 1).padStart(2, "0");

  return (
    <Card>
      {/* Project Header */}

      <CardHeader>
        <ProjectNumber aria-hidden="true">
          {number}
        </ProjectNumber>

        <HeaderContent>
          <TitleRow>
            <ProjectTitle>
              {title}
            </ProjectTitle>

            {date && (
              <ProjectDate>
                <FiCalendar aria-hidden="true" />
                <span dir="auto">{date}</span>
              </ProjectDate>
            )}
          </TitleRow>

          <Description content={description} />
        </HeaderContent>
      </CardHeader>

      {/* Technologies */}

      {technologies.length > 0 && (
        <TechList aria-label="Technologies">
          {technologies.map((tech, techIndex) => (
            <TechItem
              key={`${tech}-${techIndex}`}
            >
              {tech}
            </TechItem>
          ))}
        </TechList>
      )}

      {/* Project Actions */}

      <CardFooter>
        <ProjectButton
          as={Link}
          to={toLink}
        >
          {value1}

          <DirectionArrow>
            <FiArrowUpLeft
              className="rtl-arrow"
              aria-hidden="true"
            />

            <FiArrowUpRight
              className="ltr-arrow"
              aria-hidden="true"
            />
          </DirectionArrow>
        </ProjectButton>

        {hasDemo && (
          <ProjectButton
            as="a"
            href={toHref}
            target="_blank"
            rel="noopener noreferrer"
            $variant="secondary"
          >
            {value2}

            <FiExternalLink aria-hidden="true" />
          </ProjectButton>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
