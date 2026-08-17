export default function GoalBand() {
  return (
    <div className="goal">
      <span className="bang-mark" aria-hidden="true">!</span>
      <div className="wrap">
        <p className="lead reveal">그래서 느낌표수학은 이렇게 합니다.</p>
        <h2 className="reveal">
          학년이 아니라,<br /><span className="hl">과정</span>으로 갑니다
        </h2>
        <div className="rule reveal"></div>
        <p className="after reveal">저희는 학년으로 반을 나누지 않습니다. 과정으로 나눕니다. 입학 테스트로 시작 지점을 정하고, 한 과정을 개념부터 심화까지 3개월에 끝내면 다음 과정으로 올라갑니다. 지금 이 학원에는 중학생이 고등 과정을 배우는 반이 있습니다.</p>
        <p className="after reveal">특별한 학생을 뽑아서가 아닙니다. 개념을 다섯 갈래로 나눠 익히고, 개념노트를 시일을 두고 세 번 확인하고, 막힌 문제를 15분 붙들게 하는 과정을 빠뜨리지 않은 결과입니다.</p>
        <p className="after reveal">그래서 저희에게 가장 중요한 것은 시작 지점입니다. 반수업은 한 학생을 기다려주지 못합니다. 그 과정을 감당할 수 있는 자리에서 시작해야 하고, 그래서 입학 테스트로 확인한 뒤 맞지 않으면 받지 않습니다.</p>
      </div>
    </div>
  );
}
