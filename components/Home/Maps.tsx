"use client";
import Image from "next/image";
import SectionHeader from "../Typography/SectionHeader";
import { useTranslations } from "next-intl";
import { BiArrowBack } from "react-icons/bi";
import { easeInOut, motion } from "framer-motion";

const Maps = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-footer pt-10">
      <div className="flex flex-col items-center justify-center relative">
        <SectionHeader>{t("heroMapTitle")}</SectionHeader>
        <Image
          src="/images/mapa.webp"
          alt="Europe map"
          quality={80}
          width={1000}
          height={250}
          loading="lazy"
          className="h-full w-full"
        />
        {/* <motion.img
          src="images/arrow.svg"
          initial={{
            opacity: 0.5,
            translateY: "-60%",
            translateX: "30%",
            rotate: 14,
            width:0
          }}
          whileInView={{ opacity: 1, width: "20%", }}
          transition={{ duration: 2, ease: easeInOut }}
          className="absolute -rotate-12 right-[40%] origin-top top-[50%]"
        /> */}
      </div>
    </div>
  );
};

export default Maps;
