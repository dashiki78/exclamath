import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotices, getNotice, formatDate } from "@/lib/notice";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllNotices().map((n) => ({ slug: n.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const notice = getNotice(slug);
  if (!notice) return {};
  return {
    title: `${notice.title} | 느낌표수학학원`,
    description: notice.description,
    alternates: { canonical: `/notice/${slug}` },
  };
}

export default async function NoticePage({ params }: Props) {
  const { slug } = await params;
  const notice = getNotice(slug);
  if (!notice) notFound();

  return (
    <main>
      <section className="notice-section">
        <div className="wrap">
          <span className="eyebrow">공지사항</span>
          <h1 className="notice-title">{notice.title}</h1>
          <p className="notice-date">{formatDate(notice.date)}</p>
          <div
            className="notice-body"
            dangerouslySetInnerHTML={{ __html: notice.html }}
          />
          <Link className="notice-back" href="/notice">
            ← 목록으로
          </Link>
        </div>
      </section>
    </main>
  );
}
