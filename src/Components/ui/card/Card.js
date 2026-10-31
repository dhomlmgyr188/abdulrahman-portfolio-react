
import styled from "styled-components";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   UI — SHARED CARD

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Responsive layout
   - Theme-aware colors
   - RTL / LTR compatibility
   - Consistent spacing
   - Subtle hover effects
   - Reduced motion support

   Preserved:
   - Named export: Card
   - article HTML element
   - Flex column layout
   - Centered content
   - Existing spacing variables
   - Existing border and shadow variables
========================================================= */


/* =========================================================
   01 — SHARED CARD COMPONENT

   This component provides the base
   appearance for reusable cards.

   Individual cards can extend it
   using styled(Card).
========================================================= */

export const Card = styled.article`
  /* -------------------------------------------------------
     LAYOUT
  ------------------------------------------------------- */

  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  gap: var(--space-md, 16px);

  /* -------------------------------------------------------
     DIMENSIONS
  ------------------------------------------------------- */

  width: 100%;
  min-width: 0;

  padding: var(--space-lg, 24px);

  box-sizing: border-box;

  /* -------------------------------------------------------
     THEME COLORS
  ------------------------------------------------------- */

  background-color:
    var(--color-card-background, var(--color-background));

  color:
    var(--color-text-primary);

  /* -------------------------------------------------------
     BORDERS
  ------------------------------------------------------- */

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, var(--radius-md, 14px));

  /* -------------------------------------------------------
     SHADOW
  ------------------------------------------------------- */

  box-shadow:
    var(--shadow-sm, none);

  /* -------------------------------------------------------
     CONTENT
  ------------------------------------------------------- */

  overflow-wrap: anywhere;

  /* -------------------------------------------------------
     TRANSITIONS
  ------------------------------------------------------- */

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  /* -------------------------------------------------------
     CHILD ELEMENTS
  ------------------------------------------------------- */

  > * {
    min-width: 0;
  }

  /* -------------------------------------------------------
     HOVER

     Only apply on devices that
     support hover interactions.
  ------------------------------------------------------- */

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow:
        var(--shadow-md);
    }
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    padding: var(--space-lg, 22px);
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    gap: var(--space-md, 14px);

    padding: var(--space-md, 18px);
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    padding: 16px;
  }

  /* -------------------------------------------------------
     REDUCED MOTION
  ------------------------------------------------------- */

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
