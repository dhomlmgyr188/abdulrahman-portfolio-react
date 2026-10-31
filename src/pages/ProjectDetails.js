
import { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiZoomIn,
} from "react-icons/fi";

import BreadCrumb from "../Components/ui/Breadcrumb";
import Container from "../Components/layout/PageContainer";

import { PageHeader } from "../Components/ui/T";

import Button, { Actions } from "../Components/ui/Button/Button";
import { ImgModal } from "../Components/ui/Modal";

import projectImages from "../Components/projects/projectImages";

/* =========================================================
   PROJECT DETAILS — MODERN PROFESSIONAL

   Design System:
   - Ocean / Orca
   - Responsive layout
   - RTL / LTR support

   Preserved:
   - Route parameter: projectId
   - projects translation namespace
   - Project information
   - Gallery and image lightbox
   - Overview
   - Features
   - Technologies
   - Demo and GitHub links
   - Not-found state
   - Shared buttons
========================================================= */

/* =========================================================
   01 — PAGE WRAPPER
========================================================= */

const DetailsPage = styled.main`
  width: 100%;
  min-width: 0;

  background-color: var(--color-background);
  color: var(--color-text-primary);

  overflow-x: clip;
`;

/* =========================================================
   02 — PAGE CONTENT
========================================================= */

const Content = styled(Container)`
  display: flex;
  flex-direction: column;

  gap: clamp(28px, 4vw, 44px);

  padding-block:
    clamp(36px, 5vw, 60px)
    clamp(70px, 8vw, 110px);
`;

/* =========================================================
   03 — PROJECT HEADING
========================================================= */

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;

  width: 100%;
  min-width: 0;
`;

const Title = styled.h1`
  margin: 0;

  color: var(
    --color-heading,
    var(--color-text-primary)
  );

  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.45;

  overflow-wrap: anywhere;
`;

const Description = styled.p`
  max-width: 850px;

  margin: 0;

  color: var(--color-text-secondary);

  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  font-weight: 400;
  line-height: 1.95;

  overflow-wrap: anywhere;
`;

/* =========================================================
   04 — PROJECT METADATA
========================================================= */

const ProjectMetadata = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 12px;
`;

const DateText = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  padding: 9px 13px;

  color: var(--color-text-secondary);

  background-color: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);

  border-radius: 10px;

  font-size: 0.9rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    color: var(--color-primary);
  }
`;

/* =========================================================
   05 — CONTENT SECTIONS
========================================================= */

const Section = styled.section`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;
  min-width: 0;
`;

const SectionTitle = styled.h2`
  margin: 0;

  padding-block-end: 14px;

  color: var(
    --color-heading,
    var(--color-text-primary)
  );

  border-block-end: 1px solid var(--color-border);

  font-size: clamp(1.2rem, 2.4vw, 1.65rem);
  font-weight: 800;
  line-height: 1.5;
`;

/* =========================================================
   06 — PROJECT GALLERY
========================================================= */

const Gallery = styled.div`
  display: grid;

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 320px), 1fr)
  );

  gap: clamp(14px, 2vw, 22px);

  width: 100%;
  min-width: 0;
`;

const GalleryButton = styled.button`
  position: relative;

  display: block;

  width: 100%;
  min-width: 0;

  padding: 0;

  overflow: hidden;

  background-color: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);

  border-radius: var(--radius-card, 14px);

  box-shadow: var(--shadow-sm, none);

  cursor: zoom-in;

  box-sizing: border-box;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--color-primary);
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const GalleryImage = styled.img`
  display: block;

  width: 100%;
  height: auto;

  aspect-ratio: 16 / 10;

  padding: 12px;

  object-fit: contain;
  object-position: center;

  background-color: var(
    --color-background-secondary,
    #f4f5f7
  );

  box-sizing: border-box;

  @media (max-width: 600px) {
    aspect-ratio: 4 / 3;
    padding: 8px;
  }
`;

const ZoomIndicator = styled.span`
  position: absolute;

  inset-block-end: 12px;
  inset-inline-end: 12px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  background-color: var(--color-background);

  color: var(--color-primary);

  border: 1px solid var(--color-border);

  border-radius: 9px;

  box-shadow: var(--shadow-sm);

  svg {
    width: 17px;
    height: 17px;
  }
`;

/* =========================================================
   07 — FEATURES
========================================================= */

