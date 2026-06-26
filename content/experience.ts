export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  type: "Education" | "Project role" | "Training" | "Conference" | "Certification" | "Apprenticeship";
  description: string;
  highlights: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Aerospace Engineering Student",
    organization: "Your University",
    period: "2023 - Present",
    type: "Education",
    description:
      "Replace this sample entry with your degree programme, faculty, laboratory work and relevant coursework.",
    highlights: ["Mechanics and structures", "Programming for engineering", "Space systems fundamentals"]
  },
  {
    title: "CubeSat Structural Engineering Apprentice",
    organization: "ROSPIN-SAT-1 Team",
    period: "2026",
    type: "Apprenticeship",
    description:
      "Sample placeholder describing involvement in CubeSat structural documentation and verification planning.",
    highlights: ["ECSS-based requirements", "Verification Control Documentation", "Structural test planning"]
  },
  {
    title: "Advanced C++ Numerical Modelling Project",
    organization: "Academic / independent project",
    period: "2025 - 2026",
    type: "Project role",
    description:
      "Sample placeholder for a modelling project using coordinate transformations and atmospheric refraction correction.",
    highlights: ["C++ implementation", "CSV output", "Validation plan pending"]
  }
];