"use client";
import { useFormContext } from "@/context/formContext";
import { useLocale } from "next-intl";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  bold?: string;
  isActive?: boolean;
};

const NavLink = ({ href, title, bold }: Props) => {
  const locale = useLocale();
  const { setMobileNavOpen } = useFormContext();

  return (
    <Link
      href={href}
      locale={locale}
      className={`text-sm lg:text-md border-black  ${bold}  `}
      onClick={() => setMobileNavOpen(false)}
    >
      <p className="transition-transform duration-500 uppercase hover:scale-110 ease-in-out">
        {title}
      </p>
    </Link>
  );
};

export default NavLink;
