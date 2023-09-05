import Image from "next/image";
import SectionHeader from "../Typography/SectionHeader";

const Maps = () => {
  return (
    <div className="section-container bg-footer pt-10">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader>Gdzie dojeżdzamy?</SectionHeader>
        <Image
          src="/images/mapa.webp"
          alt="Europe map"
          width={1000}
          height={250}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Maps;
