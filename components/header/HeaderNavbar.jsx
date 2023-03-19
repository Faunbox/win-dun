import { Dropdown, Navbar } from "@nextui-org/react";

const HeaderNavbar = () => {
  return (
    <Navbar disableBlur={true} variant="sticky">
      <Navbar.Brand>LOGO</Navbar.Brand>
      <Navbar.Content>
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
            <Dropdown.Button auto color={"secondary"}>
              Rezerwacja
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu>
            <Dropdown.Item>Przewóz osób</Dropdown.Item>
            <Dropdown.Item>Przewóz paczek</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
};

export default HeaderNavbar;
