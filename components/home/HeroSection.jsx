import { Button, Card, Container, Grid, Radio, Text } from "@nextui-org/react";
import ParcelForn from "./form/ParcelForm";
import PplForm from "./form/PplForm";
import { useTranslation } from "next-i18next";
import { useForm } from "../../context/formContext";

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
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage: `url("/images/bg2.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "0 auto",
      }}
      display="flex"
      gap={2}
      justify="center"
      alignItems="center"
    >
      {/* <Grid xs={0} sm={1} md={2}></Grid> */}

      <Card
        css={{
          borderRadius: "10px",
          background: "rgba(50, 55, 50, 0.35)",
          "@md": { py: "15px" },
        }}
        variant="bordered"
        as="form"
        onSubmit={handleSubmit}
      >
        <Grid.Container justify="center" alignItems="center">
          <Grid
            direction="column"
            sm={6}
            justify="center"
            alignItems="center"
            css={{ "@md": { my: "20px" } }}
          >
            <Grid xs={12} css={{ "@xs": { direction: "column" } }}>
              <Radio.Group
                orientation="horizontal"
                value={emailContent.what ? "A" : "B"}
                onChange={() =>
                  setEmailContent((prevState) => ({
                    ...prevState,
                    what: !emailContent.what,
                  }))
                }
                css={{ $$labelColor: "white" }}
              >
                <Text size={"$lg"} css={{ px: "10px" }}>
                  {t("reservation", { ns: "reservationForm" })}
                </Text>
                {t("reservationType", { returnObjects: true }).map((obj) => {
                  return (
                    <Radio value={obj.value} key={obj.text} color="error">
                      {obj.text}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </Grid>
            <Grid>{emailContent.what ? <PplForm /> : <ParcelForn />}</Grid>
            <Grid alignItems="flex-end">
              <Button
                type="submit"
                disabled={!emailContent.activate ? true : false}
                css={{ "@xs": { w: "100%" }, margin: "0 auto" }}
              >
                {t("button")}
              </Button>
            </Grid>
          </Grid>
          <Grid
            direction="column"
            sm={6}
            justify="center"
            alignItems="center"
            css={{ my: "20px" }}
          >
            <Text
              h1
              css={{
                p: "5px",
                textGradient: "30deg, black, #AD1917 20%",
              }}
            >
              {t("homeDescription", { ns: "homePage" })}
            </Text>
          </Grid>
        </Grid.Container>
      </Card>
    </Container>
  );
};

export default HeroSection;
