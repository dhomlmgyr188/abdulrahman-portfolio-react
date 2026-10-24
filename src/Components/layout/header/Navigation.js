import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "../../ui/Button/Button";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  @media (max-width: 768px) {
    display: none;
  }
`;

function Navigation({ activeLink }) {
  const { t } = useTranslation();

  const links = [
    {
      id: "home",
      label: "nav.home",
      to: "/#home",
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
          <NavLink
            as={Link}
            to={link.to}
            smooth
            key={link.id}
            className={classNames}
          >
            {t(link.label)}
          </NavLink>
        );

      })}
    </NavbarContainer>
  );
}

export default Navigation;