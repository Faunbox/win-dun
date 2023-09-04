"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next-intl/client";
import { useState } from "react";
import { TfiWorld } from "react-icons/tfi";

const NavDropdown = () => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  const handleLanguageSwitch = (lng: string) => {
    setCookie(lng);
    router.replace("/", { locale: lng });
  };

  return (
    <>
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        onClick={() => setOpen(!open)}
        className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center z-50"
        type="button"
      >
        <TfiWorld size={20} color="white" />
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      {open && (
        <div
          id="dropdownHover"
          className="absolute top-14 lg:top-16 left-[50%] lg:left-auto -translate-x-1/2 lg:-translate-x-0 z-50 divide-y divide-gray-100 shadow w-24 "
        >
          <ul
            className="flex flex-row lg:flex-col items-center justify-center gap-7 lg:gap-0 py-2 text-sm text-gray-700 dark:text-gray-200 lg:bg-transparent lg:backdrop-blur-lg rounded-lg"
            aria-labelledby="dropdownHoverButton"
          >
            <li className="flex items-center justify-center">
              <Link
                locale={locale}
                hrefLang="pl"
                href="/pl"
                onClick={() => handleLanguageSwitch("pl")}
                className="fi fi-pl block p-4 hover:scale-105 hover:duration-200"
              ></Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                locale={locale}
                hrefLang="en"
                href="/en"
                onClick={() => handleLanguageSwitch("en")}
                className="fi fi-gb block p-4 hover:scale-105 hover:duration-200"
              ></Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                locale={locale}
                hrefLang="nl"
                href="/nl"
                onClick={() => handleLanguageSwitch("nl")}
                className="fi fi-nl block p-4 hover:scale-105 hover:duration-200"
              ></Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavDropdown;
