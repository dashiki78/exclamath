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
      <section className="page-section">
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

          <div className="tuition" id="tuition">
            <h2 className="sec-title">교습비 안내</h2>
            <table className="timetable">
              <thead>
                <tr>
                  <th scope="col">과정</th>
                  <th scope="col">수업</th>
                  <th scope="col">교습비</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">초등 과정</th>
                  <td>주 3회 · 회당 2시간</td>
                  <td>월 300,000원</td>
                </tr>
                <tr>
                  <th scope="row">중등 과정</th>
                  <td>주 3회 · 회당 2시간</td>
                  <td>월 320,000원</td>
                </tr>
                <tr>
                  <th scope="row">고등 과정</th>
                  <td>주 3회 · 회당 3시간</td>
                  <td>월 500,000원</td>
                </tr>
              </tbody>
            </table>
            <p className="timetable-note">※ 교습비 외 기타경비 없음</p>
          </div>

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
