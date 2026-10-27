
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../PageContainer";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Settings from "./Settings";

/* Header */

const HeaderContainer = styled.header`
  position: fixed;
  inset-block-start: 0;
  inset-inline: 0;

  z-index: 999;
  display: flex;
  align-items: center;

  width: 100%;
  min-height: var(--header-height);

  background-color: ${({ $scrolled }) =>
    $scrolled
      ? "var(--color-background-tertiary)"
      : "var(--color-background)"};

  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled
        ? "var(--color-border)"
        : "transparent"};

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "var(--shadow-sm)" : "none"};

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  @media (max-width: 768px) {
    min-height: var(--header-height);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* Header Content */


const HeaderContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-height: var(--header-height);

  & > :first-child {
    justify-self: start;
  }

  & > :nth-child(2) {
    justify-self: center;
  }

  & > :last-child {
    justify-self: end;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    gap: 12px;

    & > :last-child {
      display: none;
    }
  }
`;


/* Component */

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const activeLink =
    location.pathname === "/"
      ? "home"
      : location.pathname.split("/").filter(Boolean)[0] || "home";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <HeaderContent>
        <Logo />

        <Navigation activeLink={activeLink} />

        <Settings />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
