export const siteConfig = {
  name: "Your Name",
  title: "Aerospace Engineering Student & CubeSat Engineer",
  shortBio:
    "I am an aerospace engineering student interested in CubeSat systems, structural engineering, embedded systems and advanced numerical programming. I enjoy transforming theoretical models into practical engineering solutions through analysis, experimentation and multidisciplinary projects.",
  email: "your.email@example.com",
  location: "Your City, Country",
  linkedInUrl: "https://www.linkedin.com/in/your-profile",
  githubUrl: "https://github.com/your-username",
  cvPath: "/documents/cv.pdf",
  profileImage: "/profile/profile-placeholder.svg",
  siteUrl: "https://your-domain.example",
  navigation: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Notes", href: "/notes" },
    { label: "Contact", href: "/contact" }
  ],
  sections: {
    notes: true,
    publications: true,
    projectStats: true
  },
  currentFocus: [
    "CubeSat structural documentation",
    "Engineering test planning",
    "Advanced C++ numerical modelling",
    "Space systems training applications"
  ],
  engineeringInterests: [
    "CubeSat systems",
    "Spacecraft structures",
    "Assembly, Integration and Verification",
    "Mechanical systems",
    "Embedded systems",
    "Advanced C++",
    "Numerical modelling",
    "Engineering documentation",
    "Testing and validation"
  ],
  principles: [
    "Requirements before implementation",
    "Validate models against trusted references",
    "Document decisions and assumptions",
    "Design for testability"
  ]
};

export type SiteConfig = typeof siteConfig;