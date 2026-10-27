
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Document, Page, pdfjs } from "react-pdf";

import {
  FiUser,
  FiBookOpen,
  FiBriefcase,
  FiAward,
  FiCode,
  FiHeart,
  FiCalendar,
  FiClock,
  FiFileText,
  FiExternalLink,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
  FiArrowDown,
  FiArrowUp,
  FiAlertCircle,
} from "react-icons/fi";

import Container from "../Components/layout/PageContainer";
import BreadCrumb from "../Components/ui/Breadcrumb";

import {
  SectionSTitle,
  SectionLightDesc,
  PageHeader,
  PageHeaderContainer,
} from "../Components/ui/T";

/* =========================================================
   PDF CONFIGURATION
========================================================= */

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/* =========================================================
   HELPERS
========================================================= */

const safeArray = (value) =>
  Array.isArray(value) ? value : [];

const getDocumentUrl = (path) => {
  if (!path || typeof path !== "string") {
    return "";
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  if (!path.startsWith("/")) {
    return "";
  }

  return `${process.env.PUBLIC_URL || ""}${path}`;
};

const getFileType = (path) => {
  const clean = String(path || "")
    .split("?")[0]
    .toLowerCase();

  if (clean.endsWith(".pdf")) return "pdf";

  if (/\.(png|jpe?g|webp)$/.test(clean)) {
    return "image";
  }

  return "unknown";
};

/*
  Supports:
  2026/08/19
  2025/07/12 – الآن
  1448/04/24 هـ

  Hijri dates are converted approximately to a
  sortable Gregorian timeline using the
  Islamic civil calendar calculation.

  For exact sorting, you may add a "sortDate"
  field to any JSON item in YYYY-MM-DD format.
*/

const hijriToJulianDay = (year, month, day) => {
  return (
    day +
    Math.ceil(29.5 * (month - 1)) +
    (year - 1) * 354 +
    Math.floor((3 + 11 * year) / 30) +
    1948439.5 -
    1
  );
};

const getDateValue = (item) => {
  if (item?.sortDate) {
    const parsed = Date.parse(item.sortDate);
    if (!Number.isNaN(parsed)) return parsed;
  }

  const raw = String(item?.date || "")
    .replace(/[٠-٩]/g, (digit) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    )
    .replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    );

  const match = raw.match(
    /(\d{4})[/-](\d{1,2})(?:[/-](\d{1,2}))?/
  );

  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3] || 1);

  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }

  if (
    /هـ|هجري|hijri/i.test(raw) ||
    (year >= 1300 && year < 1500)
  ) {
    return hijriToJulianDay(year, month, day);
  }

  const date = Date.UTC(year, month - 1, day);

  return Number.isNaN(date)
    ? null
    : date / 86400000 + 2440587.5;
};

const sortItemsByDate = (items, direction) => {
  return safeArray(items)
    .map((item, index) => ({
      item,
      index,
      value: getDateValue(item),
    }))
    .sort((a, b) => {
      if (a.value === null && b.value === null) {
        return a.index - b.index;
      }

      if (a.value === null) return 1;
      if (b.value === null) return -1;

      const difference =
        direction === "newest"
          ? b.value - a.value
          : a.value - b.value;

      return difference || a.index - b.index;
    })
    .map(({ item }) => item);
};

/* =========================================================
   LAYOUT
========================================================= */

const PageWrapper = styled.main`
  width: 100%;
  min-width: 0;
  overflow-x: clip;
  color: var(--color-text-primary);
`;

const MainContent = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: clamp(55px, 7vw, 90px);

  min-width: 0;
  padding-block: clamp(35px, 5vw, 65px) 90px;

  @media (max-width: 600px) {
    gap: 55px;
    padding-bottom: 60px;
  }
`;

const Section = styled.section`
  min-width: 0;
  scroll-margin-top: 110px;
