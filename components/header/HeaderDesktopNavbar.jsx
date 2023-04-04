import { Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BfTravelEn, BfTravelNl, BfTravelPL, EnNavbar, NlNavbar, PlNavbar, ReservationEn, ReservationNl, ReservationPl } from "./navbar";

const HeaderDesktopNavbar = () => {
  const router = useRouter();

  
  return (
    <>
      <Navbar.Content hideIn={"sm"}>
        {/* check locale for navbar */}
        {/* Check for PL lng */}
        {router.locale === "pl" &&
          PlNavbar?.map((obj) => (
            <Navbar.Item key={obj.title}>
              <Link href={obj.href}>
                <Text size={"large"}>{obj.title}</Text>
              </Link>
            </Navbar.Item>
          ))}
        {/* Check for EN lng */}
        {router.locale === "en" &&
          EnNavbar?.map((obj) => (
            <Navbar.Item key={obj.title}>
              <Link href={obj.href}>
                <Text size={"large"}>{obj.title}</Text>
              </Link>
            </Navbar.Item>
          ))}
        {/* Check for NL lng */}
        {router.locale === "nl" &&
          NlNavbar?.map((obj) => (
            <Navbar.Item key={obj.title}>
              <Link href={obj.href}>
                <Text size={"large"}>{obj.title}</Text>
              </Link>
            </Navbar.Item>
          ))}
        <Dropdown>
          <Navbar.Item>
            <Dropdown.Button light>
              {router.locale === "pl" && (
                <Text size={"large"}>{BfTravelPL.title}</Text>
              )}
              {router.locale === "en" && (
                <Text size={"large"}>{BfTravelEn.title}</Text>
              )}
              {router.locale === "nl" && (
                <Text size={"large"}>{BfTravelNl.title}</Text>
              )}
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu>
            {router.locale === "pl" &&
              BfTravelPL.menu.map((menu) => (
                <Dropdown.Item key={menu.name}>
                  <Text size={"$lg"}>{menu.name}</Text>
                </Dropdown.Item>
              ))}
            {router.locale === "en" &&
              BfTravelEn.menu.map((menu) => (
                <Dropdown.Item key={menu.name}>
                  <Text size={"$lg"}>{menu.name}</Text>
                </Dropdown.Item>
              ))}
            {router.locale === "nl" &&
              BfTravelNl.menu.map((menu) => (
                <Dropdown.Item key={menu.name}>
                  <Text size={"$lg"}>{menu.name}</Text>
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Link href={"/"}>
            {router.locale === "pl" && <Button auto>{ReservationPl}</Button>}
            {router.locale === "en" && <Button auto>{ReservationEn}</Button>}
            {router.locale === "nl" && <Button auto>{ReservationNl}</Button>}
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </>
  );
};

export default HeaderDesktopNavbar;
