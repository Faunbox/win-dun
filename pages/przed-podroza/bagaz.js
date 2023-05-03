import { Container, Text } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Luggage = () => {
  const { t } = useTranslation("luggage");

  return (
    <Container>
      <Container
        display="flex"
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Text h2 className="title">
          {t("title")}
        </Text>
        <Text>{t("description")}</Text>
      </Container>
    </Container>
  );
};

export default Luggage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["luggage"])),
    },
  };
}
