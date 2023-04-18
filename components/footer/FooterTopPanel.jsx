import { Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <>
      <Grid sm={12} md={3} justify="center" alignItems="center">
        <Image src={"/images/logo.png"} alt="logo" width={200} height={50} />
      </Grid>
      <Grid
        sm={12}
        md={3}
        justify="center"
        alignItems="center"
        direction="column"
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
      >
        {router.locale === "pl" && <Text> {FooterNavigationPl}</Text>}
        {router.locale === "en" && <Text> {FooterNavigationEn}</Text>}
        {router.locale === "nl" && <Text> {FooterNavigationNl}</Text>}
        <Container
          display="flex"
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {router.locale === "pl" &&
            PlNavbar?.map((obj) => (
              <Link href={obj.href} key={obj.href}>
                <Text size={"large"}>{obj.title}</Text>
              </Link>
            ))}
          {/* Check for EN lng */}
          {router.locale === "en" &&
            EnNavbar?.map((obj) => (
              <Link href={obj.href} key={obj.href}>
                <Text size={"large"}>{obj.title}</Text>
              </Link>
            ))}
          {/* Check for NL lng */}
          {router.locale === "nl" &&
            NlNavbar?.map((obj) => (
              <Link href={obj.href} key={obj.href}>
                <Text size={"large"}>{obj.title}</Text>
              </Link>
            ))}
        </Container>
      </Grid>
    </>
  );
};

export default FooterTopPanel;
