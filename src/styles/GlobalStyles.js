import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family: "saudia-sans";
    src: url("/fonts/saudia-sans-regular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: "saudia-sans";
    src: url("/fonts/saudia-sans-bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: "Barlow";
    src: url("/fonts/Barlow-Medium.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: "Barlow";
    src: url("/fonts/Barlow-Bold.ttf") format("truetype");
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

    a {
        color: inherit;
        text-decoration: none;
    }

    ul,
    ol {
        list-style: none;
    }

`;

export default GlobalStyles;
