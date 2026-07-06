import CallBand from "./CallBand";

export default function Program() {
  return (
    <section className="program" id="program">
      <div className="wrap">
        <span className="eyebrow reveal">학습 프로그램</span>
        <h2 className="sec-title reveal">하나의 수업, 세 개의 파트</h2>

        <p className="part-intro reveal">느낌표수학의 수업은 세 파트로 구성됩니다. 앞의 두 파트가 추론의 도구를 만들고, 마지막 파트에서 그 도구로 발견하는 연습을 합니다.</p>

        <div className="part-card reveal">
          <h3><span className="pn">1</span>개념학습</h3>
          <p>개념을 다섯 갈래(약속·숙달·발견·변환·통합)로 나누어 각 성격에 맞는 방법으로 배웁니다. 배운 개념은 다섯 갈래 그대로 개념확인테스트로 점검합니다.</p>
        </div>
        <div className="part-card reveal">
          <h3><span className="pn">2</span>유형학습</h3>
          <p>유형을 외우는 것이 아니라, 문제와 개념이 어떻게 연결되는지를 배웁니다. 같은 개념이 다른 모습으로 나와도 알아볼 수 있게 하는 훈련입니다. 틀린 문제는 자체 오답프로그램으로 해결될 때까지 다시 확인합니다.</p>
        </div>
        <div className="part-card reveal">
          <h3><span className="pn">3</span>심화학습<span className="tag">풀이설계력 훈련</span></h3>
          <p>처음 보는 문제 앞에서 조건을 살피고, 전략을 고르고, 풀이를 만들어 가는 힘. 저희는 이것을 &lsquo;풀이설계력&rsquo;이라 부르고, 별도의 훈련 과정으로 가르칩니다. 발견하는 과정은 해설로 전달되지 않기 때문에, 학생이 스스로 발견할 때까지 옆에서 이끌어 주는 수업을 합니다.</p>
        </div>

        <div className="sub-block reveal">
          <h3>학년이 아니라, 학생에 맞춥니다 — 무학년제</h3>
          <p>졸업 전에 고등 과정을 완성하려면 학년표를 따라가서는 어렵습니다. 그래서 느낌표수학의 과정은 초등부터 고등까지 하나로 이어져 있고, 학년으로 나누지 않습니다.</p>
          <p>같은 중2라도 어떤 학생은 중등 개념을 다시 다져야 하고, 어떤 학생은 고등 과정을 시작할 준비가 되어 있습니다. 진단을 통해 학생이 지금 서 있는 자리를 확인하고, 거기서 시작해 자기 속도로 올라갑니다.</p>
        </div>

        <div className="sub-block reveal">
          <h3>과정 로드맵 — 초등에서 고등까지</h3>
          <div className="road">
            <div className="stage">
              <h4>초등 과정 <small>초5~6 권장</small></h4>
              <p>생각의 습관을 만드는 단계입니다. 문제를 읽고 계획을 세우는 &lsquo;풀이설계력 9전략&rsquo;을 활동지로 하나씩 익히면서, 낯선 문제를 겁내지 않는 태도를 만듭니다.</p>
            </div>
            <div className="stage">
              <h4>중등 과정</h4>
              <p>내신을 관리하면서 고등 과정에 올라설 토대를 만드는 단계입니다. 중학교 내신은 개념·유형 학습으로 충분히 대비가 됩니다. 다만 저희는 거기서 멈추지 않고 모든 과정에 심화학습을 넣습니다. 중등 과정에서 익힌 추론의 패턴이 고등 과정에서 그대로 쓰이기 때문입니다. 반대로 유형 암기만으로 성적을 내는 습관이 한번 자리 잡으면, 고등학교에 가서 고치기가 어렵습니다.</p>
            </div>
            <div className="stage final">
              <h4>고등 과정 <small>마지막 단계</small></h4>
              <p>중학생이 재학 중에 고등 수학 전 과정을 배우고, 비정형·심화 문제까지 상위권 수준으로 완성하는 것을 목표로 합니다.</p>
            </div>
          </div>
          <p className="growth-note">학생이 지금 어느 단계에 있고 무엇이 늘었는지, 단계별로 성장을 확인해 알려드립니다.</p>
        </div>

        <div className="sub-block reveal">
          <h3>내신은 4주 집중관리로 잡습니다</h3>
          <p>평소에는 학생의 과정을 따라 실력을 쌓고, 시험 4주 전부터는 수업 전체가 내신 대비로 바뀝니다.</p>
          <p>이 기간에는 학생이 다니는 학교에 맞춰 준비합니다. 그 학교의 기출문제를 분석해 출제 경향을 익히고, 시험 범위와 학교 수업 내용, 교과서를 집중적으로 봅니다. 같은 단원이라도 학교마다 묻는 방식이 다르기 때문입니다.</p>
          <div className="schools">
            <span>한수중</span><span>오마중</span><span>발산중</span><span>대화중</span><span>장성중</span><span>신일중</span>
          </div>
        </div>

        <CallBand />
      </div>
    </section>
  );
}
