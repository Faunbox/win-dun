import SectionHeader from "../Typography/SectionHeader";
import ContactForm from "../Contact/ContactForm";
import { BsMessenger, BsTelephoneOutbound, BsWhatsapp } from "react-icons/bs";

const Order = () => {
  return (
    <section className="bg-gray-100 section-container p-4 py-20 flex-col">
      {/* <SectionHeader>Kontakt</SectionHeader> */}
      <div className="container w-full flex flex-col md:flex-row gap-4 md:justify-around px-4">
        <div className="flex flex-col w-full md:max-w-[50%] justify-center items-center text-center gap-4">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1kTuo__lzH_8vQC9LyxqivG9D-QgCumw&ehbc=2E312F"
            width="640"
            height="480"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
        <div className="flex flex-col w-full py-4">
          <ContactForm width="full" />
          <p>lub</p>
          <div className="flex flex-row items-center justify-center gap-6 mt-4">
            <BsTelephoneOutbound size={25} />
            <BsMessenger size={25} />
            <BsWhatsapp size={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
