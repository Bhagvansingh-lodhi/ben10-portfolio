"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

type Alien = { name: string; image: string };

const aliens: Record<string, Alien> = {
  HEATBLAST: { name: "HEATBLAST", image: "/images/aliens/heatblast.png" },
  "FOUR ARMS": { name: "FOUR ARMS", image: "/images/aliens/fourarms.png" },
  XLR8: { name: "XLR8", image: "/images/aliens/xlr8.png" },
  DIAMONDHEAD: { name: "DIAMONDHEAD", image: "/images/aliens/diamondhead.png" },
  CANNONBOLT: { name: "CANNONBOLT", image: "/images/aliens/cannonbolt.png" },
  UPGRADE: { name: "UPGRADE", image: "/images/aliens/upgrade.png" },
};

const GREEN = "#8CFF00";
const STAGES = [
  "Core activating",
  "DNA sequence locked",
  "Form materializing",
  "Power surge",
  "Transformation complete",
];

export default function TransformPage() {
  const router = useRouter();

  const [alien, setAlien] = useState<Alien | null>(null);
  const [stage, setStage] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const alienRef = useRef<HTMLImageElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const sparksRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  // Load the alien chosen on the previous screen
  useEffect(() => {
    const saved = localStorage.getItem("selectedAlien");
    if (!saved) {
      router.replace("/aliens");
      return;
    }
    const found = aliens[saved.toUpperCase()];
    if (!found) {
      localStorage.removeItem("selectedAlien");
      router.replace("/aliens");
      return;
    }
    setAlien(found);
  }, [router]);

  // Transformation sequence
  useEffect(() => {
    if (!alien || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const say = (i: number) => {
        setStage(i);
        gsap.fromTo(statusRef.current, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      };

      // Initial states
      gsap.set(coreRef.current, { scale: 0, opacity: 0 });
      gsap.set(alienRef.current, { scale: 0.15, opacity: 0, filter: "brightness(0) blur(12px)" });
      gsap.set(".transform-ring", { scale: 0.7, opacity: 0 });
      gsap.set(flashRef.current, { opacity: 0, scale: 0.2 });
      gsap.set(scanRef.current, { y: "-100%", opacity: 0 });
      gsap.from(".info-block", { opacity: 0, y: 16, duration: 0.7, ease: "power3.out" });

      const tl = gsap.timeline();

      tl.to(coreRef.current, { scale: 1, opacity: 1, duration: 0.85, ease: "back.out(1.7)" })
        .to(".transform-ring", { scale: 1, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }, "-=0.55")

        // DNA lock + scan sweep
        .call(() => say(1))
        .to(coreRef.current, { scale: 1.06, duration: 0.25, yoyo: true, repeat: 1, ease: "power2.inOut" })
        .fromTo(scanRef.current, { y: "-100%", opacity: 0 }, { y: "300%", opacity: 0.9, duration: 0.7, ease: "power1.inOut" }, "<")

        // Materialize
        .call(() => say(2))
        .to(alienRef.current, { opacity: 1, scale: 0.75, filter: "brightness(0) blur(4px)", duration: 0.7, ease: "power2.out" })
        .to(alienRef.current, { scale: 1, filter: "brightness(0) blur(0px)", duration: 0.9, ease: "back.out(1.5)" })

        // Power surge
        .call(() => say(3))
        .to(".energy-ring", { boxShadow: "0 0 60px rgba(140,255,0,.95), inset 0 0 40px rgba(140,255,0,.5)", duration: 0.2 })
        .to(coreRef.current, { scale: 1.1, duration: 0.18, repeat: 2, yoyo: true, ease: "power2.inOut" }, "<")

        // Flash
        .to(flashRef.current, { opacity: 1, scale: 1.5, duration: 0.2, ease: "power2.out" })
        .to(flashRef.current, { opacity: 0, scale: 3, duration: 0.55, ease: "power3.out" })

        // Complete
        .call(() => {
          say(4);
          if (sparksRef.current) {
            const sparks = Array.from(sparksRef.current.children);
            gsap.fromTo(
              sparks,
              { opacity: 1, x: 0, y: 0, scale: 1 },
              {
                opacity: 0,
                scale: 0.3,
                duration: 0.9,
                ease: "power2.out",
                x: (i) => Math.cos((i / sparks.length) * Math.PI * 2) * 140,
                y: (i) => Math.sin((i / sparks.length) * Math.PI * 2) * 140,
              }
            );
          }
        })
        .to({}, { duration: 1.5 })
        .call(() => router.push("/portfolio"));

      // Idle motion
      gsap.to(alienRef.current, { scale: 1.04, duration: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 4 });
      gsap.to(".energy-ring", { opacity: 0.6, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 4.5 });
      gsap.to(".ring-a", { rotate: 360, duration: 60, repeat: -1, ease: "none" });
      gsap.to(".ring-b", { rotate: -360, duration: 90, repeat: -1, ease: "none" });
      gsap.fromTo(".bar-shimmer", { x: -40 }, { x: 440, duration: 1.8, repeat: -1, ease: "none" });

      // Progress finishes exactly when the transformation completes
      const p = { v: 0 };
      gsap.to(p, {
        v: 100,
        duration: 4.5,
        ease: "power1.inOut",
        onUpdate: () => {
          const v = Math.round(p.v);
          if (barRef.current) barRef.current.style.width = `${v}%`;
          if (percentRef.current) percentRef.current.textContent = `${String(v).padStart(3, "0")}%`;
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [alien, router]);

  if (!alien) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#040605] text-[#8CFF00]">
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em]">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#8CFF00]" />
          Loading DNA...
        </div>
      </main>
    );
  }

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-[#040605] px-5 pb-8 pt-20 text-white selection:bg-[#8CFF00] selection:text-black"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-[-5%] opacity-[0.045]"
          style={{
            backgroundImage: "linear-gradient(rgba(140,255,0,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(140,255,0,.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 50% 45%, #000 0%, transparent 70%)",
          }}
        />
        <div className="absolute left-1/2 top-[45%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8CFF00]/[0.07] blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_15%,rgba(0,0,0,.85)_85%)]" />
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[12vw] font-black leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(140,255,0,.06)" }}
        >
          {alien.name}
        </div>
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 md:px-12">
        <div className="font-mono text-lg font-black tracking-[0.18em]">
          OMNI<span className="text-[#8CFF00]">-X</span>
        </div>
        <div className="hidden font-mono text-xs text-white/35 sm:block">Transformation</div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#8CFF00]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00] shadow-[0_0_8px_#8CFF00]" />
          System active
        </div>
      </header>

      {/* Stage */}
      <section className="relative z-10 flex aspect-square w-[min(78vw,520px,52vh)] items-center justify-center">
        <div className="transform-ring ring-a absolute h-[94%] w-[94%]">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(140,255,0,.35)" strokeWidth="1.2" strokeDasharray="0.25 1.85" />
          </svg>
        </div>
        <div className="transform-ring ring-b absolute h-[80%] w-[80%] rounded-full border border-dashed border-[#8CFF00]/[0.14]" />
        <div className="transform-ring absolute h-[68%] w-[68%] rounded-full border border-[#8CFF00]/[0.16] bg-[#8CFF00]/[0.02] shadow-[0_0_120px_rgba(140,255,0,.12)]" />

        {/* Omnitrix core */}
        <div ref={coreRef} className="relative z-10 h-[56%] w-[56%] rounded-full">
          <div
            className="absolute inset-0 rounded-full shadow-[0_30px_90px_rgba(0,0,0,.95),inset_0_2px_6px_rgba(255,255,255,.15)]"
            style={{ background: "conic-gradient(from 210deg, #262626, #7a7a7a, #1a1a1a, #4d4d4d, #0e0e0e, #6a6a6a, #262626)" }}
          />
          <div className="absolute inset-[9px] rounded-full bg-[radial-gradient(circle_at_30%_22%,#3a3a3a,#111_50%,#030303)] shadow-[inset_0_0_30px_rgba(0,0,0,.9)]" />
          <div className="energy-ring absolute inset-[16px] rounded-full border-2 border-[#8CFF00] shadow-[0_0_30px_rgba(140,255,0,.55),inset_0_0_28px_rgba(140,255,0,.2)]" />

          <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rotate-45 overflow-hidden rounded-[6px] border-[6px] border-zinc-800 bg-[#8CFF00] shadow-[0_0_50px_rgba(140,255,0,.5)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.35),transparent_40%,rgba(0,0,0,.18))]" />
            <div className="absolute inset-2 rounded-[3px] border border-black/20" />
            <div className="absolute inset-0 flex -rotate-45 items-center justify-center">
              <img ref={alienRef} src={alien.image} alt={alien.name} draggable={false} className="h-[74%] w-[74%] object-contain" style={{ filter: "brightness(0)" }} />
            </div>
          </div>

          {/* DNA scan */}
          <div className="pointer-events-none absolute inset-[16px] overflow-hidden rounded-full">
            <div ref={scanRef} className="absolute inset-x-0 h-1/3 opacity-0" style={{ background: `linear-gradient(to bottom, transparent, ${GREEN}66, transparent)` }} />
          </div>

          <div className="absolute left-1/2 top-[-2px] h-6 w-11 -translate-x-1/2 rounded-full border-2 border-black bg-[#8CFF00] shadow-[0_0_16px_rgba(140,255,0,.85)]" />
          <div className="absolute bottom-[-2px] left-1/2 h-6 w-11 -translate-x-1/2 rounded-full border-2 border-black bg-zinc-700" />
          <div className="absolute left-[-2px] top-1/2 h-11 w-6 -translate-y-1/2 rounded-full border-2 border-black bg-zinc-700" />
          <div className="absolute right-[-2px] top-1/2 h-11 w-6 -translate-y-1/2 rounded-full border-2 border-black bg-[#8CFF00] shadow-[0_0_16px_rgba(140,255,0,.75)]" />
        </div>

        <div ref={flashRef} className="pointer-events-none absolute z-30 h-[70%] w-[70%] rounded-full bg-[#8CFF00]/30 blur-2xl" />

        <div ref={sparksRef} className="pointer-events-none absolute left-1/2 top-1/2 z-30">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="absolute h-1 w-1 rounded-full bg-[#8CFF00] opacity-0 shadow-[0_0_8px_#8CFF00]" />
          ))}
        </div>
      </section>

      {/* Status + progress */}
      <div className="info-block relative z-10 w-[min(440px,88vw)] text-center">
        <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#8CFF00]" style={{ textShadow: "0 0 14px rgba(140,255,0,.5)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00] shadow-[0_0_10px_#8CFF00]" />
          <span ref={statusRef}>{STAGES[stage]}</span>
        </div>

        <h1 className="mt-2 text-4xl font-black tracking-[-0.03em]">{alien.name}</h1>

        <div className="mt-6">
          <div className="mb-2 flex justify-between font-mono text-[11px] text-white/35">
            <span>DNA synchronization</span>
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
              <div key={s} title={s} className={`h-[2px] rounded-full transition-colors duration-500 ${i <= stage ? "bg-[#8CFF00]" : "bg-white/10"}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}