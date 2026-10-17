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
  {
    title: "AI Call Transcription & Analytics Dashboard",
    description:
      "A full-stack dashboard that transcribes customer call recordings with Whisper and surfaces call analytics, cutting manual review from a full team to a single reviewer.",
    tags: [
      "Next.js",
      "Django REST Framework",
      "Celery",
      "RabbitMQ",
      "Whisper",
      "LLM",
    ],
  },
] as const;

export const MOBILE_APPS: WebApp[] = [
  {
    title: "SynTrack",
    description:
      "Geo-location based attendance app for a client that needed attendance tracking and analytics for on-field workers.",
    tags: [
      "React Native Expo",
      "Supabase",
      "Geolocation",
    ],
  },
] as const;