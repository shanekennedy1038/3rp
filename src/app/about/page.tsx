import Link from "next/link";

const values = [
  {
    title: "Independence",
    desc: "We are not affiliated with any technology vendor. Our advice is genuinely objective.",
  },
  {
    title: "Depth",
    desc: "We go beyond surface-level analysis to understand what actually matters for your organisation.",
  },
  {
    title: "Clarity",
    desc: "We translate technical complexity into clear, actionable recommendations.",
  },
  {
    title: "Integrity",
    desc: "We say what we believe, even when it's not what you hoped to hear.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1661BE" }}>
            About 3RP
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Independent advisors for technology decisions that matter
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            3RP was founded with a single purpose: to give organisations in Australia access to
            genuinely independent technology advice — the kind that isn&apos;t influenced by vendor
            relationships or commercial incentives.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#C74634" }}>
                Our Mission
              </span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-6">Clarity in a complex market</h2>
              <p className="leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                The enterprise technology market is crowded, noisy, and increasingly difficult to
                navigate. Every vendor promises to be the best solution. Analysts and advisors are
                often commercially tied to the vendors they assess.
              </p>
              <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                3RP exists to cut through that noise. We work exclusively for the organisations that
                engage us — not for technology vendors, not for resellers, not for integrators.
              </p>
            </div>
            <div className="glass rounded-2xl p-8" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <blockquote
                className="text-lg italic leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                &ldquo;Our clients come to us when they need to make a technology decision that
                matters — a major procurement, a platform migration, a strategic partnership. They
                need advice they can trust.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
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
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1661BE" }}>
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-white mt-3">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-8 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(22,97,190,0.15)" }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: "#1661BE" }} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we work on */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="glass rounded-3xl p-12 grid md:grid-cols-3 gap-8"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              {
                label: "Who We Work With",
                text: "Enterprise and mid-market organisations across Australia, typically with complex technology environments and high-stakes procurement decisions.",
              },
              {
                label: "How We Engage",
                text: "We work on a project basis — scoped, time-bound engagements with clear deliverables. No retainers, no ongoing billing for advice you didn't ask for.",
              },
              {
                label: "Where We Operate",
                text: "Headquartered in Melbourne, we work with clients nationally and across the Asia-Pacific region.",
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#C74634" }}
                >
                  {item.label}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Work with us</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Find out how 3RP can help your organisation make better technology decisions.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 text-white font-bold rounded-xl transition-all inline-block"
              style={{ background: "#C74634" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
