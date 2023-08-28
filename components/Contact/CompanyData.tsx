import { TiInputCheckedOutline } from "react-icons/ti";
import { MdOutlineEmail, MdOutlineGpsFixed } from "react-icons/md";
import { BiPhoneOutgoing } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { useTranslations } from "next-intl";

const CompanyData = () => {
  const t = useTranslations("contact");

  return (
    <div className="relative flex flex-col w-11/12 md:w-6/12 lg:4/12 justify-center items-center p-4 border-1 border-black after:content-[''] after:border-1 after:border-black after:w-full after:h-full after:absolute after:inset-x-2 after:-inset-y-2">
      <h2 className="m-4 text-2xl font-bold justify-self-start border-b-1 self-center border-black uppercase">
        {t("companyDataTitle")}
      </h2>
      <ul className="list-none flex flex-col gap-2 justify-start items-start mx-auto">
        <li className="flex-icon">
          <TiInputCheckedOutline size={25} className="mr-2 text-red-0" />
          <p className="text-lg">WitDun express WITOLD DUNAT</p>
        </li>
        <li className="flex-icon">
          <MdOutlineGpsFixed size={20} className="mr-2 text-red-0" />{" "}
          <p className="text-lg">ul. Źródlana 2A, 34-321 Łękawica</p>
        </li>
        <li className="flex-icon">
          <BiPhoneOutgoing size={20} className="mr-2 text-red-0" />
          <a href="phone:+48505216526" className="text-lg">
            +48 505 216 526
          </a>
        </li>
        <li className="flex-icon">
          <MdOutlineEmail size={20} className="mr-2 text-red-0" />
          <a href="mailto:kontakt@wit-dun.eu" className="text-lg">
            kontakt@wit-dun.eu
          </a>
        </li>
        <li className="flex-icon">
          <BsInfoCircle size={20} className="mr-2 text-red-0" />
          <p>NIP: 5532464665</p>
        </li>
      </ul>
      <div className="flex flex-row justify-around m-4 p-5 max-w-[300px]">
        <div className="flex flex-row justify-around items-center w-screen max-w-[300px] pt-4">
          <SiFacebook className="scale-125 hover:scale-150 transition-transform duration-500 text-red" />
          <SiInstagram className="scale-125 hover:scale-150 transition-transform duration-500 text-red" />
          <SiTwitter className="scale-125 hover:scale-150 transition-transform duration-500 text-red" />
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
