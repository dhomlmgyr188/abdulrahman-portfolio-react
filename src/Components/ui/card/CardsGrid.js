
import styled from "styled-components";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   UI — CARDS GRID

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Responsive grid layout
   - Three columns on desktop
   - Two columns on tablet
   - One column on mobile
   - RTL / LTR compatibility
   - Flexible card widths
   - Consistent spacing

   Preserved:
   - Named export: CardsGrid
   - div HTML element
   - Original responsive breakpoints
   - Existing spacing variables
========================================================= */

/* =========================================================
   01 — RESPONSIVE CARDS GRID
========================================================= */

export const CardsGrid = styled.div`
  /* -------------------------------------------------------
     GRID LAYOUT
  ------------------------------------------------------- */

  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  /* -------------------------------------------------------
     SPACING
  ------------------------------------------------------- */

  gap: var(--space-lg, 24px);

  /* -------------------------------------------------------
     DIMENSIONS
  ------------------------------------------------------- */

  width: 100%;
  min-width: 0;

  margin: 0;
  padding: 0;

  box-sizing: border-box;

  /* -------------------------------------------------------
     ALIGNMENT
  ------------------------------------------------------- */

  align-items: stretch;
  justify-items: stretch;

  /* -------------------------------------------------------
     CHILDREN

     Allow cards to shrink properly
     without horizontal overflow.
  ------------------------------------------------------- */

  > * {
    min-width: 0;
    max-width: 100%;
  }

  /* -------------------------------------------------------
     TABLET

     Two columns below 992px.
  ------------------------------------------------------- */

  @media (max-width: 992px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: clamp(
      16px,
      2.5vw,
      24px
    );
  }

  /* -------------------------------------------------------
     MOBILE

     One column below 576px.
  ------------------------------------------------------- */

  @media (max-width: 576px) {
    grid-template-columns:
      minmax(0, 1fr);

    gap: var(--space-md, 16px);
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    gap: 14px;
  }
`;
