import Link from "next/link";

type Props = {
  href: string;
  title: string;
  color?: string;
};

const NavLink = ({ href, title, color }: Props) => {
  return (
    <Link
      href={href}
      className={`text-xl lg:text-md font-light leading-6 hover:scale-125 transition-transform duration-300 ${
        !color ? "text-gray-900" : "text-white"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
