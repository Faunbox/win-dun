import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin przejazdu | Wit-dun Express",
  
};

const About = () => {
  const t = useTranslations("termsOfUse");

  return (
    <div className="flex flex-col text-center justify-center items-center mt-10 px-4 py-16 w-screen">
      <SectionHeader>{t("title")}</SectionHeader>
      <div className="flex flex-col relative lg:flex-row lg:gap-8 container py-10 mt-10 px-2 text-left border-1 border-black after:content-[''] after:border-1 after:border-black after:w-full after:h-full after:absolute after:inset-x-2 after:-inset-y-2 lg:divide-x  lg:divide-black">
        <div className="flex flex-col items-right w-full lg:w-6/12 lg:ml-8 gap-2 md:gap-1">
          <p>{t("terms.1")}</p>
          <p>{t("terms.2")}</p>
          <p>{t("terms.3")}</p>
          <p className="font-semibold">{t("terms.Luggage")}</p>
          <p>{t("terms.Luggage1")}</p>
          <p>{t("terms.Luggage2")}</p>
          <p>{t("terms.4")}</p>
        </div>
        <div className="flex flex-col items-right w-full lg:w-6/12 lg:px-8 gap-2 md:gap-1">
          <p>{t("terms.5")}</p>
          <p>{t("terms.6")}</p>
          <p>{t("terms.7")}</p>
          <p className="font-semibold">{t("terms.Negative")}</p>
          <p>{t("terms.Negative1")}</p>
          <p>{t("terms.Negative2")}</p>
          <p>{t("terms.8")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
