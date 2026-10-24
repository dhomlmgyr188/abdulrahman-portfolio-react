import BreadCrumb from "../Components/ui/Breadcrumb";
import { SectionSTitle, SectionLightDesc, PageHeader, PageHeaderContainer } from "../Components/ui/T";

const Contact = () => {

    return (
        <PageHeader>
            <BreadCrumb value="contact" />
            <PageHeaderContainer>
                <SectionSTitle value="home:services.title" />
                <SectionLightDesc value="home:hero.introduction" />
            </PageHeaderContainer>
        </PageHeader>
    )
}

export default Contact;