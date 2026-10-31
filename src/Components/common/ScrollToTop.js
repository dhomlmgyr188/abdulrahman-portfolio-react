
import { useLayoutEffect, useRef } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

/* =========================================================
   SCROLL TO TOP — MODERN PROFESSIONAL

   Features:
   - Scroll to top on new page navigation
   - Preserve anchor navigation
   - Support browser back / forward
   - Handle navigation between projects
   - Prevent unwanted smooth scrolling
   - Work with React Router
   - No visual UI

   Preserved:
   - Default export: ScrollToTop
   - Returns null
   - Does not override hash links
========================================================= */

/* =========================================================
   01 — SCROLL POSITION STORAGE

   Store scroll positions for pages
   visited during the current session.

   This allows restoring the previous
   position when navigating backward
   or forward in browser history.
========================================================= */

const scrollPositions = new Map();

/* =========================================================
   02 — SCROLL HELPER

   Use standard "auto" behavior for
   compatibility across browsers.
========================================================= */

const scrollToPosition = (top = 0) => {
  window.scrollTo({
    top,
    left: 0,
    behavior: "instant",
  });
};

/* =========================================================
   03 — SCROLL TO TOP COMPONENT
========================================================= */

const ScrollToTop = () => {
  const {
    pathname,
    search,
    hash,
    key,
  } = useLocation();

  const navigationType = useNavigationType();

  const previousLocationRef = useRef(null);

  /* -------------------------------------------------------
     HANDLE ROUTE CHANGES
  ------------------------------------------------------- */

  useLayoutEffect(() => {
    const currentLocation = {
      pathname,
      search,
      hash,
      key,
    };

    const previousLocation =
      previousLocationRef.current;

    /* -----------------------------------------------------
       SAVE PREVIOUS SCROLL POSITION
    ----------------------------------------------------- */

    if (
      previousLocation &&
      previousLocation.key !== key
    ) {
      scrollPositions.set(
        previousLocation.key,
        window.scrollY
      );
    }

    previousLocationRef.current =
      currentLocation;

    /* -----------------------------------------------------
       HASH NAVIGATION

       Let HashLink or the browser
       handle scrolling to the
       target section.
    ----------------------------------------------------- */

    if (hash) {
      return;
    }

    /* -----------------------------------------------------
       BROWSER BACK / FORWARD

       Restore the previous position
       when a stored position exists.
    ----------------------------------------------------- */

    if (
      navigationType === "POP" &&
      scrollPositions.has(key)
    ) {
      scrollToPosition(
        scrollPositions.get(key)
      );

      return;
    }

    /* -----------------------------------------------------
       NORMAL NAVIGATION

       Scroll to top when moving
       to a new page.
    ----------------------------------------------------- */

    scrollToPosition(0);
  }, [
    pathname,
    search,
    hash,
    key,
    navigationType,
  ]);

  return null;
};

export default ScrollToTop;
