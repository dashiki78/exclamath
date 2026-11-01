import Link from "next/link";

// 모집 안내 — 2026-11-01 운영 방침. 판서식 반 수업과 개별맞춤교수는 각각 장점이 있는 독립적인 정규 수업.
// 안내 순서: 희망하는 수업을 듣는다 → 학생이 배운 내용과 어려움을 살핀다 → 적합한 수업과 과정을 안내한다.
// 학부모가 조건을 통과해야 하는 느낌이 들지 않게 "과정·수준·시간이 맞는 학생" 식의 조건을 앞세우지 않고,
// 개별맞춤교수를 "맞는 반이 없는 학생"의 차선책처럼 쓰지 않는다. 반 편성 기준 자체는 숨기지 않는다.
// 새 시간표가 확정되기 전까지 반·시간·정원·잔여석을 여기에 만들지 않는다.
// 전화는 방문 상담 일정을 잡는 창구 — 시간·과정 안내는 방문 상담에서 한다고 쓴다.

export default function OpeningBlock() {
  return (
    <section className="opening" id="opening">
      <div className="wrap">
        <span className="eyebrow reveal">모집 안내</span>

        <h2 className="sec-title reveal">판서식 반 수업과 개별맞춤교수를 운영합니다</h2>
        <p className="part-intro reveal">
          상담에서는 학생이 지금까지 배운 내용과 공부하면서 어려웠던 점을 살펴보고, 희망하시는
          수업 방식과 가능한 시간을 듣습니다.
        </p>
        <ul className="seat-list reveal">
          <li className="seat-join">
            <span className="seat-row">
              <strong>판서식 반 수업을 원하신다면</strong>
            </span>
            <span className="seat-pitch">
              현재 운영 중인 반에서 함께 배울 수 있는 과정과 시간을 안내합니다. 학생에게 적합한
              반이 있으면 바로 수업을 시작할 수 있습니다.
            </span>
          </li>
          <li className="seat-join">
            <span className="seat-row">
              <strong>개별맞춤교수를 원하신다면</strong>
            </span>
            <span className="seat-pitch">
              학생의 진도와 이해 수준에 맞춰 설명과 학습 속도를 조정하며 수업합니다. 판서식
              반으로 옮기지 않고 계속 배울 수 있는 정규 수업입니다.
            </span>
          </li>
        </ul>

        <p className="opening-confirm reveal">
          희망하는 반과 과정이나 시간이 맞지 않을 때는 개별맞춤교수로 시작하는 방법도 함께
          안내합니다. 함께 배우기 적합한 학생들이 모이면 새로운 판서식 반을 구성할 수도
          있습니다.
        </p>
        <p className="opening-confirm reveal">
          어느 수업으로 시작하든 학생이 이해한 내용과 어려워하는 부분을 살피며 지도합니다.
          등록 가능한 판서식 반과 개별맞춤교수의 요일·시간은 방문 상담에서 안내해 드립니다.
        </p>

        <p className="opening-link reveal">
          <Link href="/timetable">수업 안내 · 교습비 보기 →</Link>
        </p>
      </div>
    </section>
  );
}
