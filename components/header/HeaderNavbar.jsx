import { Dropdown, Navbar } from "@nextui-org/react";
import HeaderDesktopNavbar from "./HeaderDesktopNavbar";
import HeaderMobileNavbar from "./HeaderMobileNavbar";

const HeaderNavbar = () => {
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
      id={"navbar"}
    >
      <Navbar.Brand>LOGO</Navbar.Brand>
      <HeaderDesktopNavbar />
      <HeaderMobileNavbar />
    </Navbar>
  );
};

export default HeaderNavbar;
