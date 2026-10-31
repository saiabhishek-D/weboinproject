const services = [
  {
    number: "// 01",
    title: "UI/UX Design",
    description:
      "Research-driven digital interfaces that balance refined aesthetics with frictionless usability, ensuring every interaction feels intuitive and purposeful.",
    tags: ["Design Systems", "Product Strategy", "Interactive Prototyping", "iOS & Web Apps"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    number: "// 02",
    title: "Web Development",
    description:
      "Performant, accessible websites engineered with Next.js, modern CSS, and headless architectures — lightning fast by default, beautiful by design.",
    tags: ["Next.js & React", "Headless CMS", "Creative Interactions", "Technical SEO"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2 2" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "// 03",
    title: "Branding",
    description:
      "From positioning strategy to distinctive visual identity systems — we create coherent brand universes that stand the test of time across every touchpoint.",
    tags: ["Visual Identity", "Brand Guidelines", "Custom Typography", "Packaging & Print"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "// 04",
    title: "Digital Marketing",
    description:
      "Data-informed go-to-market campaigns across organic and paid channels that amplify reach, capture intent, and deliver measurable revenue growth.",
    tags: ["Go-to-Market", "Performance Creative", "Content Strategy", "Conversion Optimization"],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-[#E0E0E0] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-mono-tag text-xs font-semibold tracking-widest text-[#3B5BDB] uppercase">
              // 01 &mdash; What we do
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#141414] sm:text-3xl md:text-4xl">
              Services built around your goals
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#8C8C8C]">
            We operate as an embedded design partner — aligning brand expression,
            engineering execution, and strategic product thinking into cohesive digital outcomes.
          </p>
        </div>

        {/* 4 Cards in 2x2 CSS Grid separated by 1px borders */}
        <div className="grid grid-cols-1 border border-[#E0E0E0] bg-[#E0E0E0] gap-[1px] sm:grid-cols-2 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col justify-between bg-[#F7F7F5] p-8 transition-all duration-300 hover:bg-white md:p-10"
            >
              <div>
                {/* Top Row: 48x48 dark icon box + number + arrow */}
                <div className="flex items-center justify-between">
                  {/* Small dark icon box (48x48) */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#141414] text-[#F7F7F5] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#3B5BDB]">
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tag text-xs font-bold text-[#8C8C8C] tracking-wider">
                      {service.number}
                    </span>
                    <span className="text-sm font-bold text-[#8C8C8C] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#3B5BDB]">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-[#141414]">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#8C8C8C]">
                  {service.description}
                </p>
              </div>

              {/* Deliverable Tags */}
              <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-[#E0E0E0]/60">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E0E0E0] bg-white px-3 py-1 font-mono-tag text-[11px] text-[#141414]/80 transition-colors group-hover:border-[#3B5BDB]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
