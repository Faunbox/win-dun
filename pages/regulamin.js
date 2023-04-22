import { Container, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Terms = () => {
  const { t } = useTranslation("terms");

  return (
    <Container
      display="flex"
      css={{ textAlign: "center" }}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Text h2 className="title">
        Regulamin
      </Text>
      <Container>
        <ol>
          {t("terms", { returnObjects: true }).map((obj, index) => (
            <Text as={"li"} key={index}>
              {obj}
            </Text>
          ))}
          <Text as={"li"}></Text>
        </ol>
      </Container>
    </Container>
  );
};

export default Terms;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, "terms")),
    },
  };
}