const FeaturesList = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px 22px;

  margin: 0;
  padding: 0;

  list-style: none;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;

  gap: 12px;

  min-width: 0;

  padding: 15px;

  color: var(--color-text-secondary);

  background-color: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);

  border-radius: 12px;

  font-size: 0.95rem;
  line-height: 1.85;

  box-sizing: border-box;

  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;

    width: 19px;
    height: 19px;

    margin-block-start: 4px;

    color: var(--color-primary);
  }
`;

/* =========================================================
   08 — TECHNOLOGIES
========================================================= */

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

const Tech = styled.li`
  display: inline-flex;
  align-items: center;

  min-height: 38px;

  padding: 8px 14px;

  background-color: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  color: var(--color-text-primary);

  border: 1px solid var(--color-border);

  border-radius: 9px;

  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.5;
`;

/* =========================================================
   09 — PROJECT ACTIONS
========================================================= */

const ProjectActions = styled(Actions)`
  margin-block-start: 4px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;

    > * {
      width: 100%;
    }
  }
`;

const ActionContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  svg {
    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }
`;

/* =========================================================
   10 — BACK LINK
========================================================= */

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  align-self: flex-start;

  min-height: 44px;

  color: var(--color-primary);

  font-size: 0.95rem;
  font-weight: 700;

  text-decoration: none;

  transition:
    gap 0.2s ease,
    color 0.2s ease;

  svg {
    width: 18px;
    height: 18px;

    flex-shrink: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);

    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   11 — IMAGE RESOLVER
========================================================= */

const resolveProjectImages = (value) => {
  const keys = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? [value]
      : [];

  return keys
    .map((key) => {
      if (typeof key !== "string") {
        return null;
      }

      // Known project images from projectImages.js
      if (
        Object.prototype.hasOwnProperty.call(
          projectImages,
          key
        )
      ) {
        return projectImages[key];
      }

      // Allow explicit external image URLs
      if (/^https?:\/\//i.test(key)) {
        return key;
      }

      return null;
    })
    .filter(Boolean);
};

/* =========================================================
   12 — PROJECT DETAILS COMPONENT
========================================================= */

