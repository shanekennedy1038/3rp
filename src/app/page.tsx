import Link from "next/link";
import { getPosts } from "@/lib/posts";

const services = [
  {
    icon: "◈",
    title: "Vendor Recommendation",
    description:
      "We research the market and recommend the best-fit technology vendors and software for your organisation's specific needs, budget, and environment.",
  },
  {
    icon: "◎",
    title: "Market Research",
    description:
      "Deep-dive research into technology markets, vendor landscapes, and emerging solutions relevant to your sector.",
  },
  {
    icon: "◉",
    title: "Procurement Support",
    description:
      "End-to-end support through the vendor selection and procurement process — from defining requirements through to contract.",
  },
];

const stats = [
  { value: "50+", label: "Engagements Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "For Our Clients" },
];

const differentiators = [
  { title: "Market Expertise", desc: "Deep knowledge of enterprise technology vendors, categories, and what separates good solutions from great ones." },
  { title: "Enterprise Experience", desc: "Deep experience with large-scale procurement and enterprise architecture." },
  { title: "Australian Market Focus", desc: "Local knowledge of the Australian technology market and regulatory environment." },
  { title: "Practical Outcomes", desc: "Recommendations you can actually act on, not theoretical frameworks." },
];

export default async function Home() {
  const posts = await getPosts();
  const recentPosts = posts.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-8"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1661BE" }} />
                Vendor Advocacy &amp; Technology Recommendation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Make <span style={{ color: "#1661BE" }}>confident</span> technology decisions
              </h1>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
                3RP helps enterprise and mid-market organisations in Australia cut through vendor
                complexity and select the right technology — matched to your needs, your context,
                and your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 text-white font-semibold rounded-xl transition-all"
                  style={{ background: "#C74634", boxShadow: "0 8px 32px rgba(199,70,52,0.25)" }}
                >
                  Talk to an Advisor
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 glass text-white font-semibold rounded-xl transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="glass-strong rounded-3xl p-8">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold mb-1" style={{ color: "#1661BE" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl p-6">
                <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  &ldquo;We champion the right technology vendors for your organisation — drawing on deep market knowledge and enterprise experience to give you recommendations you can act on.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "rgba(22,97,190,0.2)", color: "#1661BE" }}
                  >
                    3RP
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">3RP Advisory</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Melbourne, Australia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1661BE" }}>
              What We Do
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">Our Services</h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Vendor advocacy services built for organisations navigating complex technology decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass rounded-2xl p-6 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-2xl font-bold mb-4" style={{ color: "#1661BE" }}>
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-sm font-semibold" style={{ color: "#1661BE" }}>
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why 3RP */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#C74634" }}>
                Why 3RP
              </span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">Expert advocacy you can rely on</h2>
              <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                We know the enterprise technology market inside out. Our recommendations are grounded in
                real-world deployments, deep vendor knowledge, and a clear understanding of what works
                for organisations like yours.
              </p>
              <Link
                href="/about"
                className="px-6 py-3 glass text-white font-semibold rounded-xl transition-all inline-block"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                About 3RP
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="glass rounded-xl p-4 flex gap-4 items-start"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: "#1661BE" }} />
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {recentPosts.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1661BE" }}>
                  Insights
                </span>
                <h2 className="text-4xl font-bold text-white mt-3">Latest Articles</h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold" style={{ color: "#1661BE" }}>
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass rounded-2xl p-8 transition-all block"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#1661BE" }}>
                    {post.category || "Insights"}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {post.date}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: "#1661BE" }}>
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to make a confident technology decision?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              Speak with one of our advisors today. No commitment, no sales pitch — just a conversation.
            </p>
            <Link
              href="/contact"
              className="px-10 py-4 text-white font-bold text-lg rounded-xl transition-all inline-block"
              style={{ background: "#C74634", boxShadow: "0 8px 32px rgba(199,70,52,0.25)" }}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
