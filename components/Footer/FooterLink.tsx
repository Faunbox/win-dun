import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

const FooterLink = ({ href, title }: Props) => {
  return (
    <Link href={href} className={`text-sm md:text-md leading-3 text-white`}>
      {title}
    </Link>
  );
};

export default FooterLink;
