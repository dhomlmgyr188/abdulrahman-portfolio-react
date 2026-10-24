import { createGlobalStyle } from "styled-components";
import SaudiaBold from "../assets/fonts/saudia-sans-bold.otf";
import SaudiaRegular from "../assets/fonts/saudia-sans-regular.otf";
import BarlowBold from "../assets/fonts/Barlow-Bold.ttf";
import BarlowMedium from "../assets/fonts/Barlow-Medium.ttf";

const GlobalStyles = createGlobalStyle`
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
    font-weight: 400;
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

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-size: var(--size-md);
        line-height: 1.6;
        color: var(--color-text);
        background-color: var(--color-background);
    }

    html[lang="ar"] body {
    font-family: "saudia-sans", sans-serif;
    }

    html[lang="en"] body {
    font-family: "Barlow", sans-serif;
    }

    button,
    input,
    textarea,
    select {
        font: inherit;
    }
        
    section {
        scroll-margin: var(--header-height);
    }

    button {
        cursor: pointer;
    }

    // Heading

    h1{
        font-size: var(--size-4xl)
    }
    h2{
        font-size: var(--size-3xl)
    }
    h3{
        font-size: var(--size-lg)
    }
    h4{
        font-size: var(--size-lg)
    }
    h5{
        font-size: var(--size-ml)
    }
    h6{
        font-size: var(--size-md)
    }

   @media (max-width: 768px) {
        h1{font-size: var(--size-2xl);}
        h2{font-size: var(--size-xl);}
        h3{font-size: var(--size-lg);}
        h4{font-size: var(--size-ml);}
        h5{font-size: var(--size-md);}
        h6{font-size: var(--size-sm);}
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul,
    ol {
        list-style: none;
    }

    table{
        width: 100%;
        min-width: 768px;
        border-collapse: collapse;
        text-align: center;
        border-spacing: 0px;
        table-layout: fixed;
    }

    th,td{
        border: 1px solid var(--color-border);
        padding: var(--space-sm);
        word-break: break-word;
    }

    th{ background-color: var(--color-background-tertiary); }
    td{ background-color: var(--color-background); }

`;

export default GlobalStyles;
