import Link from "next/link";
import { ReactNode } from "react";
import { BsMessenger, BsTelephoneOutbound, BsWhatsapp } from "react-icons/bs";

const LinkElement = ({
  children,
  href,
  target,
}: {
  children: ReactNode;
  href: string;
  target?: string | null;
}) => {
  return (
    <Link
      href={href}
      className="hover:scale-110 duration-300 text-black animate-waving-hand"
      target={target ? target : ""}
    >
      {children}
    </Link>
  );
};

const CallCloud = () => {
  return (
    <div className="fixed bottom-[48%] right-0 flex z-50 border-1 border-black animate-waving-hand">
      <div className="flex flex-col h-full justify-around items-center gap-5 p-4 animate-waving-hand">
        <LinkElement href="tel:+48505216526">
          <BsTelephoneOutbound size={25} />
        </LinkElement>
        <LinkElement href="https://m.me/107516904418538" target={"_blank"}>
          <BsMessenger size={25} />
        </LinkElement>
        <LinkElement
          href="https://api.whatsapp.com/send?phone=505216526"
          target={"_blank"}
        >
          <BsWhatsapp size={25} />
        </LinkElement>
      </div>
    </div>
  );
};

export default CallCloud;
