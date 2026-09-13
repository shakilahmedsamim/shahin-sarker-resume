import Link from "next/link";
import { navLinks, profile } from "@/data/resume";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-accent-500 text-sm font-bold text-white">
            শ
          </span>
          <span className="text-lg font-semibold text-brand-800">
            {profile.name === "[আপনার পূর্ণ নাম]" ? "শাহীন সরকার" : profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeUrl}
          className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
        >
          CV ডাউনলোড
        </a>
      </div>
    </header>
  );
}
