import { Container, Text } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <Container
      display="flex"
      css={{ textAlign: "center" }}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Text h2 className="title">
        {t("title")}
      </Text>
      <Text>{t("description")}</Text>
    </Container>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default About;
