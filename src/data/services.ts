export interface Service {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
}

export const services: Service[] = [
  {
    name: "Working With Data",
    tagline: "Cleaning up the messy layer between systems, teams, and tools",
    description:
      "Available for work that turns messy business data into something reliable, usable, and ready for the next system, report, workflow, or product decision.",
    features: [
      "Python, APIs, JSON, structured data, exports, and imports",
      "Extracting, transforming, validating, mapping, enriching, and connecting data",
      "Data quality improvements for reporting, automation, and downstream tools",
      "Product, supplier, material, SKU, item, BOM, and classification data",
    ],
    tags: ["data", "apis", "systems"],
  },
  {
    name: "Software With AI Leverage",
    tagline: "Fast, careful building across whatever stack the work needs",
    description:
      "I use AI as a serious development amplifier: to understand codebases faster, build across unfamiliar stacks, automate repetitive work, and ship useful software without turning every project into an AI demo.",
    features: [
      "AI-leveraged development across existing codebases, tools, and languages",
      "Agents, workflow automation, structured prompts, and tool integrations",
      "Practical AI systems that work with real data and real constraints",
      "Fast prototyping, implementation support, and technical problem solving",
    ],
    tags: ["software", "ai-leverage", "automation"],
  },
  {
    name: "PLM & Product Master Data",
    tagline:
      "Deep product data knowledge from apparel, footwear, bags, and consumer goods",
    description:
      "I work at the layer between product teams, business systems, compliance requirements, and technical implementation, especially where complex product data needs to stay consistent and traceable.",
    features: [
      "Centric PLM structures, workflows, data models, and system mappings",
      "BOM, material, supplier, SKU, item, and product classification data",
      "PLM/ERP alignment, reporting foundations, and downstream data flows",
      "Digital Product Passport readiness, traceability, and compliance data",
    ],
    tags: ["plm", "product-data", "dpp"],
  },
  {
    name: "Automation & Internal Tools",
    tagline: "Small tools that remove repeated manual work",
    description:
      "I build practical automations and internal tools for teams that need leverage without a large platform project. The goal is simple: fewer manual handoffs, cleaner data, and faster execution.",
    features: [
      "Workflow automation around spreadsheets, APIs, exports, and recurring tasks",
      "Internal data tools, scripts, prototypes, and AI-ready knowledge structures",
      "System-to-system handoffs where standard integrations are missing",
      "Clear documentation and maintainable handover for the team",
    ],
    tags: ["automation", "tools", "operations"],
  },
];
