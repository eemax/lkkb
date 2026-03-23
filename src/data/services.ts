export interface Service {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
}

export const services: Service[] = [
  {
    name: "Centric PLM & Master Data",
    tagline:
      "Centric PLM and master data expertise from 4 years of working with it daily",
    description:
      "With years of daily hands-on experience in Centric PLM and product data, I can help make the best decisions and get things done.",
    features: [
      "Centric PLM configurations, implementations, processes, and general best practices",
      "Master data structure to optimize for: systems, development workflow efficiency, reporting, and compliance",
      "Product data & sustainability reporting",
      "Digital Product Passport implementation",
      "Main experience in fashion, apparel, footwear, and hardgoods",
    ],
    tags: ["plm", "master-data", "compliance"],
  },
  {
    name: "Product Profile",
    tagline: "Innovative Custom Digital Product Passport Solution",
    description:
      "Digital product passports are the future of compliance and transparency. I'll take your product data and transform it into compliant Digital Product Profiles, ready to meet the latest standards.",
    features: [
      "Conversion of existing company data to compliant digital product passports",
      "Product unique identifiers and digital engravings",
      "Customer data collection as part of having unique product identifiers",
      "Product data consultancy to comply with upcoming changes to EU regulation",
    ],
    tags: ["dpp", "compliance", "eu-regulation"],
  },
  {
    name: "AI Agents & Automation",
    tagline: "Bring AI to Your Team",
    description:
      "AI can be a game-changer, and I'm here to make it simple for your business. I offer a complete service to help you roll out AI tools for your employees.",
    features: [
      "General-purpose chatbots to answer everyday questions",
      "AI agents like Perplexity to speed up research",
      "Productivity bots to save time on repetitive tasks",
      "Custom-built agents with secure access to your company data",
    ],
    tags: ["ai", "chatbots", "productivity"],
  },
  {
    name: "AI Copywriting & Translations",
    tagline: "Cheap, fast, and custom AI copywriting",
    description:
      "Let AI handle writing product descriptions and translating them for different markets. I use the latest AI models to automate these tasks, creating consistent, high-quality content in no time.",
    features: [
      "Iterate on your texts in seconds",
      "Convert your product data to product texts instantly",
      "Product texts automated for a fraction of the cost",
    ],
    tags: ["ai", "copywriting", "automation"],
  },
];
