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
        my: 2,
        background: "linear-gradient(35deg,#AD1917 320px,#000 0)",
      }}
    >
      <Text h2 className="title">
        {t("nameAbout")}
      </Text>
      <Grid.Container>
        <Grid xs={12} sm={6}>
          {t("aboutDescription")}
        </Grid>
        <Grid xs={12} sm={6}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1kTuo__lzH_8vQC9LyxqivG9D-QgCumw&ehbc=2E312F"
            width="640"
            height="480"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HomeAbout;
