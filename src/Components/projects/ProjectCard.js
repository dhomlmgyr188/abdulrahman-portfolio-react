
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../ui/Button/Button";

import {
  FiArrowUpLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiCalendar,
} from "react-icons/fi";

/* =========================================================
   PROJECT CARD — MODERN PROFESSIONAL

   Responsive Layout:
   - Desktop: image beside content
   - Tablet: image beside content
   - Mobile: full-width image above content

   Design:
   - Ocean / Orca themes
   - RTL / LTR support
   - Responsive images
   - Accessible project links

   Preserved:
   - Project number
   - Title
   - Date
   - Rich description
   - Technology stack
   - Project details link
   - Live preview link
   - Multiple images
========================================================= */


/* =========================================================
   01 — CARD CONTAINER
========================================================= */

const Card = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: clamp(18px, 2.5vw, 26px);

  width: 100%;
  min-width: 0;

  padding: clamp(18px, 3vw, 30px);

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 18px);

  box-sizing: border-box;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color:
        var(--color-primary);

      box-shadow:
        var(--shadow-md);

      transform: translateY(-3px);
    }
  }

  @media (max-width: 600px) {
    padding: 16px;
    gap: 18px;

    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;


/* =========================================================
   02 — RESPONSIVE MAIN LAYOUT

   Desktop / Tablet:
   Two columns

   RTL:
   Image on the right

   LTR:
   Image on the left

   Mobile:
   Single column
========================================================= */

const ProjectMain = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 36%)
    minmax(0, 1fr);

  align-items: start;

  gap: clamp(18px, 2.5vw, 28px);

  width: 100%;
  min-width: 0;

  box-sizing: border-box;

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    grid-template-columns:
      minmax(0, 40%)
      minmax(0, 1fr);

    gap: 18px;
  }

  /* -------------------------------------------------------
     MOBILE

     Image becomes full-width.
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1fr);

    gap: 18px;
  }
`;


/* =========================================================
   03 — IMAGE AREA

   Desktop:
   Takes 36% of main grid.

   Tablet:
   Takes 40% of main grid.

   Mobile:
   Takes 100% of main grid.
========================================================= */

const ImageArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  width: 100%;
  min-width: 0;

  box-sizing: border-box;
`;


/* =========================================================
   04 — IMAGE FRAME

   Responsive proportions:

   Desktop: 16 / 10
   Tablet: 4 / 3
   Mobile: 16 / 9

   Width always fills its grid column.
========================================================= */

const ImageFrame = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;

  aspect-ratio: 16 / 10;

  overflow: hidden;

  background-color:
    var(--color-background);

  border:
    1px solid var(--color-border);

  border-radius: 14px;

  box-sizing: border-box;

  @media (max-width: 900px) {
    aspect-ratio: 4 / 3;
  }

  @media (max-width: 600px) {
    aspect-ratio: 16 / 9;
    border-radius: 11px;
  }
`;


/* =========================================================
   05 — PROJECT IMAGE
========================================================= */

const ProjectImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  transition:
    transform 0.35s ease;

  @media (hover: hover) and (pointer: fine) {
    ${ImageFrame}:hover & {
      transform: scale(1.025);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   06 — ADDITIONAL IMAGES

   Thumbnails are displayed below
   the primary project image.
========================================================= */

const Thumbnails = styled.div`
  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(min(100%, 65px), 1fr)
    );

  gap: 8px;

  width: 100%;
  min-width: 0;

  @media (max-width: 600px) {
    grid-template-columns:
      repeat(
        auto-fill,
        minmax(min(100%, 75px), 1fr)
      );
  }
`;

const ThumbnailFrame = styled.div`
  position: relative;

  width: 100%;

  aspect-ratio: 4 / 3;

  overflow: hidden;

  background-color:
    var(--color-background);

  border:
    1px solid var(--color-border);

  border-radius: 8px;

  box-sizing: border-box;
`;

const ThumbnailImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;


/* =========================================================
   07 — PROJECT CONTENT
========================================================= */

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 18px;

  width: 100%;
  min-width: 0;

  box-sizing: border-box;
`;


/* =========================================================
   08 — PROJECT HEADER
========================================================= */

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;

  gap: clamp(12px, 2vw, 18px);

  width: 100%;
  min-width: 0;
`;

const ProjectNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  flex-shrink: 0;

  background-color:
    var(--color-background);

  color:
    var(--color-text-secondary);

  border:
    1px solid var(--color-border);

  border-radius: 11px;

  font-size: 0.95rem;
  font-weight: 800;

  font-variant-numeric:
    tabular-nums;

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  flex: 1;
  min-width: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  flex-wrap: wrap;

  gap: 8px 16px;
`;

const ProjectTitle = styled.h3`
  margin: 0;

  color:
    var(--color-text-primary);

  font-size: clamp(
    1.1rem,
    2vw,
    1.4rem
  );

  font-weight: 800;
  line-height: 1.55;

  overflow-wrap: anywhere;
  text-wrap: balance;
`;

const ProjectDate = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 7px;

  flex-shrink: 0;

  color:
    var(--color-text-secondary);

  font-size: 0.82rem;
  line-height: 1.5;

  svg {
    width: 15px;
    height: 15px;
  }
`;


/* =========================================================
   09 — PROJECT DESCRIPTION
========================================================= */

const ProjectDescription = styled.p`
  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: clamp(
    0.9rem,
    1.4vw,
    0.98rem
  );

  line-height: 1.95;

  overflow-wrap: anywhere;
`;

const DescriptionLink = styled.a`
  color:
    var(--color-primary);

  font-weight: 700;

  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: var(
      --color-primary-dark,
      var(--color-primary)
    );
  }

  &:focus-visible {
    outline:
      2px solid var(--color-primary);

    outline-offset: 3px;
  }
`;

function Description({ content }) {
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
          return (
            <span key={index}>
              {item}
            </span>
          );
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
}


/* =========================================================
   10 — TECHNOLOGY STACK
========================================================= */

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 8px;

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

  background-color:
    var(--color-background);

  color:
    var(--color-text-secondary);

  border:
    1px solid var(--color-border);

  border-radius: 8px;

  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.4;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color:
        var(--color-primary);

      color:
        var(--color-text-primary);
    }
  }
