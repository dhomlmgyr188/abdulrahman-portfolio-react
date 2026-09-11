import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

const LogoContainer = styled.div`
  white-space: nowrap;

  a {
    font-size: var(--size-xl);
    font-weight: 700;
    color: var(--color-primary);
  }
`;

function Logo() {
  const { t } = useTranslation();

  return (
    <LogoContainer>
      <HashLink smooth to="/#home">
        {t("logo.me")}
      </HashLink>
    </LogoContainer>
  );
}

export default Logo;