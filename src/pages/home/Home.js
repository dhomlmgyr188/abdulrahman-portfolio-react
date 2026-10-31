
import styled from "styled-components";

/* =========================================================
   HOME PAGE SECTIONS
========================================================= */

import Hero from "./Hero";
import Services from "./Services";
import FeaturedProjects from "./FeaturedProjects";
import CTA from "./CallToAction";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   HOME PAGE

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Responsive page layout
   - RTL / LTR support
   - Light / Dark theme
   - Accessible main landmark
   - Consistent section structure

   Original sections preserved:
   01 — Hero
   02 — Services
   03 — Featured Projects
   04 — Call To Action
========================================================= */


/* =========================================================
   01 — HOME PAGE WRAPPER

   The home page provides the main
   semantic landmark for its content.

   Header and Footer are managed
   globally by App.js.
========================================================= */

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;

  flex: 1 0 auto;

  margin: 0;
  padding: 0;

  background-color:
    var(--color-background);

  color:
    var(--color-text-primary);

  box-sizing: border-box;

  /* -------------------------------------------------------
     PREVENT FLEX CHILD OVERFLOW
  ------------------------------------------------------- */

  > * {
    min-width: 0;
  }

  /* -------------------------------------------------------
     RESPONSIVE BEHAVIOR

     Individual sections manage their
     own internal grids and spacing.
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    min-width: 0;
  }
`;


/* =========================================================
   02 — HOME COMPONENT
========================================================= */

function Home() {
  return (
    <HomeContainer
      aria-label="Home"
    >

      {/* =================================
          01 — HERO

          Personal introduction,
          profile image and primary
          actions.
      ================================= */}

      <Hero />

      {/* =================================
          02 — SERVICES

          Professional services and
          areas of expertise.
      ================================= */}

      <Services />

      {/* =================================
          03 — FEATURED PROJECTS

          Selected portfolio projects.
      ================================= */}

      <FeaturedProjects />

      {/* =================================
          04 — CALL TO ACTION

          Final section encouraging
          visitors to get in touch.
      ================================= */}

      <CTA />

    </HomeContainer>
  );
}


/* =========================================================
   03 — EXPORT
========================================================= */

export default Home;
