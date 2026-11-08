
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
  FiInfo,
  FiBookOpen,
  FiLayers,
  FiClipboard,
  FiCode,
} from "react-icons/fi";

import BreadCrumb from "../Components/ui/Breadcrumb";
import Container from "../Components/layout/PageContainer";
import { PageHeader } from "../Components/ui/T";
import Button, { Actions } from "../Components/ui/Button/Button";
import { ImgModal } from "../Components/ui/Modal";
import projectImages from "../Components/projects/projectImages";

/* =========================================
   PAGE LAYOUT
========================================= */

const DetailsPage = styled.main`
  width: 100%;
  min-width: 0;
  overflow-x: clip;
  background: var(--color-background);
  color: var(--color-text-primary);
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3.5vw, 38px);

  padding-block:
    clamp(36px, 5vw, 60px)
    clamp(70px, 8vw, 110px);
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
`;

const Title = styled.h1`
  margin: 0;
  color: var(--color-heading, var(--color-text-primary));
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.45;
  overflow-wrap: anywhere;
`;

const Description = styled.p`
  max-width: 950px;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 2;
  overflow-wrap: anywhere;
  white-space: pre-line;
`;

/* =========================================
   INDEPENDENT CONTENT SECTIONS
========================================= */

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;

  width: 100%;
  min-width: 0;

  padding: clamp(20px, 3vw, 32px);

  background: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);
  border-radius: 18px;
  box-shadow: var(--shadow-sm, none);

  @media (max-width: 600px) {
    gap: 18px;
    padding: 20px 16px;
    border-radius: 14px;
  }
`;

const GallerySection = styled.section`
  width: 100%;
  min-width: 0;
`;

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  min-width: 0;
  padding-block-end: 18px;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 600px) {
    gap: 11px;
    padding-block-end: 15px;
  }
`;

const SectionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 44px;
  height: 44px;

  color: var(--color-primary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 12px;

  svg {
    width: 21px;
    height: 21px;
  }

  @media (max-width: 600px) {
    width: 38px;
    height: 38px;

    svg {
      width: 19px;
      height: 19px;
    }
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  min-width: 0;

  color: var(--color-heading, var(--color-text-primary));
  font-size: clamp(1.2rem, 2.4vw, 1.55rem);
  font-weight: 800;
  line-height: 1.55;
  overflow-wrap: anywhere;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

const SectionDescription = styled.p`
  margin: 0;

  color: var(--color-text-primary);
  font-size: clamp(0.95rem, 1.4vw, 1.025rem);
  font-weight: 400;
  line-height: 2.05;

  overflow-wrap: anywhere;
  white-space: pre-line;
`;

/* =========================================
   PROJECT DATE
========================================= */

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

  background: var(
    --color-card-background,
    var(--color-background-secondary)
  );

  border: 1px solid var(--color-border);
  border-radius: 10px;
  font-size: 0.9rem;

  svg {
    flex-shrink: 0;
    color: var(--color-primary);
  }
`;

/* =========================================
   PROJECT INFORMATION
========================================= */

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

  background: var(
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

/* =========================================
   IMAGE GALLERY
========================================= */

const Gallery = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr) minmax(0, 3fr);
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

  background: var(
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

  background: var(--color-background-secondary);
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

  background: var(--color-background);
  color: var(--color-primary);

  border: 1px solid var(--color-border);
  border-radius: 9px;

  svg {
    width: 17px;
    height: 17px;
  }
`;

/* =========================================
   FEATURES
========================================= */

const FeatureGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
`;

const FeatureGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  min-width: 0;
  padding-block: 23px;

  border-bottom: 1px solid var(--color-border);

  &:first-child {
    padding-block-start: 0;
  }

  &:last-child {
    padding-block-end: 0;
    border-bottom: none;
  }
`;

const GroupHeading = styled.h3`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  margin: 0;
  padding-inline-start: 13px;

  color: var(--color-heading, var(--color-text-primary));
  border-inline-start: 3px solid var(--color-primary);

  font-size: clamp(1rem, 1.8vw, 1.12rem);
  font-weight: 800;
  line-height: 1.7;
  overflow-wrap: anywhere;
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  min-width: 0;

  color: var(--color-text-primary);
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.95;
  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
    width: 17px;
    height: 17px;
    margin-block-start: 8px;
    color: var(--color-primary);
  }

  > span {
    flex: 1;
    min-width: 0;
  }
`;

const PlannedLabel = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 4px 9px;

  color: var(--color-primary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 7px;

  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.5;
`;

/* =========================================
   RESPONSIBILITIES
========================================= */

const ResponsibilitiesList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0;

  margin: 0;
  padding: 0;
  list-style: none;

  counter-reset: responsibility;
`;

const ResponsibilityItem = styled.li`
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  align-items: start;
  gap: 15px;

  min-width: 0;
  padding-block: 16px;

  border-bottom: 1px solid var(--color-border);
  counter-increment: responsibility;

  &:first-child {
    padding-block-start: 0;
  }

  &:last-child {
    padding-block-end: 0;
    border-bottom: none;
  }

  &::before {
    content: counter(
      responsibility,
      decimal-leading-zero
    );

    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    color: var(--color-primary);
    background: var(--color-background-secondary);

    border: 1px solid var(--color-border);
    border-radius: 10px;

    font-size: 0.82rem;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    direction: ltr;
  }

  > span {
    min-width: 0;
    padding-block-start: 3px;

    color: var(--color-text-primary);
    font-size: 0.95rem;
    line-height: 1.95;
    overflow-wrap: anywhere;
  }

  @media (max-width: 600px) {
    grid-template-columns: 32px minmax(0, 1fr);
    gap: 11px;

    &::before {
      width: 32px;
      height: 32px;
    }
  }
`;

/* =========================================
   NOTES
========================================= */

const Notice = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  margin: 0;
  padding: 14px 16px;

  color: var(--color-text-secondary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 10px;

  font-size: 0.9rem;
  line-height: 1.9;
  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
    width: 17px;
    height: 17px;
    margin-block-start: 5px;
    color: var(--color-primary);
  }
`;

/* =========================================
   TECHNOLOGIES
========================================= */

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

const Tech = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
  padding: 9px 15px;

  color: var(--color-text-primary);
  background: var(--color-background-secondary);

  border: 1px solid var(--color-border);
  border-radius: 10px;

  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================
   PROJECT ACTIONS
========================================= */

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

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

/* =========================================
   SECTION HEADER COMPONENT
========================================= */

const ContentSection = ({
  title,
  icon: Icon,
  children,
}) => {
  return (
    <Section aria-label={title}>
      <SectionHeading>
        <SectionIcon aria-hidden="true">
          <Icon />
        </SectionIcon>

        <SectionTitle>{title}</SectionTitle>
      </SectionHeading>

      <SectionBody>{children}</SectionBody>
    </Section>
  );
};

/* =========================================
   IMAGE RESOLVER
========================================= */

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

/* =========================================
   INTERACTIVE GALLERY
========================================= */

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
      {imageOrder.length > 1 && (
        <GalleryThumbnails>
          {imageOrder.slice(1).map((imageIndex, index) => {
            const slot = index + 1;

            return (
              <ThumbnailButton
                key={`thumbnail-slot-${slot}`}
                type="button"
                onClick={() => swapImages(slot)}
                aria-label={`${projectTitle} - ${imageIndex + 1}`}
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
          aria-label={`${enlargeLabel}: ${projectTitle}`}
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

/* =========================================
   FEATURE LIST COMPONENT
========================================= */

const FeatureItems = ({
  items,
  projectId,
  prefix,
}) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <FeaturesList>
      {items.map((item, index) => (
        <Feature
          key={`${projectId}-${prefix}-${index}`}
        >
          <FiCheckCircle aria-hidden="true" />

          <span>
            {typeof item === "string"
              ? item
              : item?.text || item?.description || ""}
          </span>
        </Feature>
      ))}
    </FeaturesList>
  );
};

/* =========================================
   RESPONSIBILITIES COMPONENT
========================================= */

const ResponsibilityItems = ({
  items,
  projectId,
}) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <ResponsibilitiesList>
      {items.map((item, index) => (
        <ResponsibilityItem
          key={`${projectId}-responsibility-${index}`}
        >
          <span>
            {typeof item === "string"
              ? item
              : item?.text || item?.description || ""}
          </span>
        </ResponsibilityItem>
      ))}
    </ResponsibilitiesList>
  );
};

/* =========================================
   PROJECT DETAILS COMPONENT
========================================= */

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { t, i18n } = useTranslation("projects");

  const [selectedImage, setSelectedImage] =
    useState(null);

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic = language
    .toLowerCase()
    .startsWith("ar");

  const BackArrow = isArabic
    ? FiArrowRight
    : FiArrowLeft;

  /* =====================================
     PROJECT DATA
  ===================================== */

  const projects = t("items", {
    returnObjects: true,
    defaultValue: [],
  });

  const project = Array.isArray(projects)
    ? projects.find((item) => item.id === projectId)
    : undefined;

  /* =====================================
     TRANSLATED LABELS
  ===================================== */

  const labels = {
    notFound: t("details.notFound", {
      defaultValue: isArabic
        ? "المشروع غير موجود"
        : "Project Not Found",
    }),

    notFoundDescription: t(
      "details.notFoundDescription",
      {
        defaultValue: isArabic
          ? "تعذر العثور على المشروع المطلوب."
          : "The requested project could not be found.",
      }
    ),

    back: t("details.backToProjects", {
      defaultValue: isArabic
        ? "العودة إلى المشاريع"
        : "Back to Projects",
    }),

    projectName: t("details.projectName", {
      defaultValue: isArabic
        ? "اسم المشروع"
        : "Project Name",
    }),

    projectType: t("details.projectType", {
      defaultValue: isArabic
        ? "نوع المشروع"
        : "Project Type",
    }),

    developedBy: t("details.developedBy", {
      defaultValue: isArabic
        ? "مطورو المشروع"
        : "Developed By",
    }),

    developmentArea: t("details.developmentArea", {
      defaultValue: isArabic
        ? "مجال المشروع"
        : "Development Area",
    }),

    date: t("details.date", {
      defaultValue: isArabic
        ? "تاريخ الإنجاز"
        : "Completion Date",
    }),

    overview: t("details.overview", {
      defaultValue: isArabic
        ? "وصف المشروع"
        : "Project Overview",
    }),

    features: t("details.features", {
      defaultValue: isArabic
        ? "مميزات المشروع"
        : "Key Features",
    }),

    responsibilities: t(
      "details.responsibilities",
      {
        defaultValue: isArabic
          ? "مسؤولياتي في المشروع"
          : "My Responsibilities",
      }
    ),

    technologies: t("details.technologies", {
      defaultValue: isArabic
        ? "تقنيات وأدوات التطوير"
        : "Technologies and Tools",
    }),

    liveDemo: t("details.liveDemo", {
      defaultValue: isArabic
        ? "معاينة المشروع"
        : "Live Preview",
    }),

    sourceCode: t("details.sourceCode", {
      defaultValue: isArabic
        ? "الكود المصدري"
        : "Source Code",
    }),

    enlarge: t("details.enlargeImage", {
      defaultValue: isArabic
        ? "تكبير صورة المشروع"
        : "Enlarge Project Image",
    }),

    planned: t("details.plannedFeature", {
      defaultValue: isArabic
        ? "ضمن خطة التطوير"
        : "Planned Development",
    }),
  };

  /* =====================================
     PROJECT NOT FOUND
  ===================================== */

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

  /* =====================================
     PREPARE PROJECT DATA
  ===================================== */

  const images = resolveProjectImages(
    project.project_img
  );

  const developers = Array.isArray(
    project.developedBy
  )
    ? project.developedBy.join(
        isArabic ? "، " : ", "
      )
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

  const featureGroups = Array.isArray(
    project.features
  )
    ? project.features
    : [];

  const responsibilities = Array.isArray(
    project.responsibilities
  )
    ? project.responsibilities
    : [];

  const technologies = Array.isArray(
    project.tech_stack
  )
    ? project.tech_stack
    : [];

  const demoUrl =
    typeof project.demo === "string"
      ? project.demo.trim()
      : "";

  const githubUrl =
    typeof project.github === "string"
      ? project.github.trim()
      : "";

  /* =====================================
     RENDER
  ===================================== */

  return (
    <DetailsPage dir={isArabic ? "rtl" : "ltr"}>
      {/* PAGE HEADER */}

      <PageHeader>
        <BreadCrumb
          value="projects"
          projectTitle={project.title}
        />
      </PageHeader>

      <Content>
        {/* =================================
            PROJECT GALLERY
        ================================= */}

        {images.length > 0 && (
          <GallerySection>
            <InteractiveGallery
              key={project.id}
              images={images}
              projectTitle={project.title}
              enlargeLabel={labels.enlarge}
              onEnlarge={setSelectedImage}
            />
          </GallerySection>
        )}

        {/* =================================
            COMPLETION DATE
        ================================= */}

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

        {/* =================================
            PROJECT INFORMATION
        ================================= */}

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

        {/* =================================
            PROJECT OVERVIEW
        ================================= */}

        {project.overview && (
          <ContentSection
            title={labels.overview}
            icon={FiBookOpen}
          >
            <SectionDescription>
              {project.overview}
            </SectionDescription>
          </ContentSection>
        )}

        {/* =================================
            PROJECT FEATURES
        ================================= */}

        {featureGroups.length > 0 && (
          <ContentSection
            title={labels.features}
            icon={FiLayers}
          >
            <FeatureGroups>
              {featureGroups.map((group, index) => {
                /* SIMPLE STRING FEATURES */

                if (typeof group === "string") {
                  return (
                    <FeatureGroup
                      key={`${project.id}-feature-${index}`}
                    >
                      <FeatureItems
                        projectId={project.id}
                        prefix={`single-${index}`}
                        items={[group]}
                      />
                    </FeatureGroup>
                  );
                }

                /* GROUPED FEATURES */

                if (
                  !group ||
                  typeof group !== "object"
                ) {
                  return null;
                }

                return (
                  <FeatureGroup
                    key={`${project.id}-group-${index}`}
                  >
                    {group.title && (
                      <GroupHeading>
                        {group.title}

                        {group.status === "planned" && (
                          <PlannedLabel>
                            {labels.planned}
                          </PlannedLabel>
                        )}
                      </GroupHeading>
                    )}

                    <FeatureItems
                      items={group.items}
                      projectId={project.id}
                      prefix={`group-${index}`}
                    />

                    {group.note && (
                      <Notice>
                        <FiInfo aria-hidden="true" />
                        <span>{group.note}</span>
                      </Notice>
                    )}

                    {group.status === "planned" &&
                      !group.note && (
                        <Notice>
                          <FiInfo aria-hidden="true" />
                          <span>
                            {labels.planned}
                          </span>
                        </Notice>
                      )}
                  </FeatureGroup>
                );
              })}
            </FeatureGroups>
          </ContentSection>
        )}

        {/* =================================
            MY RESPONSIBILITIES
        ================================= */}

        {(project.responsibilitiesIntro ||
          responsibilities.length > 0) && (
          <ContentSection
            title={labels.responsibilities}
            icon={FiClipboard}
          >
            {project.responsibilitiesIntro && (
              <SectionDescription>
                {project.responsibilitiesIntro}
              </SectionDescription>
            )}

            <ResponsibilityItems
              items={responsibilities}
              projectId={project.id}
            />
          </ContentSection>
        )}

        {/* =================================
            TECHNOLOGIES
        ================================= */}

        {technologies.length > 0 && (
          <ContentSection
            title={labels.technologies}
            icon={FiCode}
          >
            <TechList>
              {technologies.map((tech, index) => (
                <Tech key={`${tech}-${index}`}>
                  {tech}
                </Tech>
              ))}
            </TechList>
          </ContentSection>
        )}

        {/* =================================
            PROJECT ACTIONS
        ================================= */}

        {(demoUrl || githubUrl) && (
          <ProjectActions>
            {demoUrl && (
              <Button
                as="a"
                href={demoUrl}
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

            {githubUrl && (
              <Button
                as="a"
                href={githubUrl}
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

        {/* =================================
            BACK TO PROJECTS
        ================================= */}

        <BackLink to="/projects">
          <BackArrow aria-hidden="true" />
          {labels.back}
        </BackLink>
      </Content>

      {/* IMAGE MODAL */}

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
