
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

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   RESPONSIVE FOOTER

   Design System:
   - Modern Professional
   - Ocean / Orca
   - RTL / LTR

   Preserved:
   - Brand and introduction
   - Social media links
   - Quick navigation links
   - Email, telephone and location
   - Dynamic copyright year
   - Translation keys
========================================================= */


/* =========================================================
   01 — FOOTER LAYOUT
========================================================= */

const FooterContainer = styled.footer`
  width: 100%;
  min-width: 0;

  margin-block-start: auto;

  background-color:
    var(--color-background-secondary);

  color:
    var(--color-text-primary);

  border-top:
    1px solid var(--color-border);
`;

const FooterContent = styled(Container)`
  display: grid;

  grid-template-columns:
    minmax(0, 1.2fr)
    minmax(140px, 0.7fr)
    minmax(0, 1.1fr);

  align-items: start;

  gap: clamp(28px, 4vw, 56px);

  padding-block:
    clamp(42px, 5vw, 64px);

  @media (max-width: 950px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 32px;
  }

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1fr);

    gap: 28px;

    padding-block: 36px 30px;
  }
`;

const FooterArticle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  min-width: 0;

  @media (max-width: 600px) {
    width: 100%;
    gap: 14px;
  }
`;


/* =========================================================
   02 — BRAND
========================================================= */

const BrandArticle = styled(FooterArticle)`
  @media (max-width: 950px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;

    padding-block-end: 24px;

    border-bottom:
      1px solid var(--color-border);
  }
`;

const BrandName = styled.h2`
  margin: 0;

  color: var(--color-heading);

  font-size: clamp(
    1.4rem,
    2.2vw,
    1.8rem
  );

  font-weight: 800;
  line-height: 1.4;

  overflow-wrap: break-word;
  text-wrap: balance;
`;

const BrandDescription = styled.p`
  margin: 0;

  max-width: 380px;

  color: var(--color-text-secondary);

  font-size: 0.92rem;
  line-height: 1.9;

  overflow-wrap: break-word;
  text-wrap: pretty;

  @media (max-width: 600px) {
    max-width: 340px;
    font-size: 0.88rem;
  }
`;


/* =========================================================
   03 — SECTION TITLES
========================================================= */

const FooterTitle = styled.h3`
  margin: 0;

  color: var(--color-heading);

  font-size: 1.04rem;
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;


/* =========================================================
   04 — QUICK LINKS
========================================================= */

const QuickLinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 100%;

  @media (max-width: 600px) {
    display: grid;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    column-gap: 18px;
    row-gap: 14px;

    justify-items: start;
  }
