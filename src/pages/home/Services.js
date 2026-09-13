import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { useTranslation } from "react-i18next";
import ServicesGrid from "../../Components/services/ServiceGrid";
import { STitle, LightDesc } from "../../Components/ui/T";

const ServicesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-3xl) 0;
  background-color: var(--color-background-secondary);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  text-align: center;
`;

const ServicesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const Services = () => {
  const { t } = useTranslation();

  return (
    <ServicesSection>
      <ServicesContainer>
        <SectionHeader>
          <STitle>{t("services.title")}</STitle>
          <LightDesc>{t("services.description")}</LightDesc>
        </SectionHeader>
        <ServicesGrid />
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
