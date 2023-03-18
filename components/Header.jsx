import { Container, Dropdown, Navbar } from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>LOGO</Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>O nas</Navbar.Item>
        <Navbar.Item>Galeria</Navbar.Item>
        <Navbar.Item>Kontakt</Navbar.Item>
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

export default Header;
