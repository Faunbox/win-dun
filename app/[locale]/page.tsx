import HomeBuses from "@/components/Home/Buses";
import HeroSection from "@/components/Home/HeroSection";
import OffertSection from "@/components/Home/Offert";
import Order from "@/components/Home/Order";
import Why from "@/components/Home/Why";
import dynamic from "next/dynamic";

export default function Home() {
  const Slider = dynamic(() => import("@/components/Home/Slider"));
  const AboutHomeSection = dynamic(() => import("@/components/Home/About"));

  return (
    <>
      <HeroSection />
      <OffertSection />
      <Why />
      {/* <AboutHomeSection /> */}
      <HomeBuses />
      <Slider />
      <Order />
    </>
  );
}
