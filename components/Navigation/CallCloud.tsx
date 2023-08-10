import { BsMessenger, BsTelephoneOutbound, BsWhatsapp } from "react-icons/bs";

const CallCloud = () => {
  return (
    <div className="fixed bottom-[48%] right-0 flexr">
      <div className="flex flex-col h-full justify-around items-center gap-5 border-1 border-black p-4 mix-blend-difference">
        <BsTelephoneOutbound
          size={25}
          className="animate-pulse duration-1000"
        />
        <BsMessenger size={25} className="animate-pulse duration-1000 delay-1000"/>
        <BsWhatsapp size={25} className="animate-pulse duration-1000 delay-1000"/>
      </div>
    </div>
  );
};

export default CallCloud;
