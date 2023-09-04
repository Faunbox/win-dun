"use client";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRightAlt, CgPushRight } from "react-icons/cg";
import DesktopLinksBar from "./DesktopLinksBar";
import { useFormContext } from "@/context/formContext";

const MobileNav = () => {
  const { mobileNavOpen, setMobileNavOpen } = useFormContext();
  return (
    <nav
      className={
        "lg:hidden flex row-auto justify-between p-4 gap-10 items-center text-center mix-blend-difference"
      }
    >
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <Image
            src="/images/logo-dark.png"
            alt="logo"
            width={200}
            height={52}
            className="max-w-[200px]"
          />
        </Link>
      </div>
      {/* Menu icon */}
      <button onClick={() => setMobileNavOpen(true)} className="text-white ">
        <CgMenuRightAlt className="w-[30px] h-[30px] mr-5 text-white z-30" />
      </button>
      <div
        className={`${
          mobileNavOpen ? "flex" : "hidden"
        } h-screen w-screen z-50 absolute top-0 left-0 right-0 bg-footer backdrop-blur-sm bg-opacity-95 flex justify-center items-center align-middle gap-10 transition-all ease-in-out duration-1000 opacity-[${
          mobileNavOpen ? "100" : "0"
        }]`}
      >
        {/* Close menu button */}
        <button
          className="absolute top-7 right-8 z-50"
          onClick={() => setMobileNavOpen(false)}
        >
          <CgPushRight className="w-[30px] h-[30px] text-white z-30" />
        </button>
        <DesktopLinksBar />
      </div>
    </nav>
  );
};

export default MobileNav;
