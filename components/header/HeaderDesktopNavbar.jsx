import { Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";

const HeaderDesktopNavbar = () => {
  return (
    <>
      <Navbar.Content hideIn={"xs"}>
        <Navbar.Item>
          <Link href={"/"}>
            <Text size={"large"}>O nas</Text>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href={"/"}>
            <Text size={"large"}>Galeria</Text>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href={"/"}>
            <Text size={"large"}>Kontakt</Text>
          </Link>
        </Navbar.Item>
        <Dropdown>
          <Navbar.Item>
            <Dropdown.Button light>
              <Text size={"large"}>Przed podróżą</Text>
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Text size={"$lg"}>Jak rezerwować przejazd</Text>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Text size={"$lg"}>Bagaż</Text>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Text size={"$lg"}>Regulamin</Text>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Text size={"$lg"}>FAQ</Text>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Link href={"/"}>
            <Button>Zarezerwuj</Button>
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </>
  );
};

export default HeaderDesktopNavbar;
