import { Navbar } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const HeaderMobileNavbar = () => {
  const { t, ready } = useTranslation("website");

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
      </Navbar.Collapse>
    </>
  );
};

export default HeaderMobileNavbar;
