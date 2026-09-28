export default function Skills() {
  const skillGroups = [
    {
      id: "01",
      title: "LANGUAGES",
      description: "Core programming & data",
      skills: ["JavaScript", "TypeScript", "Java", "SQL"],
    },
    {
      id: "02",
      title: "FRONTEND",
      description: "Modern web interfaces",
      skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    },
    {
      id: "03",
      title: "BACKEND",
      description: "APIs & server systems",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    },
    {
      id: "04",
      title: "DATABASE",
      description: "Data & caching systems",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      id: "05",
      title: "CLOUD & DEVOPS",
      description: "Deployment & infrastructure",
      skills: ["AWS", "Docker", "GitHub Actions", "Vercel"],
    },
    {
      id: "06",
      title: "AI / GEN AI",
      description: "LLM-powered applications",
      skills: ["RAG Pipelines", "Vector Databases", "LLM APIs", "Prompt Engineering"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#1C2318] bg-[#050704] py-28 md:py-36"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7CFC00]/[0.04] blur-[150px]" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexgrid-skills" width="56" height="98" patternUnits="userSpaceOnUse">
              <path d="M28 0 L56 16 L56 49 L28 65 L0 49 L0 16 Z" fill="none" stroke="#7CFC00" strokeWidth="1" />
              <path d="M28 65 L56 81 L56 114 L28 130 L0 114 L0 81 Z" fill="none" stroke="#7CFC00" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexgrid-skills)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <OmniMark className="h-5 w-5 text-[#7CFC00]" />
              <span className="font-mono text-[9px] tracking-[0.35em] text-[#7CFC00]/80">
                ABILITY MATRIX
              </span>
            </div>

            <h2
              className="text-[3.4rem] font-black leading-[0.82] tracking-[-0.03em] text-[#F2F5EE] md:text-8xl"
              style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
            >
              MY SKILLS
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start rounded-full border border-[#7CFC00]/25 bg-[#7CFC00]/[0.06] px-4 py-2 md:self-auto">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#7CFC00] shadow-[0_0_10px_#7CFC00]" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#B9F27C]">
              SKILLS LOADED
            </span>
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="group relative overflow-hidden rounded-2xl border border-[#1C2318] bg-gradient-to-b from-[#0B0F09] to-[#070A06] p-7 transition-colors duration-300 hover:border-[#7CFC00]/35 md:p-9"
            >
              {/* CARD HEADER */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[8px] tracking-[0.3em] text-[#7CFC00]/70">
                    MODULE {group.id}
                  </span>

                  <h3
                    className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#F2F5EE] md:text-3xl"
                    style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
                  >
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/35">{group.description}</p>
                </div>

                {/* DIAL */}
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#7CFC00]/30">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#7CFC00]/20" />
                  <OmniMark className="h-5 w-5 text-[#7CFC00]" />
                </div>
              </div>

              {/* SKILLS */}
              <div className="mt-8 grid grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group/skill rounded-lg border border-[#1C2318] bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-[#7CFC00]/50 hover:bg-[#7CFC00]/[0.05]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#32B531] shadow-[0_0_6px_#32B531] transition-all group-hover/skill:bg-[#7CFC00] group-hover/skill:shadow-[0_0_7px_#7CFC00]" />

                      <span className="font-mono text-[9px] tracking-[0.08em] text-white/50 transition-colors group-hover/skill:text-[#B9F27C]">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STATUS */}
        <div className="mt-8 flex items-center justify-between border-t border-[#1C2318] pt-5">
          <span className="font-mono text-[7px] tracking-[0.3em] text-white/15">
            OMNITRIX INTERFACE // SKILL MATRIX // 002
          </span>

          <span className="font-mono text-[7px] tracking-[0.3em] text-[#7CFC00]/50">
            ALL SYSTEMS READY
          </span>
        </div>
      </div>
    </section>
  );
}

function OmniMark({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M13 12 L27 12 L20 20 L27 28 L13 28 L20 20 Z"
        fill="currentColor"
      />
    </svg>
  );
}