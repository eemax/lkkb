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
  note?: string;
}

export const skills: Skill[] = [
  { name: "Centric PLM", level: "Expert" },
  { name: "Product Master Data", level: "Expert" },
  { name: "Data Governance", level: "Expert" },
  { name: "BOM, SKU & Item Data", level: "Expert" },
  { name: "System Mapping & Integrations", level: "Advanced" },
  { name: "Data Engineering", level: "Advanced" },
  { name: "AI Engineering & Automation", level: "Advanced" },
];

export const experience: Experience[] = [
  {
    title: "PLM & Product Master Data",
    company: "New Wave Group",
    period: "Current",
    points: [
      "Work across Centric PLM, product master data, traceability, compliance, and Digital Product Passport readiness in a multi-brand product environment",
      "Structure and govern product information across development, sourcing, ERP, reporting, traceability, and compliance workflows",
      "Translate product, compliance, and traceability requirements into data models, system logic, data flows, validation logic, and scalable implementation concepts",
      "Work with BOM structures, SKU and item data, material and supplier information, product classifications, system mappings, data quality, and semantic mapping",
    ],
  },
  {
    title: "Data Engineer",
    company: "Lindqvist Konsult, Freelance",
    period: "Jun 2024 - Present",
    points: [
      "Build and experiment with Python, APIs, structured data, data pipelines, system integrations, workflow automation, and AI-ready knowledge structures",
      "Design practical AI agents and agentic workflows that connect business data, automation, and applied AI engineering",
      "Explore how modern data and AI systems can be connected, automated, and scaled across product and operational workflows",
    ],
  },
  {
    title: "Product Process & Master Data Specialist",
    company: "Haglöfs, Stockholm, Sweden",
    period: "Jan 2023 - Jun 2024",
    points: [
      "Owned advanced Centric PLM configuration, product data structures, and process improvements across product creation",
      "Managed sampling workflows, seasonal timelines, and cross-functional product process coordination",
      "Improved product data flows between PLM, PIM, ERP, and reporting systems",
    ],
  },
  {
    title: "Product Process Controller",
    company: "Haglöfs, Stockholm, Sweden",
    period: "Apr 2022 - Jan 2023",
    points: [
      "Served as Centric PLM system owner for process setup, project coordination, and custom timeline development",
      "Translated business needs into clearer workflows, cleaner data structures, and more reliable system usage",
    ],
  },
  {
    title: "Sourcing Coordinator",
    company: "Haglöfs, Stockholm, Sweden",
    period: "Jan 2022 - Apr 2022",
    points: [
      "Supported product sourcing, supplier reporting, sustainability reporting, and operational follow-up",
    ],
  },
  {
    title: "Product Management Assistant",
    company: "Haglöfs, Stockholm, Sweden",
    period: "Sep 2020 - Apr 2022",
    points: [
      "Maintained product data across PLM, ERP, and PIM while supporting product managers with analysis and administration",
      "Prepared product color analysis, seasonal data updates, and reporting for collection development",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor's in Business Administration",
    institution: "Colorado Mesa University",
    note: "Varsity Tennis Player",
  },
];

export const focusAreas = [
  "PLM and product data governance across complex multi-system product environments",
  "Product data models, BOM structures, SKU and item data, material and supplier information, and product classifications",
  "Traceability, compliance data, Digital Product Passport readiness, validation logic, and semantic mapping",
  "Data engineering, APIs, ETL/ELT workflows, automation, AI agents, and AI-ready product data structures",
];

export const contact = {
  name: "Max Lindqvist",
  headline: "PLM & Product Master Data @ New Wave Group",
  summary:
    "I work with product data models, BOM structures, SKU and item data, material and supplier information, product classifications, system mappings, validation logic, and data governance — solving the practical challenge of keeping complex product data consistent, traceable, and usable across multiple business systems.",
  email: "max.lindqvist@me.com",
  location: "Stockholm, Sweden",
  website: "https://lkkb.se",
  linkedin: "https://linkedin.com/in/m44",
  image: "/images/max-lindqvist.jpeg",
};
