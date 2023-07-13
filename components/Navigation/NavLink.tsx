import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: Props) => {
  return (
    <Link href={href} className="text-md font-semibold leading-6 text-gray-900">
      {title}
    </Link>
  );
};

export default NavLink;
