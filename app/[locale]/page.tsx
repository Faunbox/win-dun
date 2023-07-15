import AboutHomeSection from "@/components/Home/About";
import HomeContact from "@/components/Home/Contact";
import HeroSection from "@/components/Home/HeroSection";
import OffertSection from "@/components/Home/Offert";
import Order from "@/components/Home/Order";
import Why from "@/components/Home/Why";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffertSection />
      <Why />
      <AboutHomeSection />
      <HomeContact />
      <Order />
    </>
  );
}
