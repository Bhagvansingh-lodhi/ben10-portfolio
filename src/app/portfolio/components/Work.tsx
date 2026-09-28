export default function Work() {
  const projects = [
    {
      id: "01",
      title: "STUDENTNEST",
      subtitle: "STUDENT ROOM & PG DISCOVERY",
      description:
        "A full-stack platform for students to discover rooms, PGs and hostels with role-based access for Students, Owners and Admins.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      highlights: [
        "Role-based authentication",
        "Filtered search & pagination",
        "Admin listing approval",
        "Secure REST APIs",
      ],
      github: "#",
      live: "#",
    },
    {
      id: "02",
      title: "STUDYARCHITECT",
      subtitle: "AI LEARNING GENERATOR",
      description:
        "An AI-powered learning platform that generates structured notes, MCQs and revision plans using the Gemini API.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API"],
      highlights: [
        "AI-generated learning content",
        "JWT authentication",
        "Layered architecture",
        "AI response handling",
      ],
      github: "#",
      live: "#",
    },
    {
      id: "03",
      title: "FITGENIE",
      subtitle: "AI FITNESS & MEAL PLANNER",
      description:
        "A full-stack application generating personalized workout and meal plans using the OpenAI API.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
      highlights: [
        "Personalized AI plans",
        "React Query data management",
        "JWT & bcrypt authentication",
        "Protected API routes",
      ],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="work"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#1C2318] bg-[#050704] py-28 md:py-36"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-160px] top-[15%] h-[480px] w-[480px] rounded-full bg-[#7CFC00]/[0.05] blur-[150px]" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[380px] w-[380px] rounded-full bg-[#32B531]/[0.045] blur-[140px]" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexgrid-work" width="56" height="98" patternUnits="userSpaceOnUse">
              <path d="M28 0 L56 16 L56 49 L28 65 L0 49 L0 16 Z" fill="none" stroke="#7CFC00" strokeWidth="1" />
              <path d="M28 65 L56 81 L56 114 L28 130 L0 114 L0 81 Z" fill="none" stroke="#7CFC00" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexgrid-work)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <OmniMark className="h-5 w-5 text-[#7CFC00]" />
              <span className="font-mono text-[9px] tracking-[0.35em] text-[#7CFC00]/80">
                MISSION LOG
              </span>
            </div>

            <h2
              className="text-[3.4rem] font-black leading-[0.82] tracking-[-0.03em] text-[#F2F5EE] md:text-8xl"
              style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
            >
              SELECTED WORK
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start rounded-full border border-[#7CFC00]/25 bg-[#7CFC00]/[0.06] px-4 py-2 md:self-auto">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#7CFC00] shadow-[0_0_10px_#7CFC00]" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#B9F27C]">
              {projects.length} MISSIONS LOGGED
            </span>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-[#1C2318] bg-gradient-to-b from-[#0B0F09] to-[#070A06] transition-colors duration-500 hover:border-[#7CFC00]/35"
            >
              <div className="grid md:grid-cols-[92px_1fr_0.85fr]">
                {/* DIAL / INDEX */}
                <div className="hidden flex-col items-center border-r border-[#1C2318] py-9 md:flex">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#7CFC00]/35">
                    <div className="absolute inset-1 rounded-full border border-dashed border-[#7CFC00]/20" />
                    <OmniMark className="h-5 w-5 text-[#7CFC00]" />
                  </div>
                  <span className="mt-3 font-mono text-xs tracking-[0.15em] text-[#7CFC00]/70">
                    {project.id}
                  </span>
                  <div className="mt-5 h-full w-px bg-gradient-to-b from-[#7CFC00]/40 to-transparent" />
                </div>

                {/* PROJECT INFO */}
                <div className="p-7 md:p-9">
                  <span className="font-mono text-[8px] tracking-[0.3em] text-[#7CFC00]/70">
                    PROJECT // {project.id}
                  </span>

                  <h3
                    className="mt-3 text-3xl font-black tracking-[-0.02em] text-[#F2F5EE] md:text-4xl"
                    style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-[#B9F27C]">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                    {project.description}
                  </p>

                  {/* STACK */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#1C2318] bg-white/[0.02] px-3.5 py-2 font-mono text-[8px] tracking-[0.1em] text-white/40 transition-colors hover:border-[#7CFC00]/50 hover:text-[#B9F27C]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* HIGHLIGHTS */}
                <div className="border-t border-[#1C2318] p-7 md:border-l md:border-t-0 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-white/25">
                      KEY CAPABILITIES
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7CFC00] shadow-[0_0_8px_#7CFC00]" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#32B531]" />
                        <span className="text-sm leading-6 text-white/50">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="mt-8 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#1C2318] px-4 py-2 font-mono text-[8px] tracking-[0.15em] text-white/45 transition-all hover:border-[#7CFC00]/50 hover:text-[#B9F27C]"
                    >
                      GITHUB ↗
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#7CFC00]/40 bg-[#7CFC00]/[0.06] px-4 py-2 font-mono text-[8px] tracking-[0.15em] text-[#B9F27C] transition-all hover:border-[#7CFC00] hover:bg-[#7CFC00]/[0.12]"
                    >
                      LIVE DEMO ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#7CFC00]/[0.04] blur-[90px] transition-all duration-500 group-hover:bg-[#7CFC00]/[0.08]" />
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-between border-t border-[#1C2318] pt-5">
          <span className="font-mono text-[7px] tracking-[0.3em] text-white/15">
            OMNITRIX INTERFACE // MISSION ARCHIVE // 003
          </span>
          <span className="font-mono text-[7px] tracking-[0.3em] text-[#7CFC00]/50">
            {projects.length} PROJECTS LOADED
          </span>
        </div>
      </div>
    </section>
  );
}

/// Simplified Omnitrix hourglass mark — shared visual language with About and Skills
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