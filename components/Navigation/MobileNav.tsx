"use client";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRightAlt, CgPushRight } from "react-icons/cg";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavLink from "./NavLink";
import { useLocale } from "next-intl";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const locale = useLocale();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

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
                href={`/en`}
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
  );
};

export default MobileNav;
