
import ForCompaniesSection from "./ForCompaniesSection";
import HowItWorksSection from "./HowItWorksSection";
import EarlyAccessSection from "./EarlyAccessSection";
import Footer from "./Footer";
import ForUniversitiesSection from "./ForUniversitiesSection";

import ProblemSection from "./ProblemSection";
import Hero from "./Hero";


import SolutionSection from "./SolutionSection";
import ForStudentsSection from "./ForStudentsSection";

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
