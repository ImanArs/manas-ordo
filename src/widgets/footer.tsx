import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      id="contacts"
      className="relative z-[10] bg-[#282828] flex flex-col gap-10 md:gap-0 md:grid grid-cols-4 p-2.5 items-center justify-center text-center text-white"
    >
      <img src="/images/logo.png" className="w-[45px] h-[45px]" alt="" />
      <div className="flex flex-col gap-5 items-center justify-center">
        {t("Partners")}
        <div className="flex gap-5 items-center">
          <img
            src="/icons/logo_hands.png"
            className="w-[45px] h-[45px]"
            alt=""
          />
          <img
            src="/icons/logo_bird.png"
            className="w-[45px] h-[45px]"
            alt=""
          />
          <img
            src="/icons/logo_SIDP.png"
            className="w-[45px] h-[45px]"
            alt=""
          />
        </div>
      </div>
      <div>
        <h3>{t("Phone")}</h3>
        <ul>
          <li>0700-655-901</li>
          <li>0772-655-901</li>
          <li>0552-655-901</li>
          <li>0771-550-560</li>
          <li>0700-550-560</li>
        </ul>
      </div>
      <div>
        <h3>{t("Social-media")}</h3>
        <a href="https://fb.watch/hqEA2vbFzB/?mibextid=RUbZ1f">facebook</a>
      </div>
    </footer>
  );
};
