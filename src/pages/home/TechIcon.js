
import styled from "styled-components";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";


import {
  FiCode,
} from "react-icons/fi";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   HOME — TECHNOLOGY ICON

   Design System:
   - Modern Professional
   - Ocean / Orca

   Features:
   - Original technology icons
   - Original technology names
   - Fallback icon
   - Theme-aware colors
   - Responsive sizing
   - Accessible decorative icons
   - RTL / LTR compatibility

   Original API preserved:

   <TechIcon name="React" />

   <TechIcon name="JavaScript" />

   <TechIcon name="REST API" />
========================================================= */


/* =========================================================
   01 — TECHNOLOGY ICON MAP

   Keep the original names because
   they are referenced by the
   translation data in home.json.
========================================================= */

const iconMap = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  PHP: FaPhp,
  MySQL: FaDatabase,
  REST: TbApi,
  VC: FaGitAlt,
};


/* =========================================================
   02 — STYLED ICON

   Inherits the primary color from
   the active theme.

   Uses relative sizing so it can
   adapt to the parent SkillIcon.
========================================================= */

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  min-width: 0;
  min-height: 0;

  color:
    var(--color-primary);

  line-height: 1;

  flex-shrink: 0;

  svg {
    display: block;

    width: 19px;
    height: 19px;

    max-width: 100%;
    max-height: 100%;

    color: inherit;

    flex-shrink: 0;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    svg {
      width: 17px;
      height: 17px;
    }
  }
`;


/* =========================================================
   03 — TECHNOLOGY ICON COMPONENT
========================================================= */

function TechIcon({
  name,
}) {

  /* -------------------------------------------------------
     RESOLVE ICON

     If the supplied technology name
     is not in iconMap, use FiCode.
  ------------------------------------------------------- */

  const Icon =
    iconMap[name] || FiCode;

  /* =====================================================
     04 — RENDER
  ===================================================== */

  return (
    <StyledIcon
      aria-hidden="true"
    >

      <Icon
        aria-hidden="true"
        focusable="false"
      />

    </StyledIcon>
  );
}


/* =========================================================
   05 — EXPORT
========================================================= */

export default TechIcon;
