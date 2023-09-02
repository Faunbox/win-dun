

import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BsPersonCheck } from "react-icons/bs";
import { GoPackageDependents } from "react-icons/go";
import Link from "next/link";

const Buttons = () => {
  const t = useTranslations("homePage");

  return (
    <div
      className="flex flex-col md:flex-row items-center lg:justify-between gap-6 md:gap-20 mt-8 md:mt-10"
    >
      <div >
        <Link href={t("heroButtonLink")}>
          <Button
            disabled={true}
            color="primary"
            // radius="none"
            // size="lg"
            // className="text-white my-1 md:my-8 w-full max-w-[300px] p-2 md:p-4 text-lg border-b-1 hover:scale-105 ease-in-out bg bg-transparent"
            radius="lg"
            className="mx-auto w-full max-w-[300px] text-black disabled:text-black p-4 hover:scale-110 transition-transform duration-500"
          >
            <BsPersonCheck />
            {t("heroButton")}
          </Button>
        </Link>
      </div>
      <div>
        <Link href={t("heroPhoneLink")}>
          <Button
            disabled={true}
            color="primary"
            radius="lg"
            className="mx-auto w-full max-w-[300px] text-black disabled:text-black p-4 hover:scale-110 transition-transform duration-500"
          >
            <GoPackageDependents />
            {t("heroPhone")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
