import CardsSection from "@/components/main_components/home_page_components/CardsSection";
import FeaturedCollection from "@/components/main_components/home_page_components/FeaturedCollection";
import HeroSection from "@/components/main_components/home_page_components/HeroSections";

export default function Home() {
  return (
    <>
       <HeroSection />
       <CardsSection />
       <FeaturedCollection />
    </>
  );
}
