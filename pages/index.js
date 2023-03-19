import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import HomeServices from "../components/home/HomeServices";
import HomeWhy from "../components/home/HomeWhy";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wit-Dun przewóz osób</title>
      </Head>

      <Container
        css={{
          minHeight: "100vh",
          background: "#879b35",
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
