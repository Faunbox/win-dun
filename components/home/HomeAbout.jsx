import { Container, Grid, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";

const HomeAbout = () => {
  const { t } = useTranslation("homePage");
  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      css={{
        minWidth: "100vw",
      }}
    >
      <Text h2 className="title">
        {t("nameAbout")}
      </Text>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6} justify="center" alignItems="center">
          <Text size={"$xl"}>{t("aboutDescription")}</Text>
        </Grid>
        <Grid xs={0} sm={6}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1kTuo__lzH_8vQC9LyxqivG9D-QgCumw&ehbc=2E312F"
            width="640"
            height="480"
            loading="lazy"
            style={{ maxWidth: "640px", width: "100%" }}
          ></iframe>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HomeAbout;
