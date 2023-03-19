import { Container, Grid, Text } from "@nextui-org/react";
import Link from "next/link";

const FooterTopPanel = () => {
  return (
    <>
      <Grid sm={12} md={3} justify="center" alignItems="center">
        LOGO
      </Grid>
      <Grid
        sm={12}
        md={3}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Text size={"large"}>Wit-Dun ul.Najlepsza 420</Text>
        <Text size={"large"}>43-300 Bielsko-Biała | Polska</Text>
        <Text size={"large"}>© 2023</Text>
      </Grid>
      <Grid
        sm={12}
        md={6}
        justify="space-around"
        alignItems="center"
        direction="column"
      >
        <Text>Nawigacja</Text>
        <Container
          display="flex"
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Link href={"/"}>
            <Text size="large">Strona główna</Text>
          </Link>
          <Link href={"/"}>
            <Text size="large">O nas</Text>
          </Link>
          <Link href={"/"}>
            <Text size="large">Galeria</Text>
          </Link>
          <Link href={"/"}>
            <Text size="large">Kontakt</Text>
          </Link>
        </Container>
      </Grid>
    </>
  );
};

export default FooterTopPanel;
