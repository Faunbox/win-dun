import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  color?: string;
};

const NavLink = ({ href, title, color }: Props) => {
  return (
    <Link href={href} className={`text-sm lg:text-md font-normal text-white`}>
      <p className="hover:scale-110 transition-transform duration-500 uppercase">
        {title}
      </p>
    </Link>
  );
};

export default NavLink;
