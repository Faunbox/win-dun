"use client";

import NavDropdown from "./NavDropdownElements";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavLink from "./NavLink";
import { useLocale } from "next-intl";
import NavDropdownButton from "./NabDropdownButton";
import { useNavbar } from "@/context/navbarContext";
import NavFlagsButton from "./NavFlagsButton";
import NavFlagsDropdown from "./NavFlagsDropdown";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navigation = () => {
  const { mobileOpen } = useNavbar();
  return (
    <header className="bg-white z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* <NavDesktop /> */}
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {/* {mobileOpen && <NavMobile />} */}
    </header>
  );
};

export default Navigation;
