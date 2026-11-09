
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FiUser,
  FiBookOpen,
  FiBriefcase,
  FiAward,
  FiCode,
  FiHeart,
  FiCalendar,
  FiClock,
  FiEye,
  FiChevronDown,
  FiArrowUpRight,
  FiMonitor,
  FiUsers,
  FiTool,
  FiInfo,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

import Container from "../Components/layout/PageContainer";
import BreadCrumb from "../Components/ui/Breadcrumb";
import Button from "../Components/ui/Button/Button";
import { ImgModal } from "../Components/ui/Modal";
import { PageHeader } from "../Components/ui/T";

/* =====================================================
   HELPERS
===================================================== */

const asArray = (value) =>
  Array.isArray(value) ? value : [];

const asText = (value, isArabic) => {
  if (
    typeof value === "string" ||
    typeof value === "number"
  ) {
    return String(value);
  }

  if (
    value &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    return String(
      (isArabic ? value.ar : value.en) ||
      value.ar ||
      value.en ||
      ""
    );
  }

  return "";
};

const firstValue = (...values) =>
  values.find(
    (value) =>
      value !== undefined &&
      value !== null &&
      value !== ""
  );

const normalizeDigits = (value) =>
  String(value ?? "")
    .replace(/[٠-٩]/g, (digit) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    )
    .replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    );

const pad = (value) =>
  String(value).padStart(2, "0");

const isPresent = (value) =>
  /present|current|ongoing|now|حتى الآن|حاليا|حالياً/i.test(
    String(value || "")
  );

/* =====================================================
   DATE HELPERS
===================================================== */

const parseDate = (value) => {
  if (!value || isPresent(value)) {
    return null;
  }

  const text = normalizeDigits(value).trim();

  let year;
  let month = 1;
  let day = 1;
  let precision = "day";

  let match = text.match(
    /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/
  );

  if (match) {
    year = Number(match[1]);
    month = Number(match[2]);
    day = Number(match[3]);
  } else {
    match = text.match(
      /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/
    );

    if (match) {
      day = Number(match[1]);
      month = Number(match[2]);
      year = Number(match[3]);
    } else {
      match = text.match(
        /^(\d{4})[-/.](\d{1,2})$/
      );

      if (match) {
        year = Number(match[1]);
        month = Number(match[2]);
        precision = "month";
      } else {
        match = text.match(/^(\d{4})$/);

        if (!match) {
          return null;
        }

        year = Number(match[1]);
        precision = "year";
      }
    }
  }

  const date = new Date(
    Date.UTC(year, month - 1, day)
  );

  if (
    year < 1900 ||
    year > 2100 ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return {
    date,
    year,
    month,
    day,
    precision,
  };
};

const formatDate = (parsed) => {
  if (!parsed) {
    return "";
  }

  if (parsed.precision === "year") {
    return String(parsed.year);
  }

  if (parsed.precision === "month") {
    return `${pad(parsed.month)}/${parsed.year}`;
  }

  return `${pad(parsed.day)}/${pad(
    parsed.month
  )}/${parsed.year}`;
};

const extractDates = (item = {}) => {
  const startValue = firstValue(
    item.startDate,
    item.start
  );

  const endValue = firstValue(
    item.endDate,
    item.end
  );

  const current =
    item.current === true ||
    item.ongoing === true ||
    isPresent(endValue) ||
    isPresent(item.date);

  if (startValue || endValue) {
    return {
      start: parseDate(startValue),
      end: parseDate(endValue),
      current,
      single: null,
    };
  }

  const raw = normalizeDigits(
    firstValue(item.date, item.period, "")
  );

  const matches = raw.match(
    /\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}[-/.]\d{1,2}[-/.]\d{4}|\d{4}[-/.]\d{1,2}/g
  );

  if (matches?.length >= 2) {
    return {
      start: parseDate(matches[0]),
      end: parseDate(matches[1]),
      current,
      single: null,
    };
  }

  return {
    start: null,
    end: null,
    current,
    single: parseDate(
      firstValue(
        item.issuedDate,
        item.completionDate,
        item.date
      )
    ),
  };
};

const getSortTime = (item) => {
  const dates = extractDates(item);

  if (dates.current) {
    return Number.MAX_SAFE_INTEGER;
  }

  const parsed =
    parseDate(item?.sortDate) ||
    dates.end ||
    dates.single ||
    dates.start;

  return parsed
    ? parsed.date.getTime()
    : -Infinity;
};

