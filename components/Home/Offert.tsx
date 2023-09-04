import SectionHeader from "../Typography/SectionHeader";
import OffertCard from "./OffertCard";
import { useTranslations } from "next-intl";
import { useScroll, motion } from "framer-motion";

const OffertSection = () => {
  const t = useTranslations("homePage");

  const images = [
    "/images/paczka-bus.jpg",
    "/images/kotek.jpg",
    "/images/paczka2.jpg",
  ];

  

  return (
      <section className="section-container bg-white min-h-[40vh] py-10">
        <div className="container flex flex-col md:p-4 justify-center items-center">
          <SectionHeader>{t("services.title")}</SectionHeader>
          <div className="grid grid-flow-row md:grid-cols-3 gap-5 md:gap-14 my-4 justify-center items-start md:justify-around">
            {images.map((obj, index) => (
              <OffertCard
                key={index}
                number={index}  
                title={t(`services.header${index + 1}`)}
                photo={obj}
                description={t(`services.description${index + 1}`)}
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default OffertSection;
