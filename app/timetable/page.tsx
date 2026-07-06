import type { Metadata } from "next";
import TelIcon from "@/components/TelIcon";
import timetable from "@/content/timetable.json";

export const metadata: Metadata = {
  title: "시간표 | 느낌표수학학원",
  description:
    "주엽동 느낌표수학학원 수업 시간표 — 과정별 요일·시간 안내. 매월 업데이트됩니다.",
  alternates: { canonical: "/timetable" },
};

export default function TimetablePage() {
  return (
    <main>
      <section className="notice-section">
        <div className="wrap">
          <span className="eyebrow">시간표</span>
          <h1 className="sec-title">{timetable.month} 수업 시간표</h1>
          <table className="timetable">
            <thead>
              <tr>
                {timetable.columns.map((c) => (
                  <th key={c} scope="col">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) =>
                    j === 0 ? (
                      <th key={j} scope="row">{cell}</th>
                    ) : (
                      <td key={j}>{cell}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="timetable-note">{timetable.note}</p>
          <p className="timetable-tel">
            <a href="tel:0319121538">
              <TelIcon size={15} /> 031-912-1538
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
