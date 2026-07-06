"use client";

import { useEffect } from "react";

const HREF = "/fonts/pretendard/pretendardvariable-dynamic-subset.css";

/** Pretendard @font-face CSS(원본 300KB)를 렌더 비블로킹으로 적용.
 *  head의 preload로 미리 받아두고, 하이드레이션 시 stylesheet로 전환한다.
 *  본문은 font-display:swap + 시스템 폴백이 있어 전환 전에도 정상 렌더. */
export default function FontLoader() {
  useEffect(() => {
    if (document.querySelector(`link[rel="stylesheet"][href="${HREF}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = HREF;
    document.head.appendChild(link);
  }, []);

  return null;
}
