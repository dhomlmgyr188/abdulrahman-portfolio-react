import { SectionSTitle, SectionLightDesc, PageHeader, PageHeaderContainer } from "../Components/ui/T";
import BreadCrumb from "../Components/ui/Breadcrumb";

const ProjectDetails = () => {
    return (
        <PageHeader>
            <BreadCrumb value="about" />
            <PageHeaderContainer>
                <SectionSTitle value="home:services.title" />
                <SectionLightDesc value="home:hero.introduction" />
            </PageHeaderContainer>
        </PageHeader>
    )
}

export default ProjectDetails;