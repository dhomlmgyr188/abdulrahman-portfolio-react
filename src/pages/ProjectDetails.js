
import { useEffect, useState } from "react";
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
   04 — PROJECT DATE
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
   06 — INTERACTIVE GALLERY

   Desktop:
   - Thumbnails on LEFT
   - Main image on RIGHT

   Same arrangement in Arabic and English.
========================================================= */

const Gallery = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 3fr);
  grid-template-areas: "thumbs main";
  gap: clamp(12px, 2vw, 20px);
  width: 100%;
  min-width: 0;
  direction: ltr;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "main"
      "thumbs";
  }
`;

const GalleryMain = styled.div`
  grid-area: main;
  min-width: 0;
`;

const GalleryThumbnails = styled.div`
  grid-area: thumbs;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  max-height: 520px;
  overflow-y: auto;
  scrollbar-width: thin;

  @media (max-width: 700px) {
    flex-direction: row;
    max-height: none;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 5px;
  }
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
  box-sizing: border-box;

  cursor: ${({ $main }) =>
    $main ? "zoom-in" : "pointer"};

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

const MainImageButton = styled(GalleryButton)`
  aspect-ratio: 16 / 10;
`;

const ThumbnailButton = styled(GalleryButton)`
  flex: 0 0 auto;
  aspect-ratio: 16 / 10;

  @media (max-width: 700px) {
    width: 125px;
  }

  @media (max-width: 420px) {
    width: 105px;
  }
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  padding: ${({ $small }) =>
    $small ? "6px" : "12px"};

  object-fit: contain;
  object-position: center;

  background-color: var(
    --color-background-secondary,
    #f4f5f7
  );

  box-sizing: border-box;
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
   07 — FEATURES / RESPONSIBILITIES
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
   11 — ADDITIONAL PROJECT INFORMATION
========================================================= */

const InformationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const InformationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  background-color: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);
  border-radius: 12px;
`;

const InformationLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
`;

const InformationValue = styled.span`
  color: var(--color-text-primary);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.8;
  overflow-wrap: anywhere;
`;

/* =========================================================
   12 — IMAGE RESOLVER
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

      if (
        Object.prototype.hasOwnProperty.call(
          projectImages,
          key
        )
      ) {
        return projectImages[key];
      }

      if (/^https?:\/\//i.test(key)) {
        return key;
      }

      return null;
    })
    .filter(Boolean);
};

/* =========================================================
   13 — INTERACTIVE GALLERY COMPONENT
========================================================= */

const InteractiveGallery = ({
  images,
  projectTitle,
  enlargeLabel,
  onEnlarge,
}) => {
  const [imageOrder, setImageOrder] = useState(() =>
    images.map((_, index) => index)
  );

  const imageSignature = JSON.stringify(images);

  useEffect(() => {
    setImageOrder(images.map((_, index) => index));
  }, [imageSignature]);

  if (images.length === 0) {
    return null;
  }

  const swapImages = (clickedSlot) => {
    setImageOrder((previous) => {
      const updated = [...previous];

      [updated[0], updated[clickedSlot]] = [
        updated[clickedSlot],
        updated[0],
      ];

      return updated;
    });
  };

  const mainImageIndex = imageOrder[0];
  const mainImageSrc = images[mainImageIndex];

  return (
    <Gallery>
      {/* THUMBNAILS — LEFT IN BOTH LANGUAGES */}

      {imageOrder.length > 1 && (
        <GalleryThumbnails>
          {imageOrder.slice(1).map((imageIndex, index) => {
            const slot = index + 1;

            return (
              <ThumbnailButton
                key={`thumbnail-slot-${slot}`}
                type="button"
                onClick={() => swapImages(slot)}
                aria-label={
                  `${projectTitle} - ${imageIndex + 1}`
                }
              >
                <GalleryImage
                  $small
                  src={images[imageIndex]}
                  alt={`${projectTitle} - ${imageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </ThumbnailButton>
            );
          })}
        </GalleryThumbnails>
      )}

      {/* MAIN IMAGE — RIGHT IN BOTH LANGUAGES */}

      <GalleryMain>
        <MainImageButton
          $main
          type="button"
          onClick={() =>
            onEnlarge({
              src: mainImageSrc,
              alt: `${projectTitle} - ${mainImageIndex + 1}`,
            })
          }
          aria-label={
            `${enlargeLabel}: ${projectTitle}`
          }
        >
          <GalleryImage
            src={mainImageSrc}
            alt={`${projectTitle} - ${mainImageIndex + 1}`}
            decoding="async"
          />

          <ZoomIndicator aria-hidden="true">
            <FiZoomIn />
          </ZoomIndicator>
        </MainImageButton>
      </GalleryMain>
    </Gallery>
  );
};

/* =========================================================
   14 — PROJECT DETAILS COMPONENT
========================================================= */

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { t, i18n } = useTranslation("projects");

  const [selectedImage, setSelectedImage] = useState(null);

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic = language.startsWith("ar");

  const BackArrow = isArabic
    ? FiArrowRight
    : FiArrowLeft;

  const projects = t("items", {
    returnObjects: true,
    defaultValue: [],
  });

  const project = Array.isArray(projects)
    ? projects.find((item) => item.id === projectId)
    : undefined;

  const labels = {
    notFound: t("details.notFound"),
    notFoundDescription: t("details.notFoundDescription"),
    back: t("details.backToProjects"),

    projectName: t("details.projectName"),
    projectType: t("details.projectType"),
    developedBy: t("details.developedBy"),
    developmentArea: t("details.developmentArea"),
    date: t("details.date"),
    overview: t("details.overview"),
    features: t("details.features"),
    responsibilities: t("details.responsibilities"),
    technologies: t("details.technologies"),
    liveDemo: t("details.liveDemo"),
    sourceCode: t("details.sourceCode"),
    enlarge: t("details.enlargeImage"),
  };

  /* -------------------------------------------------------
     NOT FOUND — BREADCRUMB UNCHANGED
  ------------------------------------------------------- */

  if (!project) {
    return (
      <DetailsPage dir={isArabic ? "rtl" : "ltr"}>
        <PageHeader>
          <BreadCrumb value="projects" />
        </PageHeader>

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

  const images = resolveProjectImages(
    project.project_img
  );

  const developers = Array.isArray(project.developedBy)
    ? project.developedBy.join(isArabic ? "، " : ", ")
    : project.developedBy;

  const information = [
    {
      label: labels.projectName,
      value: project.title,
    },
    {
      label: labels.projectType,
      value: project.projectType,
    },
    {
      label: labels.developedBy,
      value: developers,
    },
    {
      label: labels.developmentArea,
      value: project.developmentArea,
    },
  ].filter((item) => item.value);

  return (
    <DetailsPage dir={isArabic ? "rtl" : "ltr"}>
      {/* BREADCRUMB — UNCHANGED */}

      <PageHeader>
        <BreadCrumb
          value="projects"
          projectTitle={project.title}
        />
      </PageHeader>

      <Content>
        {/* PROJECT GALLERY — NO HEADING */}

        {images.length > 0 && (
          <Section>
            <InteractiveGallery
              key={project.id}
              images={images}
              projectTitle={project.title}
              enlargeLabel={labels.enlarge}
              onEnlarge={setSelectedImage}
            />
          </Section>
        )}

        {/* COMPLETION DATE — BELOW IMAGES */}

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

        {/* PROJECT INFORMATION */}

        {information.length > 0 && (
          <InformationGrid>
            {information.map((item) => (
              <InformationCard key={item.label}>
                <InformationLabel>
                  {item.label}
                </InformationLabel>

                <InformationValue>
                  {item.value}
                </InformationValue>
              </InformationCard>
            ))}
          </InformationGrid>
        )}

        {/* PROJECT DESCRIPTION */}

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

        {/* KEY FEATURES */}

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
                      <FiCheckCircle aria-hidden="true" />
                      <span>{feature}</span>
                    </Feature>
                  )
                )}
              </FeaturesList>
            </Section>
          )}

        {/* MY RESPONSIBILITIES */}

        {Array.isArray(project.responsibilities) &&
          project.responsibilities.length > 0 && (
            <Section aria-label={labels.responsibilities}>
              <SectionTitle>
                {labels.responsibilities}
              </SectionTitle>

              <FeaturesList>
                {project.responsibilities.map(
                  (responsibility, index) => (
                    <Feature
                      key={`${project.id}-responsibility-${index}`}
                    >
                      <FiCheckCircle aria-hidden="true" />
                      <span>{responsibility}</span>
                    </Feature>
                  )
                )}
              </FeaturesList>
            </Section>
          )}

        {/* TECHNOLOGIES */}

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

        {/* PROJECT LINKS — ORIGINAL BUTTONS */}

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

                  <FiExternalLink aria-hidden="true" />
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

        {/* BACK TO PROJECTS — UNCHANGED */}

        <BackLink to="/projects">
          <BackArrow aria-hidden="true" />
          {labels.back}
        </BackLink>
      </Content>

      {/* ORIGINAL IMAGE MODAL */}

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
