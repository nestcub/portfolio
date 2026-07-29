import { allArticles } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const articles = allArticles
    .filter((article) => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 pb-8">
      <p className="text-sm text-muted-foreground mb-16">rendered .mdx files for content using next-contentlayer2</p>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-10">Blog</h1>

        {articles.length === 0 ? (
          <p className="text-white/40">Nothing published yet.</p>
        ) : (
          <div className="space-y-10">
            {articles.map((article) => (
              <article key={article.slug}>
                <Link href={article.url} className="group">
                  <h2 className="text-lg font-semibold group-hover:text-white/80 transition-colors">
                    {article.title}
                  </h2>
                </Link>

                {article.description && (
                  <p className="mt-1 text-white/50 text-sm leading-relaxed">{article.description}</p>
                )}

                <div className="flex items-center gap-2 mt-2 text-xs text-white/30">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{article.readingTime} min read</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
