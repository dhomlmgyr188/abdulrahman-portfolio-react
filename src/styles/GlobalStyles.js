
import { createGlobalStyle } from "styled-components";

/* =========================================
   LOCAL FONTS
========================================= */

import SaudiaBold from "../assets/fonts/saudia-sans-bold.otf";
import SaudiaRegular from "../assets/fonts/saudia-sans-regular.otf";

import BarlowBold from "../assets/fonts/Barlow-Bold.ttf";
import BarlowMedium from "../assets/fonts/Barlow-Medium.ttf";

/* =========================================
   GLOBAL STYLES
   Modern Professional Design System

   Colors and design tokens:
   styles/variables.css

   Component-specific styles:
   Styled Components
========================================= */

const GlobalStyles = createGlobalStyle`

  /* =====================================
     01 — FONT FACES
  ===================================== */

  @font-face {
    font-family: "saudia-sans";
    src: url(${SaudiaRegular}) format("opentype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "saudia-sans";
    src: url(${SaudiaBold}) format("opentype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${BarlowMedium}) format("truetype");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${BarlowBold}) format("truetype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  /* =====================================
     02 — GLOBAL RESET
  ===================================== */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  /* =====================================
     03 — DOCUMENT
  ===================================== */

  html {
    scroll-behavior: smooth;

    scroll-padding-top: calc(
      var(--header-height) + 16px
    );

    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    -webkit-tap-highlight-color: transparent;
  }

  /* =====================================
     04 — BODY
  ===================================== */

  body {
    min-width: 320px;
    min-height: 100vh;
    min-height: 100dvh;

    font-size: var(--size-md);
    font-weight: 400;
    line-height: var(--line-height-body);

    color: var(--color-text-primary);
    background-color: var(--color-background);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow-wrap: break-word;

    transition:
      background-color var(--transition-normal),
      color var(--transition-normal);
  }

  /* =====================================
     05 — LANGUAGE & DIRECTION
  ===================================== */

  html[lang="ar"] body {
    font-family:
      "saudia-sans",
      Tahoma,
      Arial,
      sans-serif;

    line-height: 1.85;
  }

  html[lang="en"] body {
    font-family:
      "Barlow",
      Arial,
      sans-serif;

    line-height: 1.65;
  }

  /*
    The application manages the document's
    lang and dir attributes through i18n.

    We do not force direction globally.
  */

  html[dir="rtl"] {
    direction: rtl;
  }

  html[dir="ltr"] {
    direction: ltr;
  }

  /* =====================================
     06 — APPLICATION ROOT
  ===================================== */

  #root {
    min-height: 100vh;
    min-height: 100dvh;

    isolation: isolate;
  }

  /* =====================================
     07 — TYPOGRAPHY
  ===================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-heading);

    font-weight: 700;
    line-height: var(--heading-line-height);

    overflow-wrap: break-word;
    text-wrap: balance;
  }

  h1 {
    font-size: clamp(
      2rem,
      4.5vw,
      var(--size-4xl)
    );
  }

  h2 {
    font-size: clamp(
      1.5rem,
      3.5vw,
      var(--size-3xl)
    );
  }

  h3 {
    font-size: clamp(
      1.2rem,
      2.5vw,
      var(--size-2xl)
    );
  }

  h4 {
    font-size: var(--size-lg);
  }

  h5 {
    font-size: var(--size-ml);
  }

  h6 {
    font-size: var(--size-md);
  }

  /* =====================================
     08 — PARAGRAPHS & TEXT
  ===================================== */

  p {
    color: inherit;
    line-height: inherit;
  }

  small {
    font-size: var(--size-sm);
    color: var(--color-text-secondary);
  }

  strong,
  b {
    font-weight: 700;
  }

  em,
  i {
    font-style: italic;
  }

  /*
    Preserve whitespace in code blocks,
    but prevent long content from
    overflowing the viewport.
  */

  pre {
    max-width: 100%;
    overflow-x: auto;
  }

  code,
  pre,
  kbd,
  samp {
    font-family:
      "Consolas",
      "Courier New",
      monospace;
  }

  /* =====================================
     09 — LINKS
  ===================================== */

  a {
    color: inherit;
    text-decoration: none;

    transition:
      color var(--transition-fast),
      opacity var(--transition-fast);
  }

  a:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
    border-radius: var(--radius-sm);
  }

  /* =====================================
     10 — BUTTONS
  ===================================== */

  /*
    Button appearance belongs to:
    Components/ui/Button/Button.js

    Global styles only provide basic
    browser normalization.
  */

  button {
    font: inherit;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
  }

  /* =====================================
     11 — FORM CONTROLS
  ===================================== */

  input,
  textarea,
  select {
    font: inherit;

    max-width: 100%;
    min-width: 0;

    color: var(--color-input-text);
    background-color: var(--color-input-background);

    border-color: var(--color-border);
    border-radius: var(--radius-input);
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-input-placeholder);
    opacity: 1;
  }

  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  input:disabled,
  textarea:disabled,
  select:disabled {
    cursor: not-allowed;
  }

  textarea {
    resize: vertical;
  }

  /*
    Keep checkbox and radio controls
    consistent with the active theme.
  */

  input[type="checkbox"],
  input[type="radio"] {
    accent-color: var(--color-primary);
  }

  /*
    File inputs retain their native
    functionality and accessibility.
  */

  input[type="file"] {
    max-width: 100%;
  }

  /* =====================================
     12 — LISTS
  ===================================== */

  ul,
  ol {
    list-style: none;
  }

  /* =====================================
     13 — IMAGES & MEDIA
  ===================================== */

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  img {
    height: auto;
  }

  svg {
    vertical-align: middle;
    flex-shrink: 0;
  }

  iframe {
    max-width: 100%;
  }

  /* =====================================
     14 — SECTIONS & ANCHORS
  ===================================== */

  section,
  [id] {
    scroll-margin-top: calc(
      var(--header-height) + 16px
    );
  }

  /* =====================================
     15 — TABLES
  ===================================== */

  table {
    width: 100%;

    border-collapse: collapse;
    border-spacing: 0;

    text-align: center;
    table-layout: auto;
  }

  th,
  td {
    padding: 12px 16px;

    border: 1px solid var(--color-border);

    vertical-align: middle;
    overflow-wrap: anywhere;
  }

  th {
    color: var(--color-text-primary);
    background-color: var(
      --color-background-tertiary
    );

    font-weight: 700;
  }

  td {
    color: var(--color-text-primary);
    background-color: var(--color-background);
  }

  tbody tr {
    transition:
      background-color var(--transition-fast);
  }

  tbody tr:hover td {
    background-color: var(
      --color-background-tertiary
    );
  }

  /* =====================================
     16 — HORIZONTAL RULE
  ===================================== */

  hr {
    border: 0;
    border-top: 1px solid var(--color-divider);
  }

  /* =====================================
     17 — FOCUS & ACCESSIBILITY
  ===================================== */

  :focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 3px;
  }

  /*
    Accessible screen-reader-only utility.
  */

  .sr-only {
    position: absolute !important;

    width: 1px !important;
    height: 1px !important;

    padding: 0 !important;
    margin: -1px !important;

    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;

    white-space: nowrap !important;
    border: 0 !important;
  }

  /*
    Skip link for keyboard navigation.
    It becomes visible when focused.
  */

  .skip-link {
    position: fixed;
    inset-block-start: 12px;
    inset-inline-start: 12px;

    z-index: 10000;

    padding: 12px 18px;

    color: var(--color-on-primary);
    background-color: var(--color-primary);

    border-radius: var(--radius-button);

    transform: translateY(-160%);

    transition:
      transform var(--transition-fast);
  }

  .skip-link:focus {
    transform: translateY(0);
  }

  /* =====================================
     18 — RESPONSIVE
  ===================================== */

  @media (max-width: 768px) {

    body {
      font-size: var(--size-md);
    }

    h1 {
      font-size: clamp(
        2rem,
        7vw,
        2.5rem
      );
    }

    h2 {
      font-size: clamp(
        1.5rem,
        5.5vw,
        2rem
      );
    }

    h3 {
      font-size: var(--size-lg);
    }

    h4 {
      font-size: var(--size-ml);
    }

    h5 {
      font-size: var(--size-md);
    }

    h6 {
      font-size: var(--size-sm);
    }

    th,
    td {
      padding: 10px 12px;
    }

  }

  /* =====================================
     19 — SMALL MOBILE DEVICES
  ===================================== */

  @media (max-width: 480px) {

    body {
      min-width: 320px;
    }

    h1 {
      font-size: clamp(
        1.85rem,
        8vw,
        2.2rem
      );
    }

    h2 {
      font-size: clamp(
        1.4rem,
        6vw,
        1.8rem
      );
    }

    h3 {
      font-size: clamp(
        1.15rem,
        5vw,
        1.35rem
      );
    }

  }

  /* =====================================
     20 — REDUCED MOTION
  ===================================== */

  @media (prefers-reduced-motion: reduce) {

    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;

      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;

      transition-duration: 0.01ms !important;
    }

  }

`;

export default GlobalStyles;
