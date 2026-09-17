import styled from "styled-components";
import { useEffect, useState } from "react";

const StatisticsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Statistic = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-md);
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    padding: var(--space-sm);
    justify-content: center;
  }

  strong {
    color: var(--color-primary);
    font-size: var(--size-xl);

    @media (max-width: 768px) {
      font-size: var(--size-lg);
    }
  }

  span {
    font-size: var(--size-sm);
    text-align: center;

    @media (max-width: 768px) {
      font-size: var(--size-xs);
    }
  }

  &.top {
    top: -40px;
    right: 15%;

    @media (max-width: 768px) {
      top: -60px;
      right: 10%;
    }
  }

  &.left {
    left: -40px;
    bottom: 20%;

    @media (max-width: 768px) {
      left: -65px;
      bottom: -10%;
    }
  }

  &.right {
    right: -10px;
    bottom: 5%;

    @media (max-width: 768px) {
      right: -75px;
      bottom: 15%;
    }
  }
`;

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= value) {
        current = value;
        clearInterval(interval);
      }

      setCount(current);
    }, 300);

    return () => clearInterval(interval);
  }, [value]);

  return <strong>{count}+</strong>;
};

const Statistics = ({ children }) => {
  return (
    <StatisticsWrapper>
      {children}
    </StatisticsWrapper>
  );
};

export { Statistic, AnimatedNumber };
export default Statistics;