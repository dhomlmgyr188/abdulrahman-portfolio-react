
/* =========================================================
   PROJECT IMAGES
   Centralized image registry for portfolio projects
========================================================= */

/* -------------------------
   IMAGE IMPORTS
------------------------- */

import react1 from "../../assets/images/react1.png";
import react2 from "../../assets/images/react2.png";
import react3 from "../../assets/images/react3.png";
import react4 from "../../assets/images/react4.png";

import anaalmughyir1 from "../../assets/images/anaalmughyir1.png";

/* =========================================================
   IMAGE REGISTRY
========================================================= */

/**
 * Maps the image identifiers used in project
 * translation files to their imported assets.
 *
 * Keep existing keys unchanged because they are
 * referenced by other project components.
 *
 * Example:
 *
 * projectImages["react1"]
 *
 * When adding a new project image:
 *
 * 1. Import the image above.
 * 2. Add its identifier to this registry.
 * 3. Use that identifier in the project data.
 */

const projectImages = Object.freeze({
  react1,
  react2,
  react3,
  react4,
  anaalmughyir1,
});

/* =========================================================
   EXPORT
========================================================= */

export default projectImages;
