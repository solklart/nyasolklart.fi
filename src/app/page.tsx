import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ValueProposition from "@/components/ValueProposition";
import EnergyPlatform from "@/components/EnergyPlatform";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-40 bg-gray-50"></div>
      <Stats />
      <ValueProposition />
      <EnergyPlatform />
      <Testimonials />
      <VideoSection />
      <CTA />
    </>
  );
}
