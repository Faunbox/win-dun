import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import {
  EnNavbar,
  FooterNavigationEn,
  FooterNavigationNl,
  FooterNavigationPl,
  NlNavbar,
  PlNavbar,
} from "../header/navbar";

const FooterTopPanel = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <>
      <Grid sm={12} md={3} justify="center" alignItems="center">
        <Image
          src={ "/images/logo.png" }
          alt="logo"
          width={200}
          height={50}
        />
      </Grid>
      <Grid
        sm={12}
        md={3}
        justify="center"
        alignItems="center"
        direction="column"
        css={{ textAlign: "center" }}
      >
        <Text size={"large"}>Wit-Dun Express, ul.Źródlana 2A</Text>
        <Text size={"large"}>34-321 Łękawica | Polska</Text>
        <Text size={"large"}>© 2023</Text>
      </Grid>
      <Grid
        sm={12}
        md={6}
        justify="space-around"
        alignItems="center"
        direction="column"
        css={{ textAlign: "center" }}
      >
        {router.locale === "pl" && <Text b> {FooterNavigationPl}</Text>}
        {router.locale === "en" && <Text b> {FooterNavigationEn}</Text>}
        {router.locale === "nl" && <Text b> {FooterNavigationNl}</Text>}
        <Grid.Container justify="center" alignItems="center">
          {router.locale === "pl" &&
            PlNavbar?.map((obj) => (
              <Grid xs={6} sm={2} key={obj.href} justify="center">
                <Link href={obj.href}>
                  <Text>{obj.title}</Text>
                </Link>
              </Grid>
            ))}
          {/* Check for EN lng */}
          {router.locale === "en" &&
            EnNavbar?.map((obj) => (
              <Grid xs={6} sm={2} key={obj.href} justify="center">
                <Link href={obj.href} key={obj.href}>
                  <Text>{obj.title}</Text>
                </Link>
              </Grid>
            ))}
          {/* Check for NL lng */}
          {router.locale === "nl" &&
            NlNavbar?.map((obj) => (
              <Grid xs={6} sm={2} key={obj.href} justify="center" alignItems="center">
                <Link href={obj.href} key={obj.href}>
                  <Text>{obj.title}</Text>
                </Link>
              </Grid>
            ))}
        </Grid.Container>
      </Grid>
    </>
  );
};

export default FooterTopPanel;
