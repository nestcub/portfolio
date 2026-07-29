import { WebApp } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type AnimatedProjectsListProps = {
  projects: WebApp[];
};

export function AnimatedProjectsList({
  projects,
}: AnimatedProjectsListProps) {
  return (
    <div>
      {(projects as WebApp[]).map((project, idx) => (
        <div
          key={project.title}
          className="group grid grid-cols-[2rem_1fr] gap-5 py-5 border-b border-border/40 last:border-b-0"
        >
          <span className="font-mono text-xs font-medium text-primary tabular-nums pt-1 select-none">
            {String(idx + 1).padStart(2, "0")}
          </span>

          <div className="space-y-2.5">
            <div>
              <h3 className="font-semibold text-base leading-snug transition-colors duration-200 group-hover:text-primary">
                {project.title}
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-2 py-0.5 text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {(project.repo || project.demo) && (
              <div className="flex items-center gap-3 text-xs">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                )}

                {project.repo && project.demo && (
                  <span className="text-border">·</span>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}