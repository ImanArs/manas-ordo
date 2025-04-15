import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[735px] w-full mx-auto flex flex-col gap-10">
      <div className="flex justify-between w-full">
        <img src="/images/home/top.png" className="w-1/4" alt="" />
        <img src="/images/home/top2.png" className="w-1/2" alt="" />
      </div>

      <div className="flex gap-5 justify-between">
        <img src="/images/home/top3.png" alt="" />
        <div>
          <h2>{t("Manas-Ordo-Complex")}</h2>
          <p>{t("Manas-Ordo-Complex-text")}</p>
        </div>
      </div>

      <div>
        <h2>{t("Manas-Ordo-Complex")}</h2>
        <p>{t("Manas-Ordo-Complex-text-2")}</p>
      </div>

      <div className="flex gap-5 justify-between">
        <div>
          <h2>{t("Arch")}</h2>
          <p>{t("Arch-text")}</p>
        </div>
        <img src="/images/home/arch.png" alt="" className="w-[250px]" />
      </div>

      <div className="flex gap-5 justify-between items-center">
        <img src="/images/home/parking.png" alt="" className="w-[430px]" />
        <div>
          <h2>{t("Parking-Lot")}</h2>
          <p>{t("Parking-Lot-text")}</p>
        </div>
      </div>

      <div className="flex gap-5 justify-between items-center">
        <div>
          <h2>{t("Khan-Yurt")}</h2>
          <p>{t("Khan-Yurt-text")}</p>
        </div>
        <img src="/images/home/khanYurt.png" alt="" className="w-[250px]" />
      </div>

      <div className="flex flex-col gap-2">
        <h2>{t("Garden-Manas-Ordo")}</h2>
        <p>{t("Garden-Manas-Ordo-text")}</p>
        <img src="/images/home/garden.png" alt="" />
      </div>

      <div className="flex gap-2 justify-between items-center">
        <div>
          <h2>{t("Alley-of-Honorary")}</h2>
          <p>{t("Alley-of-Honorary-text")}</p>
        </div>
        <img src="/images/home/alley.png" alt="" className="w-[250px]" />
      </div>

      <div className="flex justify-between">
        <div className="flex w-[350px] h-full relative [&_img]:w-[150px]">
          <img
            src="/images/home/velik1.png"
            alt=""
            className="absolute top-[100px] left-0"
          />
          <img
            src="/images/home/velik2.png"
            alt=""
            className="absolute top-[50px] left-[100px]"
          />
          <img
            src="/images/home/velik3.png"
            alt=""
            className="absolute top-0 left-[200px]"
          />
        </div>
        <div className="w-[350px]">
          <h2>{t("Manas-40")}</h2>
          <p>{t("Manas-40-text")}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2>{t("Kumbez-of-Manas")}</h2>
        <p>{t("Kumbez-of-Manas-text")}</p>
        <img src="/images/home/kumbez.png" className="mx-auto" alt="" />
        <p>{t("Kumbez-of-Manas-text-2")}</p>
        <img
          src="/images/home/kumbez2.png"
          className="mx-auto max-w-[420px] w-full"
          alt=""
        />
        <p>{t("Kumbez-of-Manas-text-3")}</p>
        <div className="flex gap-3">
          <img src="/images/home/kumbez3.png" className="mx-auto" alt="" />
          <img src="/images/home/kumbez4.png" className="mx-auto" alt="" />
          <img src="/images/home/kumbez5.png" className="mx-auto" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2>{t("Sentinel-Mountain")}</h2>
        <div className="max-w-[500px] w-full ml-auto">
          <p>{t("Sentinel-Mountain-text")}</p>
          <img src="/images/home/dozor.png" className="mx-auto" alt="" />
        </div>
        <div className="max-w-[500px] w-full">
          <p>{t("Sentinel-Mountain-text-2")}</p>
          <img src="/images/home/dozor2.png" className="mx-auto" alt="" />
        </div>
        <div className="max-w-[500px] w-full ml-auto">
          <p>{t("Sentinel-Mountain-text-3")}</p>
          <img src="/images/home/dozor3.png" className="mx-auto" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2>{t("Open-Air-Museum")}</h2>
        <p>{t("Open-Air-Museum-text")}</p>
        <div className="flex gap-2">
          <img src="/images/home/openAir.png" className="mx-auto" alt="" />
          <img src="/images/home/openAir2.png" className="mx-auto" alt="" />
          <img src="/images/home/openAir3.png" className="mx-auto" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2>{t("Museum-Epic")}</h2>
        <p>{t("Museum-Epic-text")}</p>
        <div className="flex gap-5 w-full">
          <img src="/images/home/museumEpos.png" className="w-1/2" alt="" />
          <img src="/images/home/museumEpos2.png" className="w-1/2" alt="" />
        </div>
      </div>

      <div>
        <h2>{t("Propitiatory-Tulookana")}</h2>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <p className="min-h-[40vh]">{t("Propitiatory-Tulookana-text")}</p>
            <img src="/images/home/tulookana.png" className="w-full" alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="min-h-[40vh]">{t("Propitiatory-Tulookana-text-2")}</p>
            <img src="/images/home/tulookana2.png" className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
