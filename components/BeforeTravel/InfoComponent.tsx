"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { TbInfoSquare } from "react-icons/tb";
import { motion } from "framer-motion";
import Link from "next/link";

const InfoComponents = () => {
  const t = useTranslations("beforeTravel");

  return (
    <motion.div
      initial={{ translateX: -600 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col w-full sticky lg:top-28 lg:w-1/3 mt-2 lg:mt-12 px-8 py-8 border-1 border-black after:content-[''] after:border-1 after:border-black after:w-full after:h-full after:absolute after:inset-x-2 after:-inset-y-2"
    >
      <div className="flex flex-row items-center justify-center">
        <p className="ml-2 text-2xl uppercase tracking-loose text-[#fde047]">
          <TbInfoSquare />
        </p>
        <p className="ml-2 text-2xl uppercase tracking-loose text-[#fde047]">
          {t("info")}
        </p>
      </div>
      <p className="text-1xl lg:text-2xl leading-normal lg:leading-relaxed mb-2">
        {t("howTo")}
      </p>
      <p className="text-sm lg:text-base text-black-50 mb-4 py-4">
        {t("instruction")}
      </p>
      <Link href={t("link")} className="pb-4">
        <Button
          type="submit"
          color="primary"
          radius="lg"
          className="mx-auto w-full max-w-[300px] text-black disabled:text-black p-6 hover:scale-110 transition-transform duration-500 "
        >
          {t("button")}
        </Button>
      </Link>
    </motion.div>
  );
};

export default InfoComponents;
