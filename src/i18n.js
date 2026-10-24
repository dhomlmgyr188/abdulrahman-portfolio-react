import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import arCommon from "./locales/ar/common.json";
import arHome from "./locales/ar/home.json";
import arAbout from "./locales/ar/about.json";
import arProjects from "./locales/ar/projects.json";
import arContact from "./locales/ar/contact.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enProjects from "./locales/en/projects.json";
import enContact from "./locales/en/contact.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        common: arCommon,
        home: arHome,
        about: arAbout,
        projects: arProjects,
        contact: arContact
      },

      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        projects: enProjects,
        contact: enContact
      }
    },

    ns: [
      "common",
      "home",
      "about",
      "projects",
      "contact"
    ],

    defaultNS: "common",

    fallbackLng: "ar",

    interpolation: {
      escapeValue: false
    }
  });

const setDirection = (lng) => {
  document.documentElement.dir = lng.startsWith("ar") ? "rtl" : "ltr";
  document.documentElement.lang = lng.startsWith("ar") ? "ar" : "en";
};

i18n.on("languageChanged", setDirection);
setDirection(i18n.language);

export default i18n;