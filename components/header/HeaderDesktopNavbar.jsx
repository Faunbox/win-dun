import { Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderDesktopNavbar = () => {
  const router = useRouter();

  const EnNavbar = [
    { title: "About", href: "/about" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ];

  const NlNavbar = [
    { title: "About NL", href: "/about" },
    { title: "Gallery NL", href: "/gallery" },
    { title: "Contact NL", href: "/contact" },
  ];

  const PlNavbar = [
    { title: "O nas", href: "/o-nas" },
    { title: "Galeria", href: "/galeria" },
    { title: "Kontakt", href: "/kontakt" },
  ];

  const BfTravelPL = {
    title: "Przed podróżą",
    menu: [
      { name: "Jak rezerwować przejazd", href: "/jak-rezerwowac" },
      { name: "Bagaż", href: "/bagaz" },
      { name: "Regulamin", href: "/regulami" },
      { name: "FAQ", href: "/faq" },
    ],
  };

  const BfTravelEn = {
    title: "Before Travel",
    menu: [
      { name: "Jak rezerwować przejazd EN", href: "/jak-rezerwowac" },
      { name: "Bagaż EN", href: "/bagaz" },
      { name: "Regulamin EN", href: "/regulami" },
      { name: "FAQ EN", href: "/faq" },
    ],
  };
  const BfTravelNl = {
    title: "Przed podróżą NL",
    menu: [
      { name: "Jak rezerwować przejazd NL", href: "/jak-rezerwowac" },
      { name: "Bagaż NL", href: "/bagaz" },
      { name: "Regulamin NL", href: "/regulami" },
      { name: "FAQ NL", href: "/faq" },
    ],
  };

  const ReservationPl = "Rezerwacja";
  const ReservationEn = "Rezerwacja EN";
  const ReservationNl = "Rezerwacja NL";

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
