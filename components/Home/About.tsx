import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

const AboutHomeSection = () => {
  const t = useTranslations("homePage");
  return (
    <section className="section-container flex-col bg-gray-50 py-20">
      <div className="container flex flex-col md:flex-row justify-around items-center gap-5 w-full px-2">
        <div className="grid grid-rows-2 gap-4">
          <p className="text-2xl">
            {t("about.text1")}{" "}
            <span className="font-bold text-3xl text-red-800">
              {t("about.span1")}
            </span>{" "}
            {t("about.text2")}
          </p>
          <p className="text-2xl">
            <span className="font-bold text-3xl text-red-800">
              {t("about.span2")}
            </span>{" "}
            {t("about.text3")}
          </p>
        </div>
        <Link href={t("about.link")}>
          <Button
            type="submit"
            color="primary"
            radius="none"
            className="mx-auto w-full max-w-[300px] text-black disabled:text-black p-6 hover:scale-110 transition-transform duration-500 rounded-2xl"
          >
            {t("about.button")} {"->"}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutHomeSection;
