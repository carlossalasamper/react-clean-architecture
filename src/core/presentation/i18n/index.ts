import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import en from "./en";

i18next.use(initReactI18next).init({
  react: {
    useSuspense: false,
  },
  resources: {
    en,
  },
  lng: "en",
  fallbackLng: "en",
});
z.setErrorMap(zodI18nMap);
