import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { Section } from "../../Components/layout/PageContainer";
import ServicesGrid from "../../Components/services/ServiceGrid";
import { SectionSTitle, SectionLightDesc, SectionHeader } from "../../Components/ui/T";

const ServicesSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-secondary);
`;

const ServicesContent = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const Services = () => {

  return (
    <ServicesSection>
      <ServicesContent className="animate__animated animate__slideInUp animate__fast">
        <SectionHeader style={{textAlign: "center"}}>
          <SectionSTitle value="home:services.title" />
          <SectionLightDesc value="home:services.description" />
        </SectionHeader>
        <ServicesGrid />
      </ServicesContent>
    </ServicesSection>
  );
};

export default Services;
