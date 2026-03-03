import Link from "next/link";

const services = [
  {
    title: "Vendor Recommendation",
    subtitle: "Find and select the right technology vendor",
    description:
      "Choosing the right technology vendor is one of the most consequential decisions your organisation will make. 3RP cuts through the market noise to recommend vendors that are genuinely the best fit — based on your requirements, your environment, and your long-term goals.",
    points: [
      "Requirements definition and scoping",
      "Vendor landscape research",
      "Shortlisting and RFP management",
      "Structured evaluation and recommendation",
      "Comparative vendor analysis",
    ],
  },
  {
    title: "Market Research",
    subtitle: "Deep intelligence on technology markets",
    description:
      "Before you can choose the right vendor, you need to understand the market. 3RP conducts deep-dive market research to map the vendor landscape, assess emerging technologies, and give your team the intelligence to make informed decisions.",
    points: [
      "Vendor landscape mapping",
      "Emerging technology assessment",
      "Market trend analysis",
      "Category deep-dives",
      "Custom research reports",
    ],
  },
  {
    title: "Procurement Support",
    subtitle: "End-to-end support through selection and procurement",
    description:
      "Selecting a vendor is only half the battle. 3RP supports your team through the entire procurement process — from defining evaluation criteria and managing RFPs to reviewing contracts and negotiating terms.",
    points: [
      "Evaluation framework design",
      "RFP development and management",
      "Vendor scoring and shortlisting",
      "Contract and commercial review",
      "Stakeholder reporting and sign-off support",
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
            Vendor advocacy services for organisations navigating complex technology decisions.
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
