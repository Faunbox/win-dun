"use client";
import { useLocale } from "next-intl";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavLink from "./NavLink";

const DesktopLinks = () => {
  const locale = useLocale();

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-4 lg:mr-4">
      {locale === "pl" &&
        PlNavbar?.map(({ href, title }: { href: string; title: string }) => {
          return (
            <li
              key={title}
              className="last:font-normal last:border-2 last:border-yellow-0 last:p-2 last:rounded-lg last:hover:bg-yellow-0 last:hover:text-black"
            >
              <NavLink href={href} title={title} />
            </li>
          );
        })}
      {locale === "en" &&
        EnNavbar?.map(({ href, title }: { href: string; title: string }) => (
          <li key={title}>
            <NavLink href={href} title={title} />
          </li>
        ))}
      {locale === "nl" &&
        NlNavbar?.map(({ href, title }: { href: string; title: string }) => (
          <li key={title}>
            <NavLink href={href} title={title} />
          </li>
        ))}
    </div>
  );
};

export default DesktopLinks;
