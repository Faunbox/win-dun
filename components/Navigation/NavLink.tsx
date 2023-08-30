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

  return (
    <Link
      href={href}
      locale={locale}
      className={`text-sm lg:text-md border-black text-white ${bold}`}
    >
      <p className="hover:scale-110 transition-transform duration-500 uppercase">
        {title}
      </p>
    </Link>
  );
};

export default NavLink;
