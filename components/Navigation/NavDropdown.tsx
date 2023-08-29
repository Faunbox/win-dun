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

  return (
    <>
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        onClick={() => setOpen(!open)}
        className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center relative"
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
          className="absolute top-16 z-10 bg-white divide-y divide-gray-100 shadow w-44 dark:bg-[#171213]"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li className="flex items-center justify-center">
              <Link
                locale={"pl"}
                hrefLang="pl"
                href="/pl"
                onClick={() => router.replace("/", { locale: "pl" })}
                className="fi fi-pl block p-4 hover:bg-gray-100 dark:hover:bg-gray-600 "
              ></Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                locale={"en"}
                hrefLang="en"
                href={"/en"}
                onClick={() => router.replace("en", { locale: "en" })}
                className="fi fi-gb block p-4 hover:bg-gray-100 dark:hover:bg-gray-600 "
              ></Link>
            </li>
            <li className="flex items-center justify-center">
              <Link
                locale={"nl"}
                hrefLang="nl"
                href="/nl"
                onClick={() => router.replace("nl", { locale: "nl" })}
                className="fi fi-nl block p-4 hover:bg-gray-100 dark:hover:bg-gray-600 "
              ></Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavDropdown;
