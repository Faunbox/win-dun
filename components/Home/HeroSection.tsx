import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BsPersonCheck } from "react-icons/bs";
import { GoPackageDependents } from "react-icons/go";
import { Button } from "@nextui-org/button";

const HeroSection = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-[url('/images/hero10.jpg')] w-screen h-screen bg-right bg-no-repeat">
      <div className="container  flex flex-col md:flex-row justify-center items-start mx-auto align-middle relative px-4 py-10 lg:py-0">
        <aside className="flex flex-col justify-center items-center md:justify-start w-full md:w-6/12 mx-auto md:absolute md:top-[40%] md:left-[30%] md:-translate-x-1/2 md:-translate-y-2/4 -z-1 text-gray-50">
          <h1 className="text-xl md:text-3xl font-bold uppercase px-2 border-black ">
            {t("homeDescription1")}
          </h1>
          <div className="flex flex-col">
            {/* <h2 className="text-md md:text-lg font-light uppercase">
              {t("homeDescription2")}
            </h2> */}
            <h2 className="text-md md:text-lg font-light uppercase">
              {t("homeDescription3")}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center lg:justify-between gap-7 mt-8 md:mt-10">
            <Link href={"/rezerwacja"}>
              <Button
                disabled={true}
                color="primary"
                variant="bordered"
                radius="none"
                size="lg"
                className="text-white my-1 md:my-8 w-full max-w-[300px] p-2 md:p-4 text-lg hover:scale-110"
              >
                <BsPersonCheck />
                {t("heroButton")}
              </Button>
            </Link>
            <Link href={"/rezerwacja"}>
              <Button
                disabled={true}
                color="primary"
                radius="none"
                variant="bordered"
                size="lg"
                className="text-white my-1 md:my-8 w-full max-w-[300px] p-2 md:p-4 text-lg hover:scale-110"
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
