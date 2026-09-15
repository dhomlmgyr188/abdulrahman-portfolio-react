import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`;

function Navigation({ activeLink }) {
  const { t } = useTranslation();

  const links = [
    {
      id: "home",
      label: "nav.home",
      to: "/",
    },
    {
      id: "about",
      label: "nav.about",
      to: "/about",
    },
    {
      id: "projects",
      label: "nav.projects",
      to: "/projects",
    },
    {
      id: "contact",
      label: "nav.contact",
      to: "/contact",
    },
  ];

  return (
    <NavbarContainer>
      {links.map((link) => {
        const classNames = activeLink === link.id ? "active" : "";

        return (
          <Button
            as={Link}
            to={link.to}
            $variant="primary"
            key={link.id}
            className={classNames}
          >
            {t(link.label)}
          </Button>
        );

      })}
    </NavbarContainer>
  );
}

export default Navigation;