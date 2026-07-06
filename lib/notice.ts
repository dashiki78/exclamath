import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const NOTICE_DIR = path.join(process.cwd(), "content", "notice");

// gray-matter는 `date: 2026-07-06`을 Date 객체로 파싱한다 → YYYY-MM-DD 문자열로 정규화
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

export interface NoticeMeta {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
}

export function getAllNotices(): NoticeMeta[] {
  if (!fs.existsSync(NOTICE_DIR)) return [];
  return fs
    .readdirSync(NOTICE_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(NOTICE_DIR, f), "utf8"));
      return {
        slug,
        title: String(data.title ?? slug),
        date: normalizeDate(data.date),
        description: String(data.description ?? ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNotice(slug: string): (NoticeMeta & { html: string }) | null {
  const file = path.join(NOTICE_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: String(data.title ?? slug),
    date: normalizeDate(data.date),
    description: String(data.description ?? ""),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function formatDate(date: string): string {
  return date.replaceAll("-", ".");
}
