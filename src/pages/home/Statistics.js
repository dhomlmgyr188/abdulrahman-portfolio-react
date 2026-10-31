
import {
  useEffect,
  useState,
} from "react";

import styled from "styled-components";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   HOME — STATISTICS

   Design System:
   - Modern Professional
   - Ocean / Orca

   Preserved features:
   - Three floating statistics
   - Animated number counters
   - Plus sign (+)
   - Cubic easing animation
   - Original positions
   - Hover interactions
   - Responsive layout
   - Reduced motion support

   Exports:
   - Statistics (default)
   - Statistic (named)
   - AnimatedNumber (named)

   Existing Hero.js API remains valid.
========================================================= */


/* =========================================================
   01 — STATISTICS WRAPPER

   This component contains:
   - The circular profile image
   - Three floating statistic cards

   It must remain position: relative
   because the cards are absolutely
   positioned inside it.
========================================================= */

const StatisticsWrapper = styled.div`
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  min-height: 420px;

  box-sizing: border-box;

  /* -------------------------------------------------------
     TABLET

     Matches the Hero.js layout.
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    min-height: 370px;
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 480px) {
    min-height: 310px;
  }

  /* -------------------------------------------------------
     SMALL MOBILE
  ------------------------------------------------------- */

  @media (max-width: 360px) {
    min-height: 290px;
  }
`;


/* =========================================================
   02 — STATISTIC CARD

   The original position classes
   are preserved:

   .top
   .left
   .right

   CSS logical properties allow the
   cards to mirror automatically
   between RTL and LTR.
========================================================= */

