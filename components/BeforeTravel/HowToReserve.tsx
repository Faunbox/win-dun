import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  PiNumberSquareOneThin,
  PiNumberSquareTwoThin,
  PiNumberSquareThreeThin,
  PiNumberSquareFourThin,
} from "react-icons/pi";
import InfoComponents from "./InfoComponent";

const HowToReserve = () => {
  const t = useTranslations("beforeTravel");

  return (
    <section>
      <div className="bg-transparent text-black ">
        <div className="container mx-auto flex flex-col items-start md:flex-row mt-4 md:my-4">
          <InfoComponents />
          <div className="ml-0 md:ml-12 lg:w-2/3 pt-20">
            <div className="container mx-auto w-full h-full">
              <Image
                className="sticky top-7/12 top-0  mx-auto translate-y-1/2 -mt-36 z-10"
                src="/images/why-bus.png"
                alt="rocket"
                width={180}
                height={180}
              />
              <div className="relative wrap overflow-hidden md:p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border-2 border-solid right-[50%] bg-[#FFC100]"></div>
                <div className="border-2-2 border-yellow-555 absolute h-full border-2 border-solid left-[50%] bg-[#FFC100]"></div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-4 py-4 text-right items-right relative">
                    <p className="mb-3 text-left md:text-right md:text-base text-black absolute -top-10 right-3">
                      {/* {t("steps.1.topHeader")} */}
                      <PiNumberSquareOneThin size={50} />
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-xl">
                      {t("steps.1.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      {t("steps.1.desc")}
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left relative">
                    <p className="mb-3 text-base text-black absolute -top-10 left-0">
                      {/* {t("steps.2.topHeader")} */}
                      <PiNumberSquareTwoThin size={50} />
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-xl">
                      {t("steps.2.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      {t("steps.2.desc")}
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right relative">
                    <p className="mb-3 text-base text-black absolute -top-10 right-0">
                      <PiNumberSquareThreeThin size={50} />
                      {/* {t("steps.3.topHeader")} */}
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-xl">
                      {t("steps.3.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      {t("steps.1.desc")}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-start w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 relative">
                    <p className="mb-3 text-base text-black absolute -top-10 left-0">
                      <PiNumberSquareFourThin size={50} />
                      {/* {t("steps.4.topHeader")} */}
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-xl text-left">
                      {t("steps.4.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100 text-left">
                      {t("steps.4.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToReserve;
