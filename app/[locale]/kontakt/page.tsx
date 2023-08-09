import Faq from "@/components/BeforeTravel/Faq";
import CompanyData from "@/components/Contact/CompanyData";
import ContactForm from "@/components/Contact/ContactForm";
import SectionHeader from "@/components/Typography/SectionHeader";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("quater");

  return (
    <div className="bg-gray-50 flex flex-col text-center justify-center items-center p-4 w-screen">
      <SectionHeader>Kontakt</SectionHeader>
      <h2 className="text-xl font-light mb-5">
        Masz pytanie na które nie znalazłeś odpowiedzi?
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center w-screen container md:px-20 ">
        <CompanyData />
        <ContactForm width="quater"/>
      </div>
      <Faq />
    </div>
  );
};

export default Contact;
