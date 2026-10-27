
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
`;

const LogoLink = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  gap: 3px;

  white-space: nowrap;
  text-decoration: none;
  direction: inherit;

  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.025em;

  color: var(--color-primary);

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 5px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const LogoText = styled.span`
  display: inline-block;
`;

const LogoDot = styled.span`
  color: var(--color-secondary);
  font-size: 1.3em;
  line-height: 1;
`;

function Logo() {
  const { t } = useTranslation();

  return (
    <LogoContainer>
      <LogoLink
        to="/#home"
        smooth
        aria-label={t("logo.me")}
      >
        <LogoText>{t("logo.me")}</LogoText>
        <LogoDot aria-hidden="true">.</LogoDot>
      </LogoLink>
    </LogoContainer>
  );
}

export default Logo;
