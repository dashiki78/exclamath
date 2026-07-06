"use client";

import { useState } from "react";
import Link from "next/link";
import TelIcon from "./TelIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <div className="hd">
        <a className="logo" href="/#top" onClick={close} aria-label="느낌표수학학원 홈">
          느낌표수학<span className="bang">!</span>
        </a>
        <div className="hd-right">
          <a className="hd-tel" href="tel:0319121538">
            <TelIcon size={14} />
            031-912-1538
          </a>
          <button
            className="menu-btn"
            aria-label="메뉴"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <nav className={open ? "open" : ""}>
        <a href="/#philosophy" onClick={close}>학습 철학</a>
        <a href="/#program" onClick={close}>학습 프로그램</a>
        <Link href="/timetable" onClick={close}>시간표</Link>
        <a href="/#admission" onClick={close}>입학 안내</a>
        <a href="/#contact" onClick={close}>오시는 길</a>
        <Link href="/notice" onClick={close}>공지사항</Link>
        <a
          href="https://blog.naver.com/exclamathma"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          학원 블로그 ↗
        </a>
      </nav>
    </header>
  );
}
