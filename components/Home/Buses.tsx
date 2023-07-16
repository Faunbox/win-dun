import SectionHeader from "../Typography/SectionHeader";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiPlugBold } from "react-icons/pi";
import { BsUsbPlug } from "react-icons/bs";

const HomeBuses = () => {
  return (
    <section className="flex flex-col bg-gray-300 justify-center items-center">
      <div className="container text-center p-4">
        <SectionHeader>Nasze busy posiadają:</SectionHeader>
        <ul className="flex flex-col md:flex-row justify-around gap-4">
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} className="text-red-800" />
            <p className="text-xl font-bold">Komfortowe siedzenia</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <PiPlugBold size={70} className="text-red-800" />
            <p className="text-xl font-bold ">Gniazda 230V</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <BsUsbPlug size={70} className="text-red-800" />
            <p className="text-xl font-bold ">Gniazda USB</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} className="text-red-800" />
            <p className="text-xl font-bold ">Gniazda safd</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} className="text-red-800" />
            <p className="text-xl font-bold ">Coś</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeBuses;
