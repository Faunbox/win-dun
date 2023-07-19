import Link from "next/link";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-gray-100 min-h-screen">
      <div className="container flex flex-col md:flex-row justify-center items-center mx-auto align-middle md:p-5">
        <aside className="flex flex-col md:gap-4 justify-center items-center w-full md:w-6/12 mx-auto">
          <h1 className="mb-10 text-5xl md:text-7xl font-bold">
            {t("homeDescription1")}
          </h1>
          <h2 className="text-xl md:text-2xl">{t("homeDescription2")}</h2>
          <h2 className="text-xl md:text-2xl">{t("homeDescription3")}</h2>
          <div className="flex flex-row md:flex-row justify-between gap-6 mt-6">
            <Link href={"/rezerwacja"} className="md:self-center">
              <button className="bg-red-700 p-4 shadow-lg text-white md:mt-2">
                {t("heroButton")}
              </button>
            </Link>
            <Link href={"phone:123456789"} className="md:self-center">
              <button className="bg-red-700 p-4 shadow-lg text-white md:mt-2">
                {t("heroPhone")}
              </button>
            </Link>
          </div>
        </aside>
        <aside className="max-w-[50vw] w-full md:w-6/12 md:flex hidden items-center justify-center">
          <img
            src={"/images/droga.png"}
            alt="tak"
            width={800}
            height={400}
          />
        </aside>
      </div>
    </div>
  );
};

export default HeroSection;
