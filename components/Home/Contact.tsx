import SectionHeader from "../Typography/SectionHeader";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiPlugBold } from "react-icons/pi";
import { BsUsbPlug } from "react-icons/bs";

const HomeContact = () => {
  return (
    <section className="flex flex-col bg-gray-300 justify-center items-center">
      <div className="container text-center p-4">
        <SectionHeader>Nasze busy posiadają:</SectionHeader>
        <ul className="flex flex-col md:flex-row justify-around">
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} />
            <p className="text-xl">Komfortowe siedzenia</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <PiPlugBold size={70} />
            <p className="text-xl">Gniazda 230V</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <BsUsbPlug size={70} />
            <p className="text-xl">Gniazda USB</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} />
            <p className="text-xl">Komfortowe siedzenia</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-4">
            <MdAirlineSeatReclineNormal size={70} />
            <p className="text-xl">Komfortowe siedzenia</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeContact;
