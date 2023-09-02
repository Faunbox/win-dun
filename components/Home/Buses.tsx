import SectionHeader from "../Typography/SectionHeader";
import { AiOutlineUsb } from "react-icons/ai";
import { BsWind } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { LuUserCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";

const HomeBuses = () => {
  const t = useTranslations("homePage");

  return (
    <section className="flex flex-col bg-white justify-center items-center py-4 md:py-20 mx-8 md:mx-28">
      <SectionHeader>{t("bus.title")}</SectionHeader>
      {/* <div className="container text-center p-4 flex flex-col border-1 border-black"> */}
      <div className="container text-center p-4 flex flex-col">
        {/* <ul className="flex flex-col md:flex-row justify-around md:my-4 gap-2 divide-y md:divide-x md:divide-y-0 divide-black"> */}
        <ul className="flex flex-col md:flex-row justify-around md:my-4 gap-10">
          <li className="flex flex-col justify-center items-center w-full m-4 gap-10 border-1 border-black after:content-[''] after:border-1 after:border-black after:w-full after:h-full after:absolute after:inset-x-2 after:-inset-y-2 relative">
            <LuUserCheck size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text1")}</p>
          </li>
          <li className="flex flex-col justify-center items-center w-full gap-10 py-4 m-4 md:py-0 border-1 border-black after:content-[''] after:border-1 after:border-black after:w-full after:h-full after:absolute after:inset-x-2 after:-inset-y-2 relative">
            <BsWind size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text2")}</p>
          </li>

          <li className="flex flex-col justify-center items-center w-full gap-10 py-4 m-4 md:pyd-0 border-1 border-black after:content-[''] after:border-1 after:border-black after:w-full after:h-full after:absolute after:inset-x-2 relative after:-inset-y-2">
            <AiOutlineUsb size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text3")}</p>
          </li>

          <li className="flex flex-col justify-center items-center w-full gap-10 py-4 m-4 md:pyd-0 border-1 border-black after:content-[''] after:border-1 after:border-black after:w-full after:h-full after:absolute after:inset-x-2  relative after:-inset-y-2">
            <CiBoxes size={45} className="text-black" />
            <p className="text-xl font-light">{t("bus.text4")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeBuses;
