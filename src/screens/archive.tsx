import { useTranslation } from "react-i18next";

export const Archive = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h2>{t("Archive")}</h2>
        <p>{t("Archive-text")}</p>
      </div>
    </div>
  );
};
