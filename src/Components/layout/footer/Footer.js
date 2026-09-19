import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Container from "../PageContainer";
import { Desc, LightDesc, LinkU, TTitle } from "../../ui/T";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSnapchat,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const FooterContainer = styled.footer`
  padding: ${(props) =>
    props.$variant === "second" ? "var(--space-md) 0" : "var(--space-2xl) 0"};

  background-color: ${(props) =>
    props.$variant === "second"
      ? "var(--color-background-tertiary)"
      : "var(--color-background)"};
`;

const FooterConent = styled(Container)`
  display: ${(props) => (props.$variant === "second" ? "block" : " grid")};
  grid-template-columns: ${(props) =>
    props.$variant === "second" ? "none" : "200px repeat(2, 1fr) "};
  gap: ${(props) => (props.$variant === "second" ? "0" : "var(--space-xl)")};
  text-align: ${(props) =>
    props.$variant === "second" ? "center" : "inherit"};

  & > *:nth-child(2) {
    margin-inline-end: var(--space-3xl);
  }
  @media (max-width: 768px) {
    text-align: center;
    grid-template-columns: 1fr;
    & > *:nth-child(2) {
      margin-inline-end: 0;
    }
  }
`;

const FooterArticle = styled.article``;

const FooterTitle = styled(TTitle)`
  margin-bottom: var(--space-lg);
`;

const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
  }
  gap: var(--space-sm);
`;

const ListLink = styled(LinkU)`
  display: inline-block;
  position: relative;

  &:hover .moving-text {
    transform: translateX(-0.75rem);
  }
`;

const LinkHover = styled.span`
  display: inline-block;
  transition: transform var(--transition-fast);
`;

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: var(--space-md);
`;

const SocialLink = styled.a`
  width: max-content;
  margin: auto;

  & svg {
    width: var(--space-2xl);
    height: var(--space-2xl);
  }
`;

const ContactContainer = styled.div``;
const iconMap = {
  linkedin: {
    icon: <FaLinkedin />,
    color: "var(--color-linkedin)",
  },
  github: {
    icon: <FaGithub />,
    color: "var(--color-github)",
  },
  whatsapp: {
    icon: <FaWhatsapp />,
    color: "var(--color-whatsapp)",
  },
  email: {
    icon: <SiGmail />,
    color: "var(--color-email)",
  },
  instgram: {
    icon: <FaInstagram />,
    color: "var(--color-instgram)",
  },
  snapchat: {
    icon: <FaSnapchat />,
    color: "var(--color-snapchat)",
  },
};

const Footer = () => {
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

  const socialLinks = t("home:footer.socialMedia.social", {
    returnObjects: true,
  });

  return (
    <>
      <FooterContainer>
        <FooterConent>
          <FooterArticle>
            <FooterTitle>{t("home:footer.quickLinks.title")}</FooterTitle>
            <QuickLinksContainer>
              {links.map((link) => (
                <ListLink as={Link} to={link.to} smooth key={link.id}>
                  <LinkHover className="moving-text">{t(link.label)}</LinkHover>
                </ListLink>
              ))}
            </QuickLinksContainer>
          </FooterArticle>
          <FooterArticle>
            <FooterTitle>{t("home:footer.socialMedia.title")}</FooterTitle>
            <SocialContainer>
              {socialLinks.map((social) => {
                const iconData = iconMap[social.id.toLowerCase()];

                return (
                  <SocialLink
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: iconData?.color }}
                  >
                    {iconData?.icon}
                  </SocialLink>
                );
              })}
            </SocialContainer>
          </FooterArticle>
          <FooterArticle>
            <FooterTitle>{t("home:footer.contactInfo.title")}</FooterTitle>
            <ContactContainer>
              <Desc>
                <strong>{t("home:footer.contactInfo.email.title")}:</strong>
                {t("home:footer.contactInfo.email.value")}
              </Desc>
              <Desc>
                <strong>{t("home:footer.contactInfo.tel.title")}:</strong>
                {t("home:footer.contactInfo.tel.value")}
              </Desc>
              <Desc>
                {t("home:footer.contactInfo.location.value")}
              </Desc>
            </ContactContainer>
          </FooterArticle>
        </FooterConent>
      </FooterContainer>
      <FooterContainer $variant="second">
        <FooterConent $variant="second">
          <LightDesc>
            {new Date().getFullYear()} &copy; {t("home:footer.copyright")}
          </LightDesc>
        </FooterConent>
      </FooterContainer>
    </>
  );
};

export default Footer;
