
import { createGlobalStyle } from "styled-components";

import SaudiaBold from "../assets/fonts/saudia-sans-bold.otf";
import SaudiaRegular from "../assets/fonts/saudia-sans-regular.otf";
import BarlowBold from "../assets/fonts/Barlow-Bold.ttf";
import BarlowMedium from "../assets/fonts/Barlow-Medium.ttf";

const GlobalStyles = createGlobalStyle`

  /* =====================================
     Fonts
  ===================================== */

  @font-face {
    font-family: "saudia-sans";
    src: url(${SaudiaRegular}) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "saudia-sans";
    src: url(${SaudiaBold}) format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${BarlowMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url(${BarlowBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* =====================================
     Global Reset
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
     HTML
  ===================================== */

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(
      var(--header-height) + 20px
    );

    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  /* =====================================
     Body
  ===================================== */

  body {
    min-width: 320px;
    min-height: 100vh;
    min-height: 100dvh;

    font-size: var(--size-md);
    font-weight: 400;
    line-height: 1.75;

    color: var(--color-text);
    background-color: var(--color-background);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow-wrap: break-word;

    transition:
      background-color var(--transition-normal),
      color var(--transition-normal);
  }

  /* =====================================
     Language & Typography
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

  /* =====================================
     Root Application
  ===================================== */

  #root {
    min-height: 100vh;
    min-height: 100dvh;
    isolation: isolate;
  }

  /* =====================================
     Headings
  ===================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-text-primary);
    font-weight: 700;
    line-height: 1.3;
    text-wrap: balance;
  }

  h1 {
    font-size: clamp(
      var(--size-2xl),
      4.5vw,
      var(--size-4xl)
    );
  }

  h2 {
    font-size: clamp(
      var(--size-xl),
      3.5vw,
      var(--size-3xl)
    );
  }

  h3 {
    font-size: clamp(
      var(--size-ml),
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
     Paragraphs & Text
  ===================================== */

  p {
    line-height: inherit;
    color: inherit;
  }

  small {
    font-size: var(--size-sm);
  }

  strong,
  b {
    font-weight: 700;
  }

  /* =====================================
     Links
  ===================================== */

  a {
    color: inherit;
    text-decoration: none;

    transition:
      color var(--transition-fast),
      opacity var(--transition-fast);
  }

  a:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }

  /* =====================================
     Buttons & Form Elements
  ===================================== */

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled,
  input:disabled,
  textarea:disabled,
  select:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  input,
  textarea,
  select {
    max-width: 100%;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-text-light);
    opacity: 0.85;
  }

  /* =====================================
     Lists
  ===================================== */

  ul,
  ol {
    list-style: none;
  }

  /* =====================================
     Images & Media
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
  }

  /* =====================================
     Sections & Anchors
  ===================================== */

  section {
    scroll-margin-top: calc(
      var(--header-height) + 20px
    );
  }

  [id] {
    scroll-margin-top: calc(
      var(--header-height) + 20px
    );
  }

  /* =====================================
     Tables
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
    background-color: var(
      --color-background-tertiary
    );

    color: var(--color-text-primary);
    font-weight: 700;
  }

  td {
    background-color: var(
      --color-background
    );

    color: var(--color-text);
  }

  tbody tr {
    transition:
      background-color var(--transition-fast);
  }

  tbody tr:hover td {
    background-color: var(
      --color-background-secondary
    );
  }

  /* =====================================
     Text Selection
  ===================================== */

  ::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  [data-theme="dark"] ::selection {
    background-color: var(--color-primary);
    color: var(--color-black);
  }

  /* =====================================
     Scrollbar
  ===================================== */

  html {
    scrollbar-color:
      var(--color-border)
      var(--color-background);
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-full);
    border: 2px solid var(--color-background);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-light);
  }

  /* =====================================
     Accessibility
  ===================================== */

  :focus-visible {
    outline-color: var(--color-primary);
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* =====================================
     Responsive
  ===================================== */

  @media (max-width: 768px) {
    body {
      font-size: var(--size-md);
    }

    h1 {
      font-size: clamp(2rem, 7vw, 2.5rem);
    }

    h2 {
      font-size: clamp(1.5rem, 5.5vw, 2rem);
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

`;

export default GlobalStyles;
