export default function GoalBand() {
  return (
    <div className="goal">
      <span className="bang-mark" aria-hidden="true">!</span>
      <div className="wrap">
        <p className="lead reveal">그래서 느낌표수학의 목표는 분명합니다.</p>
        <h2 className="reveal">
          중학교를 졸업하기 전에,<br />고등 수학 전 과정을<br />
          <span className="hl">상위권 수준으로 완성</span>하고<br />진학합니다.
        </h2>
        <div className="rule reveal"></div>
        <p className="after reveal">고등학교에 가서 처음 배우면서 시험까지 준비하기에는 3년이 짧습니다. 미리 완성해 두면, 고등학교 3년을 실전을 준비하는 데 쓸 수 있습니다.</p>
      </div>
    </div>
  );
}
