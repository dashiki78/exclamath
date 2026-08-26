// ============================================================================
// 시간표·잔여석 단일 데이터 파일
//
// 시간표 페이지(app/timetable/page.tsx)와 홈 화면 모집 블록
// (components/OpeningBlock.tsx)이 모두 이 파일 하나만 읽습니다.
// 잔여석·상태·시간은 반드시 여기서만 고치세요. 다른 파일에는 숫자가 없습니다.
//
// ── 매주 월요일 할 일 (코드 몰라도 됩니다) ──────────────────────────────
// 1. 아래 seatsAsOf 의 날짜를 오늘 날짜로 바꾼다.
// 2. classes 배열에서 각 반의 seats: 숫자를 실제 잔여석으로 바꾼다.
//    자리가 다 차면 seats 를 0으로 하고 status 를 "정원마감" 으로 바꾼다.
// 3. 저장하고 배포하면 시간표 페이지와 홈 화면이 함께 바뀐다.
//
// ── 반 운영 전제 ────────────────────────────────────────────────────────
// 반은 과정이 끝나도 없어지지 않고 같은 시간에 다음 과정을 이어서 나간다.
// 과정이 바뀌는 날짜는 처음부터 시작하는 자리가 열리는 날 — 가장 강한 모집
// 카드라서 nextNote("○월 ○일에 ○○를 시작합니다")로 잔여석과 함께 노출한다.
// 개강일을 기다릴 필요가 없다 — 언제든 개강 준비반으로 들어와서 반이
// 열리는 날 그대로 넘어간다.
//
// ── 표기 규칙 (원장 지시) ───────────────────────────────────────────────
// · "진행 중"은 반드시 잔여석과 붙여 쓴다. 단독으로 쓰면 늦었다는 뜻으로 읽힘
// · 반의 시작일·현재 진도는 어디에도 쓰지 않는다 (합류 가능 여부는 진단으로 판단)
// · "9월 17일"(개설 확정일)은 사이트에 노출하지 않는다 — 예약자 전화 안내 전용
// · "세 명이 모여야"(조건) 금지 — "세 명이 모이면 그날"(기회)로 쓴다
//
// TODO(매주 월요일): 잔여석(seats) 갱신 — 이 파일의 seats 숫자만 수정
// TODO(2026-09-17): 개설 확정(전화 안내) — 미달 반은 classes에서 내리고 "1월 개강"으로 변경
// TODO(2026-10-02): 홈 화면 신설반 덩어리 제거 또는 1월 회차로 교체
//                   (components/OpeningBlock.tsx / app/page.tsx의 <OpeningBlock />)
// TODO(2026-10-23): 화목토 중2-1이 중2-2 시작 — name을 "중2-2"로, nextNote·joinPitch 제거
// TODO(2026-11-01): 월수금 공통수학1이 공통수학2 시작 — name을 "공통수학2"로, nextNote·joinPitch 제거
// ============================================================================

export type DayGroup = "월수금" | "화목토";

export type ClassStatus =
  | "진행중" // 진행 중 · N석 — 잔여석 필수 표기
  | "10월개강" // 10월 1일 개강 · N석 — 신설반, 세 명이 모이면 그날 엶
  | "정원마감" // 정원 마감 · 대기 접수 — 잔여석 표시하지 않음
  | "상시"; // 상시 접수 · 원비 동일 — 개강 준비반 전용

export interface ClassInfo {
  /** 과정명 (예: "중2-2") */
  name: string;
  /** 요일군 */
  days: DayGroup;
  /** 평일 시간 (예: "17:00~19:00") */
  weekdayTime: string;
  /** 토요일 시간 — 화목토 반만. 평일과 아예 다르다 */
  saturdayTime?: string;
  /** 상태 */
  status: ClassStatus;
  /** 다음 과정 안내 (선택) — 예: "11월 1일에 공통수학2를 시작합니다" */
  nextNote?: string;
  /** 홈 화면 안내 문장 (선택) — "따라잡을 진도가 없다"가 전달되어야 한다 */
  joinPitch?: string;
  /** 잔여석 — 매주 월요일 여기만 갱신 */
  seats: number;
  /** 비고 (선택) */
  note?: string;
}

/** 잔여석 기준일 — 매주 월요일 갱신 */
export const seatsAsOf = "2026년 8월 25일";

/** 신설반 개강일 표기 */
export const openingDate = "10월 1일";

