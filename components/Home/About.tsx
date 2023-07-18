import Link from "next/link";
import RedButton from "../Typography/Button";

const AboutHomeSection = () => {
  return (
    <section className="section-container flex-col bg-gray-50 py-20">
      <div className="container flex flex-col md:flex-row justify-around items-center gap-5 w-full">
        <div className="grid grid-rows-2 gap-4">
          <p className="text-2xl">
            Ponad <span className="font-bold text-3xl text-red-800">600</span>{" "}
            wyjazdów od drzwi do drzwi
          </p>
          <p className="text-2xl">
            <span className="font-bold text-3xl text-red-800">0</span> minut
            spędzonych na awarii pojazdu
          </p>
        </div>
        <Link href={"/o-nas"}>
          <RedButton>Dowiedz się więcej {"->"}</RedButton>
        </Link>
      </div>
    </section>
  );
};

export default AboutHomeSection;
