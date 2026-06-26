export type SkillGroup = {
  group: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { group: "Programming", skills: ["C++", "Python", "MATLAB", "Arduino", "Git"] },
  {
    group: "Engineering",
    skills: [
      "Mechanical design",
      "Structural verification",
      "Engineering documentation",
      "Requirements analysis",
      "Test planning",
      "Numerical modelling"
    ]
  },
  {
    group: "Space systems",
    skills: [
      "CubeSat architecture",
      "ECSS standards",
      "Assembly, Integration and Verification",
      "Spacecraft structures",
      "Verification Control Documentation"
    ]
  },
  { group: "Tools", skills: ["GitHub", "CAD tools", "Ansys", "STK", "Microsoft Excel", "LaTeX"] }
];