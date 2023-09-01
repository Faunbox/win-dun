import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsPersonCheck } from "react-icons/bs";
import { GoPackageDependents } from "react-icons/go";
import { Button } from "@nextui-org/button";
import Buttons from "./Buttons";

const HeroSection = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-[url('/images/hero10.jpg')] w-screen h-screen max-h-[1080px] mx-auto bg-right lg:bg-cover bg-no-repeat relative">
      <div className="container flex flex-col md:flex-row justify-center items-start mx-auto align-middle  px-4 py-10 lg:py-0">
        <aside className="flex flex-col justify-center items-center lg:justify-start w-full lg:w-6/12 mx-auto lg:absolute lg:top-[52%] lg:left-[33%] 2xl:left-[40%] lg:-translate-x-1/2 lg:-translate-y-2/4 -z-1 text-gray-50 mt-4">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-2 border-black  md:leading-tight">
              {t("homeDescription1")}
            </h1>
            {/* <h2 className="text-md md:text-lg font-light ">
              {t("homeDescription2")}
            </h2> */}
            <h2 className="text-xl sm:text-2xl font-light pt-4">
              {t("homeDescription3")}
            </h2>
          </div>
          <Buttons />
        </aside>
        <div className="h-0 w-10/12 container border-b-white absolute bottom-0 right-[50%] translate-x-1/2 z-10 border-b-[20px] border-r-[30px] border-r-transparent border-l-[30px] border-l-transparent"></div>
      </div>
    </div>
  );
};

export default HeroSection;
