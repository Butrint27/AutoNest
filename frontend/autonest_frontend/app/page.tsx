import CardsSection from "@/components/main_components/home_page_components/CardsSection";
import DriversReviews from "@/components/main_components/home_page_components/DriversReview";
import FeaturedCollection from "@/components/main_components/home_page_components/FeaturedCollection";
import HeroSection from "@/components/main_components/home_page_components/HeroSections";
import LogoClouds from "@/components/main_components/home_page_components/LogoClouds";
import Stats from "@/components/main_components/home_page_components/Stats";
import Testimonials from "@/components/main_components/home_page_components/Testimonials";

export default function Home() {
  return (
    <>
       <HeroSection />
       <CardsSection />
       <FeaturedCollection />
       <LogoClouds />
       <Testimonials />
       <DriversReviews />
       <Stats />
    </>
  );
}
