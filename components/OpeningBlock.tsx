import Link from "next/link";
import {
  octoberClasses,
  featuredClasses,
  fullClasses,
  fullPitch,
  openClasses,
  startTimeLabel,
  statusLabel,
} from "@/data/timetable";

// 자리·잔여석 데이터는 전부 data/timetable.ts 에서 온다. 여기에 숫자를 쓰지 않는다.
// 첫 덩어리(진행 반)가 신설반보다 위 — 학생이 이미 있어 반드시 열리는
// 확실한 자리를 먼저 보여준다. 신설반은 미달이면 접힌다. 순서 바꾸지 말 것.
// "9월 17일"은 홈·시간표에 쓰지 않는다 — 예약자에게 전화로 알리는 정보.
// TODO(2026-10-02): 둘째 덩어리(신설 5반) 제거 또는 1월 회차로 교체

export default function OpeningBlock() {
  return (
    <section className="opening" id="opening">
      <div className="wrap">
        <span className="eyebrow reveal">모집 안내</span>

        <h2 className="sec-title reveal">지금 들어가실 수 있는 자리</h2>
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

        <h2 className="sec-title opening-second reveal">
          10월 1일, 다섯 개 반이 새로 시작합니다
        </h2>
        <div className="opening-cards reveal">
          {octoberClasses.map((c, i) => (
            <div className="opening-card" key={i}>
              <h3>
                {c.name}
                {c.note ? <small className="cls-note">({c.note})</small> : null}
                <span className="seats">{c.seats}석</span>
              </h3>
              <dl>
                <div>
                  <dt>요일</dt>
                  <dd>{c.days === "월수금" ? "월·수·금" : "화·목·토"}</dd>
                </div>
                <div>
                  <dt>평일</dt>
                  <dd>{c.weekdayTime}</dd>
                </div>
                {c.saturdayTime ? (
                  <div>
                    <dt>토요일</dt>
                    <dd>{c.saturdayTime}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          ))}
        </div>
        <p className="opening-confirm reveal">
          10월까지 기다리실 필요는 없습니다. 지금 오시면 개강 준비반에서 시작 지점을
          맞추고, 반이 열리는 날 그대로 넘어갑니다. 같은 진도 학생이 먼저 모이면 10월
          1일보다 빨리 열리기도 합니다.
        </p>

        <p className="opening-link reveal">
          <Link href="/timetable">전체 시간표·잔여석 보기 →</Link>
        </p>
      </div>
    </section>
  );
}
