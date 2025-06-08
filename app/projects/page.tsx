"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects = [
    {
      id: 1,
      title: "AI insights on pre-recorded calls",
      description: "Nextjs + DjangoRestFramework web app",
      details:
        "Will add details later",
    },
    // {
    //   id: 2,
    //   title: "Photography Portfolio",
    //   description: "A clean portfolio site for a professional photographer",
    //   details:
    //     "Designed with a focus on image quality and performance. Implemented lazy loading and responsive image techniques for optimal viewing on all devices.",
    // },
    // {
    //   id: 3,
    //   title: "Design System",
    //   description: "A comprehensive design system for enterprise applications",
    //   details:
    //     "Created a scalable design system with 50+ components, documentation, and usage guidelines. Implemented with React and Storybook.",
    // },
    // {
    //   id: 4,
    //   title: "News Aggregator",
    //   description: "A personalized news platform with minimalist UI",
    //   details:
    //     "Developed a news aggregation service that uses AI to curate content based on user preferences. Built with Next.js and MongoDB.",
    // },
    // {
    //   id: 5,
    //   title: "Task Management App",
    //   description: "A simple yet powerful task management application",
    //   details:
    //     "Created a productivity tool with drag-and-drop functionality, deadline tracking, and team collaboration features. Used React, TypeScript, and Firebase.",
    // },
    // {
    //   id: 6,
    //   title: "Restaurant Website",
    //   description: "A modern website for a high-end restaurant",
    //   details:
    //     "Designed and developed a responsive website with online reservation system, menu display, and integration with third-party delivery services.",
    // },
  ]

  type Project = (typeof projects)[0]

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project)
    setOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-6 md:mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white/20 p-4 md:p-6 cursor-pointer transition-colors hover:bg-white/5"
            onClick={() => handleOpenProject(project)}
          >
            <h2 className="text-xl font-medium mb-2">{project.title}</h2>
            <p className="text-white/70">{project.description}</p>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-white/70 pt-2">{selectedProject?.details}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
