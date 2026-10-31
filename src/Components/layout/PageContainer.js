
import styled from "styled-components";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   PAGE CONTAINER & SECTION SYSTEM

   Design: Modern Professional

   Compatible with:
   - variables.css
   - GlobalStyles.js
   - RTL / LTR
   - Light / Dark Theme

   Exports:
   - Container (default)
   - PageContainer (named)
   - Section
   - CompactSection
   - SectionInner
========================================================= */


/* =========================================================
   01 — PAGE CONTAINER

   Shared horizontal layout for all pages.

   Desktop:
   Maximum width of 1200px.

   Mobile:
   Responsive horizontal padding.

   Direction:
   Supports RTL and LTR automatically.
========================================================= */

const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);

  min-width: 0;

  margin-inline: auto;

  padding-inline: var(--container-gutter);

  box-sizing: border-box;
`;


/* =========================================================
   02 — STANDARD SECTION

   Used for major page sections.

   Examples:
   - Services
   - Featured Projects
   - About
   - Contact
========================================================= */

export const Section = styled.section`
  width: 100%;
  min-width: 0;

  position: relative;

  padding-block: var(--section-space);

  box-sizing: border-box;
`;


/* =========================================================
   03 — COMPACT SECTION

   Used for smaller sections or content
   that does not need large vertical gaps.
========================================================= */

export const CompactSection = styled.section`
  width: 100%;
  min-width: 0;

  position: relative;

  padding-block: var(--section-space-sm);

  box-sizing: border-box;
`;


/* =========================================================
   04 — SECTION INNER

   A reusable content wrapper inside
   sections.

   This component does not add vertical
   padding to avoid duplicated spacing.
========================================================= */

export const SectionInner = styled(Container)`
  position: relative;
`;


/* =========================================================
   05 — NAMED EXPORT

   Allows both import styles:

   import Container from ".../PageContainer";

   import {
     PageContainer,
     Section
   } from ".../PageContainer";
========================================================= */

export const PageContainer = Container;


/* =========================================================
   06 — DEFAULT EXPORT
========================================================= */

export default Container;
