import SectionHeader from "../Typography/SectionHeader";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BiWind } from "react-icons/bi";
import { BsUsbPlug } from "react-icons/bs";
import Slider from "./Slider";

const HomeBuses = () => {
  return (
    <section className="flex flex-col bg-gray-300 justify-center items-center py-4">
      <div className="container text-center p-4 flex flex-col ">
        <SectionHeader>Nasze busy posiadają:</SectionHeader>
        <ul className="flex flex-col md:flex-row justify-around gap-4">
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} className="text-red-800" />
            <p className="text-xl font-bold">Komfortowe siedzenia</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <BiWind size={70} className="text-red-800" />
            <p className="text-xl font-bold ">Klimatyzacja</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <BsUsbPlug size={70} className="text-red-800" />
            <p className="text-xl font-bold ">Gniazda USB</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} className="text-red-800" />
            <p className="text-xl font-bold ">Duża powierzchnia ładunkowa</p>
          </li>
        </ul>
        
      </div>
    </section>
  );
};

export default HomeBuses;
