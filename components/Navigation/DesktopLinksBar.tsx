"use client";
import { BiPhoneOutgoing } from "react-icons/bi";
import { motion } from "framer-motion";
import DesktopLinks from "./DesktopLinks";
import NavDropdown from "./NavDropdown";

const DesktopLinksBar = () => {
  return (
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
  );
};

export default DesktopLinksBar;
