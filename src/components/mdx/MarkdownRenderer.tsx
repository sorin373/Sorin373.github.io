import Image from "next/image";

export function MarkdownRenderer({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);
  return <div className="prose-engineering">{blocks.map((block, index) => renderBlock(block.trim(), index))}</div>;
}

function renderBlock(block: string, index: number) {
  const fence = String.fromCharCode(96, 96, 96);
  if (!block) return null;
  if (block.startsWith("### ")) return <h3 key={index}>{block.slice(4)}</h3>;
  if (block.startsWith("## ")) return <h2 key={index}>{block.slice(3)}</h2>;
  if (block.startsWith("> ")) return <blockquote key={index}>{inline(block.replace(/^> /gm, ""))}</blockquote>;
  if (block.startsWith(fence)) {
    const code = block.replace(new RegExp("^" + fence + "[a-zA-Z]*\\n?"), "").replace(new RegExp(fence + "$"), "");
    return <pre key={index}><code>{code}</code></pre>;
  }
  if (block.startsWith("![")) {
    const match = block.match(/^!\[(.*?)\]\((.*?)\)(?:\n_(.*?)_)?$/s);
    if (match) return <figure key={index} className="my-8"><div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-slate-100"><Image src={match[2]} alt={match[1]} fill className="object-cover" /></div>{match[3] ? <figcaption className="mt-2 text-sm text-slate-500">{match[3]}</figcaption> : null}</figure>;
  }
  if (block.includes("|") && block.split("\n").length > 1) return renderTable(block, index);
  if (/^- /m.test(block)) return <ul key={index}>{block.split("\n").filter(Boolean).map((item) => <li key={item}>{inline(item.replace(/^- /, ""))}</li>)}</ul>;
  return <p key={index}>{inline(block)}</p>;
}

function renderTable(block: string, index: number) {
  const rows = block.split("\n").filter((row) => row.includes("|")).map((row) => row.split("|").map((cell) => cell.trim()).filter(Boolean));
  const [head, separator, ...body] = rows;
  if (!separator?.every((cell) => /^-+$/.test(cell.replace(/:/g, "")))) return <p key={index}>{inline(block)}</p>;
  return <table key={index}><thead><tr>{head.map((cell) => <th key={cell}>{cell}</th>)}</tr></thead><tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell) => <td key={cell}>{inline(cell)}</td>)}</tr>)}</tbody></table>;
}

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return <span key={index}>{part}</span>;
  });
}