import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const HowToReserve = () => {
  const t = useTranslations("beforeTravel");

  return (
    <section>
      <div className="bg-transparent text-black ">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-4 md:my-4">
          <div className="flex flex-col w-full sticky md:top-28 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-red-700 uppercase tracking-loose">
              {t("info")}
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              {t("howTo")}
            </p>
            <p className="text-sm md:text-base text-black-50 mb-4">
              {t("instruction")}
            </p>
            <Link
              href="/rezerwacja"
              className="bg-transparent mr-auto hover:bg-red-700 text-red-700 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-700 hover:border-transparent self-end"
            >
              {t("button")}
            </Link>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 pt-20">
            <div className="container mx-auto w-full h-full">
              <Image
                className="sticky top-7/12 top-0 md:top-1/4 mx-auto translate-y-1/2 -mt-36 md:-mt-36 z-10"
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
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-left md:text-right md:text-base text-black">
                      {t("steps.1.topHeader")}
                    </p>
                    <h4 className="mb-3 mr-3 font-bold text-lg md:text-xl">
                      {t("steps.1.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      {t("steps.1.desc")}
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-black">
                      {t("steps.2.topHeader")}
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-xl">
                      {t("steps.2.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      {t("steps.1.desc")}
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-black">
                      {t("steps.3.topHeader")}
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-xl">
                      {t("steps.3.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      {t("steps.1.desc")}
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-black">
                      {t("steps.4.topHeader")}.
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-xl text-left">
                      {t("steps.4.header")}
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
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
