import Link from "next/link";

const navLinks = ["About", "Services", "Blog", "Contact"];

export default function Footer() {
  return (
    <footer
      className="glass mt-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4 tracking-tight">
              3<span style={{ color: "#C74634" }}>R</span>
              <span style={{ color: "#1661BE" }}>P</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Vendor assessment and technology advisory for enterprise and mid-market organisations in Australia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-semibold mb-4 text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                Home
              </Link>
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold mb-4 text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <span>Melbourne, Australia</span>
              <a
                href="mailto:hello@threerp.com.au"
                className="transition-colors hover:text-white"
                style={{ color: "#1661BE" }}
              >
                hello@threerp.com.au
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} 3RP. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            threerp.com.au
          </p>
        </div>
      </div>
    </footer>
  );
}
