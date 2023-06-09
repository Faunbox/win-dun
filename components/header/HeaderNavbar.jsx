import { Navbar } from "@nextui-org/react";
import HeaderDesktopNavbar from "./HeaderDesktopNavbar";
import HeaderMobileNavbar from "./HeaderMobileNavbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const HeaderNavbar = () => {
  const { theme } = useTheme();

  return (
    <Navbar
      // disableBlur={false}
      variant="floating"
      disableShadow={true}
      containerCss={{
        maxWidth: "100vw",
        width: "100%",
        padding: "0 10%",
      }}
      id={"navbar"}
    >
      <Navbar.Brand>
        <Link href={"/"}>
          <Image
            src={
              "/images/logo.png"
              // theme === "light" ? "/images/logo.png" : "/images/logo-dark.png"
            }
            alt="Wit-Dun express transport polska holandia"
            width={180}
            height={50}
            
          />
        </Link>
      </Navbar.Brand>
      <HeaderDesktopNavbar />
      <HeaderMobileNavbar />
    </Navbar>
  );
};

export default HeaderNavbar;
