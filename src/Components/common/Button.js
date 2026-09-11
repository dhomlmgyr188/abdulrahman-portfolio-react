import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  background-color: ${({ $variant }) =>
    $variant === "secondary"
      ? "transparent"
      : "var(--color-primary)"};

  color: ${({ $variant }) =>
    $variant === "secondary"
      ? "var(--color-primary)"
      : "var(--color-white)"};

  border-color: ${({ $variant }) =>
    $variant === "secondary"
      ? "var(--color-primary)"
      : "transparent"};

  transition: var(--transition-fast);

  &.active {
    font-weight: 700;
    background-color: ${({ $variant }) =>
      $variant === "secondary"
        ? "var(--color-primary)"
        : "var(--color-secondary)"};
  }

  &:hover {
    opacity: 0.85;
  }
`;

export const IconButton = styled(Button)`
  padding: var(--space-sm);
  background-color: var(--color-gray);
`;

export default Button;
