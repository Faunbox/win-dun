import { Dropdown, Navbar, Switch, Text, useTheme } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import {
  BfTravelEn,
  BfTravelNl,
  BfTravelPL,
  EnNavbar,
  NlNavbar,
  PlNavbar,
  ReservationEn,
  ReservationNl,
  ReservationPl,
} from "./navbar";

const HeaderMobileNavbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const { locales, locale } = useRouter();

  const router = useRouter();

  return (
    <>
      <Navbar.Toggle showIn={"sm"} />
      <Navbar.Collapse>
        {router.locale === "pl" &&
          PlNavbar?.map((obj) => (
            <Link href={obj.href} key={obj.title}>
              <Navbar.CollapseItem>{obj.title}</Navbar.CollapseItem>
            </Link>
          ))}
        {router.locale === "en" &&
          EnNavbar?.map((obj) => (
            <Link href={obj.href} key={obj.title}>
              <Navbar.CollapseItem>{obj.title}</Navbar.CollapseItem>
            </Link>
          ))}
        {router.locale === "nl" &&
          NlNavbar?.map((obj) => (
            <Link href={obj.href} key={obj.title}>
              <Navbar.CollapseItem>{obj.title}</Navbar.CollapseItem>
            </Link>
          ))}
        <Navbar.CollapseItem>
          <Dropdown triggerType="listbox" >
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
        </Navbar.CollapseItem>

        <Navbar.CollapseItem
          css={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            color="warning"
            iconOff={<BsSunFill color="orange" />}
            iconOn={<BsFillMoonFill />}
          />
        </Navbar.CollapseItem>
        <Navbar.CollapseItem
          css={{ display: "flex", justifyContent: "flex-end" }}
        >
          {locales.map((l) => (
            <Link
              key={l}
              locale={l}
              className={l !== "en" ? `fi fi-${l}` : `fi fi-gb`}
              href="/"
              size={"xs"}
              style={{
                margin: "20px",
                borderRadius: "4px",
                border: "1px solid black",
              }}
            ></Link>
          ))}
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </>
  );
};

export default HeaderMobileNavbar;
