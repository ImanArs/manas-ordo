import { useTranslation } from "react-i18next";

export const Archaelog = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10">
      <h2>{t("Museum-of-Archeology")}</h2>
      <div className="flex [&_img]:max-w-[220px] [&_img]:w-full [&_img]:mr-[-40px] overflow-auto">
        <img src="/images/archeolog/archeology.png" alt="" />
        <img src="/images/archeolog/archeology2.png" alt="" />
        <img src="/images/archeolog/archeology3.png" alt="" />
        <img src="/images/archeolog/archeology4.png" alt="" />
        <img src="/images/archeolog/archeology5.png" alt="" />
      </div>
      <p>{t("Museum-of-Archeology-text")}</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img src="/images/archeolog/archeologyMap.png" alt="" />
        <p>{t("Museum-of-Archeology-text-2")}</p>
      </div>

      <p>{t("Museum-of-Archeology-text-3")}</p>

      <div className="flex overflow-auto gap-2 justify-between">
        <img src="/images/archeolog/archeologyBronze.png" alt="" />
        <img src="/images/archeolog/archeologyBronze2.png" alt="" />
        <img src="/images/archeolog/archeologyBronze3.png" alt="" />
        <img src="/images/archeolog/archeologyBronze4.png" alt="" />
      </div>

      <p>{t("Museum-of-Archeology-text-4")}</p>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <img src="/images/archeolog/archeologyBottom.png" alt="" />
        <img src="/images/archeolog/archeologyBottom2.png" alt="" />
      </div>
    </div>
  );
};
