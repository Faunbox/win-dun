import { Button, Card, Grid, Radio, Text } from "@nextui-org/react";
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
    <Grid.Container
      css={{
        minHeight: "80vh",
        minWidth: "100vw",
        backgroundImage: `url("/images/bg1.jpeg")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "0px auto",
      }}
      gap={2}
      justify="center"
      alignItems="center"
    >
      {/* <Grid xs={0} sm={1} md={2}></Grid> */}
      <Grid xs={12} sm={6} md={6} justify="center">
        {
          <Text
            h1
            css={{
              textGradient: "30deg, black, #AD1917 20%",
            }}
          >
            {t("homeDescription", { ns: "homePage" })}
          </Text>
        }
      </Grid>
      <Grid xs={12} sm={5} md={4}>
        <Card
          css={{
            borderRadius: "10px",
            "@dark": { background: "rgba(50, 55, 50, 0.7)" },
            "@light": { background: "rgba(250, 0, 0, 0.7)" },
          }}
          variant="bordered"
          as="form"
          onSubmit={handleSubmit}
        >
          <Card.Header>
            <Grid.Container alignItems="center" justify="center">
              <Grid>
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
              {/* <Grid>
                <Button light onPress={handleGeoClick} auto>
                  <Text small>
                    {t("localization")} <BsGeoAlt />
                  </Text>
                </Button>
              </Grid> */}
            </Grid.Container>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ height: "auto" }}>
            {emailContent.what ? <PplForm /> : <ParcelForn />}
          </Card.Body>
          <Card.Divider />
          <Card.Footer css={{ justifyContent: "flex-end" }}>
            <Button
              type="submit"
              disabled={!emailContent.activate ? true : false}
            >
              {t("button")}
            </Button>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default HeroSection;
