
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

import Container from "../PageContainer";

import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSnapchat,
} from "react-icons/fa";

import {
  MdOutlineMailOutline,
  MdOutlineLocationOn,
} from "react-icons/md";

import { BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

/* =====================================
   Footer Layout
===================================== */

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--color-background-secondary);
  color: var(--color-text-primary);
  border-top: 1px solid var(--color-border);
`;

const FooterContent = styled(Container)`
  display: grid;
  grid-template-columns:
    minmax(0, 1.2fr)
    minmax(150px, 0.7fr)
    minmax(0, 1.1fr);

  align-items: start;
  gap: clamp(30px, 4vw, 65px);

  padding-block: clamp(48px, 6vw, 72px);

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px;
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 30px;

    padding-block: 38px 32px;
  }
`;

const FooterArticle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 18px;
  min-width: 0;

  @media (max-width: 600px) {
    width: 100%;
    gap: 16px;
  }
`;

/* =====================================
   Brand
===================================== */

const BrandArticle = styled(FooterArticle)`
  @media (max-width: 950px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;

    padding-bottom: 26px;
    border-bottom: 1px solid var(--color-border);
  }
`;

const BrandName = styled.h2`
  margin: 0;

  color: var(--color-primary);

  font-size: clamp(1.45rem, 2.2vw, 1.85rem);
  font-weight: 700;
  line-height: 1.4;
`;

const BrandDescription = styled.p`
  margin: 0;
  max-width: 360px;

  color: var(--color-text-secondary);

  font-size: 0.92rem;
  line-height: 1.9;

  @media (max-width: 600px) {
    max-width: 320px;
    font-size: 0.88rem;
  }
`;

/* =====================================
   Section Titles
===================================== */

const FooterTitle = styled.h3`
  margin: 0;

  color: var(--color-text-primary);

  font-size: 1.04rem;
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

/* =====================================
   Quick Links
   Text links only - no button effects
===================================== */

const QuickLinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;
  width: 100%;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    column-gap: 20px;
    row-gap: 16px;

    justify-items: start;
  }
`;

const ListLink = styled(Link)`
  position: relative;

  display: inline-block;
  width: fit-content;

  padding: 2px 0;

  color: var(--color-text-secondary);
  background: transparent;

  border: none;
  border-radius: 0;

  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.7;

  text-decoration: none;

  transition: color 0.25s ease;

  &::after {
    content: "";

    position: absolute;
    inset-inline-start: 0;
    bottom: 0;

    width: 100%;
    height: 1px;

    background-color: var(--color-primary);

    transform: scaleX(0);
    transform-origin: right;

    transition: transform 0.25s ease;
  }

  &:hover {
    color: var(--color-primary);
    background: transparent;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    font-size: 0.92rem;
    min-height: 32px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`;

/* =====================================
   Social Media
===================================== */

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 9px;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  flex-shrink: 0;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  background-color: var(--color-background);

  /* Original brand color */
  color: var(--social-color, var(--color-primary));

  text-decoration: none;

  transition:
    transform 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  & svg {
    display: block;

    width: 21px;
    height: 21px;

    fill: currentColor;
  }

  &:hover {
    transform: translateY(-3px);

    background-color: color-mix(
      in srgb,
      var(--social-color, var(--color-primary)) 8%,
      var(--color-background)
    );

    border-color: color-mix(
      in srgb,
      var(--social-color, var(--color-primary)) 35%,
      var(--color-border)
    );

    box-shadow: var(--shadow-sm);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;

    & svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:active {
      transform: none;
    }
  }
`;

/* =====================================
   Contact Information
===================================== */

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  width: 100%;

  @media (max-width: 600px) {
    gap: 0;

    padding: 6px 14px;

    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 16px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
  min-width: 0;

  @media (max-width: 600px) {
    min-height: 60px;
    padding-block: 10px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-border);
    }
  }
`;

const ContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  border-radius: 11px;

  background-color: color-mix(
    in srgb,
    var(--icon-color, var(--color-primary)) 9%,
    var(--color-background)
  );

  color: var(--icon-color, var(--color-primary));

  & svg {
    display: block;
    width: 19px;
    height: 19px;
  }
`;

const ContactValue = styled.span`
  min-width: 0;

  color: var(--color-text-secondary);

  font-size: 0.9rem;
  line-height: 1.8;

  overflow-wrap: anywhere;
`;

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;

  transition: color 0.25s ease;

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
`;

/* =====================================
   Copyright
===================================== */

const FooterBottom = styled.div`
  border-top: 1px solid var(--color-border);
`;

const BottomContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 21px;

  @media (max-width: 600px) {
    padding-block: 19px;
  }
`;

const Copyright = styled.p`
  margin: 0;

  color: var(--color-text-secondary);

  font-size: 0.83rem;
  line-height: 1.8;

  text-align: center;
`;

/* =====================================
   Social Icons Map
===================================== */

const iconMap = {
  linkedin: {
    icon: <FaLinkedin />,
    color: "var(--color-linkedin, #0A66C2)",
  },

  github: {
    icon: <FaGithub />,
    color: "var(--color-github, var(--color-text-primary))",
  },

  whatsapp: {
    icon: <FaWhatsapp />,
    color: "var(--color-whatsapp, #25D366)",
  },

  email: {
    icon: <SiGmail />,
    color: "var(--color-email, #EA4335)",
  },

  instagram: {
    icon: <FaInstagram />,
    color: "var(--color-instgram, #E4405F)",
  },

  instgram: {
    icon: <FaInstagram />,
    color: "var(--color-instgram, #E4405F)",
  },

  snapchat: {
    icon: <FaSnapchat />,
    color: "var(--color-snapchat, #FFCC00)",
  },
};

/* =====================================
   Footer Component
===================================== */

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

  const translatedSocialLinks = t(
    "home:footer.socialMedia.social",
    { returnObjects: true }
  );

  const socialLinks = Array.isArray(translatedSocialLinks)
    ? translatedSocialLinks
    : [];

  const email = t(
    "home:footer.contactInfo.email.value"
  );

  const telephone = t(
    "home:footer.contactInfo.tel.value"
  );

  const location = t(
    "home:footer.contactInfo.location.value"
  );

  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>

        {/* =====================================
            Brand
        ===================================== */}

        <BrandArticle>
          <BrandName>
            {t("home:hero.name")}
          </BrandName>

          <BrandDescription>
            {t("home:hero.introduction")}
          </BrandDescription>

          <SocialContainer>
            {socialLinks.map((social) => {
              const iconData =
                iconMap[String(social.id).toLowerCase()];

              if (!iconData || !social.href) {
                return null;
              }

              return (
                <SocialLink
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.id}
                  title={social.id}
                  style={{
                    "--social-color": iconData.color,
                  }}
                >
                  {iconData.icon}
                </SocialLink>
              );
            })}
          </SocialContainer>
        </BrandArticle>

        {/* =====================================
            Quick Links
        ===================================== */}

        <FooterArticle>
          <FooterTitle>
            {t("home:footer.quickLinks.title")}
          </FooterTitle>

          <QuickLinksContainer
            aria-label={t("home:footer.quickLinks.title")}
          >
            {links.map((link) => (
              <ListLink
                key={link.id}
                to={link.to}
                smooth
              >
                {t(link.label)}
              </ListLink>
            ))}
          </QuickLinksContainer>
        </FooterArticle>

        {/* =====================================
            Contact
        ===================================== */}

        <FooterArticle>
          <FooterTitle>
            {t("home:footer.contactInfo.title")}
          </FooterTitle>

          <ContactContainer>

            {/* Email */}
            <ContactItem>
              <ContactIcon
                style={{
                  "--icon-color":
                    "var(--color-email, #EA4335)",
                }}
              >
                <MdOutlineMailOutline />
              </ContactIcon>

              <ContactValue dir="ltr">
                <ContactLink
                  href={`mailto:${email}`}
                >
                  {email}
                </ContactLink>
              </ContactValue>
            </ContactItem>

            {/* Telephone */}
            <ContactItem>
              <ContactIcon
                style={{
                  "--icon-color":
                    "var(--color-whatsapp, #25D366)",
                }}
              >
                <BsTelephone />
              </ContactIcon>

              <ContactValue dir="ltr">
                <ContactLink
                  href={`tel:${telephone.replace(
                    /[^\d+]/g,
                    ""
                  )}`}
                >
                  {telephone}
                </ContactLink>
              </ContactValue>
            </ContactItem>

            {/* Location */}
            <ContactItem>
              <ContactIcon
                style={{
                  "--icon-color":
                    "var(--color-primary)",
                }}
              >
                <MdOutlineLocationOn />
              </ContactIcon>

              <ContactValue>
                {location}
              </ContactValue>
            </ContactItem>

          </ContactContainer>
        </FooterArticle>

      </FooterContent>

      {/* =====================================
          Copyright
      ===================================== */}

      <FooterBottom>
        <BottomContent>
          <Copyright>
            © {year} {t("home:footer.copyright")}
          </Copyright>
        </BottomContent>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
