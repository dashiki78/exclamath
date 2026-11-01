import Link from "next/link";

// 모집 안내 — 2026-11-01 운영 방침. 판서식 반 수업과 개별맞춤교수는 각각 장점이 있는 독립적인 정규 수업.
// 기존 판서식 반과 과정·수준·시간이 맞는 신규 학생은 그 반에서 바로 시작할 수 있고, 맞는 반이 없거나
// 개별 진도·설명이 필요한 학생, 개별맞춤교수를 희망하는 학생은 개별맞춤교수로 시작한다.
// 개별맞춤교수를 모든 신입생이 거치는 입학 단계·준비반처럼 쓰지 않는다.
// 새 시간표가 확정되기 전까지 반·시간·정원·잔여석을 여기에 만들지 않는다.
// 전화는 방문 상담 일정을 잡는 창구 — 시간·과정 안내는 방문 상담에서 한다고 쓴다.

export default function OpeningBlock() {
  return (
    <section className="opening" id="opening">
      <div className="wrap">
        <span className="eyebrow reveal">모집 안내</span>

        <h2 className="sec-title reveal">판서식 반 수업과 개별맞춤교수를 운영합니다</h2>
        <ul className="seat-list reveal">
          <li className="seat-join">
            <span className="seat-row">
              <strong>판서식 반 수업</strong>
            </span>
            <span className="seat-pitch">
              상담에서 희망하는 수업 방식과 가능한 시간을 듣고, 학생의 학습 과정과 이해 수준을
              확인해 수업을 안내합니다. 기존 판서식 반과 과정·수준·시간이 맞는 학생은 그 반에서
              바로 수업을 시작할 수 있습니다.
            </span>
          </li>
          <li className="seat-join">
            <span className="seat-row">
              <strong>개별맞춤교수</strong>
            </span>
            <span className="seat-pitch">
              맞는 반이 없거나 개별적인 진도와 설명이 필요한 학생, 개별맞춤교수를 희망하는
              학생에게는 개별맞춤교수를 안내합니다. 개별맞춤교수를 계속할 수도 있고, 이후 학습
              과정과 수준, 시간이 맞는 학생들이 모이면 새로운 판서식 반을 구성할 수도 있습니다.
            </span>
          </li>
        </ul>

        <p className="opening-confirm reveal">
          어느 수업으로 시작하든 실제 학습 과정을 살피며 학생에게 필요한 지도를 이어갑니다.
          등록 가능한 판서식 반과 개별맞춤교수의 요일·시간은 방문 상담에서 안내해 드립니다.
        </p>

        <p className="opening-link reveal">
          <Link href="/timetable">수업 안내 · 교습비 보기 →</Link>
        </p>
      </div>
    </section>
  );
}
