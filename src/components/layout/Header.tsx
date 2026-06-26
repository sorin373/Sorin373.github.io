import Link from "next/link";
import { Satellite } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/88 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-950">
          <Satellite className="h-5 w-5 text-blue-700" aria-hidden="true" />
          <span>{siteConfig.name}</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 hover:border-blue-700 hover:text-blue-700">
          Contact
        </Link>
      </nav>
    </header>
  );
}