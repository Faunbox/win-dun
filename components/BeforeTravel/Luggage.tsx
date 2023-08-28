import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../Typography/SectionHeader";

const Luggage = () => {
  const t = useTranslations("beforeTravel");

  return (
    <div className="container flex flex-col-reverse lg:flex-row-reverse my-20 pt-8 gap-2">
      <div className="w-full h-full lg:w-6/12 duration-300 ease-in-out">
        <Image
          src="/images/paczka.jpg"
          alt=""
          width={600}
          height={400}
          quality={100}
          className="w-full h-full object-center relative border-1 border-black"
        />
      </div>
      <div className="w-full lg:w-6/12 flex flex-col border-1 border-black">
        <div className="flex flex-col h-full items-center py-4">
          <SectionHeader>{t("package.luggageTitle")}</SectionHeader>
          <p className=" px-4">{t("package.luggageDesc")}</p>
        </div>
        <div className="h-full flex items-center justify-center p-4">
          <p>{t("package.luggageInfo")}</p>
        </div>
      </div>
    </div>
  );
};

export default Luggage;
