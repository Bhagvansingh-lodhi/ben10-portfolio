export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#1C2318] bg-[#050704] py-28 md:py-36"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* Omnitrix glow, top-left */}
        <div className="absolute left-[-160px] top-[-80px] h-[520px] w-[520px] rounded-full bg-[#7CFC00]/[0.06] blur-[140px]" />
        {/* Second green glow, bottom-right, for depth */}
        <div className="absolute bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#32B531]/[0.05] blur-[140px]" />

        {/* Hex-plate texture, faint */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexgrid" width="56" height="98" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
              <path
                d="M28 0 L56 16 L56 49 L28 65 L0 49 L0 16 Z"
                fill="none"
                stroke="#7CFC00"
                strokeWidth="1"
              />
              <path
                d="M28 65 L56 81 L56 114 L28 130 L0 114 L0 81 Z"
                fill="none"
                stroke="#7CFC00"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexgrid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <OmniMark className="h-5 w-5 text-[#7CFC00]" />
              <span className="font-mono text-[9px] tracking-[0.35em] text-[#7CFC00]/80">
                DNA SAMPLE LOCKED
              </span>
            </div>

            <h2
              className="text-[3.4rem] font-black leading-[0.82] tracking-[-0.03em] text-[#F2F5EE] md:text-8xl"
              style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
            >
              ABOUT ME
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start rounded-full border border-[#7CFC00]/25 bg-[#7CFC00]/[0.06] px-4 py-2 md:self-auto">
            <span className="h-2 w-2 rounded-full bg-[#7CFC00] shadow-[0_0_10px_#7CFC00]" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#B9F27C]">
              FORM ACTIVE
            </span>
          </div>
        </div>

        {/* MAIN PANEL */}
        <div className="grid overflow-hidden rounded-2xl border border-[#1C2318] bg-gradient-to-b from-[#0B0F09] to-[#070A06] shadow-[0_0_0_1px_rgba(124,252,0,0.03),0_40px_80px_-40px_rgba(0,0,0,0.9)] md:grid-cols-[0.36fr_1fr]">
          {/* LEFT — THE DIAL */}
          <div className="relative flex flex-col justify-between border-b border-[#1C2318] p-8 md:border-b-0 md:border-r md:p-10">
            <div>
              <p className="font-mono text-[8px] tracking-[0.3em] text-[#7CFC00]/60">
                SUBJECT ID
              </p>
              <p className="mt-1 font-mono text-xs tracking-[0.15em] text-white/70">
                BS—L01
              </p>
            </div>

            {/* DIAL */}
            <div className="relative mx-auto my-10 flex h-44 w-44 items-center justify-center">
              <div className="absolute inset-0 animate-[spin_26s_linear_infinite] rounded-full border border-dashed border-[#7CFC00]/25" />
              <div className="absolute inset-4 rounded-full border border-[#7CFC00]/15" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_45px_rgba(124,252,0,0.18)]" />

              {/* tick marks */}
              <svg viewBox="0 0 176 176" className="absolute inset-0 h-full w-full">
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i / 24) * 360;
                  return (
                    <rect
                      key={i}
                      x="87"
                      y="4"
                      width="2"
                      height="8"
                      fill="#7CFC00"
                      opacity={i % 6 === 0 ? 0.6 : 0.2}
                      transform={`rotate(${angle} 88 88)`}
                    />
                  );
                })}
              </svg>

              <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#7CFC00]/50 shadow-[inset_0_0_20px_rgba(124,252,0,0.15),0_0_20px_rgba(124,252,0,0.25)]">
                <img
                  src="/images/image.png"
                  alt="Bhagvan Singh Lodhi"
                  className="h-full w-full object-cover"
                />
                {/* green tint + vignette so the photo sits inside the tech dial */}
                <div className="absolute inset-0 bg-[#7CFC00]/10 mix-blend-overlay" />
                <div className="absolute inset-0 shadow-[inset_0_0_18px_rgba(0,0,0,0.6)]" />
              </div>
            </div>

            <div className="space-y-1 font-mono text-[9px] leading-6 text-white/30">
              <p>CLASS — ENGINEER</p>
              <p>MODE — FULL_STACK</p>
              <p className="text-[#7CFC00]/70">FORM — SOFTWARE ENGINEER</p>
            </div>
          </div>

          {/* RIGHT — READOUT */}
          <div className="p-8 md:p-12 lg:p-14">
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#7CFC00]/70">
              SUBJECT NAME
            </p>
            <h3
              className="mt-3 text-4xl font-bold tracking-[-0.02em] text-[#F2F5EE] md:text-5xl"
              style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
            >
              Bhagvan Singh Lodhi
            </h3>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 md:text-xl">
              Full-stack software engineer and final-year B.Tech Computer
              Science student, building scalable, production-ready web
              applications.
            </p>

            {/* DETAILS */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <InfoSlot label="Engineering">
                Clean architecture, REST APIs, authentication, performance and
                responsive frontend systems.
              </InfoSlot>
              <InfoSlot label="Workflow">
                AI-assisted development to move faster through building,
                debugging and iteration without cutting engineering quality.
              </InfoSlot>
            </div>

            {/* END TO END — accent slot */}
            <div className="relative mt-6 overflow-hidden rounded-xl border border-[#7CFC00]/25 bg-[#7CFC00]/[0.05] p-6">
              <div className="absolute right-0 top-0 h-full w-1 bg-[#7CFC00]/60" />
              <p className="font-mono text-[8px] tracking-[0.3em] text-[#B9F27C]">
                END-TO-END EXECUTION
              </p>
              <p className="mt-3 text-base leading-7 text-white/60">
                From architecture and development to deployment, I like
                taking a product from an idea to a complete working
                experience.
              </p>
            </div>

            {/* CURRENT EXPLORATION */}
            <div className="mt-8">
              <p className="font-mono text-[8px] tracking-[0.3em] text-white/25">
                Currently exploring
              </p>
              <p className="mt-3 text-base leading-7 text-white/55">
                Scalable backend systems, cloud architecture, AI-assisted
                workflows and performance-focused development.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-8 flex items-center justify-between border-t border-[#1C2318] pt-5">
          <span className="font-mono text-[7px] tracking-[0.3em] text-white/15">
            OMNITRIX INTERFACE // PROFILE 001
          </span>
          <span className="font-mono text-[7px] tracking-[0.3em] text-[#7CFC00]/50">
            SYSTEM READY
          </span>
        </div>
      </div>
    </section>
  );
}

function InfoSlot({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#1C2318] bg-white/[0.02] p-5 transition-colors hover:border-[#7CFC00]/30">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#7CFC00]" />
        <span className="font-mono text-[8px] tracking-[0.25em] text-[#7CFC00]/70">
          {label}
        </span>
      </div>

      <p className="text-sm leading-7 text-white/45">{children}</p>
    </div>
  );
}

// Simplified Omnitrix hourglass mark
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