export const classes: ClassInfo[] = [
  // ── 월·수·금 ──────────────────────────────────────────────────────────
  { name: "초6-1", days: "월수금", weekdayTime: "15:00~17:00", status: "10월개강", seats: 5 },
  { name: "개강 준비반", days: "월수금", weekdayTime: "15:00~17:00", status: "상시", seats: 0 },
  { name: "중2-2", days: "월수금", weekdayTime: "17:00~19:00", status: "진행중", seats: 5 },
  { name: "중1-1", days: "월수금", weekdayTime: "17:00~19:00", status: "10월개강", seats: 6 },
  { name: "중3-1", days: "월수금", weekdayTime: "19:00~21:00", status: "10월개강", seats: 6 },
  { name: "공통수학1", days: "월수금", weekdayTime: "19:00~22:00", status: "진행중", seats: 4,
    nextNote: "11월 1일에 공통수학2를 시작합니다",
    joinPitch: "지금 들어오시면 10월 한 달 동안 남은 단원을 함께 정리하고, 11월 1일에 공통수학2를 처음부터 시작합니다." },

  // ── 화·목·토 (토요일은 시간이 아예 다르다) ───────────────────────────
  { name: "중3-1", days: "화목토", weekdayTime: "17:00~19:00", saturdayTime: "10:00~12:00", status: "진행중", seats: 2 },
  { name: "중2-1", days: "화목토", weekdayTime: "17:00~19:00", saturdayTime: "10:00~12:00", status: "진행중", seats: 4,
    nextNote: "10월 23일에 중2-2를 시작합니다",
    joinPitch: "지금 들어오시면 남은 단원을 함께 보고, 10월 23일에 중2-2를 처음부터 시작합니다." },
  { name: "공통수학1", days: "화목토", weekdayTime: "19:00~22:00", saturdayTime: "12:00~15:00", status: "정원마감", seats: 0 },
  { name: "초5-1", days: "화목토", weekdayTime: "15:00~17:00", saturdayTime: "13:00~15:00", status: "10월개강", seats: 6 },
  { name: "중2-1", days: "화목토", weekdayTime: "19:00~21:00", saturdayTime: "15:00~17:00", status: "10월개강", seats: 6, note: "신설" },
  { name: "개강 준비반", days: "화목토", weekdayTime: "15:00~17:00", saturdayTime: "15:00~17:00", status: "상시", seats: 0 },
];

/** 10월 1일 신설 5반 — 홈 화면 둘째 덩어리 */
export const octoberClasses = classes.filter((c) => c.status === "10월개강");

/** 정원 마감 반 — 홈 화면 첫 덩어리 맨 위 (별도 섹션으로 분리하지 않는다) */
export const fullClasses = classes.filter((c) => c.status === "정원마감");

/** 다음 과정이 잡혀 있는 진행 반 — 반드시 열리는 자리. 홈 화면 첫 덩어리 상단 */
export const featuredClasses = classes.filter((c) => c.status === "진행중" && c.joinPitch);

/** 그 외 진행 반 — 홈 화면 첫 덩어리 하단 */
export const openClasses = classes.filter((c) => c.status === "진행중" && !c.joinPitch);

/** 요일군 표기 */
export function daysLabel(c: ClassInfo): string {
  return c.days === "월수금" ? "월·수·금" : "화·목·토";
}

/** 홈 화면 한 줄 표기용 시작 시간 — "월수금 19:00" / "화목토 17:00 (토 10:00)" */
export function startTimeLabel(c: ClassInfo): string {
  const weekday = c.weekdayTime.slice(0, 5);
  return c.saturdayTime ? `${c.days} ${weekday} (토 ${c.saturdayTime.slice(0, 5)})` : `${c.days} ${weekday}`;
}

/** 정원 마감 반 안내 문장 */
export function fullPitch(_c: ClassInfo): string {
  return "이 반은 여섯 자리가 다 찼습니다. 대기를 걸어두시면 자리가 나는 대로 연락드립니다.";
}

/** 상태 라벨 — 네 종류만 쓴다 */
export function statusLabel(c: ClassInfo): string {
  switch (c.status) {
    case "진행중":
      // 잔여석이 반드시 붙는다 — "진행 중" 단독은 늦었다는 뜻으로 읽힘
      return `진행 중 · ${c.seats}석`;
    case "10월개강":
      return `${openingDate} 개강 · ${c.seats}석`;
    case "정원마감":
      return "정원 마감 · 대기 접수"; // 잔여석 표시하지 않는다
    case "상시":
      return "상시 접수 · 원비 동일";
  }
}

/** 상태별 배지 CSS 클래스 (globals.css의 .st-*) */
export function statusClass(c: ClassInfo): string {
  switch (c.status) {
    case "진행중":
      return "st-run";
    case "10월개강":
      return "st-new";
    case "정원마감":
      return "st-full";
    case "상시":
      return "st-anytime";
  }
}
