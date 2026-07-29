"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    { name: "Know me", path: "/" },
    // { name: "Photos", path: "/photos" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "Posts", path: "/post" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <div className="flex items-center gap-6 md:gap-8 h-16">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm transition-colors hover:text-white/70",
                pathname === route.path
                  ? "text-white font-medium underline underline-offset-8 decoration-2"
                  : "text-white/50",
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
