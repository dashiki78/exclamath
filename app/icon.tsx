import { ImageResponse } from "next/og";

// 파비콘 — 노랑·검정 큐브 로고 모티프: 검정 사각형 + 노랑 느낌표 (도형으로만 그려 폰트 불필요)
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          background: "#1A1A1A",
          borderRadius: 12,
          gap: 5,
        }}
      >
        <div
          style={{
            width: 12,
            height: 30,
            background: "#FFD400",
            borderRadius: 6,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            background: "#FFD400",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
