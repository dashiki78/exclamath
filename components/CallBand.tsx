import TelIcon from "./TelIcon";

export default function CallBand() {
  return (
    <div className="callband reveal">
      <p>
        여기까지 읽으셨다면, 자녀가 지금 어디쯤인지 궁금하실 겁니다.<br />
        학생의 상황을 들려주시면, 지금 필요한 것이 무엇인지 말씀드리겠습니다.
      </p>
      <a className="tel" href="tel:0319121538">
        <TelIcon size={22} />
        031-912-1538
      </a>
      <p className="hours">상담 가능 시간 · 평일 13:00~22:00</p>
    </div>
  );
}