`;

const SectionHeading = styled.div`
  margin-bottom: 23px;

  .number {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 12px;

    color: var(--color-primary);
    font-size: 0.84rem;
    font-weight: 700;
  }

  .number svg {
    width: 18px;
    height: 18px;
  }

  h2 {
    margin: 0 0 9px;
    font-size: clamp(1.45rem, 3vw, 2rem);
    line-height: 1.5;
  }

  p {
    max-width: 850px;
    margin: 0;

    color: var(--color-text-secondary);
    font-size: 0.94rem;
    line-height: 1.9;
  }
`;

const Surface = styled.div`
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-background-secondary);

  @media (max-width: 600px) {
    border-radius: 13px;
  }
`;

/* =========================================================
   INTRODUCTION
========================================================= */

const IntroGrid = styled(Section)`
  display: grid;
  grid-template-columns:
    minmax(0, 1.4fr)
    minmax(280px, 0.8fr);

  align-items: start;
  gap: clamp(24px, 4vw, 45px);

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const IntroText = styled.div`
  min-width: 0;

  h2 {
    margin: 0 0 20px;
    font-size: clamp(1.6rem, 3vw, 2.35rem);
    line-height: 1.5;
  }

  p {
    margin: 0 0 17px;
    color: var(--color-text-secondary);
    font-size: 0.96rem;
    line-height: 2.05;
  }
`;

const InfoCard = styled(Surface)`
  padding: clamp(17px, 2.5vw, 25px);

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 0 10px;
    font-size: 1.1rem;
  }

  h3 svg {
    color: var(--color-primary);
  }
`;

const InfoRow = styled.div`
  padding-block: 11px;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  span {
    display: block;
    margin-bottom: 5px;

    color: var(--color-text-secondary);
    font-size: 0.8rem;
  }

  strong {
    display: block;
    font-size: 0.9rem;
    font-weight: 650;
    line-height: 1.7;
    overflow-wrap: anywhere;
  }
`;

/* =========================================================
   SORTING TOOLBAR
========================================================= */

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  margin-bottom: 17px;

  .count {
    color: var(--color-text-secondary);
    font-size: 0.86rem;
  }
`;

const SortControls = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 4px;
  border: 1px solid var(--color-border);
  border-radius: 11px;

  background: var(--color-background-secondary);

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    min-height: 38px;
    padding: 8px 12px;

    border: 0;
    border-radius: 8px;

    background: transparent;
    color: var(--color-text-secondary);

    font-family: inherit;
    font-size: 0.82rem;
    font-weight: 650;

    cursor: pointer;
    white-space: nowrap;
  }

  button[data-active="true"] {
    background: var(--color-primary);
    color: #ffffff;
  }

  button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (max-width: 430px) {
    width: 100%;

    button {
      flex: 1;
      padding-inline: 8px;
    }
  }
`;

/* =========================================================
   ACCORDION
========================================================= */

const AccordionList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 13px;
`;

const AccordionItem = styled.article`
  min-width: 0;
  overflow: hidden;

  border: 1px solid
    ${({ $open }) =>
      $open
        ? "var(--color-primary)"
        : "var(--color-border)"};

  border-radius: 14px;
  background: var(--color-background-secondary);

  transition: border-color 0.2s ease;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;

const AccordionTrigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  width: 100%;
  min-width: 0;
  min-height: 86px;

  padding: clamp(15px, 2.5vw, 21px);

  border: 0;
  background: transparent;
  color: inherit;

  text-align: start;
  font-family: inherit;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: -4px;
  }

  @media (max-width: 600px) {
    gap: 10px;
    min-height: 78px;
  }
`;

const AccordionHeading = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  min-width: 0;
  flex: 1;

  .title {
    display: block;
    width: 100%;

    font-size: clamp(0.96rem, 1.6vw, 1.08rem);
    font-weight: 700;
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  .subtitle {
    display: block;
    color: var(--color-text-secondary);
    font-size: 0.84rem;
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  .date {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    color: var(--color-primary);
    font-size: 0.79rem;
    font-weight: 650;
    line-height: 1.6;
  }

  .date svg {
    flex-shrink: 0;
  }
`;

