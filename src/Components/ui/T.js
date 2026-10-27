
import styled from "styled-components";
import { useTranslation } from "react-i18next";

/* =====================================================
   LINKS
===================================================== */

export const LinkU = styled.a`
  color: var(--color-link);
  text-decoration: none;
  text-underline-offset: 4px;

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast);

  &:hover {
    opacity: 0.85;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* =====================================================
   TYPOGRAPHY
===================================================== */

export const PTitle = styled.h1`
  margin: 0;

  color: var(--color-primary);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.015em;

  overflow-wrap: anywhere;
`;

export const STitle = styled.h2`
  margin: 0;

  color: var(--color-secondary);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 750;
  line-height: 1.5;

  overflow-wrap: anywhere;
`;

export const TTitle = styled.h3`
  margin: 0;

  color: var(--color-tertiary);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 700;
  line-height: 1.6;

  overflow-wrap: anywhere;
`;

export const Desc = styled.p`
  margin: 0;

  color: var(--color-text-primary);
  font-size: var(--size-md);
  line-height: 1.9;

  overflow-wrap: anywhere;
`;

export const LightDesc = styled.p`
  margin: 0;

  color: var(--color-text-secondary);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.95;

  overflow-wrap: anywhere;
`;

/* =====================================================
   SECTION HEADER
===================================================== */

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  gap: clamp(10px, 2vw, 18px);

  text-align: start;
`;

/* =====================================================
   TRANSLATED TEXT COMPONENTS
===================================================== */

export const SectionPTitle = ({ value }) => {
  const { t } = useTranslation();

  return <PTitle>{t(value)}</PTitle>;
};

export const SectionSTitle = ({ value }) => {
  const { t } = useTranslation();

  return <STitle>{t(value)}</STitle>;
};

export const SectionLightDesc = ({ value }) => {
  const { t } = useTranslation();

  return <LightDesc>{t(value)}</LightDesc>;
};

/* =====================================================
   PAGE HEADER

   Unified background for:
   - Breadcrumb
   - Page title
   - Page description

   No dots, patterns, or separate backgrounds.
===================================================== */

export const PageHeader = styled.header`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  width: 100%;
  min-width: 0;

  gap: clamp(24px, 3.5vw, 38px);

  padding-block:
    clamp(25px, 4vw, 42px)
    clamp(48px, 6vw, 78px);

  background: var(--color-background-secondary);
  border-bottom: 1px solid var(--color-border);

  /*
   * Ensure the Breadcrumb shares the exact
   * same background as the title and description.
   */

  > nav {
    width: 100%;
    margin: 0;
    padding: 0;

    background: transparent;
    background-image: none;

    border: 0;
    box-shadow: none;
  }

  /*
   * Page-specific typography.
   * This does not change headings elsewhere.
   */

  h1,
  h2 {
    margin: 0;

    color: var(--color-text-primary);
    font-size: clamp(2rem, 4.2vw, 3.1rem);
    font-weight: 800;
    line-height: 1.4;

    letter-spacing: -0.015em;
  }

  p {
    margin: 0;

    color: var(--color-text-secondary);
    font-size: clamp(0.92rem, 1.5vw, 1.04rem);
    line-height: 1.95;
  }

  @media (max-width: 768px) {
    gap: 26px;

    padding-block:
      25px
      52px;
  }

  @media (max-width: 480px) {
    gap: 22px;

    padding-block:
      20px
      43px;

    h1,
    h2 {
      font-size: clamp(1.8rem, 7vw, 2.2rem);
    }

    p {
      font-size: 0.9rem;
      line-height: 1.9;
    }
  }
`;

/* =====================================================
   PAGE HEADER CONTENT
===================================================== */

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: var(--container-width);
  min-width: 0;

  margin-inline: auto;
  padding-inline: clamp(16px, 4vw, 32px);

  gap: clamp(10px, 1.5vw, 15px);

  text-align: start;

  /*
   * Keep title and description together
   * and prevent overly long text lines.
   */

  > p {
    max-width: 760px;
  }

  @media (max-width: 600px) {
    gap: 10px;
    padding-inline: 16px;
  }
`;

/* =====================================================
   TECHNOLOGY STACK
===================================================== */

export const TechStack = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: clamp(8px, 1.5vw, 13px);

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Tech = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  max-width: 100%;
  min-height: 36px;

  padding: 7px 12px;

  border: 1px solid var(--color-border);
  border-radius: 9px;

  background: var(--color-background-secondary);
  color: var(--color-text-primary);

  font-size: var(--size-sm);
  font-weight: 500;
  line-height: 1.5;

  overflow-wrap: anywhere;
  cursor: default;

  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast);

  svg {
    flex-shrink: 0;
    width: 17px;
    height: 17px;
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-primary);
      background: var(--color-background-tertiary);
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

/* =====================================================
   FLEX UTILITIES
===================================================== */

export const Clearfix = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  min-width: 0;

  gap: var(--space-md);
`;

/* =====================================================
   RESPONSIVE TABLE WRAPPER
===================================================== */

export const TableWrapper = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;

  /*
   * Subtle edge indicators on smaller screens.
   * They do not block touch or mouse interaction.
   */

  @media (max-width: 768px) {
    &::before,
    &::after {
      content: "";

      position: absolute;
      top: 0;
      bottom: 0;

      width: 18px;

      pointer-events: none;
      z-index: 1;
    }

    &::before {
      inset-inline-start: 0;

      background: linear-gradient(
        to right,
        var(--color-background-secondary),
        transparent
      );
    }

    &::after {
      inset-inline-end: 0;

      background: linear-gradient(
        to left,
        var(--color-background-secondary),
        transparent
      );
    }

    &[dir="rtl"]::before {
      background: linear-gradient(
        to left,
        var(--color-background-secondary),
        transparent
      );
    }

    &[dir="rtl"]::after {
      background: linear-gradient(
        to right,
        var(--color-background-secondary),
        transparent
      );
    }
  }
`;

/* =====================================================
   RESPONSIVE TABLE SCROLL
===================================================== */

export const TableContainer = styled.div`
  width: 100%;
  min-width: 0;

  overflow-x: auto;
  overflow-y: hidden;

  -webkit-overflow-scrolling: touch;
  overscroll-behavior-inline: contain;

  /*
   * Keep the scrollbar visible enough to indicate
   * that horizontal scrolling is available.
   */

  scrollbar-width: thin;
  scrollbar-color:
    var(--color-border)
    transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  @media (max-width: 768px) {
    table {
      min-width: 620px;
    }
  }
`;
