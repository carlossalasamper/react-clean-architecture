import { Context, useContext } from "react";
import { useTranslation } from "react-i18next";

export const useContextStore = <T>(
  Context: Context<T>
): Exclude<NonNullable<T>, null> => {
  const { t } = useTranslation(["core"]);
  const store = useContext(Context);

  if (!store) {
    throw new Error(
      t("errors.contextNotProvided", {
        contextName: Context.displayName,
      })
    );
  }

  return store;
};
