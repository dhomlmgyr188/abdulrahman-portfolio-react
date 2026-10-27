
import styled from "styled-components";
import { useEffect, useState } from "react";

const StatisticsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 420px;
  isolation: isolate;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
  }
`;

const Statistic = styled.div`
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  min-width: 105px;
  max-width: 150px;
  padding: 15px 18px;

  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);

  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md, var(--shadow-sm));
    border-color: var(--color-secondary);
  }

  strong {
    display: block;
    color: var(--color-primary);
    font-size: clamp(1.35rem, 2.5vw, 1.8rem);
    font-weight: 700;
    line-height: 1.3;
    font-variant-numeric: tabular-nums;
  }

  span {
    display: block;
    color: var(--color-text-secondary, var(--color-text));
    font-size: 0.8rem;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  /* البطاقة العلوية */
  &.top {
    top: 6%;
    inset-inline-end: 3%;
  }

  /* البطاقة السفلية اليسرى */
  &.left {
    bottom: 19%;
    inset-inline-start: 0;
  }

  /* البطاقة السفلية اليمنى */
  &.right {
    bottom: 5%;
    inset-inline-end: 0;
  }

  @media (max-width: 768px) {
    min-width: 95px;
    max-width: 125px;
    padding: 12px 14px;
    border-radius: 13px;

    &.top {
      top: 4%;
      inset-inline-end: 2%;
    }

    &.left {
      bottom: 16%;
      inset-inline-start: 0;
    }

    &.right {
      bottom: 2%;
      inset-inline-end: 0;
    }
  }

  @media (max-width: 480px) {
    min-width: 75px;
    max-width: 105px;
    padding: 9px 10px;
    gap: 3px;
    border-radius: 11px;

    strong {
      font-size: 1.15rem;
    }

    span {
      font-size: 0.68rem;
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

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const AnimatedNumber = ({ value, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = Math.max(0, Number(value) || 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    let animationFrame;
    let startTime = null;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / Math.max(duration, 1),
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <strong>{count}+</strong>;
};

const Statistics = ({ children, className }) => {
  return (
    <StatisticsWrapper className={className}>
      {children}
    </StatisticsWrapper>
  );
};

export { Statistic, AnimatedNumber };
export default Statistics;
