import HowToReserve from "@/components/BeforeTravel/HowToReserve";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const BeforeTravel = () => {
  const t = useTranslations("beforeTravel");
  const Luggage = dynamic(() => import("@/components/BeforeTravel/Luggage"));
  const Faq = dynamic(() => import("@/components/BeforeTravel/Faq"));

  return (
    <div className="flex flex-col text-center justify-center items-center mt-20 p-4 w-screen">
      <SectionHeader>{t("title")}</SectionHeader>
      <HowToReserve />
      <Luggage />
      {/* <Animals /> */}
      <Faq />
    </div>
  );
};

export default BeforeTravel;
