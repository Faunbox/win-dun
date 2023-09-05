import Faq from "@/components/BeforeTravel/Faq";
import CompanyData from "@/components/Contact/CompanyData";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";
// import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: 'Kontakt | Wit-dun Express',
}

const Contact = () => {
  // const t = useTranslations("contact");
  

  return (
    <div className="flex flex-col text-center justify-center items-center mt-32 p-4 w-screen">
      {/* <SectionHeader>{t("title")}</SectionHeader> */}
      <div className="flex flex-col justify-around items-center w-full container md:px-20">
        {/* <h2 className="text-lg font-light mx-4 mb-10">{t("text")}</h2> */}
        <div className="flex flex-col lg:flex-row items-center w-full justify-center pb-20 gap-6">
          <CompanyData />
          <ContactForm width="quater" color="black" />
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default Contact;
