// ============================================================================
// 시간표·반 상태 단일 데이터 파일
//
// 시간표 페이지(app/timetable/page.tsx)가 이 파일 하나만 읽습니다.
// 반·시간·상태는 반드시 여기서만 고치세요. 다른 파일에는 숫자가 없습니다.
//
// ── 2026-11-01 운영 방침 ─────────────────────────────────────────────────
// 판서식 반 수업과 개별맞춤교수는 각각 장점이 있는 독립적인 정규 수업이다. 적합한 판서식
// 반이 있는 신규 학생은 그 반에서 바로 시작할 수 있고, 개별맞춤교수는 처음부터 선택할 수
// 있다 (2026-10-31 "모두 개별맞춤교수로 시작" 방침을 대체). 확인된 새 시간표가 없어 classes 를 비워 두었다 — 반 이름·시간·
// 정원·잔여석·개강일을 임의로 만들지 않는다. 비어 있다는 이유로 판서식 반을 운영하지
// 않는다고 쓰지도 않는다. 반을 다시 넣으면 /timetable 의 표가 자동으로 다시 나타난다.
//
// ── 표기 규칙 (원장 지시, 판서식 시간표를 다시 올릴 때 적용) ────────────
// · 잔여석 숫자는 표시하지 않는다 (2026-10-19). "진행 중" 단독은 늦었다는 뜻으로
//   읽히므로 "진행 중 · 접수 중"으로 붙여 쓴다
// · 반의 시작일·현재 진도는 어디에도 쓰지 않는다 (합류 가능 여부는 진단으로 판단)
// · "9월 17일"(개설 확정일)은 사이트에 노출하지 않는다 — 예약자 전화 안내 전용
// · "세 명이 모이면 개강"·"정원 여섯 명"·"개강 준비반"은 판서식 전용 시기의 안내 — 다시 쓰지 않는다 (2026-10-31)
// ============================================================================

export type DayGroup = "월수금" | "화목토";

export type ClassStatus =
  | "진행중" // 진행 중 · 접수 중 — 잔여석 숫자 표시하지 않음
  | "정원마감" // 정원 마감 · 대기 접수 — 잔여석 표시하지 않음
  | "상시"; // 상시 접수 · 원비 동일 — 현재 미사용

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
  /** 잔여석 — 내부 기록용. 화면에 숫자로 표시하지 않는다 (2026-10-19) */
  seats: number;
  /** 비고 (선택) */
  note?: string;
}

/** 기준일 — 반을 다시 올릴 때 갱신 */
export const seatsAsOf = "2026년 10월 31일";

/**
 * 판서식 반 목록 — 2026-10-31 운영 방식 변경으로 비움.
 * 새 시간표가 확정되면 아래 형식으로 추가한다 (예시, 실제 값 아님):
 *   { name: "중2-2", days: "월수금", weekdayTime: "17:00~19:00", status: "진행중", seats: 0 },
 *   { name: "중3-1", days: "화목토", weekdayTime: "17:00~19:00", saturdayTime: "10:00~12:00", status: "진행중", seats: 0 },
 */
export const classes: ClassInfo[] = [];

/** 정원 마감 반 */
export const fullClasses = classes.filter((c) => c.status === "정원마감");

/** 다음 과정이 잡혀 있는 진행 반 */
export const featuredClasses = classes.filter((c) => c.status === "진행중" && c.joinPitch);

/** 그 외 진행 반 */
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
  return "이 반은 정원이 다 찼습니다. 대기를 걸어두시면 자리가 나는 대로 연락드립니다.";
}

/** 상태 라벨 — 세 종류만 쓴다 */
export function statusLabel(c: ClassInfo): string {
  switch (c.status) {
    case "진행중":
      // 잔여석 숫자는 쓰지 않는다 — "진행 중" 단독은 늦었다는 뜻으로 읽히므로 접수 중을 붙인다
      return "진행 중 · 접수 중";
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
    case "정원마감":
      return "st-full";
    case "상시":
      return "st-anytime";
  }
}
