
import Image from "next/image";
import Link from "next/link";
import DesktopLinksBar from "./DesktopLinksBar";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:grid lg:grid-cols-6 justify-between container mx-10">
      {/* Logo */}
      <Link href={"/"} className="">
        <Image
          src="/images/logo-dark.png"
          alt="logo"
          width={200}
          height={52}
          className="max-w-[200px]"
        />
      </Link>
      {/* Menu links */}
      <DesktopLinksBar />
    </nav>
  );
};

export default DesktopNav;
