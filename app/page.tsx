import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  CONTACT_LINKS,
  EDUCATION,
  EXPERIENCE,
  INTRO,
  PHOTOS,
  PRINCIPLES,
  SKILLS,
} from "@/data/about"

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
      {children}
    </h2>
  )
}

export default function KnowMe() {
  return (
    <div className="bg-black px-6 md:px-10 py-12 md:py-12">
      <div className="mx-auto w-full max-w-4xl space-y-16">
        {/* Contact */}
        <section className="space-y-3">
          <SectionHeading>Get in touch</SectionHeading>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {CONTACT_LINKS.filter((l) => l.href).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="!mt-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
            Hello, I'm
            <br />
            Neston Cabral
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/70">{INTRO}</p>
        </section>

        {/* Photos */}
        <section>
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {PHOTOS.map((photo, idx) => (
                <CarouselItem key={photo.src} className="basis-1/2 md:basis-1/3">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 300px, 50vw"
                      priority={idx === 0}
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-white/10 bg-black/60 text-white hover:bg-black/80" />
            <CarouselNext className="right-2 border-white/10 bg-black/60 text-white hover:bg-black/80" />
          </Carousel>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <SectionHeading>Experience</SectionHeading>
          <div>
            {EXPERIENCE.map((job) => (
              <div
                key={job.company}
                className="grid gap-1 md:grid-cols-[10rem_1fr] md:gap-6 py-5 border-b border-white/10 last:border-b-0"
              >
                <p className="font-mono text-xs text-muted-foreground pt-1">{job.period}</p>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-base leading-snug text-white">
                    {job.role} <span className="text-white/50">· {job.company}</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How I work */}
        <section className="space-y-6">
          <SectionHeading>How I work</SectionHeading>
          <ol className="space-y-3">
            {PRINCIPLES.map((p, idx) => (
              <li key={p} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-relaxed text-white/80">
                <span className="font-mono text-xs text-primary tabular-nums pt-0.5 select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {p}
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <SectionHeading>Stack</SectionHeading>
          <div className="space-y-4">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group} className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-6">
                <p className="text-sm text-white/50 pt-0.5">{group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <Badge key={item} variant="secondary" className="px-2 py-0.5 text-xs font-normal">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <SectionHeading>Education</SectionHeading>
          <div className="grid gap-1 md:grid-cols-[10rem_1fr] md:gap-6">
            <p className="font-mono text-xs text-muted-foreground pt-1">{EDUCATION.period}</p>
            <div className="space-y-1">
              <h3 className="font-semibold text-base leading-snug text-white">{EDUCATION.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {EDUCATION.school} · {EDUCATION.detail}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
