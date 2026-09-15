import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
      <Link to="/">{t("logo.me")}</Link>
    </LogoContainer>
  );
}

export default Logo;