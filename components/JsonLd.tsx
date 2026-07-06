// LocalBusiness 구조화 데이터 (구현스펙 §3-3)
// TODO: geo 좌표(GeoCoordinates)는 네이버 스마트플레이스 등록 좌표 확정 후 추가
const data = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/EducationalOrganization",
  name: "느낌표수학학원",
  description:
    "주엽동 초·중등 수학전문 학원. 무학년제, 풀이설계력 훈련, 내신 4주 집중관리",
  url: "https://exclamath.com",
  image: "https://exclamath.com/opengraph-image",
  telephone: "+82-31-912-1538",
  address: {
    "@type": "PostalAddress",
    streetAddress: "주엽로 134 시대프라자 9층",
    addressLocality: "고양시 일산서구",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "13:00",
    closes: "22:00",
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
