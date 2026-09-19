import styled from "styled-components";
import Container from "../layout/PageContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BCPageContainer = styled.section`
`

const BCContent = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const BCContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
`
const BCLink = styled.a`
  color: var(--color-link);
  transition: var(--transition-fast);
  font-size: var(--size-sm);

  &:hover{
    opacity: 0.85;
  }
`
const Seperator = styled.span`
    color: var(--color-text-light);
    font-size: var(--size-sm);
`

const CurrentPage = styled.p`
    color: var(--color-text-light);
    font-size: var(--size-sm);
`

const BreadCrumb = ({ value }) => {
    const {t} = useTranslation();

    return(
    <BCPageContainer>
        <BCContent>
            <BCContainer>
                <BCLink as={Link} to="/">{t("nav.home")}</BCLink>
                <Seperator>{"/"}</Seperator>
                <CurrentPage>
                    {t(`nav.${value}`)}
                </CurrentPage>
            </BCContainer>
        </BCContent>
    </BCPageContainer>
    )
}

export default BreadCrumb;