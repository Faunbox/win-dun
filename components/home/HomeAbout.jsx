import { Container, Grid, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";

const HomeAbout = () => {
  const { t } = useTranslation("homePage");
  return (
    <Container display="flex" alignItems="center" justify="center">
      <Text h2>{t("nameAbout")}</Text>
      <Grid.Container>
        <Grid xs={12} sm={6}>
          {t("aboutDescription")}
        </Grid>
        <Grid xs={12} sm={6}>
          MAPA EUROPY
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HomeAbout;
