import {
  Container,
  Spacer,
} from "@nextui-org/react";
import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import HomeServices from "../components/home/HomeServices";
import HomeWhy from "../components/home/HomeAbout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wit-Dun przewóz osób</title>
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