const sortNewest = (items) =>
  [...asArray(items)].sort(
    (a, b) => getSortTime(b) - getSortTime(a)
  );

/* =====================================================
   DOCUMENT HELPERS
===================================================== */

const documentUrl = (path) => {
  if (
    typeof path !== "string" ||
    !path.trim()
  ) {
    return "";
  }

  const clean = path.trim();

  if (/^https?:\/\//i.test(clean)) {
    return clean;
  }

  if (
    clean.startsWith("//") ||
    /^[a-z][a-z\d+.-]*:/i.test(clean)
  ) {
    return "";
  }

  const base = String(
    process.env.PUBLIC_URL || ""
  ).replace(/\/+$/, "");

  const relative = clean.replace(/^\/+/, "");

  let basePath = "";

  try {
    basePath = new URL(
      base || "/",
      window.location.origin
    )
      .pathname.replace(/^\/+|\/+$/g, "");
  } catch {
    basePath = base.replace(/^\/+|\/+$/g, "");
  }

  if (
    basePath &&
    (relative === basePath ||
      relative.startsWith(`${basePath}/`))
  ) {
    return `/${relative}`;
  }

  return `${base}/${relative}`;
};

const getFileExtension = (path) =>
  String(path || "")
    .split("?")[0]
    .split("#")[0]
    .match(/\.([a-z0-9]+)$/i)?.[1]
    ?.toUpperCase() || "";

const isImageDocument = (path) =>
  [
    "PNG",
    "JPG",
    "JPEG",
    "WEBP",
    "GIF",
    "AVIF",
  ].includes(getFileExtension(path));

/* =====================================================
   SKILL HELPERS
===================================================== */

const getSkillName = (skill, isArabic) => {
  if (typeof skill === "string") {
    return skill;
  }

  return asText(
    firstValue(
      skill?.name,
      skill?.title,
      skill?.skill,
      skill?.label
    ),
    isArabic
  );
};

const getSkillSources = (
  skill,
  isArabic
) => {
  if (
    !skill ||
    typeof skill !== "object"
  ) {
    return [];
  }

  const raw = firstValue(
    skill.sources,
    skill.source,
    skill.learnedFrom
  );

  const values = Array.isArray(raw)
    ? raw
    : raw
      ? [raw]
      : [];

  return [
    ...new Set(
      values
        .map((value) =>
          asText(value, isArabic).trim()
        )
        .filter(Boolean)
    ),
  ];
};

const getSkillLevel = (
  skill,
  isArabic,
  labels = {}
) => {
  const level = firstValue(
    skill?.level,
    skill?.proficiency
  );

  if (!level) {
    return "";
  }

  return (
    labels[String(level).toLowerCase()] ||
    asText(level, isArabic)
  );
};

/* =====================================================
   PAGE STYLES
===================================================== */

const Main = styled.main`
  --about-bg:
    var(--color-background, #f4f7fb);

  --about-card:
    var(--color-card-background, #ffffff);

  --about-section:
    var(--color-background-secondary, #edf3f9);

  --about-border:
    var(--color-border, #d5e0eb);

  --about-border-strong:
    var(--color-border-strong, #bfcfdf);

  --about-text:
    var(--color-text-primary, #172435);

  --about-muted:
    var(--color-text-secondary, #475569);

  --about-primary:
    var(--color-primary, #287c98);

  width: 100%;
  min-width: 0;
  overflow-x: clip;

  background: var(--about-bg);
  color: var(--about-text);

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

const MainContent = styled(Container)`
  display: flex;
  flex-direction: column;

  gap: clamp(48px, 7vw, 80px);

  padding-block:
    clamp(40px, 6vw, 70px)
    clamp(70px, 9vw, 110px);
`;

const Section = styled.section`
  min-width: 0;

  scroll-margin-top:
    calc(var(--header-height, 70px) + 20px);

  &.alternate {
    padding: clamp(18px, 3vw, 34px);

    border: 1px solid var(--about-border);
    border-radius: var(--radius-card, 16px);

    background: var(--about-section);
  }

  @media (max-width: 600px) {
    &.alternate {
      padding: 18px 13px;
    }
  }
