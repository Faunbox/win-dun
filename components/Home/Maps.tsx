import Image from "next/image";
import SectionHeader from "../Typography/SectionHeader";
import { useTranslations } from "next-intl";
import MapTable from "./MapTable";

const Maps = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-footer pt-10">
      <div className="flex flex-col items-center justify-center relative container px-10">
        <SectionHeader>{t("heroMapTitle")}</SectionHeader>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <Image
              src="/images/123456.png"
              alt="Europe map"
              quality="100"
              width={1000}
              height={250}
              loading="lazy"
              className="h-full w-full"
            />
          </div>
          <div className="w-1/2 lg:w-1/4 lg:mt-12 mx-auto flex flex-col py-5 lg:py-0 lg:px-8">
            <SectionHeader>{t("mapTableHeader")}</SectionHeader>
            <MapTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
