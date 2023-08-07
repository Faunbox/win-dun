import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BsPersonCheck } from "react-icons/bs";
import { GoPackageDependents } from "react-icons/go";

const HeroSection = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-gray-100 ">
      <div className="container flex flex-col md:flex-row justify-center items-start mx-auto align-middle relative px-4 py-10 lg:py-0">
        <aside className="flex flex-col md:gap-4 justify-center items-center w-full md:w-6/12 mx-auto lg:absolute md:top-10 md:left-32 -z-1">
          <h1 className="mb-10 text-5xl md:text-7xl font-bold">
            {t("homeDescription1")}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold">
            {t("homeDescription2")}
          </h2>
          <h2 className="text-xl md:text-2xl font-bold">
            {t("homeDescription3")}
          </h2>
          <div className="flex flex-col md:flex-row items-center lg:justify-between gap-6 mt-8 md:mt-6">
            <Link href={"/rezerwacja"} className="md:self-center">
              <button className="bg-red-700 p-2 md:p-4 shadow-lg text-white md:mt-2 flex justify-center items-center gap-2">
                <BsPersonCheck />
                {t("heroButton")}
              </button>
            </Link>
            <Link href={"/rezerwacja"} className="md:self-center">
              <button className="bg-red-700 p-2 md:p-4 shadow-lg text-white md:mt-2 flex justify-center items-center gap-2">
                <GoPackageDependents />
                {t("heroPhone")}
              </button>
            </Link>
          </div>
        </aside>
        <aside className="max-w-[100vw] w-full md:w-12/12 lg:flex hidden justify-end">
          <Image
            src={"/images/dr3.png"}
            alt="tak"
            width={1200}
            height={600}
            className="lg:object-fill"
          />
        </aside>
      </div>
    </div>
  );
};

export default HeroSection;
