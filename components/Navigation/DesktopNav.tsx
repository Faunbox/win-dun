import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { BiPhoneOutgoing } from "react-icons/bi";
import NavDropdown from "./NavDropdown";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import { useLocale } from "next-intl";
import DesktopLinks from "./DesktopLinks";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:grid lg:grid-cols-6 justify-between container mx-10">
      {/* Logo */}
      <Link href={"/"} className="">
        <Image
          src="/images/logo-dark.png"
          alt="logo"
          width={200}
          height={52}
          className="max-w-[200px]"
        />
      </Link>
      {/* Menu links */}
      <ul className="flex flex-row justify-end items-center col-span-5  text-white">
        <DesktopLinks />
        {/* Locale */}
        <li className="flex items-center justify-center gap-1 hover:scale-110 transition-transform duration-300">
          <BiPhoneOutgoing color="#fde047" size={25} />
          <a
            href="phone:+48505216526"
            className="text-sm font-light text-white animate-hithere duration-3s"
          >
            505 216 526
          </a>
        </li>
        <li className="flex justify-end items-center ">
          <NavDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
