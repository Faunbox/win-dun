import { useTranslations } from "next-intl";
import SectionHeader from "../Typography/SectionHeader";
import Image from "next/image";
import WhyHeaders from "./WhyHeaders";
import BusImageComponent from "./BusImage";
import AboutHomeSection from "./About";

const Why = () => {
  const t = useTranslations("homePage");

  return (
    <section className="section-container mb-20 md:mb-10">
      <div className="flex flex-col container mx-auto lg:py-12 md:mt-20 md:p-4 justify-center items-center gap-2 align-middle relative">
        <div className="flex flex-col lg:flex-row  items-center">
          <div className="flex flex-col w-full lg:w-5/12">
            <div className="lg:absolute lg:-top-24 lg:-left-[55%] xl:-left-[38%] 2xl:-left-[25%]">
              <BusImageComponent variant="desktop" />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-7/12">
            <SectionHeader>{t("whyOurCompany.title")}</SectionHeader>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col lg:flex-row w-full gap-6 mt-4">
                <div className="flex flex-col gap-14 justify-between px-4 md:px-4">
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
                <BusImageComponent variant="mobile" />

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
              <AboutHomeSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
