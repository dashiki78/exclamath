import type { Metadata } from "next";
import TelIcon from "@/components/TelIcon";
import { classes, seatsAsOf, statusLabel, statusClass } from "@/data/timetable";

// 시간표·잔여석 데이터는 전부 data/timetable.ts 에 있습니다. 이 파일에는 숫자가 없습니다.
// TODO(2026-09-17): 개설 확정 — 미달 반은 data/timetable.ts에서 내리고 "1월 개강"으로 변경

export const metadata: Metadata = {
  title: "수업 시간표·교습비 | 느낌표수학학원 주엽동",
  description:
    "2026년 10월 1일 개강 기준 시간표. 11월 1일 공통수학2, 10월 23일 중2-2가 새로 시작합니다. 신설 다섯 개 반 · 정원 여섯 명 · 잔여석 주 1회 갱신. 토요일은 시간대가 다릅니다.",
  alternates: { canonical: "/timetable" },
};

export default function TimetablePage() {
  const mwf = classes.filter((c) => c.days === "월수금");
  const tts = classes.filter((c) => c.days === "화목토");

  return (
    <main>
      <section className="page-section">
        <div className="wrap">
          <span className="eyebrow">시간표</span>
          <h1 className="sec-title">2026년 10월 1일 개강 기준 수업 시간표</h1>
          <p className="seats-asof">잔여석 {seatsAsOf} 기준</p>

          <h2 className="tt-group">월·수·금</h2>
          <table className="timetable">
            <thead>
              <tr>
                <th scope="col">시간</th>
                <th scope="col">과정</th>
                <th scope="col">상태</th>
              </tr>
            </thead>
            <tbody>
              {mwf.map((c, i) => (
                <tr key={i}>
                  <td>{c.weekdayTime}</td>
                  <th scope="row">
                    {c.name}
                    {c.note ? <small className="cls-note"> ({c.note})</small> : null}
                  </th>
                  <td>
                    <span className={`st ${statusClass(c)}`}>{statusLabel(c)}</span>
                    {c.nextNote ? <small className="st-note">{c.nextNote}</small> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="tt-group">화·목·토</h2>
          <p className="sat-notice">
            토요일은 학교 수업이 없어 시간대가 다릅니다. 아래 <strong>토요일 열</strong>을
            확인해 주세요.
          </p>
          <table className="timetable tt-sat">
            <thead>
              <tr>
                <th scope="col">과정</th>
                <th scope="col">화·목</th>
                <th scope="col" className="sat-col">토</th>
                <th scope="col">상태</th>
              </tr>
            </thead>
            <tbody>
              {tts.map((c, i) => (
                <tr key={i}>
                  <th scope="row">
                    {c.name}
                    {c.note ? <small className="cls-note"> ({c.note})</small> : null}
                  </th>
                  <td>{c.weekdayTime}</td>
                  <td className="sat-col">{c.saturdayTime}</td>
                  <td>
                    <span className={`st ${statusClass(c)}`}>{statusLabel(c)}</span>
                    {c.nextNote ? <small className="st-note">{c.nextNote}</small> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 시작일·진도는 표에 쓰지 않는다 — 합류 가능 여부는 진단으로 판단 */}
          <p className="diag-note">
            진단으로 합류 지점을 확인한 뒤 배치해 드립니다. 맞지 않으면 다음 회차로
            안내드립니다.
          </p>

          <div className="tt-info">
            <h2>10월 23일과 11월 1일에 무엇이 열리나</h2>
            <p>
              저희 반은 과정이 끝나도 없어지지 않습니다. 같은 시간에 다음 과정을 이어서
              나갑니다.
            </p>
            <p>
              10월 23일에 화·목·토 17시 반이 중2-1을 마치고 중2-2를 시작합니다. 11월 1일에
              월·수·금 19시 반이 공통수학1을 마치고 공통수학2를 시작합니다. 두 자리 모두
              그날 처음부터 시작하는 과정이라 따라잡을 진도가 없습니다.
            </p>
            <p>지금 들어오시면 그때까지 남은 단원을 함께 보면서 시작 지점을 맞춥니다.</p>
          </div>

          {/* "9월 17일"은 페이지에 쓰지 않는다(예약자 전화 안내 전용).
              "세 명이 모이면 그날 엽니다"로 쓴다 — "모여야 엽니다"는 조건(장벽)으로 읽힘 */}
          <div className="tt-info">
            <h2>개강 준비반이란</h2>
            <p>
              반이 열릴 때 바로 시작할 수 있도록, 그때까지 시작 지점을 맞추는 자리입니다.
              개강일에 어디서 출발할지, 그때까지 무엇을 메울지를 종이 한 장으로 정리해
              드립니다. 원비는 반 수업과 같습니다.
            </p>
            <p>
              들어오시는 날짜는 정해져 있지 않습니다. 언제든 시작하실 수 있고, 반이 열리는
              날 그대로 넘어갑니다.
            </p>
            <p>
              같은 진도 학생이 세 명 모이면 그날 반을 엽니다. 10월 1일보다 빨라지는 경우가
              실제로 있습니다. 다만 반이 열리면 요일이 바뀔 수 있어서, 그때 먼저 말씀드리고
              정합니다.
            </p>
          </div>

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
