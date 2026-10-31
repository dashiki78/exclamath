import type { Metadata } from "next";
import TelIcon from "@/components/TelIcon";
import { classes, statusLabel, statusClass } from "@/data/timetable";

// 반·시간 데이터는 전부 data/timetable.ts 에 있습니다. 이 파일에는 숫자가 없습니다.
// 2026-10-31 운영 방식 변경: 신입생은 개별맞춤교수로 시작한다. 판서식 전용 시간표는
// data/timetable.ts 의 classes 가 비어 있는 동안 표를 그리지 않고 아래 안내로 대체한다.
// 교습비 섹션(#tuition)은 학원법 제15조③ 표시 의무 — 삭제 금지.

export const metadata: Metadata = {
  title: "수업 안내·교습비 | 느낌표수학학원 주엽동",
  description:
    "개별맞춤교수와 판서식 반 수업 안내, 교습비. 신입생은 개별맞춤교수로 시작합니다. 수업 가능한 시간은 방문 상담에서 안내합니다.",
  alternates: { canonical: "/timetable" },
};

export default function TimetablePage() {
  const mwf = classes.filter((c) => c.days === "월수금");
  const tts = classes.filter((c) => c.days === "화목토");
  const hasTimetable = mwf.length > 0 || tts.length > 0;

  return (
    <main>
      <section className="page-section">
        <div className="wrap">
          <span className="eyebrow">수업 안내</span>
          <h1 className="sec-title">수업 안내</h1>

          {/* 모집 안내 — 전화는 방문 상담 일정을 잡는 창구. 시간·과정 안내는 방문 상담에서 */}
          <p className="diag-note">
            신규 학생은 개별맞춤교수로 수업을 시작합니다. 수업 가능한 요일과 시간은 방문
            상담에서 안내해 드립니다. 판서식 수업은 학습 과정과 수준, 시간이 맞는 학생들로
            구성하여 운영합니다.
          </p>

          <div className="tt-info">
            <h2>개별맞춤교수</h2>
            <p>
              신입생이 등록하면 개별맞춤교수로 수업을 시작합니다. 실제 수업을 통해 학생의
              진도와 개념 이해도, 학습 속도, 문제를 해결하는 과정을 파악합니다. 학생의 학습
              상황에 따라 개별맞춤교수를 계속할 수도 있습니다.
            </p>
          </div>

          <div className="tt-info">
            <h2>판서식 반 수업</h2>
            <p>
              학습 과정과 수준이 비슷하고 수업 시간이 맞는 학생들이 모이면 판서식 반을
              구성합니다. 반으로 옮기는 것은 의무가 아닙니다. 두 수업은 우열이 없는 정규
              수업입니다.
            </p>
          </div>

          {hasTimetable ? (
            <>
              {mwf.length > 0 ? (
                <>
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
                </>
              ) : null}

              {tts.length > 0 ? (
                <>
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
                </>
              ) : null}
            </>
          ) : null}

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