const ProjectDetails = () => {
  const { projectId } = useParams();

  const { t, i18n } = useTranslation("projects");

  const [selectedImage, setSelectedImage] = useState(null);

  /* -------------------------------------------------------
     LANGUAGE
  ------------------------------------------------------- */

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic = language.startsWith("ar");

  const BackArrow = isArabic
    ? FiArrowRight
    : FiArrowLeft;

  /* -------------------------------------------------------
     PROJECT DATA
  ------------------------------------------------------- */

  const projects = t("items", {
    returnObjects: true,
    defaultValue: [],
  });

  const project = Array.isArray(projects)
    ? projects.find((item) => item.id === projectId)
    : undefined;

  /* -------------------------------------------------------
     TRANSLATIONS
  ------------------------------------------------------- */

  const labels = {
    notFound: t("details.notFound"),
    notFoundDescription: t("details.notFoundDescription"),
    back: t("details.backToProjects"),
    date: t("details.date"),
    gallery: t("details.gallery"),
    overview: t("details.overview"),
    features: t("details.features"),
    technologies: t("details.technologies"),
    liveDemo: t("details.liveDemo"),
    sourceCode: t("details.sourceCode"),
    enlarge: isArabic
      ? "تكبير صورة المشروع"
      : "Enlarge project image",
  };

  /* -------------------------------------------------------
     NOT FOUND
  ------------------------------------------------------- */

  if (!project) {
    return (
      <DetailsPage dir={isArabic ? "rtl" : "ltr"}>
        {/* BREADCRUMB ONLY */}

        <PageHeader>
          <BreadCrumb value="projects" />
        </PageHeader>

        {/* NOT FOUND CONTENT */}

        <Content>
          <HeaderContent>
            <Title>{labels.notFound}</Title>

            <Description>
              {labels.notFoundDescription}
            </Description>
          </HeaderContent>

          <BackLink to="/projects">
            <BackArrow aria-hidden="true" />
            {labels.back}
          </BackLink>
        </Content>
      </DetailsPage>
    );
  }

  /* -------------------------------------------------------
     PROJECT IMAGES
  ------------------------------------------------------- */

  const images = resolveProjectImages(
    project.project_img
  );

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <DetailsPage dir={isArabic ? "rtl" : "ltr"}>
      {/* =====================================
          PAGE HEADER — BREADCRUMB ONLY
      ===================================== */}

      <PageHeader>
        <BreadCrumb
          value="projects"
          projectTitle={project.title}
        />
      </PageHeader>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <Content>
        {/* ===================================
            PROJECT TITLE AND DESCRIPTION
        =================================== */}

        <HeaderContent>
          <Title>{project.title}</Title>

          {project.shortDescription && (
            <Description>
              {project.shortDescription}
            </Description>
          )}
        </HeaderContent>

        {/* ===================================
            PROJECT DATE
        =================================== */}

        {project.date && (
          <ProjectMetadata>
            <DateText>
              <FiCalendar aria-hidden="true" />

              <span>{labels.date}:</span>

              <span dir="ltr">
                {project.date}
              </span>
            </DateText>
          </ProjectMetadata>
        )}

        {/* ===================================
            PROJECT GALLERY
        =================================== */}

        {images.length > 0 && (
          <Section aria-label={labels.gallery}>
            <SectionTitle>
              {labels.gallery}
            </SectionTitle>

            <Gallery>
              {images.map((src, index) => {
                const imageAlt =
                  `${project.title} - ${index + 1}`;

                return (
                  <GalleryButton
                    key={`${project.id}-${index}`}
                    type="button"
                    onClick={() =>
                      setSelectedImage({
                        src,
                        alt: imageAlt,
                      })
                    }
                    aria-label={
                      `${labels.enlarge}: ${imageAlt}`
                    }
                  >
                    <GalleryImage
                      src={src}
                      alt={imageAlt}
                      loading="lazy"
                      decoding="async"
                    />

                    <ZoomIndicator aria-hidden="true">
                      <FiZoomIn />
                    </ZoomIndicator>
                  </GalleryButton>
                );
              })}
            </Gallery>
          </Section>
        )}

        {/* ===================================
            PROJECT OVERVIEW
        =================================== */}

        {project.overview && (
          <Section aria-label={labels.overview}>
            <SectionTitle>
              {labels.overview}
            </SectionTitle>

            <Description>
              {project.overview}
            </Description>
          </Section>
        )}

        {/* ===================================
            PROJECT FEATURES
        =================================== */}

        {Array.isArray(project.features) &&
          project.features.length > 0 && (
            <Section aria-label={labels.features}>
              <SectionTitle>
                {labels.features}
              </SectionTitle>

              <FeaturesList>
                {project.features.map(
                  (feature, index) => (
                    <Feature
                      key={`${project.id}-feature-${index}`}
                    >
                      <FiCheckCircle
                        aria-hidden="true"
                      />

                      <span>{feature}</span>
                    </Feature>
                  )
                )}
              </FeaturesList>
            </Section>
          )}

        {/* ===================================
            TECHNOLOGIES
        =================================== */}

        {Array.isArray(project.tech_stack) &&
          project.tech_stack.length > 0 && (
            <Section aria-label={labels.technologies}>
              <SectionTitle>
                {labels.technologies}
              </SectionTitle>

              <TechList>
                {project.tech_stack.map(
                  (tech, index) => (
                    <Tech key={`${tech}-${index}`}>
                      {tech}
                    </Tech>
                  )
                )}
              </TechList>
            </Section>
          )}

        {/* ===================================
            PROJECT LINKS
        =================================== */}

        {(project.demo || project.github) && (
          <ProjectActions>
            {project.demo && (
              <Button
                as="a"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                $variant="primary"
              >
                <ActionContent>
                  {labels.liveDemo}

                  <FiExternalLink
                    aria-hidden="true"
                  />
                </ActionContent>
              </Button>
            )}

            {project.github && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                $variant="secondary"
              >
                <ActionContent>
                  {labels.sourceCode}

                  <FiGithub aria-hidden="true" />
                </ActionContent>
              </Button>
            )}
          </ProjectActions>
        )}

        {/* ===================================
            BACK TO PROJECTS
        =================================== */}

        <BackLink to="/projects">
          <BackArrow aria-hidden="true" />

          {labels.back}
        </BackLink>
      </Content>

      {/* =====================================
          IMAGE LIGHTBOX
      ===================================== */}

      <ImgModal
        ImgSource={selectedImage?.src}
        ImgAlt={selectedImage?.alt || ""}
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
      />
    </DetailsPage>
  );
};

export default ProjectDetails;
