import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

const NavMobileLink = ({ href, title }: Props) => {
  return (
    <Link href={href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
      {title}
    </Link>
  );
};

export default NavMobileLink;
