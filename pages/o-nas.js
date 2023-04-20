import { Container, Text } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  return (
    <Container
      display="flex"
      css={{ textAlign: "center" }}
      justify="center"
      alignItems="center"
    >
      <Text h2 className="title">
        O naszej firmie
      </Text>
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
