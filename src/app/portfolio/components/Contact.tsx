export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#1C2318] bg-[#050704] py-28 md:py-36"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7CFC00]/[0.045] blur-[150px]" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexgrid-contact" width="56" height="98" patternUnits="userSpaceOnUse">
              <path d="M28 0 L56 16 L56 49 L28 65 L0 49 L0 16 Z" fill="none" stroke="#7CFC00" strokeWidth="1" />
              <path d="M28 65 L56 81 L56 114 L28 130 L0 114 L0 81 Z" fill="none" stroke="#7CFC00" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexgrid-contact)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* HEADER */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <OmniMark className="h-5 w-5 text-[#7CFC00]" />
            <span className="font-mono text-[9px] tracking-[0.35em] text-[#7CFC00]/80">
              OPEN CHANNEL
            </span>
          </div>

          <h2
            className="text-[3.4rem] font-black leading-[0.82] tracking-[-0.03em] text-[#F2F5EE] md:text-8xl"
            style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
          >
            LET&apos;S CONNECT
          </h2>
        </div>

        {/* MAIN PANEL */}
        <div className="grid overflow-hidden rounded-2xl border border-[#1C2318] bg-gradient-to-b from-[#0B0F09] to-[#070A06] shadow-[0_0_0_1px_rgba(124,252,0,0.03),0_40px_80px_-40px_rgba(0,0,0,0.9)] md:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div className="p-8 md:p-12 lg:p-14">
            <p className="max-w-2xl text-xl leading-9 text-white/70 md:text-2xl">
              Have a project, opportunity, or idea worth building?
              I&apos;m always open to discussing interesting products
              and engineering challenges.
            </p>

            {/* EMAIL */}
            <div className="mt-10">
              <span className="font-mono text-[8px] tracking-[0.3em] text-[#7CFC00]/70">
                PRIMARY CHANNEL
              </span>

              <a
                href="mailto:bhagvansinghere@gmail.com"
                className="mt-3 block text-xl font-semibold text-[#F2F5EE] transition-colors hover:text-[#7CFC00] md:text-2xl"
              >
                bhagvansinghere@gmail.com
              </a>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="mailto:bhagvansinghere@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-[#7CFC00]/60 px-6 py-4 font-mono text-[9px] font-bold tracking-[0.2em] text-[#7CFC00] transition-all duration-300 hover:bg-[#7CFC00] hover:text-black"
              >
                INITIATE CONTACT
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative border-t border-[#1C2318] p-8 md:border-l md:border-t-0 md:p-10">
            {/* DIAL WITH PHOTO */}
            <div className="flex justify-center">
              <div className="relative flex h-36 w-36 items-center justify-center">
                <div className="absolute inset-0 animate-[spin_26s_linear_infinite] rounded-full border border-dashed border-[#7CFC00]/25" />
                <div className="absolute inset-3 rounded-full border border-[#7CFC00]/15" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_45px_rgba(124,252,0,0.18)]" />

                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#7CFC00]/50 shadow-[inset_0_0_20px_rgba(124,252,0,0.15),0_0_20px_rgba(124,252,0,0.25)]">
                  <img
                    src="/images/image.png"
                    alt="Bhagvan Singh Lodhi"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#7CFC00]/10 mix-blend-overlay" />
                  <div className="absolute inset-0 shadow-[inset_0_0_18px_rgba(0,0,0,0.6)]" />
                </div>
              </div>
            </div>

            {/* STATUS */}
            <div className="mt-10 border-t border-[#1C2318] pt-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.25em] text-white/25">
                  COMMUNICATION
                </span>

                <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.2em] text-[#7CFC00]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7CFC00] shadow-[0_0_8px_#7CFC00]" />
                  ONLINE
                </span>
              </div>

              <div className="mt-6 space-y-4 font-mono text-[8px] tracking-[0.18em]">
                <div className="flex justify-between">
                  <span className="text-white/25">STATUS</span>
                  <span className="text-white/55">AVAILABLE</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/25">MODE</span>
                  <span className="text-white/55">REMOTE / HYBRID</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/25">RESPONSE</span>
                  <span className="text-[#32B531]">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-between border-t border-[#1C2318] pt-5">
          <span className="font-mono text-[7px] tracking-[0.3em] text-white/15">
            OMNITRIX INTERFACE // COMMUNICATION CHANNEL // 004
          </span>

          <span className="font-mono text-[7px] tracking-[0.3em] text-[#7CFC00]/50">
            CHANNEL READY
          </span>
        </div>
      </div>
    </section>
  );
}

/// Simplified Omnitrix hourglass mark — shared visual language across sections
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