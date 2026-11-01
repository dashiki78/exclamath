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
      {/* 모집 안내 — 판서식 반 수업과 개별맞춤교수, 둘 다 바로 시작 가능 (2026-11-01 운영 방침) */}
      <OpeningBlock />
      <Philosophy />
      <GoalBand />
      <Program />
      <Admission />
      <Contact />
    </main>
  );
}
