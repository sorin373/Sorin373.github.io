export type PublicationItem = {
  title: string;
  type: "Presentation" | "Poster" | "Technical report" | "Academic paper" | "Certificate" | "Document";
  date: string;
  description: string;
  pdf?: string;
  external?: string;
};

export const publications: PublicationItem[] = [
  {
    title: "Replace with conference presentation or technical poster",
    type: "Presentation",
    date: "2026",
    description:
      "Sample publication item. Replace this with real presentations, posters, reports, certificates or recommendation documents.",
    pdf: "/documents/sample-document.pdf"
  }
];