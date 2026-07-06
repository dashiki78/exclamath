import type { Metadata } from "next";
import Link from "next/link";
import { getAllNotices, formatDate } from "@/lib/notice";

export const metadata: Metadata = {
  title: "공지사항 | 느낌표수학학원",
  description:
    "주엽동 느낌표수학학원 공지사항 — 학사일정, 휴강 안내, 설명회·특강 소식",
  alternates: { canonical: "/notice" },
};

export default function NoticeListPage() {
  const notices = getAllNotices();

  return (
    <main>
      <section className="notice-section">
        <div className="wrap">
          <span className="eyebrow">공지사항</span>
          <h1 className="sec-title">학사일정과 소식을 알려드립니다</h1>
          {notices.length === 0 ? (
            <p className="notice-empty">등록된 공지가 없습니다.</p>
          ) : (
            <ul className="notice-list">
              {notices.map((n) => (
                <li key={n.slug}>
                  <Link href={`/notice/${n.slug}`}>
                    <span className="nt">{n.title}</span>
                    <span className="nd">{formatDate(n.date)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
