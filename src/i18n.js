import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: ar,
      },
      en: {
        translation: en,
      },
    },

    fallbackLng: "ar",

    interpolation: {
      escapeValue: false,
    },
  });

const setDirection = (lng) => {
  document.documentElement.dir = lng.startsWith("ar") ? "rtl" : "ltr";
  document.documentElement.lang = lng.startsWith("ar") ? "ar" : "en";
};

i18n.on("languageChanged", setDirection);
setDirection(i18n.language);

export default i18n;
