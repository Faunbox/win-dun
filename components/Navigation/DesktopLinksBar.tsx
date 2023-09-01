"use client";
import { BiPhoneOutgoing } from "react-icons/bi";
import { motion } from "framer-motion";
import DesktopLinks from "./DesktopLinks";
import NavDropdown from "./NavDropdown";

const DesktopLinksBar = () => {
  const variant = {
    initial: {
      opacity: 0,
      scale: 0,
      translateY: -50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      translateY: 0,
    },
  };

  return (
    <motion.ul
      className="flex flex-row justify-end items-center col-span-5  text-white"
      initial="initial"
      animate="animate"
      transition={{ duration: 0.4, staggerChildren: 0.1, delayChildren: 0.1 }}
    >
      <DesktopLinks variants={variant} />
      {/* Locale */}
      <motion.li
        className="flex items-center justify-center gap-1 hover:scale-110 transition-transform duration-300"
        variants={variant}
      >
        <BiPhoneOutgoing color="#fde047" size={25} />
        <a
          href="phone:+48505216526"
          className="text-sm font-light text-white animate-hithere duration-3s"
        >
          505 216 526
        </a>
      </motion.li>
      <motion.li className="flex justify-end items-center " variants={variant}>
        <NavDropdown />
      </motion.li>
    </motion.ul>
  );
};

export default DesktopLinksBar;
