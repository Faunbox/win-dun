import AboutHomeSection from "@/components/Home/About";
import HeroSection from "@/components/Home/HeroSection";
import OffertSection from "@/components/Home/Offert";
import Why from "@/components/Home/Why";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffertSection />
      <Why />
      <AboutHomeSection />
    </>
  );
}
