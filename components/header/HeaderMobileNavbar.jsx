import { Navbar, Switch, useTheme } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const HeaderMobileNavbar = () => {
  const { t, ready } = useTranslation("website");
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const { locales } = useRouter();
  const navbarContent = t("navbar", { returnObjects: true });

  return (
    <>
      <Navbar.Toggle showIn={"sm"} />
      <Navbar.Collapse>
        {navbarContent?.map((obj) => (
          <Link href={obj.href} key={obj.title}>
            <Navbar.CollapseItem>{obj.title}</Navbar.CollapseItem>
          </Link>
        ))}
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
