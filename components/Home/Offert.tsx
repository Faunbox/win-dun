import SectionHeader from "../Typography/SectionHeader";
import OffertCard from "./OffertCard";

const OffertSection = () => {
  return (
    <section className="section-container bg-gray-300 min-h-[60vh] p-4">
      <div className="container flex flex-col md:p-4 justify-center items-center">
        <SectionHeader>Co oferujemy</SectionHeader>
        <div className="grid grid-rows-3 flex-col md:grid-rows-none md:grid-cols-3 gap-5 justify-center items-center md:justify-around">
          <OffertCard />
          <OffertCard />
          <OffertCard />
        </div>
      </div>
    </section>
  );
};

export default OffertSection;