`;


/* =========================================================
   11 — CARD FOOTER
========================================================= */

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: auto;
  padding-top: 18px;

  border-top:
    1px solid var(--color-border);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;

    gap: 10px;
  }
`;


/* =========================================================
   12 — PROJECT BUTTONS
========================================================= */

const ProjectButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  min-width: 160px;
  min-height: 46px;

  svg {
    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
  }
`;


/* =========================================================
   13 — RTL / LTR ARROW
========================================================= */

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


/* =========================================================
   14 — PROJECT CARD COMPONENT
========================================================= */

function ProjectCard({
  index = 0,
  title,
  date,
  description,
  techStack,
  toLink,
  value1,
  value2,
  toHref,
  image,
  images,
  imageAlt,
}) {
  const technologies =
    Array.isArray(techStack)
      ? techStack
      : [];

  const imageList =
    Array.isArray(images) && images.length > 0
      ? images.filter(Boolean)
      : image
        ? [image]
        : [];

  const primaryImage =
    imageList[0] || null;

  const additionalImages =
    imageList.slice(1);

  const hasDemo =
    typeof toHref === "string" &&
    toHref.trim().length > 0 &&
    toHref.trim() !== "#";

  const number =
    String(index + 1).padStart(2, "0");

  return (
    <Card>
      <ProjectMain>

        {/* RESPONSIVE PROJECT IMAGE */}

        {primaryImage && (
          <ImageArea>
            <ImageFrame>
              <ProjectImage
                src={primaryImage}
                alt={imageAlt || title || ""}
                loading="lazy"
                decoding="async"
              />
            </ImageFrame>

            {/* ADDITIONAL IMAGES */}

            {additionalImages.length > 0 && (
              <Thumbnails>
                {additionalImages.map(
                  (src, imageIndex) => (
                    <ThumbnailFrame
                      key={`${src}-${imageIndex}`}
                    >
                      <ThumbnailImage
                        src={src}
                        alt={`${imageAlt || title || ""} ${
                          imageIndex + 2
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                    </ThumbnailFrame>
                  )
                )}
              </Thumbnails>
            )}
          </ImageArea>
        )}

        {/* PROJECT INFORMATION */}

        <ProjectContent>
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

                    <span dir="auto">
                      {date}
                    </span>
                  </ProjectDate>
                )}
              </TitleRow>

              <Description
                content={description}
              />
            </HeaderContent>
          </CardHeader>

          {/* TECHNOLOGIES */}

          {technologies.length > 0 && (
            <TechList>
              {technologies.map(
                (tech, techIndex) => (
                  <TechItem
                    key={`${tech}-${techIndex}`}
                  >
                    {tech}
                  </TechItem>
                )
              )}
            </TechList>
          )}
        </ProjectContent>
      </ProjectMain>

      {/* PROJECT ACTIONS */}

      <CardFooter>
        <ProjectButton
          as={Link}
          to={toLink || "/projects"}
          $variant="primary"
          $size="md"
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
            $size="md"
          >
            {value2}

            <FiExternalLink
              aria-hidden="true"
            />
          </ProjectButton>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
