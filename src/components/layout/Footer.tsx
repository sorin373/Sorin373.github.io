import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{siteConfig.title}. Static portfolio built around maintainable engineering case studies.</p>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          <Link aria-label="Email" href={`mailto:${siteConfig.email}`} className="rounded-md border border-slate-700 p-2 hover:border-blue-400"><Mail className="h-4 w-4" /></Link>
          <Link aria-label="GitHub" href={siteConfig.githubUrl} className="rounded-md border border-slate-700 p-2 hover:border-blue-400"><Github className="h-4 w-4" /></Link>
          <Link aria-label="LinkedIn" href={siteConfig.linkedInUrl} className="rounded-md border border-slate-700 p-2 hover:border-blue-400"><Linkedin className="h-4 w-4" /></Link>
        </div>
      </div>
    </footer>
  );
}