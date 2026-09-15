import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LightDesc, SectionSTitle } from "../../ui/T";
import Container from "../PageContainer";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";

// const FooterContainer = styled.footer`
//     background-color: var(--color-background-secondary);
// `
// const FooterContent = styled(Container)`
//     padding: var(--space-3xl) 0;
// `
const CRightContainer = styled.div`
    background-color: var(--color-background-tertiary);
`
const CopyRightContent = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-lg) 0;
    border-top: 1px solid var(--color-border);
`
const CtaContainer = styled.div`
    padding: var(--space-xl) 0;
    background-color: var(--color-background-tertiary);
`
const CtaContent = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-lg);
`

const Footer = () => {

    const { t } = useTranslation();

    return (
        <>
            <CtaContainer>
                <Container>
                    <CtaContent>
                        <SectionSTitle value={t("home:cta")} />
                        <Button as={Link} to="/contact">{t("buttons.contact")}</Button>
                    </CtaContent>
                </Container>
            </CtaContainer>
            <CRightContainer>
                <CopyRightContent>
                    <LightDesc style={{ textAlign: "center" }}> {t("copyright")} &copy; {new Date().getFullYear()} </LightDesc>
                </CopyRightContent>
            </CRightContainer>
        </>
    )
}

export default Footer;