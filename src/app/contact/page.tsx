import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Contact information and message form placeholder.", "/contact");

export default function ContactPage() {
  return <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[0.8fr_1fr]"><div><SectionHeader eyebrow="Contact" title="Let us talk engineering" description="Replace the placeholder details in src/config/site.ts before publishing." /><div className="space-y-3 text-slate-700"><p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {siteConfig.email}</p><p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {siteConfig.location}</p><Link className="flex items-center gap-2 text-blue-700" href={siteConfig.githubUrl}><Github className="h-4 w-4" /> GitHub</Link><Link className="flex items-center gap-2 text-blue-700" href={siteConfig.linkedInUrl}><Linkedin className="h-4 w-4" /> LinkedIn</Link></div></div><form action={"mailto:" + siteConfig.email} method="post" encType="text/plain" className="rounded-lg border border-slate-200 bg-white p-6"><label className="block text-sm font-medium text-slate-700">Name<input name="name" className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3" /></label><label className="mt-4 block text-sm font-medium text-slate-700">Email<input name="email" type="email" className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3" /></label><label className="mt-4 block text-sm font-medium text-slate-700">Message<textarea name="message" rows={6} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" /></label><button type="submit" className="mt-5 rounded-md bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800">Open email draft</button></form></section>;
}