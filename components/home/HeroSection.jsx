import { Button, Card, Grid, Input, Radio } from "@nextui-org/react";
import { useState } from "react";
import ParcelForn from "./form/ParcelForm";
import PplForm from "./form/PplForm";

const HeroSection = () => {
  const [checked, setChecked] = useState("A");

  return (
    <Grid.Container
      css={{
        minHeight: "100vh",
        py: "10%",
      }}
    >
      <Grid xs={0} sm={1} md={2}></Grid>
      <Grid xs={12} sm={2} md={3}>
        <Card css={{ borderRadius: "0" }} variant="bordered">
          <Card.Header>
            <Radio.Group
              label="Przewóz"
              orientation="horizontal"
              value={checked}
              onChange={setChecked}
            >
              <Radio value="A">Osób</Radio>
              <Radio value="B">Paczek</Radio>
            </Radio.Group>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {checked === "A" ? <PplForm /> : <ParcelForn />}
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
