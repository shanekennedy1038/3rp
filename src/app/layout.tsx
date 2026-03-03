import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3RP | Vendor Assessment & Technology Advisory",
  description:
    "3RP helps enterprise and mid-market organisations in Australia make confident technology decisions through independent vendor assessment and strategic advisory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hind.variable} antialiased`}>
        {/* Decorative background orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
          <div
            className="absolute rounded-full"
            style={{
              top: "-20%",
              right: "-10%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(22,97,190,0.25) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: "-20%",
              left: "-10%",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(199,70,52,0.18) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: "45%",
              left: "35%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(22,97,190,0.12) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
