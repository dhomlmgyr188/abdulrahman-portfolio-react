
import styled from "styled-components";
import {
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  margin-top: 16px;
`;

const PreviewLink = styled.a`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  background: var(--color-background);

  color: var(--color-text-primary);
  text-decoration: none;

  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  aspect-ratio: 16 / 10;
  object-fit: contain;

  padding: 12px;
  background: #f4f5f7;
`;

const Footer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  padding: 12px 15px;

  font-size: 0.84rem;
  font-weight: 600;

  svg {
    flex-shrink: 0;
    color: var(--color-primary);
  }
`;

const FileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 90px;

  color: var(--color-primary);

  svg {
    width: 28px;
    height: 28px;
  }
`;

const resolveUrl = (path) => {
  if (!path || typeof path !== "string") {
    return null;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${process.env.PUBLIC_URL || ""}${path}`;
  }

  return null;
};

const CertificatePreview = ({ image, url }) => {
  const { i18n } = useTranslation();

  const isArabic = (
    i18n.resolvedLanguage || i18n.language || "ar"
  ).startsWith("ar");

  const imageSrc = resolveUrl(image);
  const fileUrl = resolveUrl(url || image);

  if (!fileUrl) return null;

  const label = isArabic
    ? "عرض المستند الأصلي"
    : "View Original Document";

  return (
    <Wrapper>
      <PreviewLink
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={
              isArabic
                ? "معاينة المستند"
                : "Document preview"
            }
            loading="lazy"
            decoding="async"
          />
        ) : (
          <FileIcon>
            <FiFileText aria-hidden="true" />
          </FileIcon>
        )}

        <Footer>
          <span>{label}</span>
          <FiExternalLink aria-hidden="true" />
        </Footer>
      </PreviewLink>
    </Wrapper>
  );
};

export default CertificatePreview;
