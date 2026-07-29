export type WebApp = {
  title: string;
  repo?: string;
  demo?: string;
  description: string;
  tags: string[];
  thumbnail?: string;
};

export const WEB_APPS: WebApp[] = [
  {
    title: "FingerTips",
    demo: "https://fingertips.touchstonepartners.com/",
    description:
      "A case management platform for Indian law firms with matter management, finance tracking, role-based access control, and workflow automation.",
    tags: [
      "Private repo",
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Supabase",
      "TypeScript",
    ],
    thumbnail: "/_static/projects/firmtalk.png",
  },
  // {
  //   title: "Dental Clinic Management System",
  //   repo: "https://github.com/<your-username>/dental-clinic-management",
  //   demo: "https://clinic.yourdomain.com",
  //   description:
  //     "A full-stack clinic management application for managing patients, appointments, treatments, invoices, and billing with a modern dashboard.",
  //   tags: [
  //     "Next.js",
  //     "Prisma",
  //     "PostgreSQL",
  //     "TypeScript",
  //     "Tailwind CSS",
  //   ],
  //   thumbnail: "/_static/projects/dental-clinic.png",
  // },
  // {
  //   title: "HRMS",
  //   repo: "https://github.com/<your-username>/hrms",
  //   demo: "https://hrms.yourdomain.com",
  //   description:
  //     "Human Resource Management System with employee management, attendance tracking, and portable fingerprint device integration.",
  //   tags: [
  //     "Next.js",
  //     "Supabase",
  //     "Authentication",
  //     "TypeScript",
  //   ],
  //   thumbnail: "/_static/projects/hrms.png",
  // },
  // {
  //   title: "AI Calls Dashboard",
  //   repo: "https://github.com/<your-username>/ai-calls-dashboard",
  //   demo: "https://calls.yourdomain.com",
  //   description:
  //     "An AI-powered dashboard that transcribes customer call recordings using Whisper and generates structured summaries, reducing manual review effort.",
  //   tags: [
  //     "Next.js",
  //     "Django REST Framework",
  //     "Celery",
  //     "RabbitMQ",
  //     "Whisper",
  //     "LLM",
  //   ],
  //   thumbnail: "/_static/projects/ai-calls-dashboard.png",
  // },
  // {
  //   title: "SynTrack",
  //   repo: "https://github.com/<your-username>/syntrack",
  //   demo: "https://syntrack.yourdomain.com",
  //   description:
  //     "Geo-location based attendance application for tracking employee check-ins and attendance through a React Native mobile app.",
  //   tags: [
  //     "React Native Expo",
  //     "Supabase",
  //     "Geolocation",
  //     "Mobile",
  //   ],
  //   thumbnail: "/_static/projects/syntrack.png",
  // },
] as const;