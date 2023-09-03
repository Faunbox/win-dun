import Faq from "@/components/BeforeTravel/Faq";
import CompanyData from "@/components/Contact/CompanyData";
import ContactForm from "@/components/Contact/ContactForm";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col text-center justify-center items-center mt-20 p-4 w-screen">
      <SectionHeader>{t("title")}</SectionHeader>
      <div className="flex flex-col justify-around items-center w-full container md:px-20">
        <h2 className="text-lg font-light mx-4 mb-10">{t("text")}</h2>
        <div className="flex flex-col md:flex-row items-center w-full justify-center pb-14 gap-6">
          <CompanyData />
          <ContactForm width="quater" color="black" />
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default Contact;
