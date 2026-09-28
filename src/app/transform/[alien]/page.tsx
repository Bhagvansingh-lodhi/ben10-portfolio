"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import gsap from "gsap";
import { getAlien } from "@/src/data/aliens";

export default function TransformationPage() {
  const params = useParams();
  const router = useRouter();

  const alien = getAlien(String(params.alien));

  const alienRef = useRef<HTMLImageElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!alien) return;

    const alienElement = alienRef.current;
    const core = coreRef.current;
    const ring = ringRef.current;
    const flash = flashRef.current;
    const text = textRef.current;
    const progress = progressRef.current;

    if (!alienElement || !core || !ring || !flash || !text || !progress) {
      return;
    }

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(alienElement, {
        opacity: 0,
        scale: 0.25,
        filter: "brightness(0)",
      });

      gsap.set(core, {
        scale: 0.5,
        opacity: 0,
      });

      gsap.set(ring, {
        scale: 0.4,
        opacity: 0,
        rotate: -90,
      });

      gsap.set(text, {
        opacity: 0,
        y: 12,
      });

      gsap.set(progress, {
        width: "0%",
      });

      gsap.set(flash, {
        opacity: 0,
        scale: 0.3,
      });

      const tl = gsap.timeline();

      // ---------------------------------------------
      // 1. CORE APPEARS
      // ---------------------------------------------

      tl.to(core, {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.7)",
      });

      // ---------------------------------------------
      // 2. RING ACTIVATES
      // ---------------------------------------------

      tl.to(
        ring,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.25"
      );

      // ---------------------------------------------
      // 3. TRANSFORMATION PROGRESS
      // ---------------------------------------------

      tl.to(
        progress,
        {
          width: "100%",
          duration: 2.2,
          ease: "power1.inOut",
        },
        "-=0.25"
      );

      // ---------------------------------------------
      // 4. TEXT
      // ---------------------------------------------

      tl.to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=1.6"
      );

      // ---------------------------------------------
      // 5. ALIEN EMERGES
      // ---------------------------------------------

      tl.to(
        alienElement,
        {
          opacity: 1,
          scale: 0.7,
          filter: "brightness(0.4)",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // ---------------------------------------------
      // 6. POWER SURGE
      // ---------------------------------------------

      tl.to(core, {
        scale: 1.15,
        duration: 0.15,
        ease: "power2.out",
      });

      tl.to(core, {
        scale: 1,
        duration: 0.35,
        ease: "elastic.out(1, 0.5)",
      });

      // ---------------------------------------------
      // 7. FLASH
      // ---------------------------------------------

      tl.to(
        flash,
        {
          opacity: 1,
          scale: 1,
          duration: 0.12,
          ease: "power2.out",
        },
        "-=0.2"
      );

      tl.to(flash, {
        opacity: 0,
        scale: 2.4,
        duration: 0.55,
        ease: "power2.out",
      });

      // ---------------------------------------------
      // 8. FULL ALIEN
      // ---------------------------------------------

      tl.to(
        alienElement,
        {
          scale: 1,
          filter: "brightness(1)",
          duration: 0.75,
          ease: "back.out(1.5)",
        },
        "-=0.35"
      );

      // ---------------------------------------------
      // 9. ENERGY PULSE
      // ---------------------------------------------

      tl.to(
        ring,
        {
          scale: 1.15,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // ---------------------------------------------
      // 10. HOLD
      // ---------------------------------------------

      tl.to({}, {
        duration: 1.2,
      });

      // ---------------------------------------------
      // LATER:
      // PORTFOLIO TRANSITION
      // ---------------------------------------------

      // tl.to(...)

    }, core);

    return () => {
      ctx.revert();
    };
  }, [alien, router]);

  if (!alien) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="font-mono text-sm tracking-[0.3em] text-[#8CFF00]">
          UNKNOWN FORM
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green ambient glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#8CFF00]/[0.035]
            blur-[150px]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#000_80%)]
          "
        />

        {/* Scanlines */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#ffffff 0px,transparent 1px,transparent 4px)",
          }}
        />
      </div>

      {/* ==================================================
          TOP
      ================================================== */}

      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-8 py-7">
        <div className="font-mono text-lg font-bold tracking-[0.18em]">
          OMNI<span className="text-[#8CFF00]">-X</span>
        </div>

        <div className="font-mono text-[10px] tracking-[0.4em] text-white/30">
          TRANSFORMATION
        </div>

        <div className="font-mono text-[10px] tracking-[0.25em] text-[#8CFF00]">
          SYSTEM ACTIVE
        </div>
      </div>

      {/* ==================================================
          CENTER
      ================================================== */}

      <section className="relative flex h-screen w-full items-center justify-center">
        {/* Outer energy ring */}

        <div
          ref={ringRef}
          className="
            absolute
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-[#8CFF00]/30
            shadow-[0_0_40px_rgba(140,255,0,0.12)]
          "
        />

        {/* Second ring */}

        <div
          className="
            absolute
            h-[340px]
            w-[340px]
            rounded-full
            border
            border-[#8CFF00]/10
          "
        />

        {/* Core */}

        <div
          ref={coreRef}
          className="
            absolute
            h-[240px]
            w-[240px]
            rounded-full
            border
            border-[#8CFF00]/50
            bg-[#8CFF00]/[0.035]
            shadow-[0_0_80px_rgba(140,255,0,0.15),inset_0_0_50px_rgba(140,255,0,0.08)]
          "
        />

        {/* Alien */}

        <img
          ref={alienRef}
          src={alien.image}
          alt={alien.name}
          draggable={false}
          className="
            relative
            z-10
            h-[300px]
            w-[300px]
            object-contain
          "
          style={{
            filter:
              "brightness(0) drop-shadow(0 0 20px rgba(140,255,0,0.8))",
          }}
        />

        {/* Flash */}

        <div
          ref={flashRef}
          className="
            pointer-events-none
            absolute
            z-30
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#8CFF00]
            opacity-0
            blur-[4px]
          "
        />

        {/* Text */}

        <div
          ref={textRef}
          className="
            absolute
            bottom-[16%]
            z-20
            text-center
          "
        >
          <div className="font-mono text-[10px] tracking-[0.45em] text-white/30">
            DNA SEQUENCE LOCKED
          </div>

          <div className="mt-3 text-3xl font-bold tracking-[0.15em] text-[#8CFF00]">
            {alien.name}
          </div>

          <div className="mt-2 font-mono text-[9px] tracking-[0.35em] text-white/25">
            TRANSFORMING
          </div>
        </div>

        {/* Progress */}

        <div className="absolute bottom-[9%] h-[2px] w-[260px] overflow-hidden bg-white/10">
          <div
            ref={progressRef}
            className="h-full bg-[#8CFF00] shadow-[0_0_10px_#8CFF00]"
          />
        </div>
      </section>
    </main>
  );
}