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

  strong {
    color: var(--color-primary);
    font-size: var(--size-xl);
  }

  span {
    font-size: var(--size-sm);
    white-space: nowrap;
  }

  &.top {
    top: -40px;
    right: 15%;
  }

  &.left {
    left: -40px;
    bottom: 20%;
  }

  &.right {
    right: -10px;
    bottom: 5%;
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