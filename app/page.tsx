import Hero from "@/components/hero";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { StatsSection } from "@/components/stats-section";
import { BlogSection } from "@/components/blog-section";
import { ProcessSection } from "@/components/process-section";
import { CoveredClaims } from "@/components/covered-claims";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CtaSection />
      <StatsSection />
      <ProcessSection />
      <CoveredClaims />
      <BlogSection />
      <FaqSection />
    </div>
  );
}
