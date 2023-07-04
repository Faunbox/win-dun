import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useForm } from "../../context/formContext";
import Link from "next/link";

const HeroSection = () => {
  const { t } = useTranslation(["reservationForm", "homePage"]);

  const { emailContent, handleSubmit, setEmailContent } = useForm();

  // const getCity = async (position) => {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;

  //   const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pl`;

  //   const city = await axios.get(geoApiUrl).then((res) => res.data.city);
  //   return setEmailContent((prevState) => ({ ...prevState, from: city }));
  // };

  // const successCallback = (position) => {
  //   getCity(position);
  // };

  // const errorCallback = (error) => {
  //   console.log(error);
  // };

  // const handleGeoClick = () =>
  //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <Container
      css={{
        minHeight: "90vh",
        minWidth: "100vw",
        backgroundImage: `url("/images/bg2.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "0 auto",
        textAlign: "left",
        "@xs": {
          backgroundPosition: "left",
        },
      }}
      display="flex"
      justify="flex-start"
      alignItems="center"
    >
      <Grid.Container
        gap={2}
        css={{ py: "15px", w: "auto" }}
      >
        <Grid css={{ textAlign: "left" }} xs={12} direction="column">
          <Card css={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
            <Card.Body>
              <Text
                h1
                css={{
                  my: "15px",
                  fontWeight: "bold",
                  textGradient: "50deg, #AD1917, black 80%",
                }}
              >
                {t("homeDescription1", { ns: "homePage" })}
              </Text>
              <Text
                h2
                color="#AD1917"
                css={{
                  my: "15px",
                  fontWeight: "bold",
                  textGradient: "50deg, #AD1917, black 80%",
                }}
              >
                {t("homeDescription2", { ns: "homePage" })}
              </Text>
              <Text
                h2
                color="#AD1917"
                css={{
                  my: "15px",
                  fontWeight: "bold",
                  textGradient: "50deg, #AD1917, grey 80%",
                }}
              >
                {t("homeDescription3", { ns: "homePage" })}
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid justify="center" css={{ margin: "0 auto" }}>
          <Link href={"/rezerwacja"} style={{ margin: "10px 0" }}>
            <Button color={"error"}>Rezerwacja przejazdu</Button>
          </Link>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HeroSection;
