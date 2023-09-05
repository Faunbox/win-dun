import Image from "next/image";
import SectionHeader from "../Typography/SectionHeader";
import { useTranslations } from "next-intl";

const Maps = () => {

  const t =  useTranslations("homePage")

  return (
    <div className="section-container bg-footer pt-10">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader>{t("heroMapTitle")}</SectionHeader>
        <Image
          src="/images/mapa.webp"
          alt="Europe map"
          quality={70}
          width={1000}
          height={250}
          loading="lazy"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Maps;