const Chevron = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 35px;
  height: 35px;

  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-background-primary);
  color: var(--color-primary);

  svg {
    width: 18px;
    height: 18px;

    transform: rotate(
      ${({ $open }) => ($open ? "180deg" : "0deg")}
    );

    transition: transform 0.2s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
`;

const AccordionPanel = styled.div`
  padding: 0 clamp(15px, 2.5vw, 21px)
    clamp(16px, 2.5vw, 22px);
`;

const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  padding-top: 18px;
  border-top: 1px solid var(--color-border);
`;

const Description = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.95;
  overflow-wrap: anywhere;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  flex-wrap: wrap;

  color: var(--color-text-secondary);
  font-size: 0.85rem;
  line-height: 1.8;

  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

const GradeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  padding: 12px 15px;
  border: 1px solid var(--color-border);
  border-radius: 10px;

  span {
    color: var(--color-text-secondary);
    font-size: 0.85rem;
  }

  strong {
    color: var(--color-primary);
    font-size: 1.1rem;
    direction: ltr;
    unicode-bidi: isolate;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const SkillTag = styled.span`
  display: inline-flex;
  align-items: center;

  max-width: 100%;
  padding: 8px 12px;

  border: 1px solid var(--color-border);
  border-radius: 9px;

  background: var(--color-background-primary);
  color: var(--color-text-primary);

  font-size: 0.83rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

/* =========================================================
   ACCORDION COMPONENTS
========================================================= */

const AccordionEntry = ({
  title,
  subtitle,
  date,
  open,
  onToggle,
  children,
}) => {
  const generatedId = React.useId();
  const panelId = `about-panel-${generatedId}`;

  return (
    <AccordionItem $open={open}>
      <AccordionTrigger
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <AccordionHeading>
          <span className="title">{title}</span>

          {subtitle && (
            <span className="subtitle">{subtitle}</span>
          )}

          {date && (
            <span className="date">
              <FiCalendar aria-hidden="true" />
              <span dir="auto">{date}</span>
            </span>
          )}
        </AccordionHeading>

        <Chevron $open={open} aria-hidden="true">
          <FiChevronDown />
        </Chevron>
      </AccordionTrigger>

      {open && (
        <AccordionPanel id={panelId}>
          <AccordionInner>{children}</AccordionInner>
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};

const AccordionCollection = ({
  items,
  getTitle,
  getSubtitle,
  renderDetails,
  isArabic,
  sortable = true,
  defaultOpenFirst = false,
}) => {
  const [sortDirection, setSortDirection] =
    useState("newest");

  const [openItemKey, setOpenItemKey] =
    useState(null);

  const orderedItems = useMemo(() => {
    if (!sortable) return safeArray(items);

    return sortItemsByDate(items, sortDirection);
  }, [items, sortDirection, sortable]);

  const entries = orderedItems.map((item, index) => ({
    item,
    key: item.document
      ? `doc:${item.document}`
      : `item:${item.date || ""}:${getTitle(item)}:${index}`,
  }));

  const effectiveOpenKey =
    openItemKey === null && defaultOpenFirst
      ? entries[0]?.key
      : openItemKey;

  const toggleItem = (key) => {
    setOpenItemKey((current) => {
      const currentEffective =
        current === null && defaultOpenFirst
          ? entries[0]?.key
          : current;

      return currentEffective === key
        ? "__closed__"
        : key;
    });
  };

  const labels = {
    newest: isArabic ? "الأحدث أولًا" : "Newest first",
    oldest: isArabic ? "الأقدم أولًا" : "Oldest first",
    count: isArabic
      ? `${entries.length} عناصر`
      : `${entries.length} items`,
  };

  return (
    <>
      {sortable && (
        <Toolbar>
          <span className="count">
            {labels.count}
          </span>

          <SortControls
            role="group"
            aria-label={
              isArabic
                ? "ترتيب العناصر حسب التاريخ"
                : "Sort items by date"
            }
          >
            <button
              type="button"
              data-active={sortDirection === "newest"}
              aria-pressed={sortDirection === "newest"}
              onClick={() => setSortDirection("newest")}
            >
              <FiArrowDown aria-hidden="true" />
              {labels.newest}
            </button>

            <button
              type="button"
              data-active={sortDirection === "oldest"}
              aria-pressed={sortDirection === "oldest"}
              onClick={() => setSortDirection("oldest")}
            >
              <FiArrowUp aria-hidden="true" />
              {labels.oldest}
            </button>
          </SortControls>
        </Toolbar>
      )}

      <AccordionList>
        {entries.map(({ item, key }) => (
          <AccordionEntry
            key={key}
            title={getTitle(item)}
            subtitle={getSubtitle?.(item)}
            date={sortable ? item.date : undefined}
            open={effectiveOpenKey === key}
            onToggle={() => toggleItem(key)}
          >
            {renderDetails(item)}
          </AccordionEntry>
        ))}
      </AccordionList>
    </>
  );
};

/* =========================================================
   CERTIFICATE PREVIEW
========================================================= */

const PreviewShell = styled.div`
  min-width: 0;
  width: 100%;
  margin-top: 6px;
`;

const PreviewFrame = styled.div`
  min-width: 0;
  width: 100%;
  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background-primary);
`;

const PreviewStage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;
  min-height: 145px;

  padding: ${({ $portrait }) =>
    $portrait ? "12px" : "0"};

  overflow: hidden;
  background: #f1f3f5;

  .react-pdf__Document,
  .react-pdf__Page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 0;
    max-width: 100%;
  }

  .react-pdf__Page__canvas {
    display: block !important;
    max-width: 100% !important;
    height: auto !important;
  }

  img {
    display: block;
    width: ${({ $portrait }) =>
      $portrait ? "auto" : "100%"};

    max-width: 100%;
    max-height: ${({ $portrait }) =>
      $portrait ? "380px" : "none"};

    height: auto;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    padding: ${({ $portrait }) =>
      $portrait ? "9px" : "0"};

    img {
      max-height: ${({ $portrait }) =>
        $portrait ? "310px" : "none"};
    }
  }
`;

const PreviewStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  min-height: 155px;
  padding: 22px;

  color: #64748b;
  text-align: center;
  font-size: 0.84rem;
  line-height: 1.8;

  svg {
    width: 23px;
    height: 23px;
  }
`;

const PreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  padding: 12px 14px;
  border-top: 1px solid var(--color-border);

  .type {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    color: var(--color-text-secondary);
    font-size: 0.8rem;
    font-weight: 600;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    min-height: 38px;
    padding: 8px 12px;

    border: 1px solid var(--color-border);
    border-radius: 8px;

    color: var(--color-primary);
    background: var(--color-background-secondary);

    font-size: 0.82rem;
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    border-color: var(--color-primary);
  }

  a:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: stretch;

    .type {
      justify-content: center;
    }

    a {
      width: 100%;
    }
  }
`;

const PageControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;

  padding: 9px;
  border-top: 1px solid var(--color-border);

  span {
    min-width: 55px;
    text-align: center;
    direction: ltr;
    unicode-bidi: isolate;

    color: var(--color-text-secondary);
    font-size: 0.8rem;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 35px;
    height: 35px;

    border: 1px solid var(--color-border);
    border-radius: 8px;

    background: var(--color-background-secondary);
    color: var(--color-text-primary);

    cursor: pointer;
  }

  button:hover:not(:disabled) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  button:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const useElementWidth = (ref) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      setWidth(
        Math.max(
          0,
          Math.floor(element.getBoundingClientRect().width)
        )
      );
    };

    update();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(update);
      observer.observe(element);

      return () => observer.disconnect();
    }

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return width;
};

