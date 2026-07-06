# 느낌표수학학원 홈페이지 — 클로드 코드 구현 스펙 (SEO 포함) v1.0

이 문서는 클로드 코드에 전달하는 구현 명세다.
- 카피 원본: `느낌표수학_홈페이지_기획서_v1.5.md` (최종 카피 확정본 — 카피 임의 수정 금지)
- 디자인 원본: `느낌표수학_홈페이지_시안.html` (이 시안의 레이아웃·컬러·타이포를 그대로 재현)

---

## 1. 기술 스택 (SEO를 위한 필수 선택)

| 항목 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | **Next.js 14+ (App Router)** | SSG로 완성된 HTML을 서빙 → 네이버·구글 크롤러가 본문을 그대로 읽음. CSR 전용 React SPA는 금지 (네이버 크롤러는 JS 렌더링이 약함) |
| 렌더링 | **모든 페이지 정적 생성 (SSG)** | `output: 'export'` 또는 Vercel 기본 SSG. 공지사항 추가 시 재빌드 or ISR |
| 배포 | Vercel | 기존 보유 스택 |
| 스타일 | CSS Modules 또는 Tailwind | 시안의 CSS 변수·수치 그대로 이식 |
| 공지사항 | 초기: 로컬 md 파일 → 정적 라우팅 (`/notice/[slug]`) | **공지 1건 = 고유 URL 1개** (색인 대상). 추후 Supabase 전환 가능 |
| 폰트 | Pretendard(본문)·Noto Serif KR(제목) | `next/font` 또는 preload로 로드, FOUT 최소화 |

---

## 2. 페이지·라우팅 구조

```
/                  메인 원페이지 (시안 그대로: 히어로→철학→목표밴드→프로그램→입학→오시는길)
/notice            공지사항 목록
/notice/[slug]     공지 상세 (개별 색인 URL)
/sitemap.xml       자동 생성
/robots.txt        자동 생성
```

메인 내 앵커: `#philosophy` `#program` `#admission` `#contact`

---

## 3. SEO 명세 (핵심)

### 3-1. 타겟 키워드

| 우선순위 | 키워드 | 배치 |
|---|---|---|
| 1 | 주엽동 수학학원 | title, h1 인근, description, 본문 |
| 1 | 일산 수학학원 / 일산서구 수학학원 | description, 본문, footer |
| 2 | 주엽동 초등수학 / 주엽동 중등수학 | 프로그램 섹션 본문 |
| 2 | 한수중·오마중·발산중·대화중·장성중·신일중 + "수학 내신" | 내신 섹션 (학교명은 이미 본문에 있음 — 텍스트로 유지, 이미지 금지) |
| 3 | 풀이설계력, 무학년제 수학학원, 고등수학 선행 | 프로그램·철학 섹션 (브랜드 키워드) |

원칙: 키워드를 위해 카피를 훼손하지 않는다. v1.5 카피는 그대로 두고, 키워드는 메타태그·구조화데이터·이미지 alt·footer에서 보강한다.

### 3-2. 메타태그 (메인)

```html
<title>느낌표수학학원 | 주엽동 초·중등 수학전문 · 일산서구</title>
<meta name="description" content="주엽동 수학학원 느낌표수학. 중학교 졸업 전 고등 수학 전 과정을 상위권 수준으로 완성하고 진학합니다. 무학년제 · 풀이설계력 훈련 · 내신 4주 집중관리 (한수중·오마중·발산중·대화중·장성중·신일중) ☎ 031-912-1538">
```
- title 60자 이내, description 150자 내외
- OG 태그: og:title, og:description, og:image(1200×630 브랜드 이미지 1장 제작), og:type=website, og:locale=ko_KR
- canonical 태그 필수 (도메인 확정 후)
- 공지 상세는 페이지별 고유 title/description 생성

