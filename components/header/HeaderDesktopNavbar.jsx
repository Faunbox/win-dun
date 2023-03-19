import { Dropdown, Navbar } from "@nextui-org/react";

const HeaderDesktopNavbar = () => {
  return (
    <>
      <Navbar.Content hideIn={"xs"}>
        <Navbar.Item>O nas</Navbar.Item>
        <Navbar.Item>Galeria</Navbar.Item>
        <Navbar.Item>Kontakt</Navbar.Item>
        <Dropdown>
          <Navbar.Item>
            <Dropdown.Button light>Przed podróżą</Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu>
            <Dropdown.Item>Jak rezerwować przejazd</Dropdown.Item>
            <Dropdown.Item>Bagaż</Dropdown.Item>
            <Dropdown.Item>Regulamin</Dropdown.Item>
            <Dropdown.Item>FAQ</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Content>
        <Dropdown>
          <Navbar.Item>
            <Dropdown.Button auto color={"warning"}>
              Rezerwacja
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu>
            <Dropdown.Item>Przewóz osób</Dropdown.Item>
            <Dropdown.Item>Przewóz paczek</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </>
  );
};

export default HeaderDesktopNavbar;
