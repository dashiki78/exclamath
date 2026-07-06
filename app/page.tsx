import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import GoalBand from "@/components/GoalBand";
import Program from "@/components/Program";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <RevealInit />
      <Hero />
      <Philosophy />
      <GoalBand />
      <Program />
      <Admission />
      <Contact />
    </main>
  );
}