const CertificatePreview = ({
  path,
  title,
  isArabic,
}) => {
  const url = getDocumentUrl(path);
  const fileType = getFileType(path);

  const stageRef = useRef(null);
  const stageWidth = useElementWidth(stageRef);

  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);

  const [pageSize, setPageSize] = useState({
    width: 1,
    height: 1,
  });

  const [imageSize, setImageSize] = useState({
    width: 1,
    height: 1,
  });

  useEffect(() => {
    setPageNumber(1);
    setNumPages(0);
    setPageSize({ width: 1, height: 1 });
    setImageSize({ width: 1, height: 1 });
  }, [url]);

  if (!url) return null;

  const isPdf = fileType === "pdf";

  const dimensions = isPdf
    ? pageSize
    : imageSize;

  const isPortrait =
    dimensions.height > dimensions.width;

  const padding = isPortrait
    ? stageWidth <= 600
      ? 18
      : 24
    : 0;

  const availableWidth = Math.max(
    1,
    stageWidth - padding
  );

  const maxHeight =
    stageWidth <= 600 ? 310 : 380;

  const portraitWidth = Math.floor(
    maxHeight *
      (dimensions.width / dimensions.height)
  );

  const pdfWidth = isPortrait
    ? Math.max(
        1,
        Math.min(availableWidth, portraitWidth)
      )
    : availableWidth;

  const loadingText = isArabic
    ? "جاري تحميل المستند..."
    : "Loading document...";

  const errorText = isArabic
    ? "تعذر عرض المعاينة. يمكنك فتح المستند الأصلي."
    : "Preview unavailable. You can open the original.";

  return (
    <PreviewShell>
      <PreviewFrame>
        <PreviewStage
          ref={stageRef}
          $portrait={isPortrait}
        >
          {fileType === "image" && (
            <img
              src={url}
              alt={title}
              loading="lazy"
              decoding="async"
              onLoad={(event) => {
                const img = event.currentTarget;

                setImageSize({
                  width: img.naturalWidth || 1,
                  height: img.naturalHeight || 1,
                });
              }}
            />
          )}

          {isPdf && (
            <Document
              file={url}
              onLoadSuccess={(pdf) => {
                setNumPages(pdf.numPages);
                setPageNumber(1);
              }}
              loading={
                <PreviewStatus role="status">
                  <FiFileText aria-hidden="true" />
                  {loadingText}
                </PreviewStatus>
              }
              error={
                <PreviewStatus role="status">
                  <FiAlertCircle aria-hidden="true" />
                  {errorText}
                </PreviewStatus>
              }
            >
              {stageWidth > 0 && (
                <Page
                  pageNumber={pageNumber}
                  width={pdfWidth}
                  devicePixelRatio={1.5}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  onLoadSuccess={(page) => {
                    const viewport = page.getViewport({
                      scale: 1,
                    });

                    setPageSize({
                      width: viewport.width,
                      height: viewport.height,
                    });
                  }}
                  loading={
                    <PreviewStatus role="status">
                      {loadingText}
                    </PreviewStatus>
                  }
                />
              )}
            </Document>
          )}

          {fileType === "unknown" && (
            <PreviewStatus>
              <FiFileText aria-hidden="true" />
              {errorText}
            </PreviewStatus>
          )}
        </PreviewStage>

        {isPdf && numPages > 1 && (
          <PageControls>
            <button
              type="button"
              onClick={() =>
                setPageNumber((page) =>
                  Math.max(1, page - 1)
                )
              }
              disabled={pageNumber <= 1}
              aria-label={
                isArabic
                  ? "الصفحة السابقة"
                  : "Previous page"
              }
            >
              <FiChevronLeft aria-hidden="true" />
            </button>

            <span>
              {pageNumber} / {numPages}
            </span>

            <button
              type="button"
              onClick={() =>
                setPageNumber((page) =>
                  Math.min(numPages, page + 1)
                )
              }
              disabled={pageNumber >= numPages}
              aria-label={
                isArabic
                  ? "الصفحة التالية"
                  : "Next page"
              }
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </PageControls>
        )}

        <PreviewFooter>
          <span className="type">
            <FiFileText aria-hidden="true" />
            {isPdf ? "PDF" : "Image"}
          </span>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} - ${
              isArabic
                ? "عرض المستند الأصلي"
                : "View original document"
            }`}
          >
            {isArabic
              ? "عرض المستند الأصلي"
              : "View Original Document"}

            <FiExternalLink aria-hidden="true" />
          </a>
        </PreviewFooter>
      </PreviewFrame>
    </PreviewShell>
  );
};

/* =========================================================
   VOLUNTEERING SUMMARY
========================================================= */

const VolunteerSummary = styled(Surface)`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 20px;
  padding: clamp(17px, 2.5vw, 25px);

  .number {
    color: var(--color-primary);
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 800;
    line-height: 1.4;
  }
