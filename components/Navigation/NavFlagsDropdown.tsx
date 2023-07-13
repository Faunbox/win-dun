"use client";
import Link from "next/link";
import { Flags } from "./data";

const NavFlagsDropdown = () => {

  return (
    <div className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
      <div className="p-4">
        {Flags.locale?.map((obj): any => (
          <div
            className="group relative flex items-center gap-x-2 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            key={obj.flag}
          >
            <div className="flex h-auto w-auto flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
            </div>
            <div className="flex-auto">
              <Link
                locale={obj.flag}
                href={`/${obj.flag}`}
                className="block font-semibold text-gray-900"
              >
                {obj.flag}
                <span className="absolute inset-0"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavFlagsDropdown;
