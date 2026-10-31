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
      {/* 모집 안내 — 개별맞춤교수로 시작하는 운영 방식 (2026-10-31) */}
      <OpeningBlock />
      <Philosophy />
      <GoalBand />
      <Program />
      <Admission />
      <Contact />
    </main>
  );
}
