"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("faq");

  return (
    <div className="container flex flex-col justify-center items-center gap-2 m-4">
      <h2 className="text-xl font-semibold uppercase mt-6">{t("title")}</h2>
      <p className="m-4 font-light">
        Poniżej przedstawiamy odpowiedzi na najczęsciej zadawane pytania. Jeżeli
        nie znalazłeś satysfakcjonującej Cię odpowiedzi, zapraszamy do kontaktu!
      </p>
      <div className="w-full flex justify-center items-center">
        <div className="w-full m-4">
          <Accordion variant="bordered">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={t("question1")}
            >
              {t("response1")}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={t("question2")}
            >
              {t("response2")}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={t("question3")}
            >
              {t("response3")}
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title={t("question4")}
            >
              {t("response4")}
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              title={t("question5")}
            >
              {t("response5")}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
