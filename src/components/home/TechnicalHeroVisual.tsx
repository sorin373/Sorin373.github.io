export function TechnicalHeroVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-300 bg-slate-950 p-6 text-blue-100 shadow-xl" aria-label="CubeSat wireframe engineering visual">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(120,170,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(120,170,255,.16) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <svg viewBox="0 0 420 320" className="relative h-full w-full" role="img" aria-labelledby="hero-visual-title">
        <title id="hero-visual-title">Simplified CubeSat wireframe with orbit lines and coordinate axes</title>
        <defs><linearGradient id="panel" x1="0" x2="1"><stop stopColor="#dbeafe" stopOpacity="0.9" /><stop offset="1" stopColor="#60a5fa" stopOpacity="0.35" /></linearGradient></defs>
        <ellipse cx="220" cy="160" rx="170" ry="70" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="7 7" />
        <ellipse cx="220" cy="160" rx="125" ry="112" fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 8" transform="rotate(-24 220 160)" />
        <g transform="translate(145 88)"><polygon points="55,0 150,30 95,78 0,47" fill="rgba(96,165,250,.16)" stroke="#bfdbfe" /><polygon points="0,47 95,78 95,170 0,136" fill="rgba(15,23,42,.75)" stroke="#bfdbfe" /><polygon points="95,78 150,30 150,122 95,170" fill="rgba(30,64,175,.35)" stroke="#bfdbfe" /><rect x="33" y="82" width="32" height="26" fill="url(#panel)" stroke="#dbeafe" /><line x1="18" y1="60" x2="18" y2="142" stroke="#60a5fa" strokeWidth="0.8" /><line x1="42" y1="68" x2="42" y2="151" stroke="#60a5fa" strokeWidth="0.8" /><line x1="66" y1="75" x2="66" y2="158" stroke="#60a5fa" strokeWidth="0.8" /><line x1="103" y1="82" x2="146" y2="45" stroke="#60a5fa" strokeWidth="0.8" /><line x1="103" y1="104" x2="146" y2="67" stroke="#60a5fa" strokeWidth="0.8" /><line x1="103" y1="126" x2="146" y2="89" stroke="#60a5fa" strokeWidth="0.8" /></g>
        <line x1="52" y1="268" x2="112" y2="268" stroke="#f8fafc" strokeWidth="1.5" /><line x1="52" y1="268" x2="52" y2="208" stroke="#f8fafc" strokeWidth="1.5" />
        <text x="118" y="272" fill="#bfdbfe" fontSize="12">X</text><text x="46" y="202" fill="#bfdbfe" fontSize="12">Z</text><text x="282" y="72" fill="#bfdbfe" fontSize="12">orbit reference</text><text x="262" y="258" fill="#bfdbfe" fontSize="12">structural frame</text>
      </svg>
    </div>
  );
}