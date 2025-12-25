

import Hero from "@/components/sections/home/Hero";
import ProblemSection from "@/components/sections/home/ProblemSection";
import SolutionSection from "@/components/sections/home/SolutionSection";
import ForStudentsSection from "@/components/sections/home/ForStudentsSection";
import ForUniversitiesSection from "@/components/sections/home/ForUniversitiesSection";
import ForCompaniesSection from "@/components/sections/home/ForCompaniesSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import EarlyAccessSection from "@/components/sections/home/EarlyAccessSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ForStudentsSection />
      <ForUniversitiesSection />
      <ForCompaniesSection />
      <HowItWorksSection />
      <EarlyAccessSection />
      <Footer />
    </>
  );
}
