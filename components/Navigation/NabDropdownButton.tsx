import { useLocale } from "next-intl";
import { BfTravelEn, BfTravelNl, BfTravelPL } from "./data";
import { useNavbar } from "@/context/navbarContext";

const NavDropdownButton = () => {
  const locale = useLocale();
  const { setOpen } = useNavbar();

  return (
    <button
      type="button"
      className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
      aria-expanded="false"
      onClick={() => setOpen((prevState: boolean) => !prevState)}
    >
      {locale === "pl" && BfTravelPL.title}
      {locale === "en" && BfTravelEn.title}
      {locale === "nl" && BfTravelNl.title}
      <svg
        className="h-5 w-5 flex-none text-gray-400"
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
  );
};

export default NavDropdownButton;