const Statistic = styled.div`
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 5px;

  min-width: 105px;
  max-width: 155px;

  padding: 14px 17px;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 15px);

  box-shadow:
    var(--shadow-sm);

  text-align: center;

  box-sizing: border-box;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  /* -------------------------------------------------------
     HOVER
  ------------------------------------------------------- */

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);

      box-shadow:
        var(--shadow-md);

      border-color:
        var(--color-primary);
    }
  }

  /* -------------------------------------------------------
     ANIMATED NUMBER
  ------------------------------------------------------- */

  strong {
    display: block;

    color:
      var(--color-text-primary);

    font-size: clamp(
      1.35rem,
      2.5vw,
      1.8rem
    );

    font-weight: 800;
    line-height: 1.3;

    font-variant-numeric:
      tabular-nums;

    white-space: nowrap;
  }

  /* -------------------------------------------------------
     STATISTIC LABEL
  ------------------------------------------------------- */

  span {
    display: block;

    color:
      var(--color-text-secondary);

    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;

    overflow-wrap: anywhere;
  }

  /* =====================================================
     03 — DESKTOP POSITIONS
  ===================================================== */

  /* -------------------------------------------------------
     TOP CARD

     Projects
  ------------------------------------------------------- */

  &.top {
    top: 6%;
    inset-inline-end: 3%;
  }

  /* -------------------------------------------------------
     START CARD

     Years of experience
  ------------------------------------------------------- */

  &.left {
    bottom: 19%;
    inset-inline-start: 0;
  }

  /* -------------------------------------------------------
     END CARD

     Technologies
  ------------------------------------------------------- */

  &.right {
    bottom: 5%;
    inset-inline-end: 0;
  }

  /* =====================================================
     04 — TABLET
  ===================================================== */

  @media (max-width: 900px) {
    min-width: 95px;
    max-width: 130px;

    padding: 12px 14px;

    &.top {
      top: 4%;
      inset-inline-end: 2%;
    }

    &.left {
      bottom: 16%;
      inset-inline-start: 0;
    }

    &.right {
      bottom: 3%;
      inset-inline-end: 0;
    }
  }

  /* =====================================================
     05 — MOBILE
  ===================================================== */

  @media (max-width: 480px) {
    min-width: 76px;
    max-width: 108px;

    padding: 9px 10px;

    gap: 3px;

    border-radius: 11px;

    strong {
      font-size: 1.16rem;
    }

    span {
      font-size: 0.68rem;
      line-height: 1.45;
    }

    &.top {
      top: 2%;
      inset-inline-end: 0;
    }

    &.left {
      bottom: 15%;
      inset-inline-start: 0;
    }

    &.right {
      bottom: 1%;
      inset-inline-end: 0;
    }
  }

  /* =====================================================
     06 — SMALL MOBILE
  ===================================================== */

  @media (max-width: 360px) {
    min-width: 70px;
    max-width: 96px;

    padding: 8px;

    strong {
      font-size: 1.05rem;
    }

    span {
      font-size: 0.63rem;
    }

    &.top {
      top: 3%;
    }

    &.left {
      bottom: 17%;
    }

    &.right {
      bottom: 2%;
    }
  }

  /* =====================================================
     07 — REDUCED MOTION
  ===================================================== */

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;


/* =========================================================
   08 — ANIMATED NUMBER

   Original API:

   <AnimatedNumber value={5} />

   <AnimatedNumber
     value={10}
     duration={1200}
   />

   Animation:
   - Starts at zero
   - Counts toward the target
   - Uses cubic ease-out
   - Displays a plus sign
   - Respects reduced motion
========================================================= */

function AnimatedNumber({
  value,
  duration = 1200,
}) {

  /* -------------------------------------------------------
     NORMALIZE TARGET VALUE
  ------------------------------------------------------- */

  const numericValue = Number(value);

  const target =
    Number.isFinite(numericValue)
      ? Math.max(0, numericValue)
      : 0;

  const animationDuration =
    Number.isFinite(Number(duration))
      ? Math.max(1, Number(duration))
      : 1200;

  /* -------------------------------------------------------
     COUNTER STATE
  ------------------------------------------------------- */

  const [count, setCount] =
    useState(0);

  /* =====================================================
     09 — COUNTER ANIMATION
  ===================================================== */

  useEffect(() => {

    /* -----------------------------------------------------
       CHECK REDUCED MOTION
    ----------------------------------------------------- */

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    /* -----------------------------------------------------
       DISPLAY TARGET IMMEDIATELY
       WHEN MOTION IS REDUCED
    ----------------------------------------------------- */

    if (reduceMotion) {
      setCount(target);
      return undefined;
    }

    /* -----------------------------------------------------
       ANIMATION STATE
    ----------------------------------------------------- */

    let animationFrame;

    let startTime = null;

    /* -----------------------------------------------------
       RESET COUNTER
    ----------------------------------------------------- */

    setCount(0);

    /* -----------------------------------------------------
       ANIMATION FUNCTION
    ----------------------------------------------------- */

    const animate = (timestamp) => {

      if (startTime === null) {
        startTime = timestamp;
      }

      /* ---------------------------------------------------
         LINEAR PROGRESS
      --------------------------------------------------- */

      const progress = Math.min(
        (timestamp - startTime) /
          animationDuration,
        1
      );

      /* ---------------------------------------------------
         CUBIC EASE-OUT
      --------------------------------------------------- */

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      /* ---------------------------------------------------
         UPDATE NUMBER
      --------------------------------------------------- */

      const nextCount =
        Math.floor(
          easedProgress * target
        );

      setCount(nextCount);

      /* ---------------------------------------------------
         CONTINUE OR FINISH
      --------------------------------------------------- */

      if (progress < 1) {

        animationFrame =
          window.requestAnimationFrame(
            animate
          );

      } else {

        setCount(target);

      }

    };

    /* -----------------------------------------------------
       START ANIMATION
    ----------------------------------------------------- */

    animationFrame =
      window.requestAnimationFrame(
        animate
      );

    /* -----------------------------------------------------
       CLEANUP

       Prevent updates after unmount
       or when values change.
    ----------------------------------------------------- */

    return () => {

      window.cancelAnimationFrame(
        animationFrame
      );

    };

  }, [
    target,
    animationDuration,
  ]);

  /* =====================================================
     10 — RENDER NUMBER
  ===================================================== */

  return (
    <strong>

      {count}+

    </strong>
  );
}


/* =========================================================
   11 — STATISTICS COMPONENT

   Preserves the original API:

   <Statistics className="...">
     ...
   </Statistics>

   The className is required because
   Hero.js extends Statistics using
   styled(Statistics).
========================================================= */

function Statistics({
  children,
  className,
}) {

  return (
    <StatisticsWrapper
      className={className}
    >

      {children}

    </StatisticsWrapper>
  );
}


/* =========================================================
   12 — EXPORTS
========================================================= */

export {
  Statistic,
  AnimatedNumber,
};

export default Statistics;