`;

const ListLink = styled(Link)`
  position: relative;

  display: inline-block;

  width: fit-content;
  max-width: 100%;

  padding: 3px 0;

  color: var(--color-text-secondary);

  font-size: 0.93rem;
  font-weight: 500;
  line-height: 1.7;

  text-decoration: none;

  transition:
    color var(--transition-fast);

  &::after {
    content: "";

    position: absolute;

    inset-inline-start: 0;
    inset-block-end: 0;

    width: 100%;
    height: 1px;

    background-color:
      var(--color-primary);

    transform: scaleX(0);

    transform-origin: center;

    transition:
      transform var(--transition-fast);
  }

  &:hover {
    color: var(--color-primary);
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    min-height: 32px;
    font-size: 0.91rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`;


/* =========================================================
   05 — SOCIAL MEDIA
========================================================= */

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

  flex-shrink: 0;

  width: 44px;
  height: 44px;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-button);

  background-color:
    var(--color-card-background);

  color:
    var(--social-color, var(--color-primary));

  text-decoration: none;

  transition:
    transform var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  svg {
    display: block;

    width: 21px;
    height: 21px;

    fill: currentColor;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);

      background-color:
        var(--color-surface-hover);

      border-color:
        var(--color-border-strong);

      box-shadow:
        var(--shadow-sm);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;

    svg {
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


/* =========================================================
   06 — CONTACT INFORMATION
========================================================= */

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  width: 100%;

  @media (max-width: 600px) {
    gap: 0;

    padding: 6px 14px;

    background-color:
      var(--color-card-background);

    border:
      1px solid var(--color-border);

    border-radius:
      var(--radius-card);
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
      border-bottom:
        1px solid var(--color-border);
    }
  }
`;

const ContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 38px;
  height: 38px;

  border-radius: 11px;

  background-color:
    var(--color-surface-secondary);

  color:
    var(--icon-color, var(--color-primary));

  svg {
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
  text-underline-offset: 4px;

  transition:
    color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }

  &:focus-visible {
    outline:
      2px solid var(--focus-ring-color);

    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;


/* =========================================================
   07 — COPYRIGHT
========================================================= */

const FooterBottom = styled.div`
  border-top:
    1px solid var(--color-border);
`;

const BottomContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 20px;

  @media (max-width: 600px) {
    padding-block: 18px;
  }
`;

const Copyright = styled.p`
  margin: 0;

  color: var(--color-text-secondary);

  font-size: 0.83rem;
  line-height: 1.8;

  text-align: center;
`;


/* =========================================================
   08 — SOCIAL ICON MAP

   Both instagram and instgram are
   supported for compatibility with
   existing translation data.
========================================================= */

const iconMap = {
  linkedin: {
    icon: <FaLinkedin />,
    color: "var(--color-linkedin, #0A66C2)",
    label: "LinkedIn",
  },

  github: {
    icon: <FaGithub />,
    color: "var(--color-github, var(--color-text-primary))",
    label: "GitHub",
  },

  whatsapp: {
    icon: <FaWhatsapp />,
    color: "var(--color-whatsapp, #25D366)",
    label: "WhatsApp",
  },

  email: {
    icon: <SiGmail />,
    color: "var(--color-email, #EA4335)",
    label: "Email",
  },

  instagram: {
    icon: <FaInstagram />,
    color: "var(--color-instgram, #E4405F)",
    label: "Instagram",
  },

  instgram: {
    icon: <FaInstagram />,
    color: "var(--color-instgram, #E4405F)",
    label: "Instagram",
  },

  snapchat: {
    icon: <FaSnapchat />,
    color: "var(--color-snapchat, #FFCC00)",
    label: "Snapchat",
  },
};


/* =========================================================
   09 — FOOTER COMPONENT
========================================================= */

function Footer() {
  const { t } = useTranslation();

  /* -------------------------------------------------------
     QUICK LINKS
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     SOCIAL LINKS

     Retrieved from the existing
     translation resources.
  ------------------------------------------------------- */

  const translatedSocialLinks = t(
    "home:footer.socialMedia.social",
    {
      returnObjects: true,
    }
  );

  const socialLinks =
    Array.isArray(translatedSocialLinks)
      ? translatedSocialLinks
      : [];

  /* -------------------------------------------------------
     CONTACT DETAILS
  ------------------------------------------------------- */

  const email = t(
    "home:footer.contactInfo.email.value"
  );

  const telephone = t(
    "home:footer.contactInfo.tel.value"
  );

  const location = t(
    "home:footer.contactInfo.location.value"
  );

  /* -------------------------------------------------------
     COPYRIGHT YEAR
  ------------------------------------------------------- */

  const year = new Date().getFullYear();

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <FooterContainer>

      <FooterContent>

        {/* =================================
            BRAND
        ================================= */}

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
                iconMap[
                  String(social.id).toLowerCase()
                ];

              if (
                !iconData ||
                !social.href
              ) {
                return null;
              }

              return (
                <SocialLink
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={iconData.label}
                  title={iconData.label}
                  style={{
                    "--social-color":
                      iconData.color,
                  }}
                >
                  {iconData.icon}
                </SocialLink>
              );

            })}

          </SocialContainer>

        </BrandArticle>

        {/* =================================
            QUICK LINKS
        ================================= */}

        <FooterArticle>

          <FooterTitle>
            {t("home:footer.quickLinks.title")}
          </FooterTitle>

          <QuickLinksContainer
            aria-label={t(
              "home:footer.quickLinks.title"
            )}
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

        {/* =================================
            CONTACT INFORMATION
        ================================= */}

        <FooterArticle>

          <FooterTitle>
            {t("home:footer.contactInfo.title")}
          </FooterTitle>

          <ContactContainer>

            {/* ---------------------------
                EMAIL
            --------------------------- */}

            <ContactItem>

              <ContactIcon
                aria-hidden="true"
                style={{
                  "--icon-color":
                    "var(--color-email, #EA4335)",
                }}
              >
                <MdOutlineMailOutline />
              </ContactIcon>

              <ContactValue
                dir="ltr"
              >
                <ContactLink
                  href={`mailto:${email}`}
                >
                  {email}
                </ContactLink>
              </ContactValue>

            </ContactItem>

            {/* ---------------------------
                TELEPHONE
            --------------------------- */}

            <ContactItem>

              <ContactIcon
                aria-hidden="true"
                style={{
                  "--icon-color":
                    "var(--color-whatsapp, #25D366)",
                }}
              >
                <BsTelephone />
              </ContactIcon>

              <ContactValue
                dir="ltr"
              >
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

            {/* ---------------------------
                LOCATION
            --------------------------- */}

            <ContactItem>

              <ContactIcon
                aria-hidden="true"
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

      {/* =================================
          COPYRIGHT
      ================================= */}

      <FooterBottom>

        <BottomContent>

          <Copyright>
            © {year}{" "}
            {t("home:footer.copyright")}
          </Copyright>

        </BottomContent>

      </FooterBottom>

    </FooterContainer>
  );
}


/* =========================================================
   10 — EXPORT
========================================================= */

export default Footer;
