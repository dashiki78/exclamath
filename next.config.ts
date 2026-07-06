import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 전 페이지 SSG (기본값). Vercel 배포 기준 — output: 'export' 미사용 (opengraph-image 코드 생성 활용)
  // 홈 디렉터리의 잔여 lockfile 때문에 워크스페이스 루트 오추론 방지
  turbopack: { root: __dirname },
};

export default nextConfig;
