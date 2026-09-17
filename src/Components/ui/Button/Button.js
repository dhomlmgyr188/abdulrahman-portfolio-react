
import styled from "styled-components";
import { LinkU } from "../T"
export const Actions = styled.div`
  display: flex;
  gap: var(--space-md);
`;

const Button = styled.button`
  --button-bg: var(--color-primary);
  --button-color: var(--color-white);
  --button-border: transparent;

  ${({ $variant }) =>
    $variant === "secondary" &&
    `
      --button-bg: transparent;
      --button-color: var(--color-primary);
      --button-border: var(--color-primary);
    `}

  ${({ $variant }) =>
    $variant === "tertiary" &&
    `
      --button-bg: var(--color-tertiary);
    `}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--button-border);
  border-radius: var(--radius-md);
  background-color: var(--button-bg);
  color: var(--button-color);
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

export const NavLink = styled(LinkU)`
  --navLink-color-active: var(--color-secondary);
  padding: var(--space-xs) var(--space-sm); 

  &.active {
    font-weight: 700;
    color: var(--navLink-color-active);
  }
`

export const IconButton = styled(Button)`
  padding: var(--space-sm);
  background-color: var(--color-gray);

  img{
    width: var(--size-lg);
    height: var(--size-lg);
  }
`;

export default Button;
