
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   SHARED TYPOGRAPHY & UI ELEMENTS

   Design System: Modern Professional

   Compatible with:
   - variables.css
   - GlobalStyles.js
   - PageContainer.js
   - Arabic / English
   - RTL / LTR
   - Ocean / Orca themes

   All original exports are preserved.
========================================================= */

/* =========================================================
   01 — LINKS
========================================================= */

export const LinkU = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  max-width: 100%;

  color: var(--color-link);

  font-weight: 600;
  line-height: 1.7;

  text-decoration: none;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;

  overflow-wrap: anywhere;

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast);

  &:hover {
    color: var(--color-link-hover);
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 4px;

    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   02 — PRIMARY TITLE

   Main page or prominent section title.
========================================================= */

export const PTitle = styled.h1`
  margin: 0;

  max-width: 100%;

  color: var(--color-heading);

  font-size: clamp(
    2rem,
    4.5vw,
    3.2rem
  );

  font-weight: 800;
  line-height: 1.4;

  letter-spacing: -0.015em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: clamp(
      1.85rem,
      6vw,
      2.5rem
    );
  }

  @media (max-width: 480px) {
    font-size: clamp(
      1.75rem,
      7vw,
      2.15rem
    );
  }
`;

/* =========================================================
   03 — SECONDARY TITLE

   Standard section heading.
========================================================= */

export const STitle = styled.h2`
  margin: 0;

  max-width: 100%;

  color: var(--color-heading);

  font-size: clamp(
    1.5rem,
    3vw,
    2.1rem
  );

  font-weight: 700;
  line-height: 1.5;

  letter-spacing: -0.01em;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(
      1.4rem,
      5.5vw,
      1.75rem
    );
  }
`;

/* =========================================================
   04 — TERTIARY TITLE

   Cards and smaller content headings.
========================================================= */

export const TTitle = styled.h3`
  margin: 0;

  max-width: 100%;

  color: var(--color-text-primary);

  font-size: clamp(
    1.15rem,
    2vw,
    1.45rem
  );

  font-weight: 700;
  line-height: 1.55;

  overflow-wrap: break-word;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

/* =========================================================
   05 — STANDARD DESCRIPTION
========================================================= */

export const Desc = styled.p`
  margin: 0;

  max-width: 100%;

  color: var(--color-text-primary);

  font-size: var(--size-md);
  font-weight: 400;
  line-height: 1.9;

  overflow-wrap: break-word;
  text-wrap: pretty;
`;

/* =========================================================
   06 — SECONDARY DESCRIPTION
========================================================= */

export const LightDesc = styled.p`
  margin: 0;

  max-width: 100%;

  color: var(--color-text-secondary);

  font-size: clamp(
    0.9rem,
    1.5vw,
    1rem
  );

  font-weight: 400;
  line-height: 1.95;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 480px) {
    font-size: 0.92rem;
    line-height: 1.85;
  }
`;

/* =========================================================
   07 — SECTION HEADER

   Shared layout for section headings.

   Example:
   <SectionHeader>
     <STitle>...</STitle>
     <LightDesc>...</LightDesc>
   </SectionHeader>
========================================================= */

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  min-width: 0;

  gap: clamp(
    10px,
    1.5vw,
    16px
  );

  text-align: start;

  > p {
    max-width: var(--text-measure);
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

/* =========================================================
   08 — TRANSLATED PRIMARY TITLE

   Original API preserved:
   <SectionPTitle value="translation.key" />
========================================================= */

export const SectionPTitle = ({ value }) => {
  const { t } = useTranslation();

  return (
    <PTitle>
      {t(value)}
    </PTitle>
  );
};

/* =========================================================
   09 — TRANSLATED SECONDARY TITLE
========================================================= */

export const SectionSTitle = ({ value }) => {
  const { t } = useTranslation();

  return (
    <STitle>
      {t(value)}
    </STitle>
  );
};

/* =========================================================
   10 — TRANSLATED DESCRIPTION
========================================================= */

export const SectionLightDesc = ({ value }) => {
  const { t } = useTranslation();

  return (
    <LightDesc>
      {t(value)}
    </LightDesc>
  );
};

/* =========================================================
   11 — PAGE HEADER

   Shared header for internal pages:
   - About
   - Projects
   - Project Details
   - Contact

   Breadcrumb and page information share
   one consistent visual background.

   Only vertical padding is reduced when
   the Breadcrumb is the sole child.
========================================================= */

export const PageHeader = styled.header`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;

  align-items: stretch;
  justify-content: center;

  width: 100%;
  min-width: 0;

  gap: clamp(
    16px,
    2.5vw,
    24px
  );

  padding-block:
    clamp(24px, 3vw, 36px)
    clamp(28px, 4vw, 48px);

  background-color:
    var(--color-background-breadcrumb);

  border-bottom:
    1px solid var(--color-border);

  box-sizing: border-box;

  /*
     Breadcrumb styling

     Keep the breadcrumb visually integrated
     with the page header.
  */

  > nav {
    width: 100%;
    min-width: 0;

    margin: 0;
    padding: 0;

    background: transparent;
    background-image: none;

    border: 0;
    box-shadow: none;
  }

  /*
     Page-specific heading styles.

     These rules apply only inside PageHeader.
  */

  h1,
  h2 {
    margin: 0;

    color: var(--color-heading);

    font-size: clamp(
      1.9rem,
      4vw,
      2.8rem
    );

    font-weight: 800;
    line-height: 1.4;

    letter-spacing: -0.015em;

    overflow-wrap: break-word;
    text-wrap: balance;
  }

  /*
     Page description
  */

  p {
    margin: 0;

    color: var(--color-text-secondary);

    font-size: clamp(
      0.92rem,
      1.5vw,
      1rem
    );

    line-height: 1.9;

    overflow-wrap: break-word;
    text-wrap: pretty;
  }

  @media (max-width: 768px) {
    padding-block:
      24px
      36px;

    h1,
    h2 {
      font-size: clamp(
        1.8rem,
        5vw,
        2.3rem
      );
    }
  }

  @media (max-width: 480px) {
    padding-block:
      20px
      30px;

    h1,
    h2 {
      font-size: clamp(
        1.7rem,
        7vw,
        2.1rem
      );
    }

    p {
      font-size: 0.92rem;
      line-height: 1.85;
    }
  }

  /* =====================================================
     COMPACT BREADCRUMB

     Reduce vertical padding only when
     the header contains Breadcrumb alone.

     All original colors, backgrounds,
     typography and other styles are preserved.
  ===================================================== */

  &:has(> nav:only-child) {
    padding-block: 12px;
  }

  @media (max-width: 768px) {
    &:has(> nav:only-child) {
      padding-block: 10px;
    }
  }

  @media (max-width: 480px) {
    &:has(> nav:only-child) {
      padding-block: 8px;
    }
  }
