import { useTranslations } from "next-intl";
import SectionHeader from "../Typography/SectionHeader";
import Image from "next/image";

const Why = () => {
  const t = useTranslations("homePage");

  return (
    <section className="section-container">
      <div className="flex flex-col container  mx-auto py-12 md:p-4 justify-center items-center align-middle">
        <SectionHeader>{t("whyOurCompany.title")}</SectionHeader>
        <div className="grid md:grid-rows-none lg:grid-cols-4 items-center">
          <div className="mx-auto p-4 md:p-0 lg:col-span-2">
            <Image
              src={"/images/why-bus.png"}
              alt="tak"
              width={600}
              height={500}
              className="hover:scale-110 duration-700"
            />
          </div>
          <div className="flex flex-col gap-2 px-4">
            <div className="">
              <h2>{t("whyOurCompany.texts.header1")}</h2>
              <p>{t("whyOurCompany.texts.description1")}</p>
            </div>
            <div>
              <h2>{t("whyOurCompany.texts.header2")}</h2>
              <p>{t("whyOurCompany.texts.description2")}</p>
            </div>
            <div>
              <h2>{t("whyOurCompany.texts.header3")}</h2>
              <p>{t("whyOurCompany.texts.description3")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-4 md:px-4">
            <div>
              <h2>{t("whyOurCompany.texts.header4")}</h2>
              <p>{t("whyOurCompany.texts.description4")}</p>
            </div>
            <div>
              <h2>{t("whyOurCompany.texts.header5")}</h2>
              <p>{t("whyOurCompany.texts.description5")}</p>
            </div>
            <div>
              <h2>{t("whyOurCompany.texts.header6")}</h2>
              <p>{t("whyOurCompany.texts.description6")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
