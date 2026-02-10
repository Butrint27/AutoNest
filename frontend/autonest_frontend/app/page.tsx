import CardsSection from "@/components/main_components/home_page_components/CardsSection";
import FeaturedCollection from "@/components/main_components/home_page_components/FeaturedCollection";
import HeroSection from "@/components/main_components/home_page_components/HeroSections";
import LogoClouds from "@/components/main_components/home_page_components/LogoClouds";
import Testimonials from "@/components/main_components/home_page_components/Testimonials";

export default function Home() {
  return (
    <>
       <HeroSection />
       <CardsSection />
       <FeaturedCollection />
       <LogoClouds />
       <Testimonials />
    </>
  );
}
