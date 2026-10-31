
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import {
  FaCode,
  FaDesktop,
  FaCogs,
} from "react-icons/fa";

import ServicesCard from "./ServiceCard";

/* =========================================================
   ABDULRAHMAN PORTFOLIO
   COMPONENTS — SERVICE GRID

   Design System:
   - Modern Professional
   - Ocean / Orca

   Preserved:
   - Three services from home.json
   - Original icon names
   - Original icon components
   - Service titles
   - Service descriptions
   - Arabic / English
   - Light / Dark theme
   - Responsive layout

   Export:
   - ServicesGrid (default)
========================================================= */


/* =========================================================
   01 — ICON MAP

   These identifiers are used in
   home:services.items.

   Do not change them without updating
   the corresponding translation files.
========================================================= */

const icons = {
  web: FaCode,

  technology: FaDesktop,

  applications: FaCogs,
};


/* =========================================================
   02 — RESPONSIVE SERVICES GRID

   Desktop:
   3 columns

   Tablet:
   2 columns

   Mobile:
   1 column
========================================================= */

const ServicesList = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  align-items: stretch;

  gap: clamp(
    16px,
    2vw,
    24px
  );

  width: 100%;
  min-width: 0;

  box-sizing: border-box;

  /* -------------------------------------------------------
     CARD CONTAINERS
  ------------------------------------------------------- */

  > * {
    min-width: 0;
    height: 100%;
  }

  /* -------------------------------------------------------
     TABLET
  ------------------------------------------------------- */

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  /* -------------------------------------------------------
     MOBILE
  ------------------------------------------------------- */

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1fr);

    gap: 16px;
  }
`;


/* =========================================================
   03 — EMPTY STATE

   Displayed only when no valid
   service items are available.
========================================================= */

const EmptyState = styled.p`
  margin: 0;

  padding: 32px 20px;

  border:
    1px solid var(--color-border);

  border-radius:
    var(--radius-card, 14px);

  background-color:
    var(--color-background);

  color:
    var(--color-text-secondary);

  font-size: 0.95rem;
  line-height: 1.8;

  text-align: center;
`;


/* =========================================================
   04 — SERVICES GRID COMPONENT
========================================================= */

function ServicesGrid() {

  /* -------------------------------------------------------
     TRANSLATION
  ------------------------------------------------------- */

  const { t, i18n } = useTranslation();

  /* -------------------------------------------------------
     LANGUAGE
  ------------------------------------------------------- */

  const language =
    i18n.resolvedLanguage ||
    i18n.language ||
    "ar";

  const isArabic =
    language.toLowerCase().startsWith("ar");

  /* -------------------------------------------------------
     TRANSLATED SERVICES

     Source:
     home:services.items
  ------------------------------------------------------- */

  const translatedServices = t(
    "home:services.items",
    {
      returnObjects: true,
      defaultValue: [],
    }
  );

  /* -------------------------------------------------------
     NORMALIZE SERVICES DATA
  ------------------------------------------------------- */

  const services =
    Array.isArray(translatedServices)
      ? translatedServices
      : [];

  /* =====================================================
     05 — EMPTY STATE
  ===================================================== */

  if (services.length === 0) {

    return (
      <EmptyState role="status">

        {isArabic
          ? "لا توجد خدمات متاحة للعرض حاليًا."
          : "No services available at the moment."}

      </EmptyState>
    );
  }

  /* =====================================================
     06 — RENDER SERVICES
  ===================================================== */

  return (
    <ServicesList>

      {services.map((service, index) => {

        /* -----------------------------------------------
           RESOLVE ICON

           The original icon mapping is
           preserved.

           FaCode is used as a fallback
           if an icon identifier is missing.
        ----------------------------------------------- */

        const Icon =
          icons[service.icon] || FaCode;

        /* -----------------------------------------------
           STABLE KEY
        ----------------------------------------------- */

        const serviceKey =
          service.id ??
          `${service.icon || "service"}-${index}`;

        /* -----------------------------------------------
           RENDER SERVICE CARD
        ----------------------------------------------- */

        return (
          <ServicesCard
            key={serviceKey}
            icon={Icon}
            title={service.title}
            description={service.description}
          />
        );

      })}

    </ServicesList>
  );
}


/* =========================================================
   07 — EXPORT
========================================================= */

export default ServicesGrid;
