import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  color?: string;
};

const NavLink = ({ href, title, color }: Props) => {
  return (
    <Link href={href} className={`text-xl lg:text-md font-light`}>
      <p className="hover:scale-110 transition-transform duration-500">
        {title}
      </p>
    </Link>
  );
};

export default NavLink;
