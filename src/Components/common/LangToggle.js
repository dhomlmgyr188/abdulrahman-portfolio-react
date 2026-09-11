import { useTranslation } from "react-i18next";
import {IconButton} from "./Button";


const LangToggle = () => {
  const { i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar");

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <IconButton onClick={toggleLanguage}>
      <span className={`fi fi-${isArabic ? "us" : "sa"}`}></span>
    </IconButton>
  );
};

export default LangToggle;