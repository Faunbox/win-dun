import { useTranslations } from "next-intl";
import SectionHeader from "../Typography/SectionHeader";
import Image from "next/image";

const Why = () => {
  const t = useTranslations("homePage");

  return (
    <section className="section-container bg-gradient-to-b from-gray-300 to-gray-50 p-4 ">
      <div className="flex flex-col container w-11/12 bg-gray-50 mx-auto py-12 md:p-4 justify-center items-center align-middle">
        <SectionHeader>{t("whyOurCompany")}</SectionHeader>
        <div className="grid md:grid-rows-none lg:grid-cols-4 items-center">
          <div className="flex flex-col gap-2 px-4">
            <div className="">
              <h2>Tekst numer jeden</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                cupiditate debitis dolorem harum doloremque eaque eos, nesciunt
                possimus commodi porro.
              </p>
            </div>
            <div>
              <h2>Tekst numer jeden</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                cupiditate debitis dolorem harum doloremque eaque eos, nesciunt
                possimus commodi porro.
              </p>
            </div>
            <div>
              <h2>Tekst numer jeden</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                cupiditate debitis dolorem harum doloremque eaque eos, nesciunt
                possimus commodi porro.
              </p>
            </div>
          </div>
          <div className="mx-auto p-4 md:p-0 lg:col-span-2">
            <Image
              src={"/images/why-bus.png"}
              alt="tak"
              width={600}
              height={500}
              className="hover:scale-110 duration-700"
            />
          </div>
          <div className="flex flex-col gap-4 px-4 md:px-4">
            <div>
              <h2>Tekst numer jeden</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                cupiditate debitis dolorem harum doloremque eaque eos, nesciunt
                possimus commodi porro.
              </p>
            </div>
            <div>
              <h2>Tekst numer jeden</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                cupiditate debitis dolorem harum doloremque eaque eos, nesciunt
                possimus commodi porro.
              </p>
            </div>
            <div>
              <h2>Tekst numer jeden</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                cupiditate debitis dolorem harum doloremque eaque eos, nesciunt
                possimus commodi porro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
