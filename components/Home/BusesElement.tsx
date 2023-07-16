import { MdAirlineSeatReclineNormal } from "react-icons/md";

const BussesElement = () => {
    return ( <li className="flex flex-col justify-center items-center gap-4">
    <MdAirlineSeatReclineNormal size={70} className="text-red-800"/>
    <p className="text-xl font-bold">Komfortowe siedzenia</p>
  </li> );
}
 
export default BussesElement;