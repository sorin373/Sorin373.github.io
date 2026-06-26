export function EngineeringNote({ children }: { children: React.ReactNode }) {
  return <aside className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-950"><strong>Engineering note</strong><div className="mt-2">{children}</div></aside>;
}

export function ResultHighlight({ children }: { children: React.ReactNode }) {
  return <aside className="my-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"><strong>Result highlight</strong><div className="mt-2">{children}</div></aside>;
}

export function Warning({ children }: { children: React.ReactNode }) {
  return <aside className="my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-950"><strong>Assumption or caution</strong><div className="mt-2">{children}</div></aside>;
}

export function EquationBlock({ equation }: { equation: string }) {
  return <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 font-mono text-sm text-slate-950">{equation}</div>;
}