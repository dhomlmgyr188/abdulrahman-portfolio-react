import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Button from "../../common/Button";

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
      isPageRoute: false,
    },
    {
      id: "about",
      label: "nav.about",
      isPageRoute: true,
    },
    {
      id: "projects",
      label: "nav.projects",
      isPageRoute: true,
    },
    {
      id: "contact",
      label: "nav.contact",
      isPageRoute: true,
    },
  ];

  return (
    <NavbarContainer>
      {links.map((link) => {
        const classNames = activeLink === link.id ? "active" : "";

        if (link.isPageRoute) {
          return (
            <Button
              as={Link}
              to={`/${link.id}`}
              $variant="primary"
              key={link.id}
              className={classNames}
            >
              {t(link.label)}
            </Button>
          );
        }

        return (
          <Button
            as={HashLink}
            smooth
            to={`/#${link.id}`}
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