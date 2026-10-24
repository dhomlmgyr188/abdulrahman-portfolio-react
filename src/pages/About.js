import Container from "../Components/layout/PageContainer";
import BreadCrumb from "../Components/ui/Breadcrumb";
import styled from "styled-components";
import { SectionSTitle, SectionLightDesc, PageHeader, PageHeaderContainer } from "../Components/ui/T";

const AboutContainer = styled.main`
    background-color: var(--color-background-secondary);
`

const AboutContent = styled(Container)`

`
const About = () => {
    return (
        <>
            <PageHeader>
                <BreadCrumb value="about" />
                <PageHeaderContainer>
                    <SectionSTitle value="about:pageTitle" />
                    <SectionLightDesc value="about:pageDesc" />
                </PageHeaderContainer>
            </PageHeader>
            <AboutContainer>
                <AboutContent>

                    <h1>s</h1>
                </AboutContent>
            </AboutContainer>
        </>
    )
}

export default About;