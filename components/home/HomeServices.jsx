import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";

const HomeServices = () => {
  const { t } = useTranslation("services");

  return (
    <Container css={{ textAlign: "center" }}>
      <Text h2>{t("name")}</Text>
      <Grid.Container gap={1} justify="center" alignItems="center">
        {t("services", { returnObjects: true }).map((obj) => {
          return (
            <Grid xs={12} sm={6} md={4} key={obj.title}>
              <Card>
                <Card.Header>{obj.title}</Card.Header>
                <Card.Body>
                  <Image
                    alt="random pic"
                    src="https://picsum.photos/300/400"
                    // src={obj.photo}
                    objectFit="fill"
                  />
                </Card.Body>
                <Card.Footer>
                  <Text b>{obj.description}</Text>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
};

export default HomeServices;
