import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Luggage = () => {
  const t = useTranslations("beforeTravel");

  return (
    <div className="container flex flex-col-reverse lg:flex-row my-20">
      <div className="w-full h-full lg:w-6/12 contrast-50 hover:contrast-100 duration-300 ease-in-out">
        <Image
          src="/images/pakowanie.jpg"
          alt=""
          width={600}
          height={400}
          className="w-full h-full object-center relative"
        />
        <Link
          href="/rezerwacja"
          className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-light hover:text-4xl duration-500 bg-gray-100 bg-opacity-70 p-4 "
        >
          {t("package.button")}
        </Link>
      </div>
      <div className="w-full lg:w-6/12 flex flex-col bg-gray-200">
        <div className="flex flex-col h-full items-center py-4">
          <h2 className="text-xl font-light">{t("package.luggageTitle")}</h2>
          <p className=" px-4">{t("package.luggageDesc")}</p>
        </div>
        <div className="h-full bg-gray-300 flex items-center justify-center p-4">
          <p>{t("package.luggageInfo")}</p>
        </div>
      </div>
    </div>
  );
};

export default Luggage;
