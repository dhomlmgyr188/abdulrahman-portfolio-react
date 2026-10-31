
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import {
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";

/* =========================================================
   CERTIFICATE PREVIEW — MODERN PROFESSIONAL

   Features:
   - Responsive certificate previews
   - Arabic / English support
   - Ocean / Orca theme support
   - Local and external URLs
   - GitHub Pages compatibility
   - Image and document fallback
   - Accessible external links

   Preserved:
   - Props: image, url
   - Original document link
   - Open in new tab
   - Image preview
   - File icon fallback
========================================================= */

/* =========================================================
   01 — WRAPPER
========================================================= */

const Wrapper = styled.div`
  width: 100%;
  min-width: 0;

  margin-block-start: 16px;

  box-sizing: border-box;
`;

/* =========================================================
   02 — PREVIEW LINK
========================================================= */

const PreviewLink = styled.a`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;

  overflow: hidden;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 12px);

  text-decoration: none;

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

      transform: translateY(-2px);
    }
  }

  &:focus-visible {
    outline:
      2px solid var(--color-primary);

    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

/* =========================================================
   03 — IMAGE CONTAINER

   The container maintains a
   consistent aspect ratio.

   Desktop / Tablet:
   16 / 10

   Mobile:
   4 / 3
========================================================= */

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  aspect-ratio: 16 / 10;

  overflow: hidden;

  background-color: #f4f5f7;

  box-sizing: border-box;

  @media (max-width: 600px) {
    aspect-ratio: 4 / 3;
  }
`;

/* =========================================================
   04 — CERTIFICATE IMAGE

   object-fit: contain ensures
   that the certificate is not
   cropped or distorted.
========================================================= */

const PreviewImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  padding: clamp(8px, 2vw, 16px);

  object-fit: contain;
  object-position: center;

  box-sizing: border-box;

  transition: transform 0.3s ease;

  @media (hover: hover) and (pointer: fine) {
    ${PreviewLink}:hover & {
      transform: scale(1.015);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   05 — FILE FALLBACK
========================================================= */

const FileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 130px;

  padding: 24px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-primary);

  box-sizing: border-box;

  svg {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 600px) {
    min-height: 110px;
  }
`;

/* =========================================================
   06 — FOOTER
========================================================= */

const Footer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  width: 100%;
  min-width: 0;

  padding: 13px 16px;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  border-block-start:
    1px solid var(--color-border);

  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.6;

  box-sizing: border-box;

  svg {
    width: 17px;
    height: 17px;

    flex-shrink: 0;

    color:
      var(--color-primary);
  }

  @media (max-width: 480px) {
    padding: 12px 13px;

    font-size: 0.8rem;
  }
`;

const FooterText = styled.span`
  min-width: 0;

  overflow-wrap: anywhere;
`;

/* =========================================================
   07 — URL RESOLVER

   Supports:
   - External HTTPS URLs
   - Root-relative paths
   - Public folder paths
   - Existing GitHub Pages base path
   - Imported image URLs

   Prevents duplicate PUBLIC_URL prefixes.
========================================================= */

const resolveUrl = (path) => {
  if (
    typeof path !== "string" ||
    !path.trim()
  ) {
    return null;
  }

  const value = path.trim();

  // External URLs
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  // Allow imported data/blob images
  if (/^(blob:|data:image\/)/i.test(value)) {
    return value;
  }

  // Reject unsupported URL schemes
  if (/^[a-z][a-z\d+.-]*:/i.test(value)) {
    return null;
  }

  const publicUrl = (
    process.env.PUBLIC_URL || ""
  ).replace(/\/+$/, "");

  // Remove query/hash before checking path segments
  const normalizedPublicUrl =
    publicUrl.startsWith("http")
      ? new URL(publicUrl).pathname.replace(/\/+$/, "")
      : publicUrl;

  const basePath =
    normalizedPublicUrl === "/"
      ? ""
      : normalizedPublicUrl;

  // Avoid duplicating the project base path
  if (
    basePath &&
    (
      value === basePath ||
      value.startsWith(`${basePath}/`)
    )
  ) {
    return value;
  }

  // Root-relative or public-relative asset
  const assetPath = value.startsWith("/")
    ? value
    : `/${value.replace(/^\.?\//, "")}`;

  return `${publicUrl}${assetPath}`;
};

/* =========================================================
   08 — CERTIFICATE PREVIEW
========================================================= */

function CertificatePreview({
  image,
  url,
}) {
  const { i18n } = useTranslation();

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    language.startsWith("ar");

  const imageSrc = resolveUrl(image);

  const fileUrl = resolveUrl(
    url || image
  );

  if (!fileUrl) {
    return null;
  }

  const label = isArabic
    ? "عرض المستند الأصلي"
    : "View Original Document";

  const imageAlt = isArabic
    ? "معاينة الشهادة أو المستند"
    : "Certificate or document preview";

  return (
    <Wrapper>
      <PreviewLink
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {imageSrc ? (
          <ImageContainer>
            <PreviewImage
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
            />
          </ImageContainer>
        ) : (
          <FileIcon>
            <FiFileText
              aria-hidden="true"
            />
          </FileIcon>
        )}

        <Footer>
          <FooterText>
            {label}
          </FooterText>

          <FiExternalLink
            aria-hidden="true"
          />
        </Footer>
      </PreviewLink>
    </Wrapper>
  );
}

export default CertificatePreview;
