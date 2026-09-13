import styled from "styled-components";

export const LinkU = styled.a`
  color: var(--color-link);
  border-bottom: 1px solid var(--color-link);
  padding-bottom: var(--space-xs);
  transition: var(--transition-fast);

  &:hover{
    opacity: 0.85;
  }
`

export const PTitle = styled.h1`
    color: var(--color-primary);
`
export const STitle = styled.h2`
    color: var(--color-secondary);
`
export const TTitle = styled.h3`
  color: var(--color-ternary);
`;

export const Desc = styled.p`
  line-height: 1.8;
`;

export const LightDesc = styled.p`
  color: var(--color-text-light);
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

export const Tech = styled.span`
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--size-sm);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius-lg);
`;

export const Clearfix = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;