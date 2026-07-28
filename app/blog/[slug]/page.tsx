import { allArticles } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return allArticles.filter((article) => article.published).map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = allArticles.find((a) => a.slug === params.slug && a.published);
  if (!article) return {};
  return { title: article.title, description: article.description };
}

function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find((a) => a.slug === params.slug && a.published);

  if (!article) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 pb-24">
      <div className="max-w-2xl">
        <Link href="/blog" className="text-white/40 text-sm hover:text-white mb-8 inline-block">
          ← Blog
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl font-bold leading-tight">{article.title}</h1>

          <div className="flex items-center gap-2 mt-3 text-sm text-white/30">
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
        </header>

        <div className="prose prose-invert prose-sm max-w-none">
          <MDXContent code={article.body.code} />
        </div>
      </div>
    </div>
  );
}
