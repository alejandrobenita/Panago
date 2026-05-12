import { ScrollScrubSection } from "@/components/ScrollScrubSection";
import { StrategicPresentation } from "@/components/StrategicPresentation";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main id="top" className="bg-void">
      <ScrollScrubSection />
      <StrategicPresentation />
      <FooterCTA />
    </main>
  );
}