`;

/* =========================================================
   12 — PAGE HEADER CONTAINER

   Uses the same width and gutters
   as PageContainer.js.
========================================================= */

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: var(--container-width);
  min-width: 0;

  margin-inline: auto;

  padding-inline:
    var(--container-gutter);

  gap: clamp(
    10px,
    1.5vw,
    15px
  );

  text-align: start;

  box-sizing: border-box;

  > p {
    max-width: 760px;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

/* =========================================================
   13 — TECHNOLOGY STACK

   Shared container for technology tags.
========================================================= */

export const TechStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: clamp(
    8px,
    1.5vw,
    12px
  );

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

/* =========================================================
   14 — TECHNOLOGY TAG

   Compact, accessible and theme-aware.
========================================================= */

export const Tech = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  max-width: 100%;
  min-height: 36px;

  padding: 7px 12px;

  border:
    1px solid var(--color-border);

  border-radius: 9px;

  background-color:
    var(--color-surface-secondary);

  color:
    var(--color-text-primary);

  font-size: var(--size-sm);
  font-weight: 600;
  line-height: 1.5;

  overflow-wrap: break-word;

  cursor: default;

  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast);

  svg {
    width: 17px;
    height: 17px;

    flex-shrink: 0;
  }

  @media (hover: hover) {
    &:hover {
      border-color:
        var(--color-border-strong);

      background-color:
        var(--color-surface-hover);

      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    min-height: 34px;

    padding: 6px 10px;

    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =========================================================
   15 — FLEX UTILITIES

   Existing name preserved: Clearfix

   Despite its historical name, this is
   a flex layout helper.
========================================================= */

export const Clearfix = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: var(--space-md);
`;

/* =========================================================
   16 — RESPONSIVE TABLE WRAPPER

   The outer wrapper provides:
   - border
   - radius
   - clipping
   - background

   Horizontal scrolling is handled by
   TableContainer.
========================================================= */

export const TableWrapper = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card);

  background-color:
    var(--color-card-background);

  overflow: hidden;

  box-shadow:
    var(--shadow-card);

  box-sizing: border-box;

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`;

/* =========================================================
   17 — RESPONSIVE TABLE CONTAINER

   Provides horizontal scrolling on
   small screens without affecting
   the entire page.
========================================================= */

export const TableContainer = styled.div`
  width: 100%;
  min-width: 0;

  overflow-x: auto;
  overflow-y: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior-inline: contain;

  scrollbar-width: thin;

  scrollbar-color:
    var(--color-scrollbar-thumb)
    transparent;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background:
      var(--color-scrollbar-thumb);

    border-radius: var(--radius-full);
  }

  &::-webkit-scrollbar-thumb:hover {
    background:
      var(--color-border-strong);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 13px 16px;

    border:
      1px solid var(--color-border);

    text-align: start;
    vertical-align: middle;

    overflow-wrap: break-word;
  }

  th {
    background-color:
      var(--color-background-tertiary);

    color:
      var(--color-text-primary);

    font-weight: 700;
  }

  td {
    background-color:
      var(--color-card-background);

    color:
      var(--color-text-primary);
  }

  tbody tr:hover td {
    background-color:
      var(--color-card-background-hover);
  }

  @media (max-width: 768px) {
    table {
      min-width: 620px;
    }

    th,
    td {
      padding: 11px 13px;
    }
  }

  @media (max-width: 480px) {
    th,
    td {
      padding: 10px 12px;

      font-size: 0.88rem;
    }
  }
`;
