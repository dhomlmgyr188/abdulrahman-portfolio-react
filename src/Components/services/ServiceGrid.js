
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import {
  FaCode,
  FaDesktop,
  FaCogs,
  FaGlobe,
  FaHeadset,
  FaDatabase,
  FaPalette,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";

import ServicesCard from "./ServiceCard";

/* =========================================
   SERVICE ICONS
========================================= */

const icons = {
  landing: FaDesktop,
  business: FaBriefcase,
  custom: FaLaptopCode,
  management: FaGlobe,
  support: FaHeadset,
  data: FaDatabase,
  design: FaPalette,

  // Legacy icon identifiers
  web: FaCode,
  technology: FaDesktop,
  applications: FaCogs,
};

/* =========================================
   RESPONSIVE SERVICES GRID
========================================= */

const ServicesList = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  align-items: stretch;

  gap: clamp(16px, 2vw, 24px);

  width: 100%;
  min-width: 0;

  box-sizing: border-box;

  > * {
    min-width: 0;
    height: 100%;
  }

  /* Center the seventh card on desktop */

  > :last-child:nth-child(7) {
    grid-column: 2;
  }

  /* Tablet: two columns */

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    > :last-child:nth-child(7) {
      grid-column: 1 / -1;

      width: calc((100% - clamp(16px, 2vw, 24px)) / 2);
      justify-self: center;
    }
  }

  /* Mobile: one column */

  @media (max-width: 600px) {
    grid-template-columns:
      minmax(0, 1fr);

    gap: 16px;

    > :last-child:nth-child(7) {
      grid-column: 1;

      width: 100%;
      justify-self: stretch;
    }
  }
`;

/* =========================================
   EMPTY STATE
========================================= */

const EmptyState = styled.p`
  margin: 0;

  padding: 32px 20px;

  border: 1px solid var(--color-border);

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

/* =========================================
   SERVICE GRID COMPONENT
========================================= */

function ServicesGrid() {
  const { t } = useTranslation();

  /* -----------------------------------------
     TRANSLATED SERVICES
  ----------------------------------------- */

  const translatedServices = t(
    "home:services.items",
    {
      returnObjects: true,
      defaultValue: [],
    }
  );

  const services =
    Array.isArray(translatedServices)
      ? translatedServices
      : [];

  const emptyMessage = t(
    "home:services.empty",
    {
      defaultValue: "",
    }
  );

  /* -----------------------------------------
     EMPTY STATE
  ----------------------------------------- */

  if (services.length === 0) {
    return (
      <EmptyState role="status">
        {emptyMessage}
      </EmptyState>
    );
  }

  /* -----------------------------------------
     RENDER
  ----------------------------------------- */

  return (
    <ServicesList>
      {services.map((service, index) => {
        const Icon =
          icons[service.icon] || FaCode;

        const serviceKey =
          service.id ??
          `${service.icon || "service"}-${index}`;

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

export default ServicesGrid;
