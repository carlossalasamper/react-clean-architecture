import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation(["core"]);

  return (
    <>
      <Helmet title={t("core:pages.HomePage.head.title")} />

      <div>
        <h1>{t("core:pages.HomePage.title")}</h1>
      </div>
    </>
  );
};

export default HomePage;
