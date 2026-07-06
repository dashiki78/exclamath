export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <p className="ask reveal">궁금한 점이 남으셨다면,<br />그것부터 편하게 물어봐 주세요.</p>
        <a className="tel reveal" href="tel:0319121538">
          031<span className="hl">·</span>912<span className="hl">·</span>1538
        </a>
        <p className="hours reveal">상담 가능 시간 · 평일 13:00~22:00</p>
        <p className="note reveal">수업 중에는 전화 연결이 어려울 수 있습니다.</p>
        <div className="addr reveal">
          <strong>느낌표수학학원</strong>
          경기 고양시 일산서구 주엽로 134 시대프라자 9층
          <p className="map-note">주엽역 인근 · 건물 주차 가능</p>
        </div>
      </div>
    </section>
  );
}
