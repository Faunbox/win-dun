import Animals from "@/components/BeforeTravel/Animals";
import Faq from "@/components/BeforeTravel/Faq";
import HowToReserve from "@/components/BeforeTravel/HowToReserve";
import Luggage from "@/components/BeforeTravel/Luggage";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const BeforeTravel = () => {
  const t = useTranslations("beforeTravel");

  return (
    <div className="bg-gray-50 flex flex-col text-center justify-center items-center mt-20 p-4 w-screen">
      <SectionHeader>{t("title")}</SectionHeader>
      <HowToReserve />
      <Luggage />
      {/* <Animals /> */}
      <Faq />
    </div>
  );
};

export default BeforeTravel;
