import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import ServicesGrid from "../../Components/services/ServiceGrid";
import { SectionSTitle, SectionLightDesc, SectionHeader } from "../../Components/ui/T";

const ServicesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-3xl) 0;
  background-color: var(--color-background-secondary);
`;

const ServicesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`;

const Services = () => {

  return (
    <ServicesSection>
      <ServicesContainer>
        <SectionHeader style={{textAlign: "center"}}>
          <SectionSTitle value="home:services.title" />
          <SectionLightDesc value="home:services.description" />
        </SectionHeader>
        <ServicesGrid />
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
