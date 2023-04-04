import { Button, Card, Col, Grid, Radio, Row, Text } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import ParcelForn from "./form/ParcelForm";
import PplForm from "./form/PplForm";
import { BsGeoAlt } from "react-icons/bs";
import { useTranslation } from "next-i18next";

const HeroSection = () => {
  const [checked, setChecked] = useState("A");
  const [city, setCity] = useState("");
  const { t } = useTranslation("reservationForm");

  const getCity = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pl`;

    const city = await axios.get(geoApiUrl).then((res) => res.data.city);

    return setCity(city);
  };

  const successCallback = (position) => {
    getCity(position);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const handleGeoClick = () =>
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <Grid.Container
      css={{
        minHeight: "100vh",
        py: "10%",
      }}
      gap={2}
    >
      <Grid xs={0} sm={1} md={2}></Grid>
      <Grid xs={12} sm={5} md={4}>
        <Card css={{ borderRadius: "0" }} variant="bordered">
          <Card.Header>
            <Grid.Container alignItems="center" justify="center">
              <Grid>
                <Radio.Group
                  label="Przewóz"
                  orientation="horizontal"
                  value={checked}
                  onChange={setChecked}
                >
                  {t("reservationType", { returnObjects: true }).map((obj) => {
                    <Radio value={obj.value} key={obj.text}>
                      {obj.text}
                    </Radio>;
                  })}
                </Radio.Group>
              </Grid>
              <Grid justify="flex-end">
                <Button light onPress={handleGeoClick} auto>
                  <Text small>
                  {t("localization")} <BsGeoAlt />
                  </Text>
                </Button>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {checked === "A" ? (
              <PplForm city={city} />
            ) : (
              <ParcelForn city={city} />
            )}
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Button>{t("button")}</Button>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={0} sm={6} md={6} justify="center">
        <Text h2>Jeździmy w każdy piątek, sobotę i niedziele</Text>
      </Grid>
    </Grid.Container>
  );
};

export default HeroSection;
