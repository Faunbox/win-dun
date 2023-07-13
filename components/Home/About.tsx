import Link from "next/link";
import SectionHeader from "../Typography/SectionHeader";

const AboutHomeSection = () => {
  return (
    <section className="section-container flex-col bg-gray-50 p-4">
      <SectionHeader>O nas</SectionHeader>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5 w-full">
        <div className="grid grid-rows-2 gap-4">
          <p className="text-2xl">Ponad 600 wyjazdów od drzwi do drzwi</p>
          <p className="text-2xl">0 minut spędzonych na awarii pojazdu</p>
        </div>
        <Link href={"/o-nas"}>
          <button className="bg-red-700 p-4 shadow-lg text-white md:mt-4">
            Dowiedz się więcej {"->"}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutHomeSection;
