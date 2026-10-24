import { useTranslation } from "react-i18next";
import {IconButton} from "../ui/Button/Button";
import sa from "../../assets/icons/flag-for-flag-saudi-arabia-svgrepo-com.svg";
import uusa from "../../assets/icons/usa-svgrepo-com.svg";

const LangToggle = () => {
  const { i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar");

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <IconButton onClick={toggleLanguage}>
      <img src={isArabic ? uusa : sa} alt={isArabic ? "English" : "العربية"} />
    </IconButton>
  );
};

export default LangToggle;