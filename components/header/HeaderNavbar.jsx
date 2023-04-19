import { Navbar } from "@nextui-org/react";
import HeaderDesktopNavbar from "./HeaderDesktopNavbar";
import HeaderMobileNavbar from "./HeaderMobileNavbar";
import Image from "next/image";
import { useTheme } from "next-themes";

const HeaderNavbar = () => {
  const { theme } = useTheme();

  console.log({ theme });

  return (
    <Navbar
      // disableBlur={false}
      variant="sticky"
      disableShadow={true}
      containerCss={{
        maxWidth: "100vw",
        width: "100%",
        padding: "0 10%",
      }}
      // maxWidth={"fluid"}
      id={"navbar"}
    >
      <Navbar.Brand>
        <Image
          src={theme === "light" ? "/images/logo.png" : "/images/logo-dark.png"}
          alt="Wit-Dun transport polska holandia"
          width={240}
          height={60}
        />
      </Navbar.Brand>
      <HeaderDesktopNavbar />
      <HeaderMobileNavbar />
    </Navbar>
  );
};

export default HeaderNavbar;
