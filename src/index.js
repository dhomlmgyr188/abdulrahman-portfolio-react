
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

/* =========================================================
   INTERNATIONALIZATION
========================================================= */

/*
 * Initialize i18next before rendering the application.
 *
 * This also applies the saved language and the
 * appropriate RTL / LTR document direction.
 */

import "./i18n";

/* =========================================================
   GLOBAL STYLES
========================================================= */

/*
 * Load design tokens before GlobalStyles so all
 * components can use the shared CSS variables.
 */

import "./styles/variables.css";

import GlobalStyles from "./styles/GlobalStyles";

/* =========================================================
   THEME PROVIDER
========================================================= */

import { ThemeProvider } from "./context/ThemeContext";

/* =========================================================
   ROUTER CONFIGURATION
========================================================= */

/*
 * Keep the existing GitHub Pages base path.
 *
 * Do not remove this basename unless the deployment
 * location or routing strategy changes.
 */

const ROUTER_BASENAME =
  "/abdulrahman-portfolio-react";

/* =========================================================
   APPLICATION ROOT
========================================================= */

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'React initialization failed: the element with id="root" was not found.'
  );
}

const root = ReactDOM.createRoot(rootElement);

/* =========================================================
   APPLICATION RENDER
========================================================= */

root.render(
  <React.StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
