import CompanyData from "@/components/Contact/CompanyData";
import ContactForm from "@/components/Contact/ContactForm";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("gallery");

  return (
    <div className="bg-gray-50 flex flex-col text-center justify-center items-center p-4 w-screen">
      <SectionHeader>{t("title")}</SectionHeader>
      <div className="flex flex-col md:flex-row justify-around items-center w-screen container">
        <CompanyData />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
