"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("faq");

  return (
    <div className="container flex flex-col justify-center items-center gap-2 m-4">
      <h2 className="text-xl font-semibold uppercase mt-6">{t("title")}</h2>
      <p className="m-4 font-light">{t("desc")}</p>
      <div className="w-full flex justify-center items-center">
        <div className="w-full m-4">
          <Accordion variant="bordered">
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
    </div>
  );
};

export default Faq;
