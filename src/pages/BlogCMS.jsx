import React from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

const files = import.meta.glob("/content/blog/*.md", { as: "raw", eager: true });

const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data } = matter(raw);
    return { ...data, path };
  })
  .filter(p => p.title && p.slug)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Blog() {
  return (
    <div className="container py-8">
      <h1 className="mb-6">Blog</h1>
      <ul className="list-unstyled">
        {posts.map(p => (
          <li key={p.slug} className="mb-4">
            <h3 className="mb-1">
              <Link to={`/blog/${p.slug}`}>{p.title}</Link>
            </h3>
            {p.location && <div className="text-sm opacity-80">Location: {p.location}</div>}
            {p.excerpt && <p className="mt-2">{p.excerpt}</p>}
            <Link to={`/blog/${p.slug}`} className="btn btn-outline-success btn-sm mt-2">
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
