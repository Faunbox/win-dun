import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { Space_Mono, Oswald } from "next/font/google";



const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
})

const AboutHomeSection = () => {
  const t = useTranslations("homePage");
  return (
    <section className="section-container">
      <div className=" flex flex-col md:flex-row-reverse container gap-8 justify-center items-center">
        <div
          className={`flex flex-col md:ml-12 items-center gap-4 ${oswald.className}`}
        >
          <p className="text-2xl ">
            {t("about.text1")}{" "}
            <span className={`font-bold text-3xl`}>{t("about.span1")}</span>{" "}
            {t("about.text2")}
          </p>
          <p className="text-2xl">
            <span className={`font-bold text-3xl`}>{t("about.span2")}</span>{" "}
            {t("about.text3")}
          </p>
        </div>
        <Link href={t("about.link")}>
          <Button
            type="submit"
            color="primary"
            radius="lg"
            className="mx-auto w-full max-w-[300px] text-black disabled:text-black p-6  hover:scale-110 transition-transform duration-500 "
          >
            {t("about.button")} {"->"}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutHomeSection;
