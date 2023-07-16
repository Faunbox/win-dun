"use client";
import { useState } from "react";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import { CgMenuRightAlt, CgPushRight } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import NavLink from "./NavLink";
import { useLocale } from "next-intl";
import Link from "next/link";
import NavDropdown from "./NavDropdown";

const Nav = () => {
  const locale = useLocale();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed container top-0 right-0 left-0 mx-auto min-w-[100vw] lg:justify-center lg:flex lg:items-center backdrop-blur-sm border-b-2">
      {/* Desktop navbar */}
      <nav className="hidden lg:grid lg:grid-cols-2 justify-center container mx-10 my-5">
        {/* Logo */}
        <Link href={"/"} className="">
          <img src="images/logo.png" alt="logo" className="max-w-[200px]" />
        </Link>
        {/* Menu links */}
        <ul className="flex flex-row justify-around items-center">
          {locale === "pl" &&
            PlNavbar?.map(
              ({ href, title }: { href: string; title: string }) => (
                <li key={title}>
                  <NavLink href={href} title={title} />
                </li>
              )
            )}
          {locale === "en" &&
            EnNavbar?.map(
              ({ href, title }: { href: string; title: string }) => (
                <li key={title}>
                  <NavLink href={href} title={title} />
                </li>
              )
            )}
          {locale === "nl" &&
            NlNavbar?.map(
              ({ href, title }: { href: string; title: string }) => (
                <li key={title}>
                  <NavLink href={href} title={title} />
                </li>
              )
            )}
        {/* Locale */}
            <li className="flex justify-end items-center ">
          <NavDropdown />
        </li>
        </ul>
        
      </nav>

      {/* Mobile navbar */}
      <nav className={"lg:hidden flex row-auto justify-between p-4"}>
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              alt="logo"
              className="max-w-[150px] sm:max-w-[200px]"
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
          } h-screen w-screen z-20 absolute top-0 left-0 right-0 bg-slate-400 flex justify-center items-center align-middle gap-4 transition-all ease-in-out duration-1000 opacity-[${
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
                  <li key={title}>
                    <NavLink href={href} title={title} />
                  </li>
                )
              )}
            {locale === "en" &&
              EnNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li key={title}>
                    <NavLink href={href} title={title} />
                  </li>
                )
              )}
            {locale === "nl" &&
              NlNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li key={title}>
                    <NavLink href={href} title={title} />
                  </li>
                )
              )}
            <li>
              <select name="locale" id="locale">
                <option value="">pl</option>
                <option value="">en</option>
                <option value="">nl</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
