import { useNavbar } from "@/context/navbarContext";
import { BfTravelEn, BfTravelNl, BfTravelPL } from "./data";
import NavMobileLink from "./NavMobileLink";
import { useLocale } from "next-intl";

const NavMobileDropdown = ({ title }: { title: string }) => {
  const { setMobileDropdownOpen, mobileDropdownOpen } = useNavbar();
  const locale = useLocale();

  console.log(locale);

  return (
    <div className="-mx-3">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        aria-controls="disclosure-1"
        aria-expanded="false"
        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
      >
        {title}
        {/* <!--
    Expand/collapse icon, toggle classes based on menu open state.

    Open: "rotate-180", Closed: ""
  --> */}
        <svg
          className="h-5 w-5 flex-none"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
      {/* {mobileDropdownOpen && ( */}
      
        <div className="mt-2 space-y-2" id="disclosure-1">
            tak
          {locale === "pl" &&
            BfTravelPL?.menu.map(({ href, name }):any => {
              <NavMobileLink key={name} href={href} title={name} />;
            })}
          {locale === "nl" &&
            BfTravelNl?.menu.map(({ href, name }): any => {
              <NavMobileLink key={name} href={href} title={name} />;
            })}
          {locale === "en" &&
            BfTravelEn?.menu.map(({ href, name }): any => {
              <NavMobileLink key={name} href={href} title={name} />;
            })}
        </div>
      
    </div>
  );
};

export default NavMobileDropdown;
