
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../ui/Button/Button";

import {
  FiArrowUpRight,
  FiExternalLink,
  FiCalendar,
} from "react-icons/fi";

/* =====================================
   Card Layout
===================================== */

const ProjCard = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  width: 100%;
  min-width: 0;
  height: 100%;

  gap: 18px;

  background: transparent;
  color: var(--color-text-primary);

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

/* =====================================
   Project Heading
===================================== */

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const ProjectTitle = styled.h3`
  margin: 0;

  color: var(--color-text-primary);

  font-size: clamp(1.12rem, 1.7vw, 1.35rem);
  font-weight: 700;
  line-height: 1.55;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 1.12rem;
  }
`;

const ProjectDate = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  width: fit-content;

  color: var(--color-text-secondary);

  font-size: 0.79rem;
  font-weight: 400;
  line-height: 1.5;

  & svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;

/* =====================================
   Description
===================================== */

const ProjectDescription = styled.p`
  margin: 0;

  color: var(--color-text-secondary);

  font-size: 0.91rem;
  line-height: 1.95;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 0.88rem;
    line-height: 1.85;
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

  if (!Array.isArray(content)) {
    return null;
  }

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

const DescriptionLink = styled.a`
  color: var(--color-primary);

  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;

  transition: color 0.2s ease;

  &:hover {
    color: var(--color-secondary, var(--color-primary));
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;

/* =====================================
   Technologies
===================================== */

const ProjectTechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 8px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

const ProjectTech = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  max-width: 100%;
  min-height: 30px;

  padding: 5px 11px;

  border: 1px solid var(--color-border);
  border-radius: 8px;

  background: var(--color-background);
  color: var(--color-text-secondary);

  font-size: 0.76rem;
  font-weight: 500;
  line-height: 1.4;

  overflow-wrap: anywhere;

  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--color-primary);

    border-color: color-mix(
      in srgb,
      var(--color-primary) 40%,
      var(--color-border)
    );
  }

  @media (max-width: 480px) {
    font-size: 0.74rem;
    padding: 5px 9px;
  }
`;

/* =====================================
   Actions
===================================== */

const ProjectActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  align-items: stretch;

  gap: 10px;
  width: 100%;

  margin-top: auto;
  padding-top: 17px;

  border-top: 1px solid var(--color-border);

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  width: 100%;
  min-width: 0;
  min-height: 44px;

  padding: 10px 12px;

  border-radius: 10px;

  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.5;

  text-align: center;
  white-space: normal;

  & svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    padding: 10px 8px;
    font-size: 0.82rem;
  }
`;

/* =====================================
   Component
===================================== */

const ProjectCard = ({
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

  return (
    <ProjCard>

      {/* Project Heading */}
      <ProjectHeader>
        <ProjectTitle>
          {title}
        </ProjectTitle>

        {date && (
          <ProjectDate>
            <FiCalendar aria-hidden="true" />
            <span dir="auto">{date}</span>
          </ProjectDate>
        )}
      </ProjectHeader>

      {/* Project Description */}
      <Description content={description} />

      {/* Technology Stack */}
      {technologies.length > 0 && (
        <ProjectTechStack aria-label="Technologies">
          {technologies.map((tech, index) => (
            <ProjectTech key={`${tech}-${index}`}>
              {tech}
            </ProjectTech>
          ))}
        </ProjectTechStack>
      )}

      {/* Project Actions */}
      <ProjectActions>

        <ProjectButton
          as={Link}
          to={toLink}
        >
          {value1}
          <FiArrowUpRight aria-hidden="true" />
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

      </ProjectActions>

    </ProjCard>
  );
};

export default ProjectCard;
