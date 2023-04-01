import { Navbar } from "@nextui-org/react";

const HeaderMobileNavbar = () => {
  return (
    <>
      <Navbar.Toggle showIn={"sm"} />
      <Navbar.Collapse>
        <Navbar.CollapseItem>O nas</Navbar.CollapseItem>
        <Navbar.CollapseItem>Galeria</Navbar.CollapseItem>
        <Navbar.CollapseItem>Kontakt</Navbar.CollapseItem>
      </Navbar.Collapse>
    </>
  );
};

export default HeaderMobileNavbar;
