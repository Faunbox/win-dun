import { useNavbar } from "@/context/navbarContext";
import { useLocale } from "next-intl";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavLink from "./NavLink";
import NavDropdownButton from "./NabDropdownButton";
import NavDropdown from "./NavDropdownElements";
import NavFlagsButton from "./NavFlagsButton";
import NavFlagsDropdown from "./NavFlagsDropdown";

const NavDesktop = () => {
  const { open, flags, mobileOpen, setMobileOpen } = useNavbar();
  const locale = useLocale();

  return (
    <>
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {locale === "pl" &&
          PlNavbar?.map(({ href, title }: { href: string; title: string }) => (
            <NavLink href={href} title={title} key={title} />
          ))}
        {locale === "en" &&
          EnNavbar?.map(({ href, title }: { href: string; title: string }) => (
            <NavLink href={href} title={title} key={title} />
          ))}
        {locale === "nl" &&
          NlNavbar?.map(({ href, title }: { href: string; title: string }) => (
            <NavLink href={href} title={title} key={title} />
          ))}

        <div className="relative">
          <NavDropdownButton />
          {/*   
    <!--
      'Product' flyout menu, show/hide based on flyout menu state.

      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
    --> */}
          {open && <NavDropdown />}
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <div className="relative">
          <NavFlagsButton />
          {flags && <NavFlagsDropdown />}
        </div>
      </div>
    </>
  );
};

export default NavDesktop;
