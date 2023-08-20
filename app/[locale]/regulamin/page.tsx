import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("termsOfUse");


  return (
    <div className="bg-gray-50 flex flex-col text-center justify-center items-center mt-20 p-4 w-screen">
      <SectionHeader>{t("title")}</SectionHeader>
      <div className="flex flex-col gap-2 container py-10 px-2 text-left">
        <p>{t("terms.1")}</p>
        <p>{t("terms.2")}</p>
        <p>{t("terms.3")}</p>
        <p className="font-semibold">{t("terms.Luggage")}</p>
        <p>{t("terms.Luggage1")}</p>
        <p>{t("terms.Luggage2")}</p>
        <p>{t("terms.4")}</p>
        <p>{t("terms.5")}</p>
        <p>{t("terms.6")}</p>
        <p>{t("terms.7")}</p>
        <p className="font-semibold">{t("terms.Negative")}</p>
        <p>{t("terms.Negative1")}</p>
        <p>{t("terms.Negative2")}</p>
        <p>{t("terms.8")}</p>
      </div>
    </div>
  );
};

export default About;
