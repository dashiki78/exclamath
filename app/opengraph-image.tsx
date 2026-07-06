import { ImageResponse } from "next/og";

// OG 이미지 1200×630 코드 생성 (구현계획 §7-3) — 노랑 배경 + 검정 슬로건
// 추후 디자이너 이미지 확보 시 public/opengraph-image.png 정적 파일로 교체 가능
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "느낌표수학학원 — 풀이를 설계하는 아이로 키웁니다";

const TEXT = "풀이를 설계하는 아이로 키웁니다느낌표수학학원 주엽동 수학전문 · 초·중등 · 무학년제!";

// 구글 폰트에서 노출 텍스트만 서브셋한 TTF를 받아 satori에 전달
async function loadFont(): Promise<ArrayBuffer> {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@900&text=${encodeURIComponent(TEXT)}`,
      // 구형 UA로 요청하면 woff2 대신 satori가 읽을 수 있는 woff/ttf URL을 반환
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:11.0) Gecko/20100101 Firefox/11.0" } }
    )
  ).text();
  const url = css.match(/src:\s*url\((.+?)\)\s*format\('(?:woff|truetype|opentype)'\)/)?.[1];
  if (!url) throw new Error("OG 폰트 URL 파싱 실패");
  return (await fetch(url)).arrayBuffer();
}

export default async function OgImage() {
  const font = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFD400",
          fontFamily: "Noto Serif KR",
          color: "#1A1A1A",
        }}
      >
        {/* 큐브 로고 모티프 — 검정 사각형 + 노랑 느낌표 */}
        <div
          style={{
            width: 110,
            height: 110,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#1A1A1A",
            borderRadius: 20,
            gap: 9,
            marginBottom: 48,
          }}
        >
          <div style={{ width: 20, height: 52, background: "#FFD400", borderRadius: 10 }} />
          <div style={{ width: 20, height: 20, background: "#FFD400", borderRadius: "50%" }} />
        </div>
        <div style={{ fontSize: 76, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.3 }}>
          풀이를 설계하는
        </div>
        <div style={{ fontSize: 76, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.3 }}>
          아이로 키웁니다
        </div>
        <div style={{ fontSize: 30, fontWeight: 900, marginTop: 44, opacity: 0.85 }}>
          느낌표수학학원 · 주엽동 수학전문 · 초·중등 · 무학년제
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Serif KR", data: font, weight: 900, style: "normal" }],
    }
  );
}
