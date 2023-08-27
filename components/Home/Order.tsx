import Image from "next/image";
import ContactForm from "../Contact/ContactForm";
import { BsMessenger, BsTelephoneOutbound, BsWhatsapp } from "react-icons/bs";

const Order = () => {
  return (
    <section className=" section-container p-4 py-20 text-white bg-[#171213] flex-col">
      {/* <SectionHeader>Kontakt</SectionHeader> */}
      <div className="container w-full flex flex-col md:flex-row gap-4 md:justify-around px-4">
        <div className="flex flex-col w-full md:max-w-[50%] justify-center items-center text-center gap-4">
          {/* <iframe
            src="https://www.google.com/maps/d/embed?mid=1kTuo__lzH_8vQC9LyxqivG9D-QgCumw&ehbc=2E312F"
            width="640"
            height="480"
            loading="lazy"
            className="w-full"
          ></iframe> */}
          <div className="flex flex-col">
            <h2 className="text-xl mb-4">Obsługiwane województwa</h2>
            <Image
              src={"/images/pl.svg"}
              alt="mapa polski"
              width={550}
              height={600}
            />
          </div>
        </div>
        <div className="flex flex-col w-full py-4">
          <ContactForm width="full" />
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
