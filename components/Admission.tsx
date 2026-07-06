export default function Admission() {
  return (
    <section id="admission">
      <div className="wrap">
        <span className="eyebrow reveal">입학 안내</span>
        <h2 className="sec-title reveal">시작은 전화 한 통이면 됩니다</h2>
        <div className="steps">
          <div className="step reveal">
            <h3>전화 상담</h3>
            <p>학생의 학년, 현재 공부 상황, 걱정되는 부분을 편하게 들려주세요. 이 통화에서 등록을 권하지 않습니다. 먼저 학생에게 맞는지부터 함께 봅니다.</p>
            <a className="step-tel" href="tel:0319121538">☎ 031-912-1538</a>
          </div>
          <div className="step reveal">
            <h3>진단 테스트 <small>약 40분</small></h3>
            <p>점수를 매기는 시험이 아니라, 학생이 어느 과정에서 시작해야 하는지 찾는 과정입니다. 문제를 어떻게 읽고 어떤 방식으로 접근하는지, 생각의 습관까지 함께 봅니다.</p>
          </div>
          <div className="step reveal">
            <h3>결과 상담 및 과정 안내</h3>
            <p>테스트에서 본 학생의 현재 상태를 그대로 말씀드리고, 시작할 과정과 시점을 안내드립니다. 저희 학원이 맞지 않다고 판단되면 그것도 솔직히 말씀드립니다.</p>
          </div>
        </div>
        <p className="rule-note">수강 관련 세부 규정은 등록 시 안내문으로 함께 드립니다.</p>
      </div>
    </section>
  );
}
