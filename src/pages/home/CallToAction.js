
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container, {
  Section,
} from "../../Components/layout/PageContainer";

import { STitle, Desc } from "../../Components/ui/T";
import Button from "../../Components/ui/Button/Button";

/* =====================================
   CTA Section
===================================== */


const CTAContainer = styled(Section)`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: auto;

  padding-block: clamp(65px, 8vw, 110px);

  /* Different background from Footer */
  background-color: var(--color-background);

  border-top: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding-block: 65px;
  }

  @media (max-width: 480px) {
    padding-block: 52px;
  }
`;


/* =====================================
   Content
===================================== */

const CTAContent = styled(Container)`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 900px;

  gap: clamp(16px, 2vw, 24px);

  text-align: center;

  @media (max-width: 480px) {
    gap: 17px;
  }
`;

/* =====================================
   Title
===================================== */

const CTATitle = styled(STitle)`
  margin: 0;

  max-width: 760px;

  color: var(--color-text-primary);

  font-size: clamp(1.65rem, 3.3vw, 2.7rem);
  font-weight: 700;
  line-height: 1.5;

  text-wrap: balance;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 1.85rem);
    line-height: 1.55;
  }
`;

/* =====================================
   Description
===================================== */

const CTADescription = styled(Desc)`
  margin: 0;

  width: 100%;
  max-width: 640px;

  color: var(--color-text-secondary);

  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 2;

  text-wrap: pretty;

  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 0.93rem;
    line-height: 1.9;
  }
`;

/* =====================================
   Actions
===================================== */

const CTAActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 14px;
  width: 100%;

  margin-top: 12px;

  @media (max-width: 600px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    max-width: 360px;

    margin-top: 8px;
  }
`;

/* =====================================
   CTA Button
===================================== */

const CTAButton = styled(Button)`
  min-width: 175px;
  min-height: 48px;

  padding: 12px 24px;

  border-radius: 12px;

  font-size: 0.96rem;
  font-weight: 700;

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
    min-height: 48px;
    padding: 12px 18px;
  }
`;

/* =====================================
   CTA Component
===================================== */

const CTA = () => {
  const { t } = useTranslation();

  return (
    <CTAContainer>
      <CTAContent>
        <CTATitle as="h2">
          {t("home:callToAction.title")}
        </CTATitle>

        <CTADescription>
          {t("home:callToAction.paragraph")}
        </CTADescription>

        <CTAActions>
          <CTAButton
            as={Link}
            to="/contact"
          >
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
