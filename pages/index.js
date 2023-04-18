import { Container, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import HomeServices from "../components/home/HomeServices";
import HomeWhy from "../components/home/HomeAbout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation("website");

  return (
    <>
      <Head>
        <title>{t("website")}</title>
      </Head>

      <Container
        css={{
          minWidth: "100vw",
        }}
      >
        <HeroSection />
        <Spacer y={5} />
        <HomeServices />
        <Spacer y={5} />
        <HomeWhy />
      </Container>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["website","reservationForm","services"])),
    },
  };
}
