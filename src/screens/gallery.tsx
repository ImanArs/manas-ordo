import { useTranslation } from "react-i18next";

export const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h2>{t("Gallery")}</h2>
      </div>
    </div>
  );
};
