"use client";
import SectionHeader from "../Typography/SectionHeader";
import { AiOutlineUsb } from "react-icons/ai";
import { BsWind } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { LuUserCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";

const HomeBuses = () => {
  const t = useTranslations("homePage");

  return (
    <section className="flex flex-col bg-white justify-center items-center py-4 mx-8 md:mx-32">
      <SectionHeader>{t("bus.title")}</SectionHeader>
      <div className="container text-center p-4 flex flex-col rounded-2xl border-1 border-black">
        <ul className="flex flex-col md:flex-row justify-around mt-8 gap-2 divide-y md:divide-x md:divide-y-0 divide-black">
          <li className="flex flex-col justify-center items-center w-full gap-10 ">
            <LuUserCheck size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text1")}</p>
          </li>
          <li className="flex flex-col justify-center items-center w-full gap-10 py-4 md:py-0">
            <BsWind size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text2")}</p>
          </li>

          <li className="flex flex-col justify-center items-center w-full gap-10 py-4 md:py-0">
            <AiOutlineUsb size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text3")}</p>
          </li>

          <li className="flex flex-col justify-center items-center w-full gap-10 py-4 md:py-0">
            <CiBoxes size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text4")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeBuses;
