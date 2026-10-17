export type Photo = {
  src: string;
  alt: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const INTRO =
  "Forward Deployed Engineer based in Mumbai. I work closely with clients to turn messy business workflows into working software — I also love clicking photos.";

export const PHOTOS: Photo[] = [
  { src: "/Images/1000115749.jpg", alt: "Black and white selfie of Neston" },
  { src: "/Images/1000099855.jpg", alt: "Neston at a cafe table" },
  { src: "/Images/1000114142.jpg", alt: "Neston smiling against a tiled wall" },
  { src: "/Images/1000085186.webp", alt: "Photo of Neston" },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Chat360",
    role: "Forward Deployed Engineer",
    period: "Aug 2026 – Present",
    summary:
      "Building client proof-of-concepts from ideation to working demos with Next.js, Supabase, Vercel and Render, designed for multi-tenancy and fault tolerance. Cut a client's voicebot operating cost from ₹3 lakh to under ₹20,000 a month.",
  },
  {
    company: "500x Tech Labs",
    role: "AI Full-Stack Web Developer",
    period: "Oct 2025 – Jul 2026",
    summary:
      "Built management systems for legal firms — relational schemas, API architecture and client walkthroughs — and contributed to FirmTalk, a reusable case management platform for multiple legal organizations.",
  },
  {
    company: "Synvibes Analytics",
    role: "Backend Web Developer",
    period: "Jan 2025 – Aug 2025",
    summary:
      "Migrated sites from WordPress to Next.js with Clerk auth, integrated Razorpay for membership and donation payments, and built Power BI dashboards to surface high-priority patients and churn patterns.",
  },
];

export const PRINCIPLES: string[] = [
  "Understand the business problem and workflow before writing code.",
  "Design schemas and APIs that scale — multi-tenant, fault-tolerant, built to be reused.",
  "Present and demo the solution to the people who will actually use it.",
];

export const SKILLS: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python"],
  Frameworks: ["Next.js", "React", "React Native (Expo)", "Express.js", "Django", "Flask"],
  "Infra & Tools": ["PostgreSQL", "Supabase", "AWS S3", "Nginx", "GitHub Actions", "Linux", "Postman", "Claude Code", "Cursor"],
  Concepts: ["Database Schema Design", "REST APIs"],
};

export const EDUCATION = {
  degree: "BTech, Artificial Intelligence & Data Science — Honours in Blockchain",
  school: "Fr. Conceicao Rodrigues College of Engineering, Mumbai",
  period: "2021 – 2025",
  detail: "CGPA 8.37",
};

// Links with an empty href are not rendered.
export const CONTACT_LINKS: ContactLink[] = [
  { label: "Email", href: "mailto:cabralneston@gmail.com" },
  { label: "GitHub", href: "https://github.com/nestcub" },
  { label: "LinkedIn", href: "" },
  { label: "Resume", href: "https://drive.google.com/file/d/17YQxaf_5gq2QOnoorUhAEM8qsNoXG_dH/view?usp=sharing" },
];
