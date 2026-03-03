import { getPost, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm flex items-center gap-2 mb-10 transition-colors"
            style={{ color: "#1661BE" }}
          >
            ← Back to Articles
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#1661BE" }}>
              {post.category || "Insights"}
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>•</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {post.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="glass rounded-3xl p-10 blog-content"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <MDXRemote source={post.content} />
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold transition-colors"
              style={{ color: "#1661BE" }}
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