`;

/* =========================================================
   CAREER GOAL
========================================================= */

const GoalCard = styled(Surface)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  padding: clamp(20px, 3vw, 30px);

  h2 {
    margin: 0 0 12px;
    font-size: clamp(1.35rem, 2.5vw, 1.7rem);
  }

  p {
    max-width: 750px;
    margin: 0;
    color: var(--color-text-secondary);
    line-height: 2;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ContactButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  flex-shrink: 0;
  min-height: 45px;
  padding: 12px 19px;

  border-radius: 10px;
  background: var(--color-primary);
  color: #ffffff;

  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

/* =========================================================
   ABOUT PAGE
========================================================= */

const About = () => {
  const { t, i18n } = useTranslation("about");

  const content = t("content", {
    returnObjects: true,
  });

  const data =
    content &&
    typeof content === "object" &&
    !Array.isArray(content)
      ? content
      : {};

  const isArabic = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar"
  ).startsWith("ar");

  const profile = safeArray(data.profile);

  const education = safeArray(
    data.education?.items
  );

  const experience = safeArray(
    data.experience?.items
  );

  const certificates = safeArray(
    data.certificates?.items
  );

  const skills = safeArray(
    data.skills?.groups
  );

  const volunteering = safeArray(
    data.volunteering?.items
  );

  const sections = {
    education: {
      number: "02",
      icon: FiBookOpen,
    },
    experience: {
      number: "03",
      icon: FiBriefcase,
    },
    certificates: {
      number: "04",
      icon: FiAward,
    },
    skills: {
      number: "05",
      icon: FiCode,
    },
    volunteering: {
      number: "06",
      icon: FiHeart,
    },
  };

  const renderHeading = (key) => {
    const config = sections[key];
    if (!config) return null;

    const Icon = config.icon;

    return (
      <SectionHeading>
        <span className="number">
          <Icon aria-hidden="true" />
          {config.number}
        </span>

        <h2>{data[key]?.title}</h2>

        {data[key]?.description && (
          <p>{data[key].description}</p>
        )}
      </SectionHeading>
    );
  };

  const renderCertificate = (item, title) => {
    if (!item?.document) return null;

    return (
      <CertificatePreview
        path={item.document}
        title={title}
        isArabic={isArabic}
      />
    );
  };

  return (
    <PageWrapper>
      {/* PAGE HEADER */}
      <PageHeader>
        <BreadCrumb value="about" />

        <PageHeaderContainer>
          <SectionSTitle value="about:pageTitle" />
          <SectionLightDesc value="about:pageDesc" />
        </PageHeaderContainer>
      </PageHeader>

      <MainContent>
        {/* INTRO */}
        <IntroGrid id="about-intro">
          <IntroText>
            <h2>{data.intro?.title}</h2>

            <p>{data.intro?.paragraph1}</p>
            <p>{data.intro?.paragraph2}</p>
          </IntroText>

          <InfoCard>
            <h3>
              <FiUser aria-hidden="true" />
              {data.infoTitle}
            </h3>

            {profile.map((item, index) => (
              <InfoRow key={index}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </InfoRow>
            ))}
          </InfoCard>
        </IntroGrid>

        {/* EDUCATION */}
        <Section id="about-education">
          {renderHeading("education")}

          <AccordionCollection
            items={education}
            isArabic={isArabic}
            getTitle={(item) => item.degree}
            getSubtitle={(item) => item.school}
            renderDetails={(item) => (
              <>
                {item.field && (
                  <Description>{item.field}</Description>
                )}

                {item.grade && (
                  <GradeRow>
                    <span>
                      {data.education?.gradeLabel}
                    </span>

                    <strong>{item.grade}</strong>
                  </GradeRow>
                )}

                {renderCertificate(
                  item,
                  item.degree
                )}
              </>
            )}
          />
        </Section>

        {/* EXPERIENCE */}
        <Section id="about-experience">
          {renderHeading("experience")}

          <AccordionCollection
            items={experience}
            isArabic={isArabic}
            getTitle={(item) => item.role}
            getSubtitle={(item) => item.company}
            renderDetails={(item) => (
              <>
                {item.description && (
                  <Description>
                    {item.description}
                  </Description>
                )}

                {renderCertificate(
                  item,
                  item.role
                )}
              </>
            )}
          />
        </Section>

        {/* COURSES AND CERTIFICATES */}
        <Section id="about-certificates">
          {renderHeading("certificates")}

          <AccordionCollection
            items={certificates}
            isArabic={isArabic}
            getTitle={(item) => item.name}
            getSubtitle={(item) => item.provider}
            renderDetails={(item) => (
              <>
                {item.hours && (
                  <DetailRow>
                    <FiClock aria-hidden="true" />
                    {item.hours}
                  </DetailRow>
                )}

                {item.note && (
                  <Description>
                    {item.note}
                  </Description>
                )}

                {renderCertificate(
                  item,
                  item.name
                )}
              </>
            )}
          />
        </Section>

        {/* SKILLS */}
        <Section id="about-skills">
          {renderHeading("skills")}

          <AccordionCollection
            items={skills}
            isArabic={isArabic}
            sortable={false}
            getTitle={(group) => group.title}
            renderDetails={(group) => (
              <SkillTags>
                {safeArray(group.items).map(
                  (skill, index) => (
                    <SkillTag
                      key={`${skill}-${index}`}
                      dir="auto"
                    >
                      {skill}
                    </SkillTag>
                  )
                )}
              </SkillTags>
            )}
          />
        </Section>

        {/* VOLUNTEERING */}
        <Section id="about-volunteering">
          {renderHeading("volunteering")}

          {data.volunteering?.summary && (
            <VolunteerSummary>
              <Description>
                {data.volunteering.summary.label}
              </Description>

              <strong className="number">
                {data.volunteering.summary.value}
              </strong>

              <Description>
                {data.volunteering.summary.description}
              </Description>

              <AccordionCollection
                items={[data.volunteering.summary]}
                isArabic={isArabic}
                sortable={false}
                getTitle={() =>
                  isArabic
                    ? "عرض سجل الساعات التطوعية"
                    : "View Volunteering Hours Record"
                }
                renderDetails={(item) =>
                  renderCertificate(
                    item,
                    item.label
                  )
                }
              />
            </VolunteerSummary>
          )}

          <AccordionCollection
            items={volunteering}
            isArabic={isArabic}
            getTitle={(item) => item.name}
            getSubtitle={(item) => item.provider}
            renderDetails={(item) => (
              <>
                {item.description && (
                  <Description>
                    {item.description}
                  </Description>
                )}

                {renderCertificate(
                  item,
                  item.name
                )}
              </>
            )}
          />
        </Section>

        {/* CAREER GOAL */}
        <Section id="about-goal">
          <GoalCard>
            <div>
              <h2>{data.goal?.title}</h2>

              <p>{data.goal?.description}</p>
            </div>

            <ContactButton to="/contact">
              {isArabic
                ? "تواصل معي"
                : "Contact Me"}

              <FiArrowUpRight aria-hidden="true" />
            </ContactButton>
          </GoalCard>
        </Section>
      </MainContent>
    </PageWrapper>
  );
};

export default About;
