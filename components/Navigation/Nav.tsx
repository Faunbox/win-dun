"use client";
import { useState } from "react";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import { CgMenuRightAlt, CgPushRight } from "react-icons/cg";
import { BiPhoneOutgoing } from "react-icons/bi";
import NavLink from "./NavLink";
import { useLocale } from "next-intl";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import RedButton from "../Typography/GreenButton";
import NavButton from "./NavButton";
import Image from "next/image";

const Nav = () => {
  const locale = useLocale();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed container top-0 right-0 left-0 mx-auto min-w-[100vw] lg:justify-center lg:flex lg:items-center backdrop-blur-sm bg-gray-700 bg-opacity-40 z-50">
      {/* Desktop navbar */}
      <nav className="hidden lg:grid lg:grid-cols-6 justify-between container mx-10 my-5">
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
        <ul className="flex flex-row justify-end items-center col-span-5 gap-4 text-white">
          {locale === "pl" &&
            PlNavbar?.map(
              ({ href, title }: { href: string; title: string }) => (
                <li key={title}>
                  {title !== "Rezerwacja" ? (
                    <NavLink href={href} title={title} />
                  ) : (
                    <NavButton>
                      <NavLink href={href} title={title} color="white" />
                    </NavButton>
                  )}
                </li>
              )
            )}
          {locale === "en" &&
            EnNavbar?.map(
              ({ href, title }: { href: string; title: string }) => (
                <li key={title}>
                  {title !== "Reservation" ? (
                    <NavLink href={href} title={title} />
                  ) : (
                    <NavButton>
                      <NavLink href={href} title={title} color="white" />
                    </NavButton>
                  )}
                </li>
              )
            )}
          {locale === "nl" &&
            NlNavbar?.map(
              ({ href, title }: { href: string; title: string }) => (
                <li key={title}>
                  {title !== "Reservation NL" ? (
                    <NavLink href={href} title={title} />
                  ) : (
                    <NavButton>
                      <NavLink href={href} title={title} color="white" />
                    </NavButton>
                  )}
                </li>
              )
            )}
          {/* Locale */}
          <li className="flex items-center justify-center gap-1 hover:scale-110 transition-transform duration-300 mix-blend-difference">
            <BiPhoneOutgoing color="#F7B750" size={25} />
            <a
              href="phone:+48505216526"
              className="text-lg font-semibold text-white mix-blend-saturation animate-bounce"
            >
              505 216 526
            </a>
          </li>
          <li className="flex justify-end items-center ">
            <NavDropdown />
          </li>
        </ul>
      </nav>

      {/* Mobile navbar */}
      <nav
        className={
          "lg:hidden flex row-auto justify-between p-4 gap-10 items-center text-center"
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
        <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <CgMenuRightAlt className="w-[30px] h-[30px] mr-5" />
        </button>
        <div
          className={`${
            mobileNavOpen ? "flex" : "hidden"
          } h-screen w-screen z-20 absolute top-0 left-0 right-0 bg-slate-400 bg-opacity-95 flex justify-center items-center align-middle gap-10 transition-all ease-in-out duration-1000 opacity-[${
            mobileNavOpen ? "100" : "0"
          }]`}
        >
          {/* Close menu button */}
          <button
            className="absolute top-4 right-6"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <CgPushRight className="w-[30px] h-[30px]" />
          </button>
          <ul>
            {locale === "pl" &&
              PlNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li
                    key={title}
                    className="my-4"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  >
                    <NavLink href={href} title={title} />
                  </li>
                )
              )}
            {locale === "en" &&
              EnNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li
                    key={title}
                    className="my-4"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  >
                    <NavLink href={href} title={title} />
                  </li>
                )
              )}
            {locale === "nl" &&
              NlNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li
                    key={title}
                    className="my-4"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  >
                    <NavLink href={href} title={title} />
                  </li>
                )
              )}
            <li>
              <div className="flex flex-row justify-between items-center gap-10">
                <Link
                  locale="pl"
                  href="/pl"
                  className="fi fi-pl block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
                ></Link>
                <Link
                  locale="en"
                  href="/en"
                  className="fi fi-gb block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
                ></Link>
                <Link
                  locale="nl"
                  href="/nl"
                  className="fi fi-nl block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
                ></Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
