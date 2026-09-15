import styled from "styled-components";
import Container from "../layout/PageContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BC_Page_Container = styled.section`
`

const BC_Content = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const BC_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
`
const BC_Link = styled.a`
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
    <BC_Page_Container>
        <BC_Content>
            <BC_Container>
                <BC_Link as={Link} to="/">{t("nav.home")}</BC_Link>
                <Seperator>{"/"}</Seperator>
                <CurrentPage>
                    {t(`nav.${value}`)}
                </CurrentPage>
            </BC_Container>
        </BC_Content>
    </BC_Page_Container>
    )
}

export default BreadCrumb;