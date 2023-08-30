import { useTranslations } from "next-intl";
import SectionHeader from "../Typography/SectionHeader";
import Image from "next/image";
import WhyHeaders from "./WhyHeaders";
import BusImageComponent from "./BusImage";

const Why = () => {
  const t = useTranslations("homePage");

  return (
    <section className="section-container">
      <div className="flex flex-col container mx-auto lg:py-12 md:mt-20 md:p-4 justify-center items-center align-middle relative">
        <div className="flex flex-col lg:flex-row  items-center">
          <BusImageComponent />
          <div className="flex flex-col w-full lg:w-7/12">
            <SectionHeader>{t("whyOurCompany.title")}</SectionHeader>
            <div className="flex flex-col lg:flex-row w-full gap-6 mt-4">
              <div className="flex flex-col gap-6 justify-between px-4 md:px-4">
                <div>
                  <WhyHeaders margin={"mb-2"}>
                    {t("whyOurCompany.texts.header1")}
                  </WhyHeaders>
                  <p>{t("whyOurCompany.texts.description1")}</p>
                </div>
                <div>
                  <WhyHeaders margin={"mb-2"}>
                    {t("whyOurCompany.texts.header2")}
                  </WhyHeaders>
                  <p>{t("whyOurCompany.texts.description2")}</p>
                </div>
              </div>
              <div className="block lg:hidden mx-auto p-4 md:p-0 lg:col-span-1 ">
                <Image
                  src={"/images/busikk.png"}
                  alt="tak"
                  width={1240}
                  height={720}
                  className="hover:scale-110 duration-700 lg:absolute lg:-top-24 lg:-left-[38%] xl:-left-[30%] 2xl:-left-[25%]"
                />
              </div>

              <div className="flex flex-col justify-between gap-6 px-4 md:px-4">
                <div>
                  <WhyHeaders margin={"mb-2"}>
                    {t("whyOurCompany.texts.header3")}
                  </WhyHeaders>
                  <p>{t("whyOurCompany.texts.description3")}</p>
                </div>
                <div>
                  <WhyHeaders margin={"mb-2"}>
                    {t("whyOurCompany.texts.header4")}
                  </WhyHeaders>
                  <p>{t("whyOurCompany.texts.description4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
