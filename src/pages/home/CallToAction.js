import styled from "styled-components";
import Container from "../../Components/layout/PageContainer";
import { Section } from "../../Components/layout/PageContainer";
import { STitle, Desc, Clearfix } from "../../Components/ui/T";
import { useTranslation } from "react-i18next";
import Button from "../../Components/ui/Button/Button";
import { Link } from "react-router-dom";

const CTAContainer = styled(Section)`
    background-color: var(--color-background-secondary);
`
const CTAContent = styled(Container)`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: var(--space-md);
`

const SpaceBetween = styled(Clearfix)`
    gap: var(--space-lg);
    width: fit-content;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: var(--space-md);
    }
`
const CTA = () => {
    const { t } = useTranslation();
    return (
        <CTAContainer>
            <CTAContent>
                <STitle>{t("home:callToAction.title")}</STitle>
                <Desc>{t("home:callToAction.paragraph")}</Desc>
                <SpaceBetween>
                    <Button as={Link} to="/contact">{t("buttons.contact")}</Button>
                    <Button as={Link} to="/projects" $variant="secondary">{t("buttons.projects")}</Button>
                </SpaceBetween>
            </CTAContent>
        </CTAContainer>
    )
}

export default CTA;