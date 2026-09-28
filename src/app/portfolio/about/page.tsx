"use client";

import { useRouter } from "next/navigation";

const stack = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "TAILWIND CSS",
  "GSAP",
  "NODE.JS",
  "GIT",
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#070707]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <button
            onClick={() => router.push("/portfolio")}
            className="font-mono text-lg font-bold tracking-[0.18em]"
          >
            OMNI<span className="text-[#91FF16]">-X</span>
          </button>

          <nav className="hidden items-center gap-10 md:flex">
            <button
              onClick={() => router.push("/portfolio")}
              className="font-mono text-[10px] tracking-[0.3em] text-white/45 transition hover:text-[#91FF16]"
            >
              HOME
            </button>

            <button
              className="font-mono text-[10px] tracking-[0.3em] text-[#91FF16]"
            >
              ABOUT
            </button>

            <button
              onClick={() => router.push("/portfolio/work")}
              className="font-mono text-[10px] tracking-[0.3em] text-white/45 transition hover:text-[#91FF16]"
            >
              WORK
            </button>

            <button
              onClick={() => router.push("/portfolio/contact")}
              className="font-mono text-[10px] tracking-[0.3em] text-white/45 transition hover:text-[#91FF16]"
            >
              CONTACT
            </button>
          </nav>

          <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-[#91FF16]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#91FF16] shadow-[0_0_10px_rgba(145,255,22,0.9)]" />
            AVAILABLE
          </div>
        </div>
      </header>

      {/* =====================================================
          SECTION 01 — HERO
      ===================================================== */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[68%] top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#91FF16]/[0.045] blur-[150px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent_0%,rgba(7,7,7,0.88)_78%)]" />

          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(145,255,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(145,255,22,0.3) 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          {/* LEFT */}
          <div className="relative z-30">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#91FF16]" />

              <span
                className="font-mono text-[10px] tracking-[0.35em] text-[#91FF16]"
                style={{
                  textShadow: "0 0 14px rgba(145,255,22,0.45)",
                }}
              >
                PROFILE
              </span>
            </div>

            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-white/30">
              GET TO KNOW
            </p>

            <h1 className="text-[clamp(4rem,7vw,6.5rem)] font-black leading-[0.82] tracking-[-0.055em]">
              ABOUT
              <br />
              <span className="text-[#91FF16]">ME.</span>
            </h1>

            <p className="mt-9 max-w-md text-[15px] leading-7 text-white/45">
              I'm a full stack developer who enjoys turning ideas into clean,
              interactive and meaningful digital experiences.
            </p>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/25">
              I care about the details — from the interface and animations to
              the code behind the experience.
            </p>

            <button
              onClick={() => router.push("/portfolio/work")}
              className="group mt-9 flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] text-white/45 transition hover:text-[#91FF16]"
            >
              EXPLORE MY WORK

              <span className="text-[#91FF16] transition-transform group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex h-[620px] items-center justify-center">
            <div className="absolute right-[5%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#91FF16]/[0.06] blur-[130px]" />

            <div className="absolute right-[7%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#32B531]/15" />

            <div className="absolute right-[14%] top-1/2 h-[410px] w-[410px] -translate-y-1/2 rounded-full border border-dashed border-[#91FF16]/10" />

            <img
              src="/images/about-hero.png"
              alt="About me"
              draggable={false}
              className="relative z-20 h-[600px] w-[850px] max-w-none object-contain"
            />

            <div className="absolute bottom-[7%] right-[4%] font-mono text-[8px] tracking-[0.35em] text-white/20">
              PROFILE // SYSTEM ANALYZED
            </div>
          </div>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] text-white/25">
          SCROLL TO EXPLORE
          <span className="ml-3 text-[#91FF16]">↓</span>
        </div>
      </section>

      {/* =====================================================
          SECTION 02 — JOURNEY
      ===================================================== */}
      <section className="relative border-t border-white/[0.06] px-6 py-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#91FF16]" />

              <span className="font-mono text-[9px] tracking-[0.35em] text-[#91FF16]">
                01 // JOURNEY
              </span>
            </div>

            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">
              THE
              <span className="text-[#91FF16]"> JOURNEY.</span>
            </h2>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {/* ITEM */}
            <div className="border-t border-white/10 py-8 md:border-r md:pr-10">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#91FF16]">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                CURIOUS
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Started by exploring how websites, interfaces and technology
                work behind the screen.
              </p>
            </div>

            <div className="border-t border-white/10 py-8 md:px-10 md:border-r">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#91FF16]">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                BUILDER
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Turning ideas into real projects and learning through building
                instead of just watching.
              </p>
            </div>

            <div className="border-t border-white/10 py-8 md:pl-10">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#91FF16]">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                DEVELOPER
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Focused on creating polished, fast and interactive web
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 03 — STACK
      ===================================================== */}
      <section className="relative border-t border-white/[0.06] px-6 py-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
            {/* TITLE */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#91FF16]" />

                <span className="font-mono text-[9px] tracking-[0.35em] text-[#91FF16]">
                  02 // STACK
                </span>
              </div>

              <h2 className="text-5xl font-black tracking-[-0.04em] md:text-6xl">
                MY
                <br />
                <span className="text-[#91FF16]">TOOLS.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/30">
                Technologies I use to turn ideas into functional and polished
                digital experiences.
              </p>
            </div>

            {/* STACK GRID */}
            <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
              {stack.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[110px] items-center border-b border-r border-white/10 px-5 transition hover:bg-[#91FF16]/[0.035]"
                >
                  <div>
                    <span className="mb-2 block h-1 w-1 rounded-full bg-[#91FF16]" />

                    <span className="font-mono text-[11px] tracking-[0.16em] text-white/55 transition hover:text-[#91FF16]">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 04 — CTA
      ===================================================== */}
      <section className="relative border-t border-white/[0.06] px-6 py-40 md:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#91FF16]/[0.045] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-mono text-[9px] tracking-[0.35em] text-[#91FF16]">
            NEXT TRANSMISSION
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.05em] md:text-7xl">
            LET'S BUILD
            <br />
            <span className="text-[#91FF16]">SOMETHING.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/30">
            Explore the work and projects behind the system.
          </p>

          <button
            onClick={() => router.push("/portfolio/work")}
            className="group mt-10 inline-flex items-center gap-5 border border-[#91FF16] px-7 py-4 font-mono text-[10px] tracking-[0.25em] text-[#91FF16] transition hover:bg-[#91FF16] hover:text-black hover:shadow-[0_0_35px_rgba(145,255,22,0.25)]"
          >
            VIEW PROJECTS

            <span className="transition-transform group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-white/[0.06] px-6 py-7 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/20">
            OMNI-X // ABOUT
          </span>

          <button
            onClick={() => router.push("/portfolio/work")}
            className="font-mono text-[9px] tracking-[0.25em] text-white/25 transition hover:text-[#91FF16]"
          >
            NEXT // WORK →
          </button>
        </div>
      </footer>
    </main>
  );
}