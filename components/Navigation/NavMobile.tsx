import { useNavbar } from "@/context/navbarContext";
import NavMobileDropdown from "./NavMobileDropdown";
import NavFlagsButton from "./NavFlagsButton";
import NavFlagsDropdown from "./NavFlagsDropdown";
import { BfTravelEn, BfTravelNl, BfTravelPL, EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavMobileLink from "./NavMobileLink";
import { useLocale } from "next-intl";

const NavMobile = () => {
  const { flags, setMobileOpen } = useNavbar();
  const locale = useLocale();
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            <span className="sr-only"></span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
            {locale === "pl" &&
          PlNavbar?.map(({ href, title }: { href: string; title: string }) => (
            <NavMobileLink href={href} title={title} key={title} />
          ))}
        {locale === "en" &&
          EnNavbar?.map(({ href, title }: { href: string; title: string }) => (
            <NavMobileLink href={href} title={title} key={title} />
          ))}
        {locale === "nl" &&
          NlNavbar?.map(({ href, title }: { href: string; title: string }) => (
            <NavMobileLink href={href} title={title} key={title} />
          ))}
            </div>
            {locale === "pl" && <NavMobileDropdown title={BfTravelPL.title}/>}
            {locale === "nl" && <NavMobileDropdown title={BfTravelNl.title}/>}
            {locale === "en" && <NavMobileDropdown title={BfTravelEn.title}/>}
            <div className="py-6 relative">
              <NavFlagsButton />
              {flags && <NavFlagsDropdown />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
