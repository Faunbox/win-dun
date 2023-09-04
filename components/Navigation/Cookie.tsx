"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { easeIn, motion } from "framer-motion";

const CookieConsent = () => {
  const cookieInfo: boolean = Cookies.get("cookieConsent");
  const cookieValue: boolean = cookieInfo ? false : true;
  const t = useTranslations("coockies");

  const [visible, setVisible] = useState<boolean>(cookieValue);
  console.log({ visible });

  const handleOnClick = () => {
    Cookies.set("cookieConsent", false, { expires: 90, sameSite: "Strict" });
    setVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 1.8 }}
      className={`fixed ${
        visible ? "flex" : "hidden"
      } flex-col gap-4 bottom-3 md:bottom-20 right-3 md:right-20 max-w-[320px] h-auto bg-neutral-600 rounded-lg z-50 bg-opacity-50 backdrop-blur-md text-white p-4`}
    >
      <h3 className="text-xl">{t("header")}</h3>
      <p className="font-thin">{t("desc")}</p>
      <Button
        variant="bordered"
        onClick={handleOnClick}
        radius="lg"
        className="mx-auto text-white hover:bg-green-600 border-green-600"
      >
        {t("button")}
      </Button>
    </motion.div>
  );
};

export default CookieConsent;
