"use client";
import { useTranslations } from "next-intl";
import Buttons from "./Buttons";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const HeroSection = () => {
  const t = useTranslations("homePage");

  // 

  return (
    <div className="section-container bg-[url('/images/hero-720.webp')] md:bg-[url('/images/hero-1920.webp')]  w-screen h-screen max-h-[1080px] mx-auto bg-right lg:bg-cover bg-no-repeat bg-cover relative">
      <div className="container flex flex-col md:flex-row justify-center items-start mx-auto align-middle  px-4 py-10 lg:py-0">
        <aside className="flex flex-col justify-center items-center lg:justify-start w-full lg:w-6/12 mx-auto lg:absolute lg:top-[52%] lg:left-[33%] 2xl:left-[40%] lg:-translate-x-1/2 lg:-translate-y-2/4 -z-1 text-gray-50 mt-4">
          <div className={`flex flex-col ${lato.className}`}>
            <motion.div
              initial={{
                opacity: 0.01,
                translateY: 0,
              }}
              animate={{ opacity: [0.01, 1], translateY: [100, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-2 border-black  md:leading-tight">
                {t("homeDescription1")}
              </h1>
            </motion.div>
            <motion.h1
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: [0.01, 1], translateY: [100, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold px-2 border-black  md:leading-tight"
            >
              {t("homeDescription2")}
            </motion.h1>
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: ["100%", "0%"] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 1.4 }}
              className="border-b-2 border-white w-full"
            ></motion.div>
            <motion.h2
              initial={{
                opacity: 0.01,
                translateY: -100,
              }}
              animate={{ opacity: [0.01, 1], translateY: [-100, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
              className="text-xl sm:text-2xl font-light pt-4"
            >
              {t("homeDescription3")}
            </motion.h2>
          </div>
          <Buttons />
        </aside>
        {/* Trapezoid */}
        {/* <motion.div className="h-0 w-10/12 container border-b-white absolute bottom-0 right-[50%] translate-x-1/2 z-10 border-b-[20px] border-r-[30px] border-r-transparent border-l-[30px] border-l-transparent"></motion.div> */}
        <motion.div
          initial={{ borderBottom: "0px solid white", width: 0 }}
          animate={{
            borderBottom: [
              "2px solid white",
              "2px solid white",
              "2px solid white",
            ],
            width: "83.33%",
          }}
          transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
          className="h-0 container border-b-white absolute bottom-0 right-[50%] translate-x-1/2 z-10 "
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
