import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
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
