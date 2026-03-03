import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1661BE" }}>
            Insights
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-6">Articles &amp; Insights</h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Perspectives on technology assessment, vendor management, and strategic advisory from
            the 3RP team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div
              className="glass rounded-2xl p-12 text-center"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)" }}>Articles coming soon.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass rounded-2xl p-8 transition-all block"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#1661BE" }}
                    >
                      {post.category || "Insights"}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>•</span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-2xl mb-3 leading-snug">{post.title}</h2>
                  <p className="leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-semibold" style={{ color: "#1661BE" }}>
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
