import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";

const HomeServices = () => {
  const { t } = useTranslation("homePage");

  return (
    <Container
      display="flex"
      css={{
        textAlign: "center",
        my: "25px",
      }}
      justify="center"
      alignItems="center"
    >
      <Text h2 className="title">
        {t("nameServices")}
      </Text>
      <Grid.Container gap={1} justify="center" alignItems="center">
        {t("services", { returnObjects: true }).map((obj) => {
          return (
            <Grid xs={12} sm={6} md={4} key={obj.title}>
              <Card variant="bordered">
                <Card.Header>
                  <Container
                    direction="flex"
                    justify="center"
                    alignItems="center"
                  >
                    <Text h4>{obj.title}</Text>
                  </Container>
                </Card.Header>
                <Card.Body>
                  <Image
                    alt="random pic"
                    src="https://picsum.photos/300/400"
                    // src={obj.photo}
                    objectFit="fill"
                  />
                </Card.Body>
                <Card.Footer>
                  <Container
                    direction="flex"
                    justify="center"
                    alignItems="center"
                  >
                    <Text b>{obj.description}</Text>
                  </Container>
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
