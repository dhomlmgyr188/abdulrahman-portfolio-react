
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import { STitle, Desc } from "../../Components/ui/T";
import Button from "../../Components/ui/Button/Button";

const CTAContainer = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: auto;
  padding-block: clamp(80px, 9vw, 125px);

  background: var(--color-background-secondary);
  border-top: 1px solid var(--color-border);

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    pointer-events: none;
    opacity: 0.6;
  }

  &::before {
    top: -170px;
    inset-inline-start: -100px;
  }

  &::after {
    bottom: -180px;
    inset-inline-end: -100px;
  }

  @media (max-width: 768px) {
    padding-block: 70px;
  }

  @media (max-width: 480px) {
    padding-block: 58px;
  }
`;

const CTAContent = styled(Container)`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 900px;
  gap: clamp(17px, 2vw, 25px);
  text-align: center;
`;

const CTATitle = styled(STitle)`
  margin: 0;
  max-width: 770px;

  color: var(--color-text-primary);
  font-size: clamp(1.75rem, 3.5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.5;
  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 1.95rem);
  }
`;

const CTADescription = styled(Desc)`
  margin: 0;
  width: 100%;
  max-width: 650px;

  color: var(--color-text-secondary);
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 2;
  text-wrap: pretty;

  @media (max-width: 480px) {
    font-size: 0.93rem;
    line-height: 1.9;
  }
`;

const CTAActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  margin-top: 14px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    max-width: 360px;
    gap: 12px;
  }
`;

const CTAButton = styled(Button)`
  min-width: 180px;
  min-height: 49px;
  padding: 12px 25px;
  border-radius: 11px;
  font-size: 0.95rem;
  font-weight: 700;

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
  }
`;

const CTA = () => {
  const { t } = useTranslation();

  return (
    <CTAContainer id="call-to-action">
      <CTAContent>
        <CTATitle as="h2">
          {t("home:callToAction.title")}
        </CTATitle>

        <CTADescription>
          {t("home:callToAction.paragraph")}
        </CTADescription>

        <CTAActions>
          <CTAButton as={Link} to="/contact">
            {t("buttons.contact")}
          </CTAButton>

          <CTAButton
            as={Link}
            to="/projects"
            $variant="secondary"
          >
            {t("buttons.projects")}
          </CTAButton>
        </CTAActions>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTA;
