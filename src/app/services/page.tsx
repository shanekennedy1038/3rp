import Link from "next/link";

const services = [
  {
    title: "Vendor Assessment",
    subtitle: "Objective evaluation of technology vendors",
    description:
      "When you're selecting a technology vendor, the stakes are high. A poor choice can cost millions and set your organisation back years. 3RP's vendor assessment service gives you an objective, structured evaluation of competing vendors — based on your specific requirements, not generic analyst rankings.",
    points: [
      "Requirements definition and weighting",
      "Vendor shortlisting and RFP management",
      "Structured evaluation frameworks",
      "Independent scoring and recommendation",
      "Commercial and contract review support",
    ],
  },
  {
    title: "Technology Advisory",
    subtitle: "Strategic guidance on technology investments",
    description:
      "Technology decisions don't happen in isolation. They need to align with your business strategy, your existing architecture, and your organisational capability. 3RP provides strategic advisory services to help leadership teams navigate major technology decisions with confidence.",
    points: [
      "Technology strategy development",
      "Architecture review and guidance",
      "Build vs. buy analysis",
      "Technology roadmap planning",
      "Board and executive advisory",
    ],
  },
  {
    title: "Market Analysis",
    subtitle: "Deep intelligence on technology markets",
    description:
      "Understanding the technology market is essential before you enter it. 3RP conducts deep-dive market analysis to help organisations understand the vendor landscape, emerging technologies, and competitive dynamics relevant to their sector.",
    points: [
      "Vendor landscape mapping",
      "Emerging technology assessment",
      "Market trend analysis",
      "Competitive benchmarking",
      "Custom research reports",
    ],
  },
  {
    title: "Due Diligence",
    subtitle: "Technical due diligence for high-stakes decisions",
    description:
      "Major investments — whether M&A, strategic partnerships, or large-scale technology procurement — require rigorous technical due diligence. 3RP provides independent assessment of technology assets, capabilities, and risks.",
    points: [
      "Technology asset assessment",
      "Architecture and code review",
      "Security and compliance assessment",
      "Team and capability review",
      "Risk identification and mitigation",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1661BE" }}>
            Services
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-6">What We Do</h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Independent advisory services for organisations navigating complex technology decisions.
          </p>
        </div>
      </section>

      {/* Service list */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass rounded-3xl p-10 transition-all grid md:grid-cols-2 gap-10 items-start"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                  0{i + 1}
                </span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-1">{service.title}</h2>
                <p className="font-medium mb-6" style={{ color: "#C74634" }}>
                  {service.subtitle}
                </p>
                <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {service.description}
                </p>
              </div>
              <div>
                <h4
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  What&apos;s included
                </h4>
                <ul className="flex flex-col gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                      <span className="mt-0.5 font-bold" style={{ color: "#1661BE" }}>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Talk to us about your situation. We&apos;ll help you figure out what kind of support you need.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 text-white font-bold rounded-xl transition-all inline-block"
              style={{ background: "#C74634" }}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
