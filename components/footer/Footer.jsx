import { Container, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import FooterBottomPanel from "./FooterBottomPanel";
import FooterMiddlePanel from "./FooterMiddlePanel";
import FooterTopPanel from "./FooterTopPanel";

const Footer = () => {
  return (
    <Container direction="column" css={{ my: 10 }}>
      <Grid.Container justify="space-around" alignContent="center">
        <FooterTopPanel />
        <FooterMiddlePanel />
      </Grid.Container>
      <FooterBottomPanel />
    </Container>
  );
};

export default Footer;
