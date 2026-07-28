import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (article) => article._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    url: {
      type: "string",
      resolve: (article) => `/blog/${article._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
    readingTime: {
      type: "number",
      resolve: (article) => Math.max(1, Math.round(article.body.raw.trim().split(/\s+/).length / 200)),
    },
  },
}));

export default makeSource({
  contentDirPath: "content/articles",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
