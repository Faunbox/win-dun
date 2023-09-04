
import ContactForm from "../Contact/ContactForm";
import {
  BsMessenger,
  BsTelephoneOutbound,
  BsWhatsapp,
} from "react-icons/bs";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Order = () => {

  const HomeBuses = dynamic(() => import("./Buses"))

  const t = useTranslations("homePage");
  return (
    <section className=" section-container p-4 py-20 px-8 text-white bg-[#171213] flex-col h-full items-start">
      {/* <SectionHeader>Kontakt</SectionHeader> */}
      <div className="container w-full flex flex-col lg:flex-row gap-4 lg:justify-around items-start px-4">
        <div className="flex flex-col w-full lg:max-w-[50%] justify-center items-center sm:items-start text-center gap-4 text-white mb-16 md:mb-0">
          {/* <div className="flex flex-col w-full items-center">
            <SectionHeader>Obsługiwane województwa</SectionHeader>
            <motion.img
              src={"/images/mapa.svg"}
              alt="mapa polski"
              width={550}
              height={600}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div> */}
          <HomeBuses />
        </div>
        <div className="flex flex-col w-full">
          <ContactForm width="full" padding={true} />
          <p>lub</p>
          <div className="flex flex-row items-center justify-center gap-6 mt-4">
            <a href="tel:+48505216526">
              <BsTelephoneOutbound size={25} />
            </a>
            <a href="https://m.me/107516904418538" target={"_blank"}>
              <BsMessenger size={25} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=505216526"
              target={"_blank"}
            >
              <BsWhatsapp size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
