export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  note?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export const skills: Skill[] = [
  { name: "Excel", level: "Expert" },
  { name: "Centric PLM", level: "Expert" },
  { name: "AI Productivity", level: "Expert" },
  { name: "Master Data Compliance", level: "Advanced" },
  { name: "Power BI", level: "Intermediate" },
];

export const experience: Experience[] = [
  {
    title: "Business Consultant",
    company: "Lindqvist Konsult, Freelance",
    period: "Jun 2024 - Present",
    points: [
      "Product Profile, AI Agents & Automation, AI automations, Centric PLM, master data, EU reporting compliance",
      "Providing value to companies through data excellence and cutting edge AI",
    ],
  },
  {
    title: "Product Process & Master Data Specialist",
    company: "Haglofs, Stockholm, Sweden",
    period: "Jan 2023 - Jun 2024",
    points: [
      "Centric PLM: Advanced system configuration and master data structure specialist",
      "Product process, product sampling, and timeline management",
      "Product master data systems integration",
    ],
  },
  {
    title: "Product Process Controller",
    company: "Haglofs, Stockholm, Sweden",
    period: "Apr 2022 - Jan 2023",
    points: [
      "Centric PLM system owner, project management, process optimization, custom timeline development",
    ],
  },
  {
    title: "Sourcing Coordinator",
    company: "Haglofs, Stockholm, Sweden",
    period: "Jan 2022 - Apr 2022",
    points: ["Product sourcing & reporting, sustainability reporting"],
  },
  {
    title: "Product Management Assistant",
    company: "Haglofs, Stockholm, Sweden",
    period: "Sep 2020 - Apr 2022",
    points: [
      "Excel admin, master data admin, ERP & PIM admin, product color analysis",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor's in Business Administration",
    institution: "Colorado Mesa University",
    year: "2019",
    note: "Varsity Tennis Player",
  },
];

export const languages: Language[] = [
  { name: "Swedish", proficiency: "Native" },
  { name: "English", proficiency: "Bilingual" },
];

export const focusAreas = [
  "Centric PLM & master data consultancy",
  "Affordable and customized AI access for businesses",
  "EU regulatory compliance, product & sustainability reporting, Digital Product Passport (DPP)",
];

export const contact = {
  name: "Max Lindqvist",
  title: "Business Consultant",
  email: "max@lkkb.se",
  location: "Stockholm, Sweden",
  website: "https://lkkb.se",
  linkedin: "https://linkedin.com/in/m44",
  image: "/images/max-lindqvist.jpeg",
};
