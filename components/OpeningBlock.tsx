import Link from "next/link";

// 모집 안내 — 2026-10-31 운영 방식 변경(신입생은 개별맞춤교수로 시작, 조건이 맞으면 판서식 반 구성).
// 새 시간표가 확정되기 전까지 반·시간·정원·잔여석을 여기에 만들지 않는다.
// 전화는 방문 상담 일정을 잡는 창구 — 시간·과정 안내는 방문 상담에서 한다고 쓴다.

export default function OpeningBlock() {
  return (
    <section className="opening" id="opening">
      <div className="wrap">
        <span className="eyebrow reveal">모집 안내</span>

        <h2 className="sec-title reveal">수업은 두 가지로 운영합니다</h2>
        <ul className="seat-list reveal">
          <li className="seat-join">
            <span className="seat-row">
              <strong>개별맞춤교수</strong>
            </span>
            <span className="seat-pitch">
              신입생은 이 수업으로 시작합니다. 실제 수업을 하면서 학생의 진도와 개념 이해도,
              학습 속도, 문제를 해결하는 과정을 파악합니다.
            </span>
          </li>
          <li className="seat-join">
            <span className="seat-row">
              <strong>판서식 반 수업</strong>
            </span>
            <span className="seat-pitch">
              학습 과정과 수준이 비슷하고 수업 시간이 맞는 학생들이 모이면 반을 구성합니다.
              반으로 옮기는 것은 의무가 아니며, 학생의 학습 상황에 따라 개별맞춤교수를
              계속할 수도 있습니다. 두 수업은 우열이 없는 정규 수업입니다.
            </span>
          </li>
        </ul>

        <p className="opening-confirm reveal">
          현재 개별맞춤교수 신입생을 모집하고 있습니다. 수업 가능한 시간과 학생에게 맞는
          학습 과정은 방문 상담에서 안내해 드립니다.
        </p>

        <p className="opening-link reveal">
          <Link href="/timetable">수업 안내 · 교습비 보기 →</Link>
        </p>
      </div>
    </section>
  );
}
