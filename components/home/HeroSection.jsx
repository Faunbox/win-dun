import { Button, Card, Grid, Input } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <Grid.Container
      css={{
        minHeight: "100vh",
        py: "10%",
      }}
    >
      <Grid xs={0} sm={1} md={2}></Grid>
      <Grid xs={12} sm={2} md={3}>
        <Card>
          <Card.Header>Przewóz osób</Card.Header>
          <Card.Divider />
          <Card.Body>
            <Input label="tak" />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Button>Rezerwacja przejazdu</Button>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={0} sm={5} md={7}></Grid>
    </Grid.Container>
  );
};

export default HeroSection;
