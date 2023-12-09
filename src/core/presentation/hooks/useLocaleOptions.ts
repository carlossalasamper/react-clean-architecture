import Locale from "@/core/domain/enums/Locale";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const useLocaleSelect = () => {
  const { t } = useTranslation(["core"]);
  const localeOptions = useMemo(() => {
    return Object.values(Locale).map((locale) => ({
      value: locale,
      label: t(`core:enums.Locale.${locale}`),
    }));
  }, [t]);
  const [selectedLocale, setSelectedLocale] = useState<Locale>(Locale.English);
  const onLocaleSelectChanged = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedLocale(event.target.value as Locale);
    },
    []
  );

  return {
    localeOptions,
    selectedLocale,
    setSelectedLocale,
    onLocaleSelectChanged,
  };
};

export default useLocaleSelect;
