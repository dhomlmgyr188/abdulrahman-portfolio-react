
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

/* =========================================================
   LAYOUT COMPONENTS
========================================================= */

import Header from "./Components/layout/header/Header";
import Footer from "./Components/layout/footer/Footer.js";

/* =========================================================
   COMMON COMPONENTS
========================================================= */

import ScrollToTop from "./Components/common/ScrollToTop";

/* =========================================================
   PAGES
========================================================= */

import Home from "./pages/home/Home.js";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   APPLICATION STRUCTURE

   Design System:
   - Modern Professional
   - Ocean / Orca
   - Arabic / English
   - Responsive RTL / LTR

   Routing:
   - React Router
   - BrowserRouter is configured in index.js
   - GitHub Pages basename is configured in index.js

   Responsibilities:
   - Render the shared header
   - Render page routes
   - Render the shared footer
   - Restore scroll position on navigation
========================================================= */


/* =========================================================
   01 — APPLICATION SHELL

   Uses a vertical flex layout to keep
   the footer at the bottom of the screen
   when a page contains little content.
========================================================= */

const AppShell = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;

  min-height: 100vh;
  min-height: 100dvh;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  box-sizing: border-box;
`;


/* =========================================================
   02 — PAGE CONTENT

   The header is fixed and has a height
   defined by --header-height.

   This wrapper provides the required
   top spacing without creating another
   <main> element.

   Each page can keep its own semantic
   <main> element.
========================================================= */

const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 0 auto;

  width: 100%;
  min-width: 0;

  padding-top:
    var(--header-height);

  box-sizing: border-box;

  /*
    Prevent flex children from forcing
    the content wider than the viewport.
  */

  > * {
    min-width: 0;
  }
`;


/* =========================================================
   03 — APPLICATION ROUTES

   All existing routes are preserved.

   /                    Home
   /about               About
   /projects            Projects
   /projects/:projectId Project Details
   /contact             Contact
========================================================= */

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/projects"
        element={<Projects />}
      />

      <Route
        path="/projects/:projectId"
        element={<ProjectDetails />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  );
}


/* =========================================================
   04 — MAIN APPLICATION
========================================================= */

function App() {
  return (
    <AppShell>

      {/* -----------------------------------
          Scroll management
      ----------------------------------- */}

      <ScrollToTop />

      {/* -----------------------------------
          Shared site header
      ----------------------------------- */}

      <Header />

      {/* -----------------------------------
          Page content
      ----------------------------------- */}

      <PageContent id="main-content">
        <AppRoutes />
      </PageContent>

      {/* -----------------------------------
          Shared site footer
      ----------------------------------- */}

      <Footer />

    </AppShell>
  );
}


/* =========================================================
   05 — EXPORT
========================================================= */

export default App;
