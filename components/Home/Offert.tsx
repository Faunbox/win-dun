import SectionHeader from "../Typography/SectionHeader";
import OffertCard from "./OffertCard";
import { useTranslations } from "next-intl";

const OffertSection = () => {
  const t = useTranslations("homePage");
  const images = [
    "/images/zwierze.jpg",
    "/images/bus.jpg",
    "/images/paczki.jpg",
  ];

  return (
    <section className="section-container bg-gray-300 min-h-[40vh] py-10">
      <div className="container flex flex-col md:p-4 justify-center items-center">
        <SectionHeader>{t("services.title")}</SectionHeader>
        <div className="grid grid-flow-row md:grid-cols-3 gap-5 md:gap-10 my-2 justify-center items-start md:justify-around">
          {images.map((obj, index) => (
            <OffertCard
              key={index}
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
