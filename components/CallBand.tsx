import TelIcon from "./TelIcon";

export default function CallBand() {
  return (
    <div className="callband reveal">
      <p>
        여기까지 읽으셨다면, 자녀가 지금 어디쯤인지 궁금하실 겁니다.<br />
        방문 상담에서 학생이 배운 내용과 어려워하는 부분, 희망하시는 수업을 함께 살펴보겠습니다.
        전화로 방문 상담 일정을 잡아 주세요.
      </p>
      <a className="tel" href="tel:0319121538">
        <TelIcon size={22} />
        031-912-1538
      </a>
      <p className="hours">상담 가능 시간 · 평일 15:00~22:00</p>
    </div>
  );
}
