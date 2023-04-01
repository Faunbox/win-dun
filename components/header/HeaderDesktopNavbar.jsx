import { Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

const HeaderDesktopNavbar = () => {
  const { t, ready } = useTranslation("website");

  const navbarContent = t("navbar", { returnObjects: true });
  return (
    <>
      <Navbar.Content hideIn={"sm"}>
        {navbarContent.map(obj => (
          <Navbar.Item key={obj.title}>
          <Link href={obj.href}>
            <Text size={"large"}>{obj.title}</Text>
          </Link>
        </Navbar.Item>
        ))}
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
