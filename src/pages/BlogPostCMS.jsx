import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const files = import.meta.glob("/content/blog/*.md", { as: "raw", eager: true });

export default function BlogPost() {
  const { slug } = useParams();

  const post = useMemo(() => {
    for (const raw of Object.values(files)) {
      const { data, content } = matter(raw);
      if (data?.slug === slug) return { data, content };
    }
    return null;
  }, [slug]);

  if (!post) {
    return (
      <div className="container py-8">
        <h1>Post not found</h1>
      </div>
    );
  }

  const { data, content } = post;

  // Basic SEO (you can enhance with your meta component)
  document.title = data.seoTitle || data.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", data.seoDescription || data.excerpt || "");

  return (
    <article className="container py-8">
      <h1 className="mb-2">{data.title}</h1>
      <div className="text-sm opacity-80 mb-4">
        {data.location ? `${data.location} • ` : ""}{new Date(data.date).toLocaleDateString()}
      </div>
      {data.coverImage && (
        <img src={data.coverImage} alt="" className="img-fluid mb-4" />
      )}
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
