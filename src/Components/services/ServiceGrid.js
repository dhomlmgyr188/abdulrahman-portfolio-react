import { useTranslation } from "react-i18next";
import ServicesCard from "./ServiceCard";
import { FaCode, FaDesktop, FaCogs  } from "react-icons/fa";
import { CardsGrid } from "../ui/card/CardsGrid";

const icons = {
  web: FaCode,
  technology: FaDesktop,
  applications: FaCogs,
};

const ServicesGrid = () => {
  const { t } = useTranslation();

  const services = t("home:services.items", {
    returnObjects: true,
  });

  return (
    <CardsGrid>
      {services.map( service => (
        <ServicesCard
          key={service.id}
          icon={icons[service.icon]}
          title={service.title}
          description={service.description}
        />
      ))}
    </CardsGrid>
  );
};

export default ServicesGrid;