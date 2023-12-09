import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFoundPage = () => {
  const { t } = useTranslation(["core"]);
  const navigate = useNavigate();
  const onBackHomeButtonClicked = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Helmet title={t("pages.NotFoundPage.head.title")} />

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-primary text-9xl font-bold">404</h1>
        <h2 className="text-4xl">{t("pages.NotFoundPage.message")}</h2>

        <Button className="mt-4" onClick={onBackHomeButtonClicked}>
          {t("pages.NotFoundPage.backHomeButton")}
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
