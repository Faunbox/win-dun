import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsPersonCheck } from "react-icons/bs";
import { GoPackageDependents } from "react-icons/go";
import { Button } from "@nextui-org/button";

const HeroSection = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-[url('/images/hero10.jpg')] w-screen h-screen bg-right lg:bg-cover bg-no-repeat">
      <div className="container  flex flex-col md:flex-row justify-center items-start mx-auto align-middle relative px-4 py-10 lg:py-0">
        <aside className="flex flex-col justify-center items-center lg:justify-start w-full lg:w-6/12 mx-auto lg:absolute lg:top-[30%] lg:left-[30%] lg:-translate-x-1/2 lg:-translate-y-2/4 -z-1 text-gray-50 mt-4">
          <h1 className="text-5xl md:text-6xl font-bold  px-2 border-black ">
            {t("homeDescription1")}
          </h1>
          <div className="flex flex-col">
            {/* <h2 className="text-md md:text-lg font-light ">
              {t("homeDescription2")}
            </h2> */}
            <h2 className="text-xl md:text-2xl font-light pt-4">
              {t("homeDescription3")}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center lg:justify-between gap-6 md:gap-20 mt-8 md:mt-10">
            <Link href={t("heroButtonLink")}>
              <Button
                disabled={true}
                color="primary"
                radius="none"
                size="lg"
                className="text-white my-1 md:my-8 w-full max-w-[300px] p-2 md:p-4 text-lg border-b-1 hover:scale-105 ease-in-out bg bg-transparent"
              >
                <BsPersonCheck />
                {t("heroButton")}
              </Button>
            </Link>
            <Link href={t("heroPhoneLink")}>
              <Button
                disabled={true}
                color="primary"
                radius="none"
                // variant="bordered"
                size="lg"
                className="text-white my-1 md:my-8 w-full max-w-[300px] p-2 md:p-4 text-lg border-b-1 hover:scale-105 ease-in-out bg bg-transparent"
              >
                <GoPackageDependents />
                {t("heroPhone")}
              </Button>
            </Link>
          </div>
        </aside>
        {/* <aside className="max-w-[100vw] w-full md:w-12/12 lg:flex hidden justify-end">
          <Image
            src={"/images/hero9.jpg"}
            alt="tak"
            width={1200}
            height={600}
            quality={100}
            className="w-screen h-screen object-center md:object-cover "
          />
        </aside> */}
      </div>
    </div>
  );
};

export default HeroSection;
