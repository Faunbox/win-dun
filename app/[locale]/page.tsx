import HeroSection from "@/components/Home/HeroSection";
import OffertSection from "@/components/Home/Offert";
import dynamic from "next/dynamic";

export default function Home() {
  const Order = dynamic(() => import("@/components/Home/Order"));
  const Why = dynamic(() => import("@/components/Home/Why"));
  const Maps = dynamic(() => import("@/components/Home/Maps"));

  return (
    <>
      <HeroSection />
      <OffertSection />
      <Why />
      {/* <Slider /> */}
      <Maps />
      <Order />
    </>
  );
}