### 3-3. 구조화 데이터 (JSON-LD) — 메인에 삽입

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/EducationalOrganization",
  "name": "느낌표수학학원",
  "description": "주엽동 초·중등 수학전문 학원. 무학년제, 풀이설계력 훈련, 내신 4주 집중관리",
  "telephone": "+82-31-912-1538",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "주엽로 134 시대프라자 9층",
    "addressLocality": "고양시 일산서구",
    "addressRegion": "경기도",
    "addressCountry": "KR"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "13:00",
    "closes": "22:00"
  }
}
```
(geo 좌표는 개발 시 실측값 추가)

### 3-4. 시맨틱 마크업 규칙

- `<h1>`은 페이지당 정확히 1개 — 메인은 슬로건 "풀이를 설계하는 아이로 키웁니다"
- 섹션 제목 `<h2>`, 블록·파트 제목 `<h3>`/`<h4>` — 계층 건너뛰기 금지
- `<header>` `<main>` `<section>` `<nav>` `<footer>` 시맨틱 태그 사용
- 모든 본문 텍스트는 실제 텍스트로 (이미지 속 글자 금지 — 크롤러가 못 읽음)
- 전화번호는 `<a href="tel:0319121538">`
- 이미지 사용 시 alt 필수, 지역·학원 맥락 포함 (예: "주엽동 느낌표수학학원 수업")

### 3-5. sitemap / robots

- `sitemap.xml`: 메인 + 공지 전 URL 자동 포함 (Next.js sitemap 기능)
- `robots.txt`: 전체 허용 + sitemap 위치 명시

### 3-6. 성능 (Core Web Vitals — 검색 순위 요인)

- Lighthouse 모바일 기준: Performance 90+, SEO 100 목표
- 폰트: subset + `font-display: swap` (Pretendard dynamic-subset 사용)
- 이미지: next/image, WebP, 명시적 width/height (CLS 방지)
- 히어로는 텍스트 중심 유지 (시안 그대로) → LCP 유리
- JS 최소화: 인터랙션은 햄버거 메뉴·스크롤 리빌뿐이므로 클라이언트 컴포넌트 최소 사용

### 3-7. 등록·연동 (배포 후 체크리스트 — 코드 외 작업)

1. **네이버 서치어드바이저** 등록 + 사이트맵 제출 (한국 검색의 중심 — 최우선)
2. 구글 서치콘솔 등록 + 사이트맵 제출
3. **네이버 플레이스(스마트플레이스)에 홈페이지 URL 등록** — "주엽동 수학학원" 검색 시 플레이스가 최상단이므로 실질 효과 가장 큼
4. 네이버 블로그(기존 운영) 프로필·포스트에 홈페이지 링크 연결 — 유입 + 신뢰 신호
5. 유튜브(MathBrainBoost) 채널 정보에 링크 추가

※ 네이버는 일반 웹사이트 색인이 보수적이다. 서치어드바이저 등록 + 플레이스 연동 + 블로그 역링크 세 가지가 실제 검색 노출의 대부분을 만든다. 코드 SEO는 구글과 네이버 웹문서 탭을 위한 기반 작업.

---

## 4. 디자인 이식 명세

시안(`느낌표수학_홈페이지_시안.html`)의 다음 요소를 그대로 재현:

- CSS 변수: `--navy:#2C3E50` `--blue:#3498DB` `--body:#34495E` `--mist:#F5F8FA` `--card:#EBF5FB` `--line:#DFE7EC`
- 타이포: 제목 Noto Serif KR(700/900), 본문 Pretendard, 본문 17px/행간 1.8, `word-break: keep-all`
- 고정 헤더: 로고(느낌표수학!) + 햄버거 메뉴 + 전화번호 상시 노출
- 시그니처: 느낌표(!) 워터마크(히어로·목표밴드), eyebrow 앞 ! 마크
- 목표 선언 밴드: 네이비 전면 배경, 페이지 최대 강조
- 3파트 카드: 파란 2px 테두리 + #EBF5FB 배경 (학습지 개념카드 스타일)
- 과정 로드맵: 세로 타임라인 (초등→중등→고등)
- 전화 유도 밴드 2곳 + 최종 전화 블록 (tel: 링크)
- 콘텐츠 폭 최대 680px, 모바일 우선
- 스크롤 리빌: IntersectionObserver, `prefers-reduced-motion` 존중

## 5. 콘텐츠 규칙 (클로드 코드에 대한 지시)

- 카피는 v1.5 기획서에서 **한 글자도 바꾸지 말고** 이식한다 (아이→학생 통일, 슬로건만 '아이' 유지 상태가 최종본)
- "오답제로/OdapZero" 명칭은 코드·주석·메타태그 어디에도 쓰지 않는다 → "자체 오답프로그램"
- 퇴원·결석·보강 규정 관련 내용은 어떤 페이지에도 넣지 않는다
- 삼색개념학습·그물망학습·타이머학습·문제공간인식·셀프톡 등 비공개 용어 미노출
- 상담 버튼·예약폼·카톡 링크 없음 — 전환 수단은 전화(tel:)뿐

## 6. 남은 입력값 (개발 중 확보)

- [ ] 도메인 (canonical·sitemap·OG에 필요 — 미정 시 Vercel 기본 도메인으로 우선 세팅)
- [ ] 사업자등록번호, 학원설립운영등록번호 (footer)
- [ ] 로고 파일 (없으면 시안의 텍스트 로고 유지)
- [ ] 네이버 지도 좌표·임베드 (오시는 길)
- [ ] OG 이미지 1장 (1200×630 — 슬로건+로고 조합으로 제작 가능)

## 7. 완료 기준 (Definition of Done)

1. Lighthouse 모바일: SEO 100 / Performance 90+ / Accessibility 90+
2. 소스 보기(view-source)에서 모든 본문 텍스트가 HTML에 포함되어 있음 (SSG 검증)
3. 모든 전화번호가 tel: 링크로 동작
4. sitemap.xml·robots.txt 접근 가능
5. JSON-LD가 구글 리치 결과 테스트 통과
6. 시안과 시각적 일치 (모바일 390px, 데스크톱 1280px 기준)
