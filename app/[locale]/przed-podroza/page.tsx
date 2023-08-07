import Animals from "@/components/BeforeTravel/Animals";
import Faq from "@/components/BeforeTravel/Faq";
import HowToReserve from "@/components/BeforeTravel/HowToReserve";
import Luggage from "@/components/BeforeTravel/Luggage";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const BeforeTravel = () => {
  const t = useTranslations("beforeTravel");

  return (
    <div className="section-container bg-gray-50 min-h-screen flex-col text-center p-4">
      <SectionHeader>{t("title")}</SectionHeader>
      <HowToReserve />
      <Luggage />
      <Animals />
      <Faq />
    </div>
  );
};

export default BeforeTravel;
