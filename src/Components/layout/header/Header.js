import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Container from "../PageContainer";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Settings from "./Settings";

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  min-height: var(--header-height);
  background-color: var(--color-background-tertiary);
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

function Header() {
  const location = useLocation();

  const activeLink = location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        
        <Navigation activeLink={activeLink} />

        <Settings />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;