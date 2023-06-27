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
      <Text>{t("description1")}</Text>
      <Text>{t("description2")}</Text>
      <Text>{t("description3")}</Text>
      <Text>{t("description4")}</Text>
      <Text>{t("description5")}</Text>
      <Text>{t("description6")}</Text>
      <Text>{t("description7")}</Text>
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
