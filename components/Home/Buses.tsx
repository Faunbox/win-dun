"use client";
import SectionHeader from "../Typography/SectionHeader";
import { AiOutlineUsb } from "react-icons/ai";
import { BsWind } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { LuUserCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const HomeBuses = () => {
  const t = useTranslations("homePage");

  const variants = {
    hidden: {
      opacity: 0.2,
      scale: 0,
      translateX: 30,
    },
    visible: {
      opacity: 1,
      scale: [1.05, 1],
      translateX: [-20, 0],
    },
  };

  return (
    <>
      <SectionHeader>{t("bus.title")}</SectionHeader>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delayChildren: 0.2, staggerChildren: 0.2 }}
        className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:my-4 gap-10"
      >
        <motion.li
          variants={variants}
          className="flex flex-col justify-center items-center w-full sm:w-[40%] gap-10 py-4 px-4 border-1 border-white "
        >
          <LuUserCheck size={45} className="text-white" />
          <p className="text-xl font-normal">{t("bus.text1")}</p>
        </motion.li>
        <motion.li
          variants={variants}
          className="flex flex-col justify-center items-center w-full sm:w-[40%] gap-10 py-4 px-4 border-1 border-white "
        >
          <BsWind size={45} className="text-white" />
          <p className="text-xl font-normal">{t("bus.text2")}</p>
        </motion.li>

        <motion.li
          variants={variants}
          className="flex flex-col justify-center items-center w-full sm:w-[40%] gap-10 py-4 px-4 border-1 border-white "
        >
          <AiOutlineUsb size={45} className="text-white" />
          <p className="text-xl font-normal">{t("bus.text3")}</p>
        </motion.li>

        <motion.li
          variants={variants}
          className="flex flex-col justify-center items-center w-full sm:w-[40%] gap-4 py-4 px-4 border-1 border-white "
        >
          <CiBoxes size={50} className="text-white" />
          <p className="text-xl font-normal">{t("bus.text4")}</p>
        </motion.li>
      </motion.ul>
    </>
  );
};

export default HomeBuses;
