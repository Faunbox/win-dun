import { useLocale } from "next-intl";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import {
  BfTravelEn,
  BfTravelNl,
  BfTravelPL,
  EnNavbar,
  NlNavbar,
  PlNavbar,
} from "../Navigation/data";
import NavLink from "../Navigation/NavLink";
import FooterLink from "./FooterLink";
import Image from "next/image";

const Footer = () => {
  const locale = useLocale();

  return (
    <footer className="w-full text-gray-100 bg-[#171213] body-font relative">
      <div className="container flex flex-col lg:flex-row flex-wrap lg:flex-nowrap px-5 py-10 lg:py-18 mx-auto md:items-center lg:items-start ">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left md:mb-10">
          <a className="flex items-center justify-center font-medium text-gray-300 title-font md:justify-start">
            <Image
              src="/images/logo-dark.png"
              alt="Witdun Express logo"
              width={256}
              height={66}
              loading="lazy"
            />
          </a>
          <p className="mt-2 text-sm text-gray-100">
            Transport Holandia, Niemcy
          </p>
          <div className="mt-4 w-64">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-around gap-20">
              <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-100 cursor-pointer hover:text-gray-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-100 cursor-pointer hover:text-gray-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-md font-medium tracking-widest text-gray-300 uppercase title-font">
              Przejazd
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Regulamin
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Polityka prywatności
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  ZAREZERWUJ
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-300 uppercase title-font">
              Transporty
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Transport Polska-Holandia
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Transport Polska-Niemcy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Przewozy osób i paczek
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-300 uppercase title-font">
              Menu
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Start
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Flota
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Przed podróżą
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Kontakt
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-300 uppercase title-font">
              Kontakt
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Formularz kontaktowy
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Messenger
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  Whatsapp
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-100 cursor-pointer hover:text-gray-300">
                  +123-456-7890
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-300 capitalize xl:text-center">
            © 2023 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
