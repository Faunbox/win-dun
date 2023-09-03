"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTranslations } from "next-intl";
import SectionHeader from "../Typography/SectionHeader";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Faq = () => {
  const t = useTranslations("faq");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.65", "1.3 1.5"],
  });

  // TODO: Poprawic animacje na kompa

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <div className="container flex flex-col justify-center items-center gap-2 m-4">
      <SectionHeader size={"xl"} margin={"mb-2"}>
        {t("title")}
      </SectionHeader>
      <motion.div
        className="w-full"
        ref={ref}
        style={{
          opacity: opacityProgress,
          scale: scaleProgress,
          translateX: yProgress,
        }}
      >
        <p className="font-light">{t("desc")}</p>
        <div className="w-full flex justify-center items-center">
          <div className="w-full m-4">
            <Accordion variant="light">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={t("qna.question1")}
              >
                {t("qna.response1")}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={t("qna.question2")}
              >
                {t("qna.response2")}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={t("qna.question3")}
              >
                {t("qna.response3")}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title={t("qna.question4")}
              >
                {t("qna.response4")}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title={t("qna.question5")}
              >
                {t("qna.response5")}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
