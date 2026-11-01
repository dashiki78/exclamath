export default function Admission() {
  return (
    <section id="admission">
      <div className="wrap">
        <span className="eyebrow reveal">입학 안내</span>
        <h2 className="sec-title reveal">시작은 전화 한 통이면 됩니다</h2>
        <div className="steps">
          <div className="step reveal">
            <h3>전화로 방문 상담 예약</h3>
            <p>전화로는 방문 상담 일정을 잡습니다. 학생의 학년과 상황을 간단히 알려주시고, 방문하실 시간을 함께 정해 주세요. 자세한 이야기는 만나서 나눕니다.</p>
            <a className="step-tel" href="tel:0319121538">☎ 031-912-1538</a>
          </div>
          <div className="step reveal">
            <h3>방문 상담 · 진단 테스트 <small>약 40분</small></h3>
            <p>상담에서는 학생이 지금까지 배운 내용과 어려워하는 부분, 희망하시는 수업 방식과 가능한 시간을 이야기합니다. 테스트는 점수를 매기는 시험이 아니라, 학생이 어느 과정에서 시작해야 하는지 찾는 과정입니다. 문제를 어떻게 읽고 어떤 방식으로 접근하는지, 생각의 습관까지 함께 봅니다.</p>
          </div>
          <div className="step reveal">
            <h3>결과 상담 및 과정 안내</h3>
            <p>테스트에서 본 학생의 현재 상태를 그대로 말씀드리고, 상담에서 들은 희망 수업과 시간을 함께 고려해 시작할 과정과 수업을 안내드립니다. 적합한 판서식 반이 있으면 그 반에서 바로 시작할 수 있고, 개별맞춤교수를 원하시면 처음부터 개별맞춤교수로 시작할 수 있습니다.</p>
          </div>
        </div>
        <p className="rule-note">수강 관련 세부 규정은 등록 시 안내문으로 함께 드립니다.</p>
      </div>
    </section>
  );
}
