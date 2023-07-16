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

const Footer = () => {
  const locale = useLocale();

  return (
    <footer className="w-screen bg-gray-700 text-gray-100 flex justify-center items-center flex-col">
      <div className="container grid grid-rows-4 md:grid-rows-none md:grid-cols-2 lg:grid-cols-4 py-4">
        {/* Logo */}
        <div className="flex justify-center items-center flex-col">
          <img
            src="/images/logo-dark.png"
            alt="logo"
            className="max-w-[300px] lg:max-w-[250px]"
          />
          {/* Socials */}
          <div className="flex flex-row justify-around w-full max-w-[300px] pt-10">
            <SiFacebook className="scale-125 hover:scale-150 transition-transform duration-500" />
            <SiInstagram className="scale-125 hover:scale-150 transition-transform duration-500" />
            <SiTwitter className="scale-125 hover:scale-150 transition-transform duration-500" />
          </div>
        </div>
        {/* Nav */}
        <div className="flex flex-col text-center">
          <h3 className="py-4 text-lg font-semibold">Nawigacja</h3>
          <ul>
            {locale === "pl" &&
              PlNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li key={title}>
                    <FooterLink href={href} title={title} />
                  </li>
                )
              )}
            {locale === "en" &&
              EnNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li key={title}>
                    <FooterLink href={href} title={title} />
                  </li>
                )
              )}
            {locale === "nl" &&
              NlNavbar?.map(
                ({ href, title }: { href: string; title: string }) => (
                  <li key={title}>
                    <FooterLink href={href} title={title} />
                  </li>
                )
              )}
          </ul>
        </div>
        {/* Before travel */}
        <div className="flex flex-col text-center">
          <h3 className="py-4 text-lg font-semibold">Przed podróżą</h3>
          <ul>
            {locale === "pl" &&
              BfTravelPL?.menu?.map(
                ({ name, href }: { name: string; href: string }) => (
                  <li key={name}>
                    <FooterLink href={href} title={name} />
                  </li>
                )
              )}
            {locale === "en" &&
              BfTravelEn?.menu?.map(
                ({ name, href }: { name: string; href: string }) => (
                  <li key={name}>
                    <FooterLink href={href} title={name} />
                  </li>
                )
              )}
            {locale === "nl" &&
              BfTravelNl?.menu?.map(
                ({ name, href }: { name: string; href: string }) => (
                  <li key={name}>
                    <FooterLink href={href} title={name} />
                  </li>
                )
              )}
          </ul>
        </div>
        {/* Privacy + terms */}
        <div className="flex flex-col text-center justify-between items-center py-4">
          <ul>
            <li className="py-2">Regulamin strony</li>
            <li className="py-2">Polityka prywatności</li>
          </ul>
          <small>Created by Filip Sojecki</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
