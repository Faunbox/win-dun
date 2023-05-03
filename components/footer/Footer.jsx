import { Container, Grid, Row, Spacer } from "@nextui-org/react";
import FooterBottomPanel from "./FooterBottomPanel";
import FooterMiddlePanel from "./FooterMiddlePanel";
import FooterTopPanel from "./FooterTopPanel";

const Footer = () => {
  return (
    <Container
      as="footer"
      direction="column"
      css={{
        my: 10,
      }}
    >
      <Spacer y={2} />
      <Grid.Container justify="space-around" alignContent="center">
        <FooterTopPanel />
        <FooterMiddlePanel />
      </Grid.Container>
      <FooterBottomPanel />
    </Container>
  );
};

export default Footer;
