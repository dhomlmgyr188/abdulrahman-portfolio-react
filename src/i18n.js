
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/* =========================================================
   ARABIC TRANSLATIONS
========================================================= */

import arCommon from "./locales/ar/common.json";
import arHome from "./locales/ar/home.json";
import arAbout from "./locales/ar/about.json";
import arProjects from "./locales/ar/projects.json";
import arContact from "./locales/ar/contact.json";

/* =========================================================
   ENGLISH TRANSLATIONS
========================================================= */

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enProjects from "./locales/en/projects.json";
import enContact from "./locales/en/contact.json";

/* =========================================================
   CONFIGURATION
========================================================= */

const DEFAULT_LANGUAGE = "ar";

const SUPPORTED_LANGUAGES = ["ar", "en"];

const LANGUAGE_STORAGE_KEY = "i18nextLng";

const NAMESPACES = [
  "common",
  "home",
  "about",
  "projects",
  "contact",
];

/* =========================================================
   TRANSLATION RESOURCES
========================================================= */

const resources = {
  ar: {
    common: arCommon,
    home: arHome,
    about: arAbout,
    projects: arProjects,
    contact: arContact,
  },

  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    projects: enProjects,
    contact: enContact,
  },
};

/* =========================================================
   LANGUAGE NORMALIZATION
========================================================= */

/**
 * Convert language codes to a supported language.
 *
 * Examples:
 * ar       -> ar
 * ar-SA    -> ar
 * en       -> en
 * en-US    -> en
 * fr       -> ar
 */

const normalizeLanguage = (language) => {
  const value = String(language || "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-");

  const primaryLanguage = value.split("-")[0];

  return SUPPORTED_LANGUAGES.includes(primaryLanguage)
    ? primaryLanguage
    : DEFAULT_LANGUAGE;
};

/* =========================================================
   DOCUMENT LANGUAGE AND DIRECTION
========================================================= */

/**
 * Synchronize the document's language and direction.
 * Arabic: RTL
 * English: LTR
 */

const updateDocumentLanguage = (language) => {
  if (typeof document === "undefined") {
    return;
  }

  const normalizedLanguage =
    normalizeLanguage(language);

  const direction =
    normalizedLanguage === "ar" ? "rtl" : "ltr";

  const html = document.documentElement;

  html.setAttribute("lang", normalizedLanguage);
  html.setAttribute("dir", direction);
};

/* =========================================================
   I18NEXT INITIALIZATION
========================================================= */

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,

      /* -------------------------
         LANGUAGE SETTINGS
      ------------------------- */

      supportedLngs: SUPPORTED_LANGUAGES,

      fallbackLng: DEFAULT_LANGUAGE,

      load: "languageOnly",

      nonExplicitSupportedLngs: true,

      /* -------------------------
         NAMESPACES
      ------------------------- */

      ns: NAMESPACES,

      defaultNS: "common",

      fallbackNS: "common",

      /* -------------------------
         LANGUAGE DETECTION
      ------------------------- */

      detection: {
        order: ["localStorage"],

        lookupLocalStorage:
          LANGUAGE_STORAGE_KEY,

        caches: ["localStorage"],

        excludeCacheFor: ["cimode"],

        convertDetectedLanguage:
          normalizeLanguage,
      },

      /* -------------------------
         TRANSLATION BEHAVIOR
      ------------------------- */

      interpolation: {
        escapeValue: false,
      },

      returnNull: false,

      returnEmptyString: false,

      /* -------------------------
         REACT CONFIGURATION
      ------------------------- */

      react: {
        useSuspense: false,
      },

      /* -------------------------
         DEBUGGING
      ------------------------- */

      debug: false,
    });
}

/* =========================================================
   LANGUAGE CHANGE HANDLER
========================================================= */

/**
 * Called whenever the user changes language
 * through LangToggle or another component.
 */

const handleLanguageChanged = (language) => {
  updateDocumentLanguage(language);
};

/*
  Register the listener only once.

  This avoids duplicate event listeners during
  development hot module replacement.
*/

const listenerKey =
  "__portfolioDocumentLanguageListener";

if (i18n[listenerKey]) {
  i18n.off(
    "languageChanged",
    i18n[listenerKey]
  );
}

i18n.on(
  "languageChanged",
  handleLanguageChanged
);

i18n[listenerKey] = handleLanguageChanged;

/* =========================================================
   INITIAL DOCUMENT DIRECTION
========================================================= */

/**
 * Apply the correct direction immediately
 * after initialization.
 */

updateDocumentLanguage(
  i18n.resolvedLanguage ||
    i18n.language ||
    DEFAULT_LANGUAGE
);

/* =========================================================
   EXPORT
========================================================= */

export default i18n;
