import Link from "next/link";
import {
  featuredClasses,
  fullClasses,
  fullPitch,
  openClasses,
  startTimeLabel,
  statusLabel,
} from "@/data/timetable";

// 자리·잔여석 데이터는 전부 data/timetable.ts 에서 온다. 여기에 숫자를 쓰지 않는다.
// 정원 마감 → 다음 과정이 잡힌 진행 반 → 그 외 진행 반 순서. 순서 바꾸지 말 것.
// "9월 17일"은 홈·시간표에 쓰지 않는다 — 예약자에게 전화로 알리는 정보.
// 신설반 카드 덩어리는 2026-10-19 삭제 (원장 지시).

export default function OpeningBlock() {
  return (
    <section className="opening" id="opening">
      <div className="wrap">
        <span className="eyebrow reveal">모집 안내</span>

        <h2 className="sec-title reveal">지금 들어갈 수 있는 자리</h2>
        <ul className="seat-list reveal">
          {/* 정원 마감 반도 이 목록 맨 위에 함께 — 별도 섹션으로 분리하지 않는다
              (만석 반이 하나뿐이라 따로 떼면 빈약해 보임). 회색으로 죽이지 않는다 */}
          {fullClasses.map((c, i) => (
            <li key={`x${i}`} className="seat-full">
              <span className="seat-row">
                <strong>{c.name}</strong>
                <span className="seat-time">{startTimeLabel(c)}</span>
                <span className="seat-count seat-count-full">{statusLabel(c)}</span>
              </span>
              <span className="seat-pitch">{fullPitch(c)}</span>
            </li>
          ))}
          {featuredClasses.map((c, i) => (
            <li key={`f${i}`} className="seat-join">
              <span className="seat-row">
                <strong>{c.name}</strong>
                <span className="seat-time">{startTimeLabel(c)}</span>
                <span className="seat-count">{statusLabel(c)}</span>
              </span>
              <span className="seat-pitch">{c.joinPitch}</span>
            </li>
          ))}
          {openClasses.map((c, i) => (
            <li key={`o${i}`}>
              <strong>{c.name}</strong>
              <span className="seat-time">{startTimeLabel(c)}</span>
              <span className="seat-count">{statusLabel(c)}</span>
            </li>
          ))}
        </ul>

        <p className="opening-confirm reveal">
          지금 오시면 개강 준비반에서 시작 지점을 맞추고, 반이 열리는 날 그대로
          넘어갑니다. 같은 진도 학생이 세 명 모이면 그날 반을 엽니다.
        </p>

        <p className="opening-link reveal">
          <Link href="/timetable">전체 시간표 보기 →</Link>
        </p>
      </div>
    </section>
  );
}
