import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["700"],
});
const AboutHomeSection = () => {
  const t = useTranslations("homePage");
  return (
    <section className="section-container md:flex-row py-8">
      <div className="w-0 md:w-6/12"></div>
      <div className="flex flex-col justify-around items-center gap-5 w-full md:w-6/12 mx-6 md:mx-0 md:px-2">
        <div className="grid grid-rows-2 gap-4">
          <p className="text-2xl">
            {t("about.text1")}{" "}
            <span
              className={`font-bold text-3xl text-red-800 ${spaceMono.className}`}
            >
              {t("about.span1")}
            </span>{" "}
            {t("about.text2")}
          </p>
          <p className="text-2xl">
            <span
              className={`font-bold text-3xl text-red-800 ${spaceMono.className}`}
            >
              {t("about.span2")}
            </span>{" "}
            {t("about.text3")}
          </p>
        </div>
        <Link href={t("about.link")}>
          <Button
            type="submit"
            color="primary"
            radius="lg"
            className="mx-auto w-full max-w-[300px] text-black disabled:text-black p-6 hover:scale-110 transition-transform duration-500 "
          >
            {t("about.button")} {"->"}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutHomeSection;
