"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const RADIUS = 68;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const STAGES = [
  { at: 0, label: "Initializing system" },
  { at: 25, label: "Loading DNA database" },
  { at: 55, label: "Calibrating core" },
  { at: 85, label: "Syncing forms" },
  { at: 100, label: "System ready" },
];

export default function LoadingScreen() {
  const router = useRouter();

  const containerRef = useRef<HTMLElement>(null);
  const watchRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  const [stage, setStage] = useState(0);

  // Fade the status text in whenever the stage changes
  useEffect(() => {
    gsap.fromTo(statusRef.current, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
  }, [stage]);

  useEffect(() => {
    let redirect: gsap.core.Tween | undefined;

    const ctx = gsap.context(() => {
      // Entrance
      gsap
        .timeline()
        .fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" })
        .fromTo(
          watchRef.current,
          { opacity: 0, scale: 0.6, filter: "blur(8px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(glowRef.current, { opacity: 0 }, { opacity: 1, duration: 1.4, ease: "power2.out" }, "-=0.9");

      // Idle motion
      gsap.to(watchRef.current, { scale: 1.045, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
      gsap.to(glowRef.current, { opacity: 0.65, scale: 1.12, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
      gsap.to(".sheen-ring", { rotate: 360, duration: 14, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
      gsap.fromTo(".bar-shimmer", { x: -40 }, { x: 440, duration: 1.8, repeat: -1, ease: "none" });

      // Progress 0 -> 100
      const loader = { value: 0 };
      gsap.to(loader, {
        value: 100,
        duration: 5,
        ease: "power1.inOut",
        onUpdate: () => {
          const v = Math.round(loader.value);
          if (barRef.current) barRef.current.style.width = `${loader.value}%`;
          if (percentRef.current) percentRef.current.textContent = `${String(v).padStart(3, "0")}%`;
          if (ringRef.current) ringRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - loader.value / 100));
          setStage(STAGES.reduce((acc, s, i) => (v >= s.at ? i : acc), 0));
        },
        onComplete: () => {
          gsap.to(watchRef.current, { scale: 1.14, duration: 0.18, repeat: 1, yoyo: true, ease: "power2.out" });
          gsap.to(glowRef.current, { opacity: 1, scale: 1.3, duration: 0.4, ease: "power2.out" });
          redirect = gsap.delayedCall(0.6, () => router.push("/aliens"));
        },
      });
    }, containerRef);

    return () => {
      redirect?.kill();
      ctx.revert();
    };
  }, [router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#040605] text-white selection:bg-[#8CFF00] selection:text-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-[-5%] opacity-[0.045]"
          style={{
            backgroundImage: "linear-gradient(rgba(140,255,0,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(140,255,0,.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 70%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8CFF00]/[0.07] blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_15%,rgba(0,0,0,.85)_85%)]" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[16vw] font-black leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(140,255,0,.06)" }}
        >
          OMNI-X
        </div>
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 md:px-12">
        <div className="font-mono text-lg font-black tracking-[0.18em]">
          OMNI<span className="text-[#8CFF00]">-X</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#8CFF00]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8CFF00] shadow-[0_0_8px_#8CFF00]" />
          Booting
        </div>
      </header>

      <section ref={containerRef} className="relative z-10 flex w-full flex-col items-center gap-14 px-6">
        {/* Core badge */}
        <div className="relative flex aspect-square w-[min(64vw,300px,40vh)] items-center justify-center">
          <div ref={glowRef} className="absolute h-full w-full rounded-full bg-[#8CFF00]/20 blur-3xl" />

          {/* Tick ring */}
          <svg viewBox="0 0 100 100" className="absolute h-[118%] w-[118%]">
            <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(140,255,0,.3)" strokeWidth="1" strokeDasharray="0.25 1.85" />
          </svg>

          {/* Rotating sheen */}
          <div
            className="sheen-ring absolute h-[96%] w-[96%] rounded-full opacity-70"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, rgba(140,255,0,.55) 12%, transparent 24%, transparent 100%)",
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            }}
          />

          {/* Progress ring */}
          <svg viewBox="0 0 160 160" className="absolute h-full w-full -rotate-90">
            <circle cx="80" cy="80" r={RADIUS} fill="none" stroke="rgba(140,255,0,.12)" strokeWidth="2.5" />
            <circle
              ref={ringRef}
              cx="80"
              cy="80"
              r={RADIUS}
              fill="none"
              stroke="#8CFF00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE}
              style={{ filter: "drop-shadow(0 0 8px rgba(140,255,0,.9))" }}
            />
          </svg>

          {/* Dark backing so the image has depth */}
          <div
            className="absolute h-[72%] w-[72%] rounded-full bg-black"
            style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,.9), 0 0 40px rgba(140,255,0,.3)" }}
          />

          {/* mix-blend-screen removes the black background of the PNG */}
          <img
            ref={watchRef}
            src="/images/image.png"
            alt="System core"
            draggable={false}
            className="relative z-10 h-[64%] w-[64%] select-none object-contain mix-blend-screen"
            style={{ filter: "drop-shadow(0 0 14px rgba(140,255,0,.6))" }}
          />
        </div>

        {/* Status + progress */}
        <div className="w-[min(420px,88vw)]">
          <div
            className="flex items-center justify-center gap-2 font-mono text-xs text-[#8CFF00]"
            style={{ textShadow: "0 0 14px rgba(140,255,0,.5)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00] shadow-[0_0_10px_#8CFF00]" />
            <span ref={statusRef}>{STAGES[stage].label}</span>
          </div>

          <div className="mb-2 mt-6 flex justify-between font-mono text-[11px] text-white/35">
            <span>System boot</span>
            <span ref={percentRef} className="text-[#8CFF00]">000%</span>
          </div>

          <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
            <div
              ref={barRef}
              className="relative h-full w-0 overflow-hidden rounded-full"
              style={{
                background: "linear-gradient(90deg, #4f8f00 0%, #8CFF00 60%, #e8ffbf 100%)",
                boxShadow: "0 0 12px rgba(140,255,0,.9), 0 0 25px rgba(140,255,0,.45)",
              }}
            >
              <div className="bar-shimmer absolute inset-y-0 w-10 bg-white/40 blur-[2px]" />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {STAGES.map((s, i) => (
              <div key={s.label} title={s.label} className={`h-[2px] rounded-full transition-colors duration-500 ${i <= stage ? "bg-[#8CFF00]" : "bg-white/10"}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}