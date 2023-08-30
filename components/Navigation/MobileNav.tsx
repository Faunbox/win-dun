"use client";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRightAlt, CgPushRight } from "react-icons/cg";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavLink from "./NavLink";
import { useLocale } from "next-intl";
import { useState } from "react";
import { useRouter } from "next-intl/client";

interface NavLinkTypes {
  href: string;
  title: string;
  bold?: string;
}

const MobileNav = () => {
  const locale = useLocale();
  const router = useRouter();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  const handleLanguageSwitch = (lng: string) => {
    setCookie(lng);
    router.replace("/", { locale: lng });
  };

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
      <button
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="text-white "
      >
        <CgMenuRightAlt className="w-[30px] h-[30px] mr-5 text-white z-30" />
      </button>
      <div
        className={`${
          mobileNavOpen ? "flex" : "hidden"
        } h-screen w-screen z-20 absolute top-0 left-0 right-0 bg-footer backdrop-blur-sm bg-opacity-95 flex justify-center items-center align-middle gap-10 transition-all ease-in-out duration-1000 opacity-[${
          mobileNavOpen ? "100" : "0"
        }]`}
      >
        {/* Close menu button */}
        <button
          className="absolute top-7 right-8 z-50"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <CgPushRight className="w-[30px] h-[30px] text-white z-30" />
        </button>
        <ul className="group-odd:font-bold">
          {locale === "pl" &&
            PlNavbar?.map(
              ({
                href,
                title,
                bold = "",
              }: NavLinkTypes) => (
                <li
                  key={title}
                  className="my-4 first:font-bold"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <NavLink href={href} title={title} bold={bold} />
                </li>
              )
            )}
          {locale === "en" &&
            EnNavbar?.map(
              ({ href, title, bold = "" }: NavLinkTypes) => (
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
              ({ href, title, bold = "" }: NavLinkTypes) => (
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
            <div className="flex flex-row pt-10 justify-between items-center gap-4">
              <Link
                locale="pl"
                href="/pl"
                onClick={() => handleLanguageSwitch("pl")}
                className="fi fi-pl block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
              ></Link>
              <Link
                locale="en"
                href={`/en`}
                onClick={() => handleLanguageSwitch("en")}
                className="fi fi-gb block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
              ></Link>
              <Link
                locale="nl"
                href="/nl"
                onClick={() => handleLanguageSwitch("nl")}
                className="fi fi-nl block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
              ></Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
