import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

const LogoContainer = styled.div`
  white-space: nowrap;

  .logo {
    font-size: var(--size-xl);
    font-weight: 700;
    color: var(--color-primary);
    transition: var(--transition-normal);

    &:hover {
      opacity: 0.85;
    }
  }
`;

function Logo() {
  const { t } = useTranslation();

  return (
    <LogoContainer>
      <HashLink to="/#home" smooth className="logo">
        {t("logo.me")}
      </HashLink>
    </LogoContainer>
  );
}

export default Logo;
