
import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

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
  FiFileText,
  FiEye,
  FiX,
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

import {
  PageHeader,
  PageHeaderContainer,
} from "../Components/ui/T";

/* =========================================
   GENERAL HELPERS
========================================= */

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

const pad = (number) =>
  String(number).padStart(2, "0");

/* =========================================
   DATE HELPERS
========================================= */

const parseDate = (value) => {
  if (!value || isPresent(value)) return null;

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

        if (!match) return null;

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

function isPresent(value) {
  return /present|current|ongoing|now|حتى الآن|حاليا|حالياً/i.test(
    String(value || "")
  );
}

const formatParsedDate = (parsed) => {
  if (!parsed) return "";

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

const getDateLabel = (item, isArabic) => {
  const {
    start,
    end,
    current,
    single,
  } = extractDates(item);

  const startText = formatParsedDate(start);
  const endText = formatParsedDate(end);

  if (startText && current) {
    return `${startText} – ${isArabic ? "حتى الآن" : "Present"
      }`;
  }

  if (startText && endText) {
    return `${startText} – ${endText}`;
  }

  if (startText) return startText;
  if (endText) return endText;

  if (single) {
    return formatParsedDate(single);
  }

  return String(
    firstValue(item?.date, item?.period, "")
  );
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

/* =========================================
   EXPERIENCE CALCULATION

   - Uses all professional jobs.
   - Merges overlapping periods.
   - Calculates ongoing jobs until today.
   - Does not count a gap between jobs.
========================================= */

const DAY_MS = 24 * 60 * 60 * 1000;

const calculateExperience = (items) => {
  const today = new Date();

  const todayUTC = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const periods = asArray(items)
    .map((item) => {
      const dates = extractDates(item);

      if (!dates.start) return null;

      const start =
        dates.start.date.getTime();

      const end = dates.current
        ? todayUTC
        : dates.end?.date.getTime();

      if (
        typeof end !== "number" ||
        !Number.isFinite(end) ||
        start > end
      ) {
        return null;
      }

      return {
        start,
        end: Math.min(end, todayUTC),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.start - b.start);

  if (!periods.length) {
    return {
      years: 0,
      months: 0,
      days: 0,
      totalDays: 0,
      totalMonths: 0,
    };
  }

  const merged = [];

  periods.forEach((period) => {
    const previous = merged[merged.length - 1];

    if (
      previous &&
      period.start <= previous.end + DAY_MS
    ) {
      previous.end = Math.max(
        previous.end,
        period.end
      );
    } else {
      merged.push({ ...period });
    }
  });

  const totalDays = merged.reduce(
    (sum, period) =>
      sum +
      Math.floor(
        (period.end - period.start) / DAY_MS
      ) +
      1,
    0
  );

  const totalMonths = Math.floor(
    totalDays / (365.2425 / 12)
  );

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return {
    years,
    months,
    days: Math.round(
      totalDays -
      totalMonths * (365.2425 / 12)
    ),
    totalDays,
    totalMonths,
  };
};

const formatExperience = (
  experience,
  isArabic
) => {
  const { years, months, totalDays } =
    experience;

  if (!totalDays) {
    return isArabic
      ? "غير محدد"
      : "Not specified";
  }

  const parts = [];

  if (years) {
    if (isArabic) {
      parts.push(
        years === 1
          ? "سنة"
          : years === 2
            ? "سنتان"
            : `${years} سنوات`
      );
    } else {
      parts.push(
        `${years} ${years === 1 ? "year" : "years"
        }`
      );
    }
  }

  if (months) {
    if (isArabic) {
      parts.push(
        months === 1
          ? "شهر"
          : months === 2
            ? "شهران"
            : `${months} أشهر`
      );
    } else {
      parts.push(
        `${months} ${months === 1 ? "month" : "months"
        }`
      );
    }
  }

  if (!parts.length) {
    return isArabic
      ? "أقل من شهر"
      : "Less than one month";
  }

  return parts.join(
    isArabic ? " و" : " and "
  );
};

/* =========================================
   EMPLOYMENT TYPE
========================================= */

const getEmploymentType = (
  item,
  isArabic
) => {
  const type = String(
    item?.employmentType || ""
  ).toLowerCase();

  const labels = {
    "full-time": {
      ar: "دوام كامل",
      en: "Full-time",
    },
    "part-time": {
      ar: "دوام جزئي",
      en: "Part-time",
    },
    seasonal: {
      ar: "عمل موسمي",
      en: "Seasonal",
    },
    contract: {
      ar: "عمل بعقد",
      en: "Contract",
    },
    internship: {
      ar: "تدريب",
      en: "Internship",
    },
  };

  const selected = labels[type];

  if (selected) {
    return isArabic
      ? selected.ar
      : selected.en;
  }

  return asText(
    item?.employmentType,
    isArabic
  );
};

/* =========================================
   DOCUMENT HELPERS
========================================= */

const DOCUMENT_TYPES = {
  diploma: {
    ar: "وثيقة الدبلوم",
    en: "Diploma Document",
  },
  graduation: {
    ar: "وثيقة التخرج",
    en: "Graduation Document",
  },
  completion: {
    ar: "شهادة إتمام الدورة",
    en: "Completion Certificate",
  },
  attendance: {
    ar: "شهادة حضور",
    en: "Attendance Certificate",
  },
  appreciation: {
    ar: "شهادة شكر وتقدير",
    en: "Appreciation Certificate",
  },
  participation: {
    ar: "شهادة مشاركة",
    en: "Participation Certificate",
  },
  experience: {
    ar: "شهادة خبرة",
    en: "Experience Certificate",
  },
  volunteering: {
    ar: "سجل الساعات التطوعية",
    en: "Volunteer Hours Record",
  },
  certificate: {
    ar: "الشهادة",
    en: "Certificate",
  },
  document: {
    ar: "الوثيقة",
    en: "Document",
  },
};

const documentLabel = (
  type,
  isArabic
) => {
  const selected =
    DOCUMENT_TYPES[type] ||
    DOCUMENT_TYPES.document;

  return isArabic
    ? selected.ar
    : selected.en;
};

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
    /^(javascript|data):/i.test(clean)
  ) {
    return "";
  }

  const base = String(
    process.env.PUBLIC_URL || ""
  ).replace(/\/+$/, "");

  const relative = clean.replace(
    /^\/+/,
    ""
  );

  let basePath = "";

  try {
    basePath = new URL(
      base || "/",
      window.location.origin
    ).pathname.replace(/^\/+|\/+$/g, "");
  } catch {
    basePath = base.replace(
      /^\/+|\/+$/g,
      ""
    );
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

const getFileExtension = (path) => {
  const clean = String(path || "")
    .split("?")[0]
    .split("#")[0];

  const match = clean.match(
    /\.([a-z0-9]+)$/i
  );

  return match
    ? match[1].toUpperCase()
    : "";
};

const fileType = (path) => {
  const extension =
    getFileExtension(path);

  if (extension === "PDF") {
    return "pdf";
  }

  if (
    [
      "PNG",
      "JPG",
      "JPEG",
      "WEBP",
      "GIF",
      "AVIF",
    ].includes(extension)
  ) {
    return "image";
  }

  return "other";
};

const getFileFormatLabel = (
  path,
  isArabic
) => {
  return (
    getFileExtension(path) ||
    (isArabic
      ? "صيغة غير محددة"
      : "Unknown format")
  );
};

/* =========================================
   SKILL HELPERS
========================================= */

const getSkillName = (
  skill,
  isArabic
) => {
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
  isArabic
) => {
  if (
    !skill ||
    typeof skill !== "object"
  ) {
    return "";
  }

  const level = firstValue(
    skill.level,
    skill.proficiency
  );

  if (!level) return "";

  const labels = {
    advanced: {
      ar: "متقدم",
      en: "Advanced",
    },
    intermediate: {
      ar: "متوسط",
      en: "Intermediate",
    },
    basic: {
      ar: "أساسي",
      en: "Basic",
    },
    beginner: {
      ar: "مبتدئ",
      en: "Beginner",
    },
    good: {
      ar: "جيد",
      en: "Good",
    },
  };

  const selected =
    labels[String(level).toLowerCase()];

  if (selected) {
    return isArabic
      ? selected.ar
      : selected.en;
  }

  return asText(level, isArabic);
};

/* =========================================
   MAIN STYLES
========================================= */

const Main = styled.main`
  --about-bg:
    var(--color-background, #f4f7fb);

  --about-card:
    var(--color-card-background, #ffffff);

  --about-section:
    var(--color-section-background, #edf3f9);

  --about-neutral:
    var(--color-card-background, #ffffff);

  --about-border:
    var(--color-border, #d5e0eb);

  --about-border-strong:
    var(--color-border-strong, #bfcfdf);

  --about-text:
    var(--color-text-primary, #172435);

  --about-muted:
    var(--color-text-secondary, #475569);

  --about-primary:
    var(--color-primary, #0065a8);

  --about-on-primary: #ffffff;

  width: 100%;
  min-width: 0;
  overflow-x: clip;

  background: var(--about-bg);
  color: var(--about-text);

  &,
  & * {
    box-shadow: none !important;
  }

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

  gap: clamp(45px, 6vw, 75px);

  padding-block:
    clamp(35px, 5vw, 60px)
    clamp(65px, 8vw, 100px);

  @media (max-width: 600px) {
    gap: 45px;
  }
`;

const Section = styled.section`
  min-width: 0;

  scroll-margin-top:
    calc(var(--header-height, 70px) + 20px);

  &.alternate {
    padding: clamp(18px, 3vw, 34px);

    border: 1px solid var(--about-border);
    border-radius: 15px;

    background: var(--about-section);
  }

  @media (max-width: 600px) {
    &.alternate {
      padding: 17px 12px;
    }
  }
`;

const SectionHeading = styled.div`
  margin-bottom: 24px;

  .number {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 9px;

    color: var(--about-primary);

    font-size: 0.83rem;
    font-weight: 800;
  }

  h2 {
    position: relative;

    margin: 0 0 12px;
    padding-inline-start: 16px;

    color: var(--about-text);

    font-size: clamp(
      1.45rem,
      3vw,
      2rem
    );

    line-height: 1.5;
  }

  h2::before {
    content: "";

    position: absolute;

    inset-inline-start: 0;
    top: 12%;
    bottom: 12%;

    width: 4px;
    border-radius: 4px;

    background: var(--about-primary);
  }

  p {
    max-width: 850px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.92rem;
    line-height: 1.95;
  }
`;

const Card = styled.article`
  min-width: 0;

  padding: clamp(
    18px,
    2.5vw,
    25px
  );

  border: 1px solid var(--about-border);
  border-radius: 12px;

  background: var(--about-card);

  transition: border-color 0.2s ease;

  &:hover {
    border-color:
      var(--about-border-strong);
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 15px;
`;

/* =========================================
   PAGE HEADER
========================================= */

const AboutHeaderTitle = styled.h1`
  display: block;
  visibility: visible;
  opacity: 1;

  width: 100%;

  margin: 18px 0 10px;
  padding: 0;

  color: var(--about-text);

  font-size: clamp(
    2rem,
    4vw,
    3rem
  );

  font-weight: 800;
  line-height: 1.45;
  text-align: start;
`;

const AboutHeaderDescription = styled.p`
  display: block;
  visibility: visible;
  opacity: 1;

  max-width: 850px;
  margin: 0;
  padding: 0;

  color: var(--about-muted);

  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  text-align: start;
`;

/* =========================================
   INTRODUCTION
========================================= */

const IntroGrid = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.35fr)
    minmax(270px, 0.8fr);

  gap: clamp(
    22px,
    4vw,
    40px
  );

  align-items: start;

  @media (max-width: 850px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const IntroText = styled.div`
  h2 {
    margin: 0 0 17px;

    color: var(--about-text);

    font-size: clamp(
      1.6rem,
      3vw,
      2.2rem
    );

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
    border-bottom: 0;
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

    font-size: 0.91rem;
    font-weight: 650;
    line-height: 1.8;

    overflow-wrap: anywhere;
  }
`;

/* =========================================
   CONTENT ENTRIES
========================================= */

const EntryCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 13px;
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

    font-size: 1.06rem;
    line-height: 1.75;
  }

  .subtitle {
    display: block;

    color: var(--about-muted);

    font-size: 0.89rem;
    line-height: 1.85;
  }
`;

const NeutralTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  align-self: flex-start;

  padding: 8px 12px;

  border: 1px solid
    var(--about-border-strong);

  border-radius: 7px;

  background: var(--about-neutral);
  color: var(--about-text);

  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.65;

  svg {
    flex-shrink: 0;
    color: var(--about-primary);
  }
`;

const DateTag = styled(NeutralTag)`
  flex-shrink: 0;

  .date-text {
    unicode-bidi: isolate;
  }
`;

const PresentTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 3px 9px;

  border: 1px solid #16a34a;
  border-radius: 6px;

  background: rgba(22, 163, 74, 0.09);
  color: #15803d;

  font-size: 0.78rem;
  font-weight: 800;
  white-space: nowrap;

  svg {
    color: currentColor;
  }
`;

const DateDisplay = ({
  item,
  isArabic,
}) => {
  const dates = extractDates(item);

  const start = formatParsedDate(
    dates.start
  );

  const end = formatParsedDate(
    dates.end
  );

  if (!start && !end && !dates.single) {
    const fallback = getDateLabel(
      item,
      isArabic
    );

    if (!fallback) return null;

    return (
      <DateTag>
        <FiCalendar />
        <span className="date-text" dir="auto">
          {fallback}
        </span>
      </DateTag>
    );
  }

  return (
    <DateTag>
      <FiCalendar />

      <span
        className="date-text"
        dir="ltr"
      >
        {start || end || formatParsedDate(
          dates.single
        )}
      </span>

      {start && (end || dates.current) && (
        <>
          <span aria-hidden="true">–</span>

          {dates.current ? (
            <PresentTag>
              <FiCheckCircle />

              {isArabic
                ? "حتى الآن"
                : "Present"}
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

const Description = styled.p`
  margin: 0;

  color: var(--about-muted);

  font-size: 0.91rem;
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
    font-weight: 750;
  }
`;

const DocumentActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 3px;
  padding-top: 14px;

  border-top:
    1px solid var(--about-border);
`;

const OutlineButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-height: 43px;
  padding: 10px 16px;

  border: 1px solid
    var(--about-border-strong);

  border-radius: 7px;

  background: var(--about-neutral);
  color: var(--about-text);

  font: inherit;
  font-size: 0.86rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    color: var(--about-primary);
  }

  &:hover {
    border-color: var(--about-primary);
    color: var(--about-primary);
  }

  &:focus-visible {
    outline:
      2px solid var(--about-primary);

    outline-offset: 3px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const FileFormatBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 3px 7px;

  border: 1px solid
    var(--about-border-strong);

  border-radius: 5px;

  color: var(--about-primary);

  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1.4;
`;

/* =========================================
   EXPERIENCE TIMELINE
========================================= */

const ExperienceSummary = styled(Card)`
  display: flex;
  align-items: center;
  gap: 17px;

  margin-bottom: 25px;

  border-color: var(--about-primary);

  .summary-icon {
    display: grid;
    place-items: center;

    flex-shrink: 0;

    width: 53px;
    height: 53px;

    border-radius: 12px;

    background: var(--about-section);
    color: var(--about-primary);

    font-size: 1.5rem;
  }

  .summary-content {
    min-width: 0;
  }

  .summary-label {
    display: block;

    margin-bottom: 5px;

    color: var(--about-muted);

    font-size: 0.86rem;
  }

  .summary-value {
    display: block;

    color: var(--about-primary);

    font-size: clamp(
      1.15rem,
      2.5vw,
      1.55rem
    );

    font-weight: 800;
    line-height: 1.7;
  }

  .summary-note {
    display: block;
    margin-top: 5px;

    color: var(--about-muted);

    font-size: 0.79rem;
    line-height: 1.8;
  }

  @media (max-width: 500px) {
    align-items: flex-start;
    gap: 12px;
    padding: 16px;

    .summary-icon {
      width: 44px;
      height: 44px;
    }
  }
`;

const Timeline = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 19px;

  padding-inline-start: 35px;

  &::before {
    content: "";

    position: absolute;

    inset-inline-start: 11px;
    top: 17px;
    bottom: 17px;

    width: 2px;

    background:
      var(--about-border-strong);
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

    border: 3px solid
      var(--about-primary);

    border-radius: 50%;

    background: var(--about-card);

    z-index: 1;
  }

  &[data-current="true"]::before {
    border-color: #16a34a;
    background: #16a34a;
  }

  &[data-current="true"] ${EntryCard} {
    border-color: rgba(
      22,
      163,
      74,
      0.45
    );
  }

  @media (max-width: 600px) {
    &::before {
      inset-inline-start: -25px;
      width: 12px;
      height: 12px;
    }
  }
`;

/* =========================================
   SKILLS ACCORDION
========================================= */

const SkillsList = styled.div`
  display: grid;
  gap: 14px;
`;

const SkillAccordion = styled.div`
  min-width: 0;
  overflow: hidden;

  border: 1px solid var(--about-border);
  border-radius: 12px;

  background: var(--about-card);

  &[data-open="true"] {
    border-color:
      var(--about-border-strong);
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
    outline:
      2px solid var(--about-primary);

    outline-offset: -3px;
  }

  .group-icon {
    display: grid;
    place-items: center;

    flex-shrink: 0;

    width: 41px;
    height: 41px;

    border: 1px solid var(--about-border);
    border-radius: 8px;

    background: var(--about-neutral);
    color: var(--about-primary);
  }

  .group-name {
    flex: 1;
    min-width: 0;
  }

  .group-name strong {
    display: block;

    font-size: 1rem;
    line-height: 1.65;
  }

  .group-name small {
    display: block;
    margin-top: 3px;

    color: var(--about-muted);
    font-size: 0.79rem;
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
    grid-template-columns:
      minmax(0, 1fr);

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
  border-radius: 9px;

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

    font-size: 0.93rem;
    font-weight: 750;
    line-height: 1.7;
  }

  .skill-level {
    color: var(--about-primary);

    font-size: 0.76rem;
    font-weight: 650;
  }

  .source-label {
    display: flex;
    align-items: center;
    gap: 7px;

    padding-top: 10px;

    border-top:
      1px solid var(--about-border);

    color: var(--about-muted);

    font-size: 0.78rem;
    font-weight: 700;
  }

  .source-label svg {
    color: var(--about-primary);
  }
`;

const SkillSources = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin: 0;
  padding-inline-start: 18px;

  color: var(--about-muted);

  font-size: 0.8rem;
  line-height: 1.8;

  li::marker {
    color: var(--about-primary);
  }
`;

/* =========================================
   VOLUNTEERING
========================================= */

const VolunteerSummary = styled(Card)`
  margin-bottom: 17px;

  border-color: var(--about-primary);

  .summary-heading {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 14px;
  }

  .summary-heading svg {
    flex-shrink: 0;

    color: var(--about-primary);
    font-size: 1.4rem;
  }

  .summary-heading h3 {
    margin: 0;

    color: var(--about-text);

    font-size: 1.08rem;
  }

  .summary-value {
    display: block;

    margin-bottom: 10px;

    color: var(--about-primary);

    font-size: 1.55rem;
    font-weight: 800;
  }

  .summary-description {
    margin: 0 0 15px;

    color: var(--about-muted);

    font-size: 0.9rem;
    line-height: 1.95;
  }

  .summary-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-bottom: 12px;
  }
`;

/* =========================================
   CAREER GOAL
========================================= */

const GoalCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  padding: clamp(
    22px,
    4vw,
    35px
  );

  border-color: var(--about-primary);

  h2 {
    margin: 0 0 12px;

    color: var(--about-text);

    font-size: clamp(
      1.4rem,
      3vw,
      1.9rem
    );
  }

  p {
    max-width: 750px;
    margin: 0;

    color: var(--about-muted);

    font-size: 0.94rem;
    line-height: 2;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  flex-shrink: 0;

  min-height: 46px;
  padding: 12px 20px;

  border-radius: 8px;

  background: var(--about-primary);
  color: var(--about-on-primary);

  font-size: 0.9rem;
  font-weight: 750;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid
      var(--about-primary);

    outline-offset: 3px;
  }
`;

/* =========================================
   DOCUMENT MODAL

   - Same preview on mobile and desktop.
   - No external open button.
   - Images are preferred.
   - PDF iframe remains as a fallback.
========================================= */

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(8px, 2vw, 24px);

  background: rgba(8, 17, 29, 0.82);
`;

const ModalPanel = styled.div`
  display: flex;
  flex-direction: column;

  width: min(100%, 1100px);
  max-height: 94vh;
  max-height: 94dvh;

  overflow: hidden;

  border: 1px solid var(--about-border);
  border-radius: 13px;

  background: var(--about-card);
  color: var(--about-text);

  @media (max-width: 600px) {
    width: 100%;
    max-height: 96vh;
    max-height: 96dvh;

    border-radius: 9px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  flex-shrink: 0;

  padding: 15px 19px;

  border-bottom:
    1px solid var(--about-border);

  .modal-heading {
    min-width: 0;
  }

  h2 {
    margin: 0 0 5px;

    color: var(--about-text);

    font-size: 1.02rem;
    line-height: 1.7;

    overflow-wrap: anywhere;
  }

  p {
    margin: 0;

    color: var(--about-muted);

    font-size: 0.8rem;
    line-height: 1.7;
  }

  @media (max-width: 600px) {
    padding: 12px;

    h2 {
      font-size: 0.92rem;
    }
  }
`;

const CloseButton = styled.button`
  display: grid;
  place-items: center;

  flex-shrink: 0;

  width: 39px;
  height: 39px;

  border: 1px solid var(--about-border);
  border-radius: 8px;

  background: var(--about-neutral);
  color: var(--about-text);

  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    border-color: var(--about-primary);
    color: var(--about-primary);
  }

  &:focus-visible {
    outline: 2px solid
      var(--about-primary);

    outline-offset: 2px;
  }
`;

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  min-height: 0;
  overflow: auto;

  padding: 14px;

  background: var(--about-section);

  img {
    display: block;

    max-width: 100%;
    max-height: 74vh;
    max-height: 74dvh;

    width: auto;
    height: auto;

    object-fit: contain;

    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
  }

  iframe {
    display: block;

    width: 100%;
    height: 72vh;
    height: 72dvh;

    border: 0;
    background: #ffffff;
  }

  @media (max-width: 600px) {
    padding: 8px;

    img {
      max-height: 78vh;
      max-height: 78dvh;
    }

    iframe {
      height: 76vh;
      height: 76dvh;
    }
  }
`;

const ModalMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  min-height: 220px;
  padding: 25px;

  color: var(--about-muted);
  text-align: center;

  svg {
    color: var(--about-primary);
    font-size: 2rem;
  }

  p {
    margin: 0;
    line-height: 1.9;
  }
`;

/* =========================================
   DOCUMENT LOADING INDICATOR
========================================= */

const DocumentLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 240px;
  width: 100%;
  padding: 30px 16px;
  color: var(--about-muted);
  text-align: center;

  .spinner {
    width: 46px;
    height: 46px;
    border: 4px solid var(--about-border);
    border-top-color: var(--about-primary);
    border-radius: 50%;
    animation: about-spin 0.85s linear infinite;
  }

  p { margin: 0; font-size: 0.95rem; line-height: 1.9; }

  .dots { display: flex; gap: 7px; }
  .dots span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--about-primary);
    animation: about-pulse 1.2s ease-in-out infinite;
  }
  .dots span:nth-child(2) { animation-delay: 0.15s; }
  .dots span:nth-child(3) { animation-delay: 0.3s; }

  @keyframes about-spin { to { transform: rotate(360deg); } }
  @keyframes about-pulse {
    0%, 70%, 100% { opacity: 0.3; transform: translateY(0); }
    35% { opacity: 1; transform: translateY(-6px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner, .dots span { animation: none; }
  }
`;

/* =========================================
   REUSABLE SECTION TITLE
========================================= */

const SectionTitle = ({
  number,
  icon: Icon,
  title,
  description,
}) => (
  <SectionHeading>
    <span className="number">
      <Icon />
      {number}
    </span>

    <h2>{title}</h2>

    {description && (
      <p>{description}</p>
    )}
  </SectionHeading>
);

/* =========================================
   DOCUMENT PREVIEW BUTTON
========================================= */

const DocumentButton = ({
  item,
  title,
  fallbackType,
  isArabic,
  onPreview,
}) => {
  if (!item?.document) {
    return null;
  }

  const type =
    item.documentType ||
    fallbackType ||
    "document";

  const format = getFileFormatLabel(
    item.document,
    isArabic
  );

  return (
    <DocumentActions>
      <OutlineButton
        type="button"
        onClick={() =>
          onPreview({
            path: item.document,
            title,
            documentType: type,
          })
        }
      >
        <FiEye />

        {isArabic ? "عرض " : "View "}

        {documentLabel(type, isArabic)}

        <FileFormatBadge dir="ltr">
          {format}
        </FileFormatBadge>
      </OutlineButton>
    </DocumentActions>
  );
};

/* =========================================
   REUSABLE CONTENT ENTRY
========================================= */

const ContentEntry = ({
  item,
  title,
  subtitle,
  description,
  grade,
  gradeLabel,
  employmentType,
  hours,
  fallbackDocumentType,
  isArabic,
  onPreview,
}) => (
  <EntryCard>
    <EntryHeader>
      <EntryInfo>
        <h3>
          {asText(title, isArabic)}
        </h3>

        {subtitle && (
          <span className="subtitle">
            {asText(
              subtitle,
              isArabic
            )}
          </span>
        )}
      </EntryInfo>

      <DateDisplay
        item={item}
        isArabic={isArabic}
      />
    </EntryHeader>

    {employmentType && (
      <MetaRow>
        <NeutralTag>
          <FiBriefcase />
          {employmentType}
        </NeutralTag>
      </MetaRow>
    )}

    {description && (
      <Description>
        {asText(
          description,
          isArabic
        )}
      </Description>
    )}

    {(grade || hours) && (
      <MetaRow>
        {grade && (
          <NeutralTag>
            <FiAward />

            {gradeLabel}

            <span className="grade-value">
              {grade}
            </span>
          </NeutralTag>
        )}

        {hours && (
          <NeutralTag>
            <FiClock />

            {asText(
              hours,
              isArabic
            )}
          </NeutralTag>
        )}
      </MetaRow>
    )}

    {item?.note && (
      <MetaRow>
        <NeutralTag>
          <FiInfo />

          {asText(
            item.note,
            isArabic
          )}
        </NeutralTag>
      </MetaRow>
    )}

    <DocumentButton
      item={item}
      title={asText(
        title,
        isArabic
      )}
      fallbackType={
        fallbackDocumentType
      }
      isArabic={isArabic}
      onPreview={onPreview}
    />
  </EntryCard>
);

/* =========================================
   DOCUMENT MODAL
========================================= */

const DocumentModal = ({
  item,
  onClose,
  isArabic,
}) => {
  const closeRef = useRef(null);
  const titleId = useId();
  const { t } = useTranslation("about");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoadError(false);
  }, [item?.path]);

  useEffect(() => {
    if (!item) return undefined;

    const previousOverflow =
      document.body.style.overflow;

    const previousFocus =
      document.activeElement;

    document.body.style.overflow =
      "hidden";

    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const modal =
        closeRef.current?.closest(
          '[role="dialog"]'
        );

      if (!modal) return;

      const elements = [
        ...modal.querySelectorAll(
          "button:not([disabled]), a[href], iframe"
        ),
      ].filter(
        (element) =>
          element.getClientRects().length > 0
      );

      if (!elements.length) return;

      const first = elements[0];
      const last =
        elements[elements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previousFocus?.focus?.();
    };
  }, [item, onClose]);

  if (!item) return null;

  const url = documentUrl(item.path);
  const type = fileType(item.path);

  const label = documentLabel(
    item.documentType,
    isArabic
  );

  const format = getFileFormatLabel(
    item.path,
    isArabic
  );

  return (
    <ModalBackdrop
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <ModalPanel
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <ModalHeader>
          <div className="modal-heading">
            <h2 id={titleId}>
              {item.title || label}
            </h2>

            <p>
              {label} — {format}
            </p>
          </div>

          <CloseButton
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={
              isArabic
                ? "إغلاق المعاينة"
                : "Close preview"
            }
          >
            <FiX />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {!url ? (
            <ModalMessage>
              <FiFileText />
              <p>{t("documentPreview.unavailable")}</p>
            </ModalMessage>
          ) : type === "image" || type === "pdf" ? (
            <div style={{ width: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 240 }}>
              {loading && !loadError && (
                <DocumentLoading role="status" aria-live="polite">
                  <span className="spinner" aria-hidden="true" />
                  <p>{t("documentPreview.loading")}</p>
                  <div className="dots" aria-hidden="true"><span /><span /><span /></div>
                </DocumentLoading>
              )}
              {loadError && (
                <ModalMessage role="alert">
                  <FiFileText />
                  <p>{t("documentPreview.error")}</p>
                </ModalMessage>
              )}
              {type === "image" ? (
                <img
                  key={url}
                  src={url}
                  alt={item.title || label}
                  draggable={false}
                  style={{ display: loading || loadError ? "none" : "block" }}
                  onContextMenu={(event) => event.preventDefault()}
                  onLoad={() => setLoading(false)}
                  onError={() => { setLoading(false); setLoadError(true); }}
                />
              ) : (
                <iframe
                  key={url}
                  src={`${url}#toolbar=0&navpanes=0&scrollbar=1`}
                  title={item.title || label}
                  style={{ display: loading || loadError ? "none" : "block" }}
                  onLoad={() => setLoading(false)}
                  onError={() => { setLoading(false); setLoadError(true); }}
                />
              )}
            </div>
          ) : (
            <ModalMessage>
              <FiFileText />
              <p>{t("documentPreview.unsupported")}</p>
            </ModalMessage>
          )}
        </ModalBody>
      </ModalPanel>
    </ModalBackdrop>
  );
};

/* =========================================
   SKILL GROUP ICONS
========================================= */

const skillGroupIcons = [
  FiCode,
  FiLayers,
  FiTool,
  FiMonitor,
  FiBookOpen,
  FiUsers,
  FiMonitor,
];

/* =========================================
   MAIN ABOUT COMPONENT
========================================= */

const About = () => {
  const {
    t,
    i18n,
  } = useTranslation("about");

  const isArabic = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar"
  )
    .toLowerCase()
    .startsWith("ar");

  const pageTitle = t(
    "pageTitle",
    {
      ns: "about",
      defaultValue: isArabic
        ? "عني"
        : "About Me",
    }
  );

  const pageDesc = t(
    "pageDesc",
    {
      ns: "about",
      defaultValue: isArabic
        ? "تعرف على مؤهلاتي العلمية وخبراتي المهنية وشهاداتي ومهاراتي ومشاركاتي التطوعية."
        : "Learn about my education, professional experience, certificates, skills, and volunteer activities.",
    }
  );

  const translated = t(
    "content",
    {
      ns: "about",
      returnObjects: true,
    }
  );

  const content =
    translated &&
      typeof translated === "object" &&
      !Array.isArray(translated)
      ? translated
      : {};

  const [
    preview,
    setPreview,
  ] = useState(null);

  const [
    openSkillIndex,
    setOpenSkillIndex,
  ] = useState(null);

  const toggleSkillGroup = (index) => {
    setOpenSkillIndex(
      (previous) =>
        previous === index
          ? null
          : index
    );
  };

  const closePreview = useCallback(
    () => {
      setPreview(null);
    },
    []
  );

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

  const aiSkillGroup = {
    title: t("aiSkills.title"),
    items: ["chatgpt", "gemini", "claude", "deepseek"].map((key) => ({
      name: t(`aiSkills.tools.${key}.name`),
      sources: [t(`aiSkills.tools.${key}.usage`)],
    })),
  };

  const skillGroups = [
    ...asArray(content.skills?.groups),
    aiSkillGroup,
  ];

  const volunteerSummary =
    content.volunteering?.summary || {};

  const experienceSignature = JSON.stringify(
    content.experience?.items || []
  );

  const totalExperience = useMemo(
    () => calculateExperience(experience),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [experienceSignature]
  );

  const renderEntries = (
    items,
    getProps
  ) =>
    items.map((item, index) => (
      <ContentEntry
        key={`${index}-${getSortTime(item)}`}
        item={item}
        isArabic={isArabic}
        onPreview={setPreview}
        {...getProps(item)}
      />
    ));

  return (
    <Main
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* PAGE HEADER */}


      <PageHeader>
        <PageHeaderContainer>
          <BreadCrumb value="about" />

          <AboutHeaderTitle>
            {pageTitle}
          </AboutHeaderTitle>

          <AboutHeaderDescription>
            {pageDesc}
          </AboutHeaderDescription>
        </PageHeaderContainer>
      </PageHeader>


      <MainContent>
        {/* INTRODUCTION */}

        <Section id="about-intro">
          <IntroGrid>
            <IntroText>
              <h2>
                {content.intro?.title ||
                  (isArabic
                    ? "نبذة عني"
                    : "About Me")}
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
                <FiUser />

                {content.infoTitle ||
                  (isArabic
                    ? "معلومات سريعة"
                    : "Quick Information")}
              </h3>

              {asArray(
                content.profile
              ).map((item, index) => (
                <ProfileRow
                  key={index}
                >
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
              ))}
            </ProfileCard>
          </IntroGrid>
        </Section>

        {/* EDUCATION */}

        <Section
          id="about-education"
          className="alternate"
        >
          <SectionTitle
            number="01"
            icon={FiBookOpen}
            title={
              content.education?.title ||
              (isArabic
                ? "رحلتي التعليمية"
                : "Education")
            }
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
                description: item.field,
                grade: item.grade,
                gradeLabel:
                  content.education
                    ?.gradeLabel ||
                  (isArabic
                    ? "المعدل التراكمي"
                    : "GPA"),
                fallbackDocumentType:
                  "graduation",
              })
            )}
          </CardList>
        </Section>

        {/* PROFESSIONAL EXPERIENCE */}

        <Section id="about-experience">
          <SectionTitle
            number="02"
            icon={FiBriefcase}
            title={
              content.experience?.title ||
              (isArabic
                ? "خبراتي المهنية"
                : "Professional Experience")
            }
            description={
              content.experience?.description
            }
          />

          <ExperienceSummary>
            <div className="summary-icon">
              <FiClock />
            </div>

            <div className="summary-content">
              <span className="summary-label">
                {isArabic
                  ? "إجمالي سنوات الخبرة المهنية"
                  : "Total Professional Experience"}
              </span>

              <strong className="summary-value">
                {formatExperience(
                  totalExperience,
                  isArabic
                )}
              </strong>

              <span className="summary-note">
                {isArabic
                  ? "يُحسب الإجمالي من جميع فترات العمل الفعلية دون تكرار الفترات المتداخلة، ويُحدَّث تلقائيًا للوظائف المستمرة."
                  : "Calculated from actual employment periods without double-counting overlapping dates. Ongoing roles update automatically."}
              </span>
            </div>
          </ExperienceSummary>

          <Timeline>
            {experience.map(
              (item, index) => {
                const dates =
                  extractDates(item);

                return (
                  <TimelineItem
                    key={`${index}-${getSortTime(item)}`}
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
                          item,
                          isArabic
                        )
                      }
                      fallbackDocumentType="experience"
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

        {/* CERTIFICATES */}

        <Section
          id="about-certificates"
          className="alternate"
        >
          <SectionTitle
            number="03"
            icon={FiAward}
            title={
              content.certificates?.title ||
              (isArabic
                ? "الشهادات والدورات التدريبية"
                : "Certificates and Courses")
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
                fallbackDocumentType:
                  "certificate",
              })
            )}
          </CardList>
        </Section>

        {/* SKILLS */}

        <Section id="about-skills">
          <SectionTitle
            number="04"
            icon={FiCode}
            title={
              content.skills?.title ||
              (isArabic
                ? "مهاراتي"
                : "My Skills")
            }
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
                      onClick={() =>
                        toggleSkillGroup(
                          index
                        )
                      }
                    >
                      <span className="group-icon">
                        <Icon />
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
                          {isArabic
                            ? "مهارة"
                            : items.length === 1
                              ? "skill"
                              : "skills"}
                        </small>
                      </span>

                      <FiChevronDown className="chevron" />
                    </SkillAccordionButton>

                    {isOpen && (
                      <SkillContent>
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
                                isArabic
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
                                        <FiBookOpen />

                                        {isArabic
                                          ? "مصادر اكتساب المهارة"
                                          : "Skill Sources"}
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

        {/* VOLUNTEERING */}

        <Section
          id="about-volunteering"
          className="alternate"
        >
          <SectionTitle
            number="05"
            icon={FiHeart}
            title={
              content.volunteering?.title ||
              (isArabic
                ? "المشاركات التطوعية"
                : "Volunteer Activities")
            }
            description={
              content.volunteering?.description
            }
          />

          {Object.keys(
            volunteerSummary
          ).length > 0 && (
              <VolunteerSummary>
                <div className="summary-heading">
                  <FiHeart />

                  <h3>
                    {volunteerSummary.label ||
                      (isArabic
                        ? "السجل التطوعي"
                        : "Volunteer Record")}
                  </h3>
                </div>

                {volunteerSummary.value && (
                  <strong className="summary-value">
                    {volunteerSummary.value}
                  </strong>
                )}

                <div className="summary-meta">
                  {volunteerSummary.opportunities && (
                    <NeutralTag>
                      <FiUsers />

                      {volunteerSummary.opportunities}{" "}
                      {isArabic
                        ? "فرصة تطوعية"
                        : "Volunteer Opportunities"}
                    </NeutralTag>
                  )}

                  <DateDisplay
                    item={volunteerSummary}
                    isArabic={isArabic}
                  />
                </div>

                {volunteerSummary.description && (
                  <p className="summary-description">
                    {
                      volunteerSummary.description
                    }
                  </p>
                )}

                <DocumentButton
                  item={volunteerSummary}
                  title={
                    volunteerSummary.label ||
                    (isArabic
                      ? "السجل التطوعي"
                      : "Volunteer Record")
                  }
                  fallbackType="volunteering"
                  isArabic={isArabic}
                  onPreview={setPreview}
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
                fallbackDocumentType:
                  "participation",
              })
            )}
          </CardList>
        </Section>

        {/* CAREER GOAL */}

        <Section id="about-goal">
          <GoalCard>
            <div>
              <h2>
                {content.goal?.title ||
                  (isArabic
                    ? "تطلعاتي المهنية"
                    : "Career Aspirations")}
              </h2>

              <p>
                {
                  content.goal?.description
                }
              </p>
            </div>

            <ContactButton to="/contact">
              {isArabic
                ? "تواصل معي"
                : "Contact Me"}

              <FiArrowUpRight />
            </ContactButton>
          </GoalCard>
        </Section>
      </MainContent>

      {/* DOCUMENT PREVIEW */}

      <DocumentModal
        item={preview}
        onClose={closePreview}
        isArabic={isArabic}
      />
    </Main>
  );
};

export default About;
