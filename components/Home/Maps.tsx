import Image from "next/image";
import SectionHeader from "../Typography/SectionHeader";

const Maps = () => {
  return (
    <div className="section-container bg-footer pt-10">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader>Gdzie dojeżdzamy?</SectionHeader>
        <Image
          src="/images/europa.png"
          alt="Europe map"
          width={900}
          height={250}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Maps;
