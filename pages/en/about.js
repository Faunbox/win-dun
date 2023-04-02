import { Text } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  return <Text>About</Text>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["website"])),
    },
  };
}

export default About;
