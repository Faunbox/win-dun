"use client";
import { BiPhoneOutgoing } from "react-icons/bi";
import DesktopLinks from "./DesktopLinks";
import NavDropdown from "./NavDropdown";

const DesktopLinksBar = () => {
  return (
    <ul className="flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:col-span-5 text-center text-white">
      <DesktopLinks />
      {/* Locale */}
      <li className="flex items-center justify-center gap-1 hover:scale-110 pt-10 lg:pt-0 transition-transform duration-300">
        <BiPhoneOutgoing color="#fde047" size={25} />
        <a
          href="tel:+48507317221"
          className="text-sm font-light text-white animate-hithere duration-3s"
          rel="noopener"
        >
          507 317 221
        </a>
      </li>
      <li className="flex justify-end items-center pt-4 relative lg:pt-0">
        <NavDropdown />
      </li>
    </ul>
  );
};

export default DesktopLinksBar;
