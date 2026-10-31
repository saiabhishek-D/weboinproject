import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── Fixed Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#E0E0E0] bg-[#F7F7F5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo & Studio Meta */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-1 font-heading text-xl font-bold tracking-tight text-[#141414]"
            >
              <span>Forma</span>
              <span className="inline-block h-2 w-2 rounded-full bg-[#3B5BDB] transition-transform duration-300 group-hover:scale-125" />
            </a>
            <span className="hidden font-mono-tag text-[10px] tracking-widest text-[#8C8C8C] uppercase lg:inline-block border-l border-[#E0E0E0] pl-4">
              AMS &bull; 52.37&deg;N
            </span>
          </div>

          {/* Center Links */}
          <ul className="hidden items-center gap-10 text-xs font-semibold tracking-wider text-[#8C8C8C] uppercase md:flex">
            <li>
              <a
                href="#services"
                className="transition-colors duration-200 hover:text-[#141414]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="transition-colors duration-200 hover:text-[#141414]"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors duration-200 hover:text-[#141414]"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 rounded-full border border-[#E0E0E0] bg-white px-3 py-1 text-xs font-medium text-[#141414] sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available Q3/Q4
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#141414] px-5 py-2 text-xs font-semibold tracking-wider uppercase text-white transition-all duration-200 hover:bg-[#3B5BDB]"
            >
              <span>Let&rsquo;s talk</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-16 sm:pt-36 md:pt-40 lg:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Eyebrow Kicker */}
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="font-mono-tag text-xs font-semibold tracking-widest text-[#3B5BDB] uppercase">
              // 00 &mdash; INDEPENDENT STUDIO
            </span>
            <span className="h-3 w-[1px] bg-[#E0E0E0]" />
            <span className="text-xs text-[#8C8C8C]">Est. 2021 &bull; Global Practice</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
            {/* Left Column — 7 cols */}
            <div className="lg:col-span-7">
              {/* Refined headline with elegant line break and cobalt emphasis */}
              <h1 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-[#141414] sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                We make brands <br className="hidden sm:inline" />
                <span className="text-[#3B5BDB]">that move people.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#8C8C8C] sm:text-lg">
                Forma Studio crafts precision visual identities, high-impact digital
                experiences, and scalable web platforms for founders who refuse to
                blend in.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#3B5BDB] px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-white transition-all duration-200 hover:bg-[#0D1A5C]"
                >
                  <span>View our work</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#141414] underline underline-offset-8 transition-colors duration-200 hover:text-[#3B5BDB]"
                >
                  <span>Get in touch</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column — 5 cols: Abstract Visual Box + Stats */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              {/* Abstract Gradient Box (#3B5BDB → #0D1A5C) with Real Artwork */}
              <div
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E0E0E0] shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #3B5BDB 0%, #0D1A5C 100%)",
                }}
              >
                {/* Real High-Resolution Abstract Artwork - Perfectly Filled */}
                <Image
                  src="/images/hero.jpg"
                  alt="Forma Studio creative digital brand visual"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Studio Label Pills */}
                <div className="absolute top-4 left-4 z-10 rounded-full border border-white/20 bg-[#141414]/60 px-3.5 py-1 text-[11px] font-mono-tag font-semibold text-white backdrop-blur-md">
                  FORMA // VISUAL SYSTEM
                </div>

                <div className="absolute right-4 bottom-4 z-10 rounded-lg border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-mono-tag text-white/95 backdrop-blur-md">
                  v2.4 &bull; 2026
                </div>
              </div>

              {/* Stats Row with 1px borders */}
              <div className="grid grid-cols-3 border border-[#E0E0E0] bg-white divide-x divide-[#E0E0E0] rounded-xl overflow-hidden">
                <div className="p-4 text-center">
                  <p className="font-heading text-xl font-bold text-[#141414] sm:text-2xl">
                    80+
                  </p>
                  <p className="mt-1 font-mono-tag text-[10px] font-semibold tracking-wider text-[#8C8C8C] uppercase">
                    Commissions
                  </p>
                </div>
                <div className="p-4 text-center">
                  <p className="font-heading text-xl font-bold text-[#141414] sm:text-2xl">
                    05
                  </p>
                  <p className="mt-1 font-mono-tag text-[10px] font-semibold tracking-wider text-[#8C8C8C] uppercase">
                    Years Active
                  </p>
                </div>
                <div className="p-4 text-center">
                  <p className="font-heading text-xl font-bold text-[#141414] sm:text-2xl">
                    98%
                  </p>
                  <p className="mt-1 font-mono-tag text-[10px] font-semibold tracking-wider text-[#8C8C8C] uppercase">
                    Retention
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Strip with Architectural Dividers */}
          <div className="mt-16 border-y border-[#E0E0E0] py-5">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <span className="font-mono-tag text-[11px] font-semibold tracking-widest text-[#8C8C8C] uppercase">
                [ TRUSTED BY PIONEERING BRANDS ]
              </span>
              <div className="flex flex-wrap items-center gap-8 text-xs sm:text-sm font-heading font-bold tracking-widest text-[#141414]/75 sm:gap-10">
                <span className="hover:text-[#3B5BDB] transition-colors cursor-default">ARCHETYPE</span>
                <span className="hover:text-[#3B5BDB] transition-colors cursor-default">KOVA LABS</span>
                <span className="hover:text-[#3B5BDB] transition-colors cursor-default">VERSED</span>
                <span className="hover:text-[#3B5BDB] transition-colors cursor-default">LUMEN</span>
                <span className="hover:text-[#3B5BDB] transition-colors cursor-default">SHIFT AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