`;

const SectionHeading = styled.div`
  margin-bottom: 26px;

  .number {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 10px;

    color: var(--about-primary);

    font-size: 0.84rem;
    font-weight: 800;
  }

  h2 {
    position: relative;

    margin: 0 0 12px;
    padding-inline-start: 16px;

    color: var(--about-text);

    font-size:
      clamp(1.45rem, 3vw, 2rem);

    line-height: 1.5;
  }

  h2::before {
    content: "";

    position: absolute;
    inset-inline-start: 0;
    inset-block: 12%;

    width: 4px;
    border-radius: 4px;

    background: var(--about-primary);
  }

  p {
    max-width: 850px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.93rem;
    line-height: 1.95;
  }
`;

const Card = styled.article`
  min-width: 0;

  padding: clamp(18px, 2.5vw, 26px);

  border: 1px solid var(--about-border);
  border-radius: var(--radius-card, 13px);

  background: var(--about-card);
  box-shadow: var(--shadow-sm, none);

  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color:
        var(--about-border-strong);

      box-shadow: var(--shadow-md, none);
    }
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
`;

/* =====================================================
   INTRODUCTION STYLES
===================================================== */

const IntroGrid = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.35fr)
    minmax(270px, 0.8fr);

  gap: clamp(24px, 4vw, 42px);
  align-items: start;

  @media (max-width: 850px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const IntroText = styled.div`
  h2 {
    margin: 0 0 18px;

    color: var(--about-text);

    font-size:
      clamp(1.5rem, 3vw, 2.2rem);

    line-height: 1.5;
  }

  p {
    margin: 0 0 17px;

    color: var(--about-muted);

    font-size: 0.96rem;
    line-height: 2.05;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const ProfileCard = styled(Card)`
  h3 {
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 0 12px;

    color: var(--about-text);
    font-size: 1.08rem;
  }

  h3 svg {
    color: var(--about-primary);
  }
`;

const ProfileRow = styled.div`
  padding-block: 12px;

  border-bottom:
    1px solid var(--about-border);

  &:last-child {
    border: 0;
    padding-bottom: 0;
  }

  span {
    display: block;
    margin-bottom: 5px;

    color: var(--about-muted);
    font-size: 0.81rem;
  }

  strong {
    display: block;

    color: var(--about-text);

    font-size: 0.92rem;
    line-height: 1.8;

    overflow-wrap: anywhere;
  }
`;

/* =====================================================
   ENTRY STYLES
===================================================== */

const EntryCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const EntryHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const EntryInfo = styled.div`
  min-width: 0;
  flex: 1;

  h3 {
    margin: 0 0 7px;

    color: var(--about-text);

    font-size: 1.08rem;
    line-height: 1.7;
  }

  .subtitle {
    display: block;

    color: var(--about-muted);

    font-size: 0.9rem;
    line-height: 1.8;
  }
`;

const Description = styled.p`
  margin: 0;

  color: var(--about-muted);

  font-size: 0.93rem;
  line-height: 2;

  overflow-wrap: anywhere;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  .grade-value {
    direction: ltr;
    unicode-bidi: isolate;

    color: var(--about-primary);
    font-weight: 800;
  }
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  max-width: 100%;
  padding: 8px 12px;

  border: 1px solid var(--about-border);
  border-radius: 9px;

  background: var(--about-section);
  color: var(--about-text);

  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.6;

  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
    color: var(--about-primary);
  }
`;

const DateTag = styled(Tag)`
  flex-shrink: 0;

  .date-text {
    unicode-bidi: isolate;
  }
`;

const PresentTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 3px 8px;

  border: 1px solid #16a34a;
  border-radius: 6px;

  background: rgba(22, 163, 74, 0.1);
  color: #15803d;

  font-size: 0.76rem;
  font-weight: 800;

  white-space: nowrap;
`;

const DocumentActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 3px;
  padding-top: 14px;

  border-top:
    1px solid var(--about-border);

  @media (max-width: 500px) {
    & > * {
      width: 100%;
    }
  }
`;

const FormatBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 3px 7px;

  border: 1px solid currentColor;
  border-radius: 5px;

  font-size: 0.72rem;
  font-weight: 800;

  opacity: 0.85;
`;

/* =====================================================
   EXPERIENCE STYLES
===================================================== */



const Timeline = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-inline-start: 35px;

  &::before {
    content: "";

    position: absolute;
    inset-inline-start: 11px;
    top: 17px;
    bottom: 17px;

    width: 2px;

    background: var(--about-border-strong);
  }

  @media (max-width: 600px) {
    padding-inline-start: 27px;

    &::before {
      inset-inline-start: 8px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  min-width: 0;

  &::before {
    content: "";

    position: absolute;
    inset-inline-start: -31px;
    top: 24px;

    width: 13px;
    height: 13px;

    border: 3px solid var(--about-primary);
    border-radius: 50%;

    background: var(--about-card);
    z-index: 1;
  }

  &[data-current="true"]::before {
    border-color: #16a34a;
    background: #16a34a;
  }

  @media (max-width: 600px) {
    &::before {
      inset-inline-start: -25px;
      width: 12px;
      height: 12px;
    }
  }
`;

/* =====================================================
   SKILLS STYLES
===================================================== */

const SkillsList = styled.div`
  display: grid;
  gap: 14px;
`;

const SkillAccordion = styled.div`
  min-width: 0;
  overflow: hidden;

  border: 1px solid var(--about-border);
  border-radius: 13px;

  background: var(--about-card);

  &[data-open="true"] {
    border-color: var(--about-primary);
  }
`;

const SkillAccordionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 13px;

  width: 100%;
  padding: 18px 20px;

  border: 0;
  background: transparent;

  color: var(--about-text);

  font: inherit;
  text-align: start;

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--about-primary);
    outline-offset: -3px;
  }

  .group-icon {
    display: grid;
    place-items: center;

    flex-shrink: 0;

    width: 42px;
    height: 42px;

    border: 1px solid var(--about-border);
    border-radius: 10px;

    background: var(--about-section);
    color: var(--about-primary);
  }

  .group-name {
    flex: 1;
    min-width: 0;
  }

  .group-name strong {
    display: block;

    font-size: 1rem;
    line-height: 1.6;
  }

  .group-name small {
    display: block;
    margin-top: 4px;

    color: var(--about-muted);
    font-size: 0.8rem;
  }

  .chevron {
    flex-shrink: 0;

    color: var(--about-primary);

    transition: transform 0.2s ease;
  }

  &[aria-expanded="true"] .chevron {
    transform: rotate(180deg);
  }
`;

const SkillContent = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 12px;
  padding: 18px;

  border-top:
    1px solid var(--about-border);

  background: var(--about-section);

  @media (max-width: 1000px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 13px;
  }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 0;
  padding: 16px;

  border: 1px solid var(--about-border);
  border-radius: 10px;

  background: var(--about-card);

  .skill-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-name {
    color: var(--about-text);

    font-size: 0.94rem;
    font-weight: 750;
  }

  .skill-level {
    color: var(--about-primary);

    font-size: 0.77rem;
    font-weight: 700;
  }

  .source-label {
    display: flex;
    align-items: center;
    gap: 7px;

    padding-top: 10px;

    border-top:
      1px solid var(--about-border);

    color: var(--about-muted);

    font-size: 0.8rem;
    font-weight: 700;
  }
`;

const SkillSources = styled.ul`
  display: grid;
  gap: 6px;

  margin: 0;
  padding-inline-start: 18px;

  color: var(--about-muted);

  font-size: 0.82rem;
  line-height: 1.8;

  li::marker {
    color: var(--about-primary);
  }
`;

/* =====================================================
   VOLUNTEERING STYLES
===================================================== */

const VolunteerSummary = styled(Card)`
  margin-bottom: 20px;


  .heading {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 16px;
  }

  .heading svg {
    flex-shrink: 0;

    color: var(--about-primary);
    font-size: 1.4rem;
  }

  .heading h3 {
    margin: 0;

    color: var(--about-text);
    font-size: 1.08rem;
    line-height: 1.7;
  }

  .value {
    display: block;

    margin-bottom: 20px;

    color: var(--about-primary);

    font-size: 1.55rem;
    font-weight: 800;
    line-height: 1.6;
  }

  .meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 14px;

    margin-bottom: 22px;
  }

  ${DocumentActions} {
    margin-top: 0;
    padding-top: 20px;

    border-top: 1px solid var(--about-border);
  }

  @media (max-width: 600px) {
    .heading {
      align-items: flex-start;
    }

    .meta {
      flex-direction: column;
      align-items: flex-start;

      gap: 12px;
      margin-bottom: 24px;
    }

    ${DocumentActions} {
      padding-top: 18px;
    }
  }
`;

/* =====================================================
   CAREER GOAL STYLES
===================================================== */

const GoalCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;

  padding: clamp(22px, 4vw, 36px);

  border-color: var(--about-primary);

  h2 {
    margin: 0 0 12px;

    color: var(--about-text);

    font-size:
      clamp(1.4rem, 3vw, 1.9rem);
  }

  p {
    max-width: 750px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.95rem;
    line-height: 2;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;

    & > a {
      align-self: flex-start;
    }
  }

  @media (max-width: 480px) {
    & > a {
      width: 100%;
    }
  }
`;

/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

const SectionTitle = ({
  number,
  icon: Icon,
  title,
  description,
}) => (
  <SectionHeading>
    <span className="number">
      <Icon aria-hidden="true" />
      {number}
    </span>

    <h2>{title}</h2>

    {description && <p>{description}</p>}
  </SectionHeading>
);

/* =====================================================
   DATE DISPLAY
===================================================== */

const DateDisplay = ({
  item,
  labels = {},
}) => {
  const dates = extractDates(item);

  const start = formatDate(dates.start);
  const end = formatDate(dates.end);
  const single = formatDate(dates.single);

  if (!start && !end && !single) {
    const fallback = firstValue(
      item?.date,
      item?.period
    );

    if (!fallback) {
      return null;
    }

    return (
      <DateTag>
        <FiCalendar aria-hidden="true" />

        <span
          className="date-text"
          dir="auto"
        >
          {fallback}
        </span>
      </DateTag>
    );
  }

  return (
    <DateTag>
      <FiCalendar aria-hidden="true" />

      <span
        className="date-text"
        dir="ltr"
      >
        {start || end || single}
      </span>

      {start &&
        (end || dates.current) && (
          <>
            <span aria-hidden="true">
              –
            </span>

            {dates.current ? (
              <PresentTag>
                <FiCheckCircle
                  aria-hidden="true"
                />

                {labels.present}
              </PresentTag>
            ) : (
              <span
                className="date-text"
                dir="ltr"
              >
                {end}
              </span>
            )}
          </>
        )}
    </DateTag>
  );
};

/* =====================================================
   DOCUMENT BUTTON
===================================================== */

const DocumentButton = ({
  item,
  title,
  labels = {},
  onPreview,
}) => {
  if (!item?.document) {
    return null;
  }

  const type =
    item.documentType || "document";

  const documentTypes =
    labels.documentTypes || {};

  const documentName =
    documentTypes[type] ||
    documentTypes.document ||
    "";

  const format =
    getFileExtension(item.document);

  const supported = isImageDocument(
    item.document
  );

  const handleDocument = () => {
    if (!supported) {
      return;
    }

    onPreview({
      path: item.document,
      title,
      documentType: type,
    });
  };

  return (
    <DocumentActions>
      <Button
        type="button"
        $variant="secondary"
        disabled={!supported}
        title={
          !supported
            ? labels.unsupportedDocument
            : undefined
        }
        onClick={handleDocument}
      >
        <FiEye aria-hidden="true" />

        {labels.viewDocument}{" "}
        {documentName}

        {format && (
          <FormatBadge dir="ltr">
            {format}
          </FormatBadge>
        )}
      </Button>
    </DocumentActions>
  );
};

/* =====================================================
   CONTENT ENTRY
===================================================== */

const ContentEntry = ({
  item,
  title,
  subtitle,
  description,
  field,
  grade,
  gradeLabel,
  honors,
  honorsLabel,
  employmentType,
  hours,
  labels = {},
  isArabic,
  onPreview,
}) => {
  const displayedTitle = asText(
    title,
    isArabic
  );

  const displayedSubtitle = asText(
    subtitle,
    isArabic
  );

  const displayedDescription = asText(
    description,
    isArabic
  );

  const displayedField = asText(
    field,
    isArabic
  );

  return (
    <EntryCard>
      <EntryHeader>
        <EntryInfo>
          <h3>{displayedTitle}</h3>

          {displayedSubtitle && (
            <span className="subtitle">
              {displayedSubtitle}
            </span>
          )}
        </EntryInfo>

        <DateDisplay
          item={item}
          labels={labels}
        />
      </EntryHeader>

      {employmentType && (
        <MetaRow>
          <Tag>
            <FiBriefcase aria-hidden="true" />
            {employmentType}
          </Tag>
        </MetaRow>
      )}

      {displayedField && (
        <Description>
          {displayedField}
        </Description>
      )}

      {displayedDescription && (
        <Description>
          {displayedDescription}
        </Description>
      )}

      {(honors || grade || hours) && (
        <MetaRow>
          {honors && (
            <Tag>
              <FiAward aria-hidden="true" />

              <span>
                {honorsLabel}:{" "}
                {asText(honors, isArabic)}
              </span>
            </Tag>
          )}

          {grade && (
            <Tag>
              <FiAward aria-hidden="true" />

              <span>{gradeLabel}:</span>

              <span className="grade-value">
                {grade}
              </span>
            </Tag>
          )}

          {hours && (
            <Tag>
              <FiClock aria-hidden="true" />

              {asText(hours, isArabic)}
            </Tag>
          )}
        </MetaRow>
      )}

      {item?.note && (
        <MetaRow>
          <Tag>
            <FiInfo aria-hidden="true" />

            {asText(
              item.note,
              isArabic
            )}
          </Tag>
        </MetaRow>
      )}

      <DocumentButton
        item={item}
        title={displayedTitle}
        labels={labels}
        onPreview={onPreview}
      />
    </EntryCard>
  );
};

/* =====================================================
   SKILL GROUP ICONS
===================================================== */

const skillGroupIcons = [
  FiCode,
  FiLayers,
  FiTool,
  FiMonitor,
  FiBookOpen,
  FiUsers,
  FiMonitor,
];

/* =====================================================
   MAIN ABOUT COMPONENT
===================================================== */

const About = () => {
  const { t, i18n } = useTranslation("about");

  const isArabic = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar"
  )
    .toLowerCase()
    .startsWith("ar");

  const [preview, setPreview] =
    useState(null);

  const [
    openSkillIndex,
    setOpenSkillIndex,
  ] = useState(null);

  const closePreview = useCallback(() => {
    setPreview(null);
  }, []);

  /* -----------------------------------------------
     TRANSLATION DATA
  ------------------------------------------------ */

  const translated = t("content", {
    returnObjects: true,
  });

  const content =
    translated &&
      typeof translated === "object" &&
      !Array.isArray(translated)
      ? translated
      : {};

  const labels = t("ui", {
    returnObjects: true,
    defaultValue: {},
  });

  const ui =
    labels &&
      typeof labels === "object" &&
      !Array.isArray(labels)
      ? labels
      : {};

  /* -----------------------------------------------
     SORTED DATA
  ------------------------------------------------ */

  const education = sortNewest(
    content.education?.items
  );

  const experience = sortNewest(
    content.experience?.items
  );

  const certificates = sortNewest(
    content.certificates?.items
  );

  const volunteering = sortNewest(
    content.volunteering?.items
  );

  /* -----------------------------------------------
     SKILLS FROM JSON ONLY
  ------------------------------------------------ */

  const skillGroups = asArray(
    content.skills?.groups
  );

  /* -----------------------------------------------
     VOLUNTEERING
  ------------------------------------------------ */

  const volunteerSummary =
    content.volunteering?.summary || {};

  /* -----------------------------------------------
     EXPERIENCE CALCULATION
  ------------------------------------------------ */


  /* -----------------------------------------------
     RENDER ENTRIES
  ------------------------------------------------ */

  const renderEntries = (
    items,
    getProps
  ) =>
    items.map((item, index) => (
      <ContentEntry
        key={`${index}-${getSortTime(item)}`}
        item={item}
        labels={ui}
        isArabic={isArabic}
        onPreview={setPreview}
        {...getProps(item)}
      />
    ));

  /* -----------------------------------------------
     EMPLOYMENT TYPE
  ------------------------------------------------ */

  const getEmploymentType = (item) => {
    const type = String(
      item?.employmentType || ""
    ).toLowerCase();

    return (
      ui.employmentTypes?.[type] ||
      asText(
        item?.employmentType,
        isArabic
      )
    );
  };

  /* =================================================
     PAGE RENDER
  ================================================= */

  return (
    <Main dir={isArabic ? "rtl" : "ltr"}>

      {/* PAGE HEADER */}

      <PageHeader>
        <BreadCrumb value="about" />
      </PageHeader>

      <MainContent>

        {/* ==========================================
            INTRODUCTION
        =========================================== */}

        <Section id="about-intro">
          <IntroGrid>

            <IntroText>
              <h2>
                {content.intro?.title}
              </h2>

              {content.intro?.paragraph1 && (
                <p>
                  {content.intro.paragraph1}
                </p>
              )}

              {content.intro?.paragraph2 && (
                <p>
                  {content.intro.paragraph2}
                </p>
              )}
            </IntroText>

            <ProfileCard>
              <h3>
                <FiUser aria-hidden="true" />

                {content.infoTitle}
              </h3>

              {asArray(content.profile).map(
                (item, index) => (
                  <ProfileRow key={index}>
                    <span>
                      {asText(
                        item.label,
                        isArabic
                      )}
                    </span>

                    <strong>
                      {asText(
                        item.value,
                        isArabic
                      )}
                    </strong>
                  </ProfileRow>
                )
              )}
            </ProfileCard>

          </IntroGrid>
        </Section>

        {/* ==========================================
            EDUCATION
        =========================================== */}

        <Section
          id="about-education"
          className="alternate"
        >
          <SectionTitle
            number="01"
            icon={FiBookOpen}
            title={content.education?.title}
            description={
              content.education?.description
            }
          />

          <CardList>
            {renderEntries(
              education,
              (item) => ({
                title: item.degree,
                subtitle: item.school,

                field: item.field,

                honors: item.honors,

                honorsLabel:
                  content.education?.honorsLabel,

                grade: item.grade,

                gradeLabel:
                  item.gradeLabel ||
                  (
                    item.documentType ===
                      "diploma"
                      ? content.education
                        ?.gradeLabel
                      : content.education
                        ?.percentageLabel
                  ),
              })
            )}
          </CardList>
        </Section>

        {/* ==========================================
            EXPERIENCE
        =========================================== */}

        <Section id="about-experience">
          <SectionTitle
            number="02"
            icon={FiBriefcase}
            title={
              content.experience?.title
            }
            description={
              content.experience?.description
            }
          />

          <Timeline>
            {experience.map(
              (item, index) => {
                const dates =
                  extractDates(item);

                return (
                  <TimelineItem
                    key={`${index}-${getSortTime(
                      item
                    )}`}
                    data-current={
                      dates.current
                        ? "true"
                        : "false"
                    }
                  >
                    <ContentEntry
                      item={item}
                      title={item.role}
                      subtitle={item.company}
                      description={
                        item.description
                      }
                      employmentType={
                        getEmploymentType(
                          item
                        )
                      }
                      labels={ui}
                      isArabic={isArabic}
                      onPreview={
                        setPreview
                      }
                    />
                  </TimelineItem>
                );
              }
            )}
          </Timeline>
        </Section>

        {/* ==========================================
            CERTIFICATES
        =========================================== */}

        <Section
          id="about-certificates"
          className="alternate"
        >
          <SectionTitle
            number="03"
            icon={FiAward}
            title={
              content.certificates?.title
            }
            description={
              content.certificates?.description
            }
          />

          <CardList>
            {renderEntries(
              certificates,
              (item) => ({
                title: item.name,
                subtitle: item.provider,
                description:
                  item.description,
                hours: item.hours,
              })
            )}
          </CardList>
        </Section>

        {/* ==========================================
            SKILLS
        =========================================== */}

        <Section id="about-skills">
          <SectionTitle
            number="04"
            icon={FiCode}
            title={content.skills?.title}
            description={
              content.skills?.description
            }
          />

          <SkillsList>
            {skillGroups.map(
              (group, index) => {
                const isOpen =
                  openSkillIndex === index;

                const Icon =
                  skillGroupIcons[
                  index %
                  skillGroupIcons.length
                  ];

                const items = asArray(
                  group.items
                );

                return (
                  <SkillAccordion
                    key={index}
                    data-open={
                      isOpen
                        ? "true"
                        : "false"
                    }
                  >
                    <SkillAccordionButton
                      type="button"
                      aria-expanded={
                        isOpen
                      }
                      aria-controls={`about-skill-group-${index}`}
                      onClick={() =>
                        setOpenSkillIndex(
                          isOpen
                            ? null
                            : index
                        )
                      }
                    >
                      <span className="group-icon">
                        <Icon
                          aria-hidden="true"
                        />
                      </span>

                      <span className="group-name">
                        <strong>
                          {asText(
                            group.title,
                            isArabic
                          )}
                        </strong>

                        <small>
                          {items.length}{" "}
                          {items.length === 1
                            ? ui.skillSingular
                            : ui.skillPlural}
                        </small>
                      </span>

                      <FiChevronDown
                        className="chevron"
                        aria-hidden="true"
                      />
                    </SkillAccordionButton>

                    {isOpen && (
                      <SkillContent
                        id={`about-skill-group-${index}`}
                      >
                        {items.map(
                          (
                            skill,
                            skillIndex
                          ) => {
                            const name =
                              getSkillName(
                                skill,
                                isArabic
                              );

                            const level =
                              getSkillLevel(
                                skill,
                                isArabic,
                                ui.skillLevels
                              );

                            const sources =
                              getSkillSources(
                                skill,
                                isArabic
                              );

                            return (
                              <SkillCard
                                key={`${name}-${skillIndex}`}
                              >
                                <div className="skill-header">
                                  <strong className="skill-name">
                                    {name}
                                  </strong>

                                  {level && (
                                    <span className="skill-level">
                                      {level}
                                    </span>
                                  )}
                                </div>

                                {sources.length >
                                  0 && (
                                    <>
                                      <span className="source-label">
                                        <FiBookOpen
                                          aria-hidden="true"
                                        />

                                        {
                                          ui.skillSourcesLabel
                                        }
                                      </span>

                                      <SkillSources>
                                        {sources.map(
                                          (
                                            source,
                                            sourceIndex
                                          ) => (
                                            <li
                                              key={`${source}-${sourceIndex}`}
                                            >
                                              {
                                                source
                                              }
                                            </li>
                                          )
                                        )}
                                      </SkillSources>
                                    </>
                                  )}
                              </SkillCard>
                            );
                          }
                        )}
                      </SkillContent>
                    )}
                  </SkillAccordion>
                );
              }
            )}
          </SkillsList>
        </Section>

        {/* ==========================================
            VOLUNTEERING
        =========================================== */}

        <Section
          id="about-volunteering"
          className="alternate"
        >
          <SectionTitle
            number="05"
            icon={FiHeart}
            title={
              content.volunteering?.title
            }
            description={
              content.volunteering?.description
            }
          />

          {Object.keys(
            volunteerSummary
          ).length > 0 && (
              <VolunteerSummary>
                <div className="heading">


                  <h3>
                    {volunteerSummary.label}
                  </h3>
                </div>

                {volunteerSummary.value && (
                  <strong className="value">
                    {volunteerSummary.value}
                  </strong>
                )}

                <div className="meta">
                  {volunteerSummary.opportunities && (
                    <Tag>
                      <FiUsers
                        aria-hidden="true"
                      />

                      {
                        volunteerSummary.opportunities
                      }{" "}
                      {
                        ui.volunteerOpportunitiesLabel
                      }
                    </Tag>
                  )}

                  <DateDisplay
                    item={volunteerSummary}
                    labels={ui}
                  />
                </div>

                {volunteerSummary.description && (
                  <Description>
                    {
                      volunteerSummary.description
                    }
                  </Description>
                )}

                <DocumentButton
                  item={volunteerSummary}
                  title={
                    volunteerSummary.label
                  }
                  labels={ui}
                  onPreview={
                    setPreview
                  }
                />
              </VolunteerSummary>
            )}

          <CardList>
            {renderEntries(
              volunteering,
              (item) => ({
                title: item.name,
                subtitle: item.provider,
                description:
                  item.description,
              })
            )}
          </CardList>
        </Section>

        {/* ==========================================
            CAREER GOAL
        =========================================== */}

        <Section id="about-goal">
          <GoalCard>
            <div>
              <h2>
                {content.goal?.title}
              </h2>

              {content.goal?.description && (
                <p>
                  {
                    content.goal
                      .description
                  }
                </p>
              )}
            </div>

            <Button
              as={Link}
              to="/contact"
              $variant="primary"
            >
              {ui.contactButton}

              <FiArrowUpRight
                aria-hidden="true"
              />
            </Button>
          </GoalCard>
        </Section>

      </MainContent>

      {/* ==========================================
          DOCUMENT PREVIEW MODAL
      =========================================== */}

      <ImgModal
        isOpen={Boolean(preview)}
        ImgSource={
          preview
            ? documentUrl(
              preview.path
            )
            : ""
        }
        ImgAlt={
          preview?.title || ""
        }
        onClose={closePreview}
      />

    </Main>
  );
};

export default About;
