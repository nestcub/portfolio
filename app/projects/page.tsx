// import { generatePageMetadata } from "../seo";
import { AnimatedProjectsList } from "../../components/animated-projects-list";
import React from "react";
import { MOBILE_APPS, WEB_APPS } from "@/data/projects";
import { Separator } from "@/components/ui/separator";

// export const metadata = generatePageMetadata({
//   title: "Projects",
//   description:
//     "View some of my notable open source web apps, npm packages, cli tools and more.",
// });

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 md:px-10 md:py-8 space-y-12">
      <p className="text-sm text-muted-foreground">Simple Projects section using javascript arrays, stored in .ts file</p>
      {/* Web Applications Section */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">Projects</h1>
        </div>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground pt-2">
          Web Applications
        </h2>
        <AnimatedProjectsList projects={WEB_APPS}/>
      </section>

      <section className="space-y-6">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground pt-2">
          Mobile Applications
        </h2>
        <AnimatedProjectsList projects={MOBILE_APPS}/>
      </section>
    </div>
  );
}