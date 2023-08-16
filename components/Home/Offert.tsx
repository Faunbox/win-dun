import { OffertPL, OffertEN, OffertNL } from "../Navigation/data";
import SectionHeader from "../Typography/SectionHeader";
import OffertCard from "./OffertCard";
import { useLocale, useTranslations } from "next-intl";

const OffertSection = () => {
  const t = useTranslations("homePage");

  const locale = useLocale();

  return (
    <section className="section-container bg-gray-300 min-h-[40vh] py-10">
      <div className="container flex flex-col md:p-4 justify-center items-center">
        <SectionHeader>{t("services.title")}</SectionHeader>
        <div className="grid grid-flow-row md:grid-cols-3 gap-5 md:gap-10 my-2 justify-center items-start md:justify-around">
          {locale === "pl" &&
            OffertPL?.map(
              ({
                title,
                photo,
                description,
              }: {
                title: string;
                photo: string;
                description: string;
              }) => (
                <OffertCard
                  key={title}
                  title={title}
                  photo={photo}
                  description={description}
                />
              )
            )}
          {locale === "nl" &&
            OffertNL?.map(
              ({
                title,
                photo,
                description,
              }: {
                title: string;
                photo: string;
                description: string;
              }) => (
                <OffertCard
                  key={title}
                  title={title}
                  photo={photo}
                  description={description}
                />
              )
            )}
          {locale === "en" &&
            OffertEN?.map(
              ({
                title,
                photo,
                description,
              }: {
                title: string;
                photo: string;
                description: string;
              }) => (
                <OffertCard
                  key={title}
                  title={title}
                  photo={photo}
                  description={description}
                />
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default OffertSection;
