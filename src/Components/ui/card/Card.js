import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
  gap: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: var(--transition-fast);

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;