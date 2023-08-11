import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("gallery");

  return (
    <div className="section-container bg-gray-50 min-h-screen flex-col">
      <SectionHeader>{t("title")}</SectionHeader>
    </div>
  );
};

export default About;
