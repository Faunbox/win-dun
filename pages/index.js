import { Spacer } from "@nextui-org/react";
import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import HomeServices from "../components/home/HomeServices";
import HomeAbout from "../components/home/HomeAbout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeWhy from "../components/home/HomeWhy";

export default function Home() {
  const { t } = useTranslation("website");

  return (
    <>
      <Head>
        <title>{t("website")}</title>
      </Head>

      <HeroSection />
      <HomeServices />
      <Spacer y={2} />
      <HomeWhy />
      <Spacer y={2} />
      <HomeAbout />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "website",
        "reservationForm",
        "homePage",
      ])),
    },
  };
}
