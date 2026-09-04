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
  title: "느낌표수학학원 | 주엽동 초·중·고 수학전문 · 일산서구",
  description:
    "주엽동 수학학원 느낌표수학. 노력은 방향이 맞아야 실력이 됩니다. 잘하는 아이도, 애쓰는 아이도 지금 맞는 방향인지 직접 듣고 같이 봅니다. 진도로 반 편성, 정원 여섯 명. ☎ 031-912-1538",
  alternates: { canonical: "/" },
  verification: {
    google: "VkxIBJQr0wt39KxpBclc1uHg4BVxtlqO41iWoT27a6M",
    other: { "naver-site-verification": "0fc551efbacdfa5083f9fd25f17ebb444b5a533d" },
  },
  openGraph: {
    title: "느낌표수학학원 | 주엽동 초·중·고 수학전문 · 일산서구",
    description:
      "주엽동 수학학원 느낌표수학. 노력은 방향이 맞아야 실력이 됩니다. 잘하는 아이도, 애쓰는 아이도 지금 맞는 방향인지 직접 듣고 같이 봅니다. 진도로 반 편성, 정원 여섯 명. ☎ 031-912-1538",
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
