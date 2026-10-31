import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen text-[#141414]">
      {/* ── Hero Section ── */}
      <Hero />

      {/* ── Main Content ── */}
      <main>
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#E0E0E0] bg-[#F7F7F5]/80 backdrop-blur-sm py-14">
        <div className="mx-auto max-w-7xl px-6">
          {/* Upper banner */}
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#E0E0E0] pb-12 sm:flex-row sm:items-center">
            <div>
              <p className="font-heading text-xl font-bold tracking-tight text-[#141414] sm:text-2xl">
                Ready to elevate your brand?
              </p>
              <p className="mt-1 font-mono-tag text-xs text-[#8C8C8C]">
                Now accepting select commissions for 2026.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#141414] bg-[#141414] px-6 py-2.5 font-mono-tag text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#3B5BDB] hover:border-[#3B5BDB]"
            >
              <span>Initialize Project</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Lower footer: Logo left, Copyright right */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Logo Left */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="font-heading text-lg font-bold tracking-tight text-[#141414]"
              >
                Forma<span className="text-[#3B5BDB]">.</span>
              </a>
              <span className="font-mono-tag text-[10px] text-[#8C8C8C] uppercase tracking-wider">
                &mdash; Studio Archive
              </span>
            </div>

            {/* Quick links & Back to Top */}
            <div className="flex items-center gap-8 font-mono-tag text-xs font-medium text-[#8C8C8C]">
              <a href="#services" className="hover:text-[#141414] transition-colors">
                SERVICES
              </a>
              <a href="#portfolio" className="hover:text-[#141414] transition-colors">
                PORTFOLIO
              </a>
              <a href="#contact" className="hover:text-[#141414] transition-colors">
                CONTACT
              </a>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-[#141414] transition-colors"
                title="Back to top"
              >
                <span>TOP</span>
                <span>&uarr;</span>
              </a>
            </div>

            {/* Copyright Right */}
            <div className="font-mono-tag text-[11px] text-[#8C8C8C]">
              &copy; {new Date().getFullYear()} Forma Studio B.V. &bull; All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
