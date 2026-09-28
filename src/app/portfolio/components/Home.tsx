"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GREEN = "#91FF16";
const DARK_GREEN = "#32B531";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const avatarWrapRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // ==================================================
  // ENTRANCE ANIMATION
  // ==================================================
  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(
        [
          ".hero-eyebrow",
          ".hero-hello",
          ".hero-name-line",
          ".hero-role",
          ".hero-desc",
          ".hero-cta",
          ".hero-ring",
          ".hero-avatar",
          ".hero-footer",
        ],
        {
          opacity: 1,
          clearProps: "all",
        }
      );

      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".hero-eyebrow",
        {
          opacity: 0,
          x: -18,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
        }
      )

        .fromTo(
          ".hero-hello",
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.3"
        )

        .fromTo(
          ".hero-name-line",
          {
            opacity: 0,
            y: 55,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
            stagger: 0.1,
          },
          "-=0.2"
        )

        .fromTo(
          ".hero-role",
          {
            opacity: 0,
            x: -16,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          },
          "-=0.35"
        )

        .fromTo(
          ".hero-desc",
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        )

        .fromTo(
          ".hero-cta",
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.25"
        )

        .fromTo(
          ".hero-ring",
          {
            opacity: 0,
            scale: 0.82,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.7"
        )

        .fromTo(
          ".hero-avatar",
          {
            opacity: 0,
            y: 45,
            scale: 0.96,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.55"
        )

        .fromTo(
          ".hero-footer",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3"
        );
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  // ==================================================
  // IDLE MOTION
  // ==================================================
  useEffect(() => {
    if (!avatarRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const float = gsap.to(avatarRef.current, {
      y: -12,
      duration: 3.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const breathe = gsap.to(".avatar-glow", {
      opacity: 0.8,
      scale: 1.08,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const ringA = gsap.to(".hero-ring-outer", {
      rotate: 360,
      duration: 65,
      repeat: -1,
      ease: "none",
    });

    const ringB = gsap.to(".hero-ring-dashed", {
      rotate: -360,
      duration: 95,
      repeat: -1,
      ease: "none",
    });

    const ringC = gsap.to(".hero-ring-inner", {
      rotate: 360,
      duration: 45,
      repeat: -1,
      ease: "none",
    });

    const scrollCue = gsap.to(".scroll-cue", {
      y: 5,
      opacity: 0.55,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      float.kill();
      breathe.kill();
      ringA.kill();
      ringB.kill();
      ringC.kill();
      scrollCue.kill();
    };
  }, []);

  // ==================================================
  // POINTER PARALLAX
  // ==================================================
  useEffect(() => {
    const hero = heroRef.current;
    const avatar = avatarWrapRef.current;

    if (!hero || !avatar) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const quickX = gsap.quickTo(avatar, "x", {
      duration: 0.65,
      ease: "power2.out",
    });

    const quickY = gsap.quickTo(avatar, "y", {
      duration: 0.65,
      ease: "power2.out",
    });

    const handleMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;

      const relX = (event.clientX / innerWidth - 0.5) * 2;
      const relY = (event.clientY / innerHeight - 0.5) * 2;

      quickX(relX * 12);
      quickY(relY * 8);
    };

    const handleLeave = () => {
      quickX(0);
      quickY(0);
    };

    hero.addEventListener("pointermove", handleMove);
    hero.addEventListener("pointerleave", handleLeave);

    return () => {
      hero.removeEventListener("pointermove", handleMove);
      hero.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  // ==================================================
  // AMBIENT PARTICLES
  // ==================================================
  useEffect(() => {
    const container = particlesRef.current;

    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const nodes = Array.from(container.children);

    nodes.forEach((node, index) => {
      gsap.set(node, {
        left: `${Math.random() * 100}%`,
        bottom: "-5%",
        opacity: 0,
      });

      gsap.to(node, {
        bottom: "105%",
        opacity: () => 0.08 + Math.random() * 0.22,
        x: () => (Math.random() - 0.5) * 90,
        duration: () => 12 + Math.random() * 14,
        repeat: -1,
        delay: index * 1.1,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#070707]"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main green glow */}
        <div className="absolute left-[67%] top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#91FF16]/[0.055] blur-[140px]" />

        {/* Secondary glow */}
        <div className="absolute left-[63%] top-[45%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#32B531]/[0.045] blur-[120px]" />

        {/* Dark radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent_0%,rgba(7,7,7,0.84)_76%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(145,255,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(145,255,22,0.3) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />

        {/* Ambient particles */}
        <div
          ref={particlesRef}
          className="absolute inset-0 overflow-hidden"
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <span
              key={index}
              className="absolute h-[2px] w-[2px] rounded-full"
              style={{
                backgroundColor: GREEN,
                boxShadow: `0 0 6px ${GREEN}`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center px-6 pt-20 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        {/* ==================================================
            LEFT CONTENT
        ================================================== */}
        <div className="relative z-30 pb-20 md:pb-0">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-7 flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{
                backgroundColor: GREEN,
                boxShadow: `0 0 8px ${GREEN}`,
              }}
            />

            <span
              className="font-mono text-[9px] tracking-[0.35em]"
              style={{
                color: GREEN,
                textShadow: "0 0 14px rgba(145,255,22,0.4)",
              }}
            >
              SYSTEM ONLINE
            </span>
          </div>

          {/* Hello */}
          <p className="hero-hello mb-4 font-mono text-xs tracking-[0.32em] text-white/35">
            HELLO, I&apos;M
          </p>

          {/* Name */}
          <h1 className="overflow-hidden text-[clamp(3.7rem,7vw,6.7rem)] font-black leading-[0.83] tracking-[-0.055em]">
            <span className="hero-name-line block">BHAGVAN</span>

            <span
              className="hero-name-line block"
              style={{
                color: GREEN,
                textShadow: "0 0 35px rgba(145,255,22,0.12)",
              }}
            >
              SINGH.
            </span>
          </h1>

          {/* Role */}
          <h2
            className="hero-role mt-8 font-mono text-sm tracking-[0.22em] md:text-base"
            style={{
              color: DARK_GREEN,
            }}
          >
            FULL-STACK SOFTWARE ENGINEER
          </h2>

          {/* Description */}
          <p className="hero-desc mt-6 max-w-xl text-sm leading-7 text-white/40 md:text-base md:leading-8">
            I build scalable, production-ready web applications
            with modern frontend systems, robust backend APIs
            and AI-powered workflows.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="hero-cta group flex items-center gap-4 border px-6 py-3.5 font-mono text-[10px] font-bold tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,255,22,0.35)]"
              style={{
                borderColor: GREEN,
                backgroundColor: GREEN,
              }}
            >
              VIEW MY WORK

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="hero-cta border border-[#222222] bg-[#070707] px-6 py-3.5 font-mono text-[10px] tracking-[0.2em] text-white/55 transition-all duration-300 hover:border-[#32B531] hover:bg-[#91FF16]/[0.02] hover:text-[#91FF16]"
            >
              LET&apos;S TALK
            </a>
          </div>

          {/* Mini metadata */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            <div>
              <p className="font-mono text-[7px] tracking-[0.25em] text-white/20">
                SPECIALIZATION
              </p>

              <p className="mt-1 font-mono text-[8px] tracking-[0.12em] text-white/45">
                WEB ENGINEERING
              </p>
            </div>

            <div>
              <p className="font-mono text-[7px] tracking-[0.25em] text-white/20">
                FOCUS
              </p>

              <p className="mt-1 font-mono text-[8px] tracking-[0.12em] text-white/45">
                FULL-STACK + AI
              </p>
            </div>

            <div>
              <p className="font-mono text-[7px] tracking-[0.25em] text-white/20">
                STATUS
              </p>

              <p className="mt-1 font-mono text-[8px] tracking-[0.12em] text-[#32B531]">
                AVAILABLE
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            RIGHT — AVATAR
        ================================================== */}
        <div className="relative flex h-[480px] items-center justify-center md:h-screen">
          {/* Outer glow */}
          <div className="avatar-glow absolute right-[7%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#91FF16]/[0.075] blur-[110px]" />

          {/* Secondary glow */}
          <div className="avatar-glow absolute right-[11%] top-[47%] h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#32B531]/[0.06] blur-[90px]" />

          {/* ==================================================
              OMNITRIX RINGS
          ================================================== */}
          <div className="hero-ring hero-ring-outer absolute right-[9%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[#32B531]/20" />

          <div className="hero-ring hero-ring-dashed absolute right-[14%] top-1/2 h-[375px] w-[375px] -translate-y-1/2 rounded-full border border-dashed border-[#91FF16]/15" />

          <div className="hero-ring hero-ring-inner absolute right-[20%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-[#91FF16]/[0.08]" />

          {/* Small orbital markers */}
          <div className="hero-ring absolute right-[31%] top-[28%] h-2 w-2 rounded-full bg-[#91FF16] shadow-[0_0_12px_#91FF16]" />

          <div className="hero-ring absolute bottom-[28%] right-[14%] h-1.5 w-1.5 rounded-full bg-[#32B531] shadow-[0_0_10px_#32B531]" />

          {/* ==================================================
              AVATAR
          ================================================== */}
          <div
            ref={avatarWrapRef}
            className="hero-avatar relative z-20 h-[470px] w-[470px] md:h-[570px] md:w-[570px]"
          >
            <img
              ref={avatarRef}
              src="/images/avatar.png"
              alt="Bhagvan Singh Lodhi"
              draggable={false}
              className="absolute bottom-[-5px] left-1/2 h-full w-full -translate-x-1/2 object-contain object-bottom"
              style={{
                filter:
                  "drop-shadow(0 0 26px rgba(145,255,22,0.25))",
              }}
            />
          </div>

          {/* Avatar status */}
          <div className="absolute bottom-[7%] right-[5%] hidden font-mono text-[8px] tracking-[0.35em] text-white/20 md:block">
            OMNI-X // CORE ACTIVE
          </div>

          {/* Core marker */}
          <div className="absolute right-[4%] top-[23%] hidden items-center gap-2 md:flex">
            <span className="h-px w-8 bg-[#32B531]/40" />

            <span className="font-mono text-[7px] tracking-[0.25em] text-[#32B531]/60">
              CORE LINK
            </span>
          </div>
        </div>
      </div>

      {/* ==================================================
          FOOTER INFO
      ================================================== */}
      <div className="hero-footer absolute bottom-6 left-6 right-6 z-40 flex items-center justify-between md:left-10 md:right-10">
        <div className="font-mono text-[8px] tracking-[0.3em] text-white/20 md:text-[9px]">
          SOFTWARE ENGINEER // B.TECH CSE
        </div>

        <a
          href="#about"
          className="flex items-center gap-3 font-mono text-[8px] tracking-[0.25em] text-white/25 transition-colors hover:text-white/50 md:text-[9px]"
        >
          EXPLORE PROFILE

          <span
            className="scroll-cue inline-block"
            style={{
              color: GREEN,
            }}
          >
            ↓
          </span>
        </a>
      </div>

      {/* ==================================================
          CORNER SYSTEM MARKERS
      ================================================== */}
      <div className="pointer-events-none absolute left-0 top-20 h-8 w-8 border-l border-t border-[#91FF16]/20" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-[#32B531]/20" />
    </section>
  );
}