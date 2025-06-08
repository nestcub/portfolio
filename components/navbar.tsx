"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    { name: "Know me", path: "/" },
    // { name: "Photos", path: "/photos" },
    { name: "What I'm doing", path: "/what-im-doing" },
    { name: "Projects", path: "/projects" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/20 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "px-2 md:px-3 py-2 text-xs md:text-sm transition-colors hover:text-white/70",
                pathname === route.path ? "text-white font-medium" : "text-white/50",
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
