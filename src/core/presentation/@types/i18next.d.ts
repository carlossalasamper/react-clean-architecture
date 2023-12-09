import en from "@/core/presentation/i18n/en";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof en;
  }
}
