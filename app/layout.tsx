import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FontLoader from "@/components/FontLoader";
import "./globals.css";

const serif = Noto_Serif_KR({
  weight: ["600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exclamath.com"),
  title: "느낌표수학학원 | 주엽동 초·중등 수학전문 · 일산서구",
  description:
    "주엽동 수학학원 느낌표수학. 중학교 졸업 전 고등 수학 전 과정을 상위권 수준으로 완성하고 진학합니다. 무학년제 · 풀이설계력 훈련 · 내신 4주 집중관리 (한수중·오마중·발산중·대화중·장성중·신일중) ☎ 031-912-1538",
  alternates: { canonical: "/" },
  openGraph: {
    title: "느낌표수학학원 | 주엽동 초·중등 수학전문 · 일산서구",
    description:
      "주엽동 수학학원 느낌표수학. 중학교 졸업 전 고등 수학 전 과정을 상위권 수준으로 완성하고 진학합니다. 무학년제 · 풀이설계력 훈련 · 내신 4주 집중관리",
    type: "website",
    locale: "ko_KR",
    url: "https://exclamath.com",
    siteName: "느낌표수학학원",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={serif.variable}>
      <head>
        {/* Pretendard dynamic-subset 셀프호스팅 — preload로 미리 받고 FontLoader가 비블로킹 적용 */}
        <link
          rel="preload"
          as="style"
          href="/fonts/pretendard/pretendardvariable-dynamic-subset.css"
        />
        {/* raw HTML로 넣어 React의 stylesheet 호이스팅(noscript 밖 이동) 방지 */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<link rel="stylesheet" href="/fonts/pretendard/pretendardvariable-dynamic-subset.css"><style>.reveal{opacity:1!important;transform:none!important}</style>',
          }}
        />
      </head>
      <body>
        <FontLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
