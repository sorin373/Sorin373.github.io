export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700">{children}</span>;
}