import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@content/skills";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Skills", "Engineering skills organized by domain.", "/skills");

export default function SkillsPage() {
  return <section className="mx-auto max-w-6xl px-5 py-14"><SectionHeader eyebrow="Capabilities" title="Skills by engineering domain" description="No percentage bars: this page groups tools and methods by the engineering contexts where they are useful." /><div className="grid gap-5 md:grid-cols-2">{skillGroups.map((group) => <article key={group.group} className="rounded-lg border border-slate-200 bg-white p-6"><h2 className="text-xl font-semibold text-slate-950">{group.group}</h2><div className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded border border-slate-200 px-2 py-1 text-sm text-slate-700">{skill}</span>)}</div></article>)}</div></section>;
}