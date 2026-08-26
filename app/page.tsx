import Hero from "@/components/Hero";
import OpeningBlock from "@/components/OpeningBlock";
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
      {/* TODO(2026-10-02): 개강 블록 제거 또는 1월 회차로 교체 */}
      <OpeningBlock />
      <Philosophy />
      <GoalBand />
      <Program />
      <Admission />
      <Contact />
    </main>
  );
}
