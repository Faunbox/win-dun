import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BsPersonCheck } from "react-icons/bs";
import { GoPackageDependents } from "react-icons/go";
import { Button } from "@nextui-org/button";

const HeroSection = () => {
  const t = useTranslations("homePage");

  return (
    <div className="section-container bg-gray-100 ">
      <div className="container flex flex-col md:flex-row justify-center items-start mx-auto align-middle relative px-4 py-10 lg:py-0">
        <aside className="flex flex-col  justify-center items-center w-full md:w-6/12 mx-auto lg:absolute md:top-44 md:left-32 -z-1">
          <h1 className="text-xl md:text-3xl font-bold uppercase border-b-1 border-black">
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
          <div className="flex flex-col md:flex-row items-center lg:justify-between gap-6 mt-8 md:mt-6">
            <Link href={"/rezerwacja"} className="md:self-center">
              <Button
                disabled={true}
                color="primary"
                radius="none"
                size="lg"
                className="text-white my-1 md:my-8 w-full max-w-[300px] p-2 md:p-4"
              >
                <BsPersonCheck />
                {t("heroButton")}
              </Button>
            </Link>
            <Link href={"/rezerwacja"} className="md:self-center">
              <Button
                disabled={true}
                color="secondary"
                radius="none"
                size="lg"
                className="text-white my-1 md:my-8 w-full max-w-[300px] p-2 md:p-4"
              >
                <GoPackageDependents />
                {t("heroPhone")}
              </Button>
            </Link>
          </div>
        </aside>
        <aside className="max-w-[100vw] w-full md:w-12/12 lg:flex hidden justify-end">
          <Image
            src={"/images/dr3.png"}
            alt="tak"
            width={1200}
            height={600}
            quality={100}
            className=" w-10/12   "
          />
        </aside>
      </div>
    </div>
  );
};

export default HeroSection;
