import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const HomeServices = () => {
  const { t } = useTranslation("services");

  console.log(t("services", { returnObjects: true }));

  return (
    <Container css={{ textAlign: "center" }}>
      <Text h2>{t("name")}</Text>
      <Grid.Container gap={1} justify="center" alignItems="center">
        {t("services", { returnObjects: true }).map((service) => (
          <Grid xs={12} sm={6} md={4} key={service.title}>
            <Card>
              <Card.Header>{service.title}</Card.Header>
              <Card.Body>
                <Image
                  alt="random pic"
                  src="https://picsum.photos/300/400"
                  // src={service.photo}
                  objectFit="fill"
                />
              </Card.Body>
              <Card.Footer>
                <Text b>{service.description}</Text>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default HomeServices;
