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
    <div>
      <a href={href} className=" text-white" target={target ? target : ""} rel="noopener">
        {children}
      </a>
    </div>
  );
};

const CallCloud = () => {
  return (
    <div className="fixed bottom-[16%] md:bottom-[48%] right-0 flex mix-blend-difference">
      <div className="flex flex-col h-full justify-around items-center gap-5 p-4">
        <LinkElement href="tel:+48507317221" target={"_blank"}>
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
