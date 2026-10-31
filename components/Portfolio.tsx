import Image from "next/image";

const projects = [
  {
    title: "Arco Finance — Brand Identity",
    category: "Brand Identity",
    image: "/images/portfolio-arco.jpg",
    year: "2026",
    gradient: "linear-gradient(135deg, #3B5BDB 0%, #0D1A5C 100%)",
    span: "sm:col-span-2",
  },
  {
    title: "Kova App — UI Design",
    category: "UI Design",
    image: "/images/portfolio-kova.jpg",
    year: "2025",
    gradient: "linear-gradient(135deg, #141414 0%, #3B5BDB 100%)",
    span: "sm:col-span-1",
  },
  {
    title: "Nore Studio — Web Build",
    category: "Web Build",
    image: "/images/portfolio-nore.jpg",
    year: "2025",
    gradient: "linear-gradient(135deg, #0D1A5C 0%, #3B5BDB 100%)",
    span: "sm:col-span-1",
  },
  {
    title: "Vesper Launch Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio-vesper.jpg",
    year: "2026",
    gradient: "linear-gradient(135deg, #3B5BDB 0%, #141414 100%)",
    span: "sm:col-span-2",
  },
  {
    title: "Lumen Health — Brand",
    category: "Brand",
    image: "/images/portfolio-lumen.jpg",
    year: "2025",
    gradient: "linear-gradient(135deg, #0D1A5C 0%, #141414 100%)",
    span: "sm:col-span-1",
  },
  {
    title: "Shift Dashboard — Product UI",
    category: "Product UI",
    image: "/images/portfolio-shift.jpg",
    year: "2026",
    gradient: "linear-gradient(135deg, #141414 0%, #0D1A5C 100%)",
    span: "sm:col-span-2",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-[#E0E0E0] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tag text-xs font-semibold tracking-widest text-[#3B5BDB] uppercase">
              // 02 &mdash; Selected Work
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#141414] sm:text-3xl md:text-4xl">
              Projects we&rsquo;re proud of
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono-tag rounded-full border border-[#E0E0E0] bg-white px-3.5 py-1 text-xs font-medium text-[#141414]">
              [ 06 CASE STUDIES ]
            </span>
            <span className="font-mono-tag rounded-full border border-[#E0E0E0] bg-white px-3.5 py-1 text-xs font-medium text-[#8C8C8C]">
              2025 &mdash; 2026
            </span>
          </div>
        </div>

        {/* 3-column Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative h-[320px] sm:h-[380px] lg:h-[420px] w-full overflow-hidden rounded-2xl border border-[#E0E0E0] bg-[#141414] shadow-sm transition-all duration-300 hover:border-[#3B5BDB]/50 ${project.span}`}
              style={{ background: project.gradient }}
            >
              {/* Properly Filled Full-Bleed Image with Object Cover */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Permanent Category Badge Top-Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#141414]/70 px-3.5 py-1 font-mono-tag text-[11px] font-medium text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3B5BDB]" />
                  {project.category}
                </span>
              </div>

              {/* Neat Permanent Bottom Gradient for Readability + Rich Hover State */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-7 transition-all duration-300 group-hover:from-black/95 group-hover:via-black/60">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-mono-tag text-xs font-semibold tracking-wider text-[#91A7FF] uppercase">
                      {project.category} &bull; {project.year}
                    </p>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-[#3B5BDB] group-hover:scale-110">
                      <span className="text-xs font-bold">↗</span>
                    </div>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white sm:text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
