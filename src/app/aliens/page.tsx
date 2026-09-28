"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

type Alien = {
  name: string;
  image: string;
  type: string;
  ability: string;
  secondary: string;
  strength: string;
  weakness: string;
  species: string;
  homeWorld: string;
};

const aliens: Alien[] = [
  { name: "HEATBLAST", image: "/images/aliens/heatblast.png", type: "Pyrokinetic form", ability: "Fire Generation", secondary: "Flight", strength: "High Thermal Resistance", weakness: "Water / Extreme Cold", species: "Pyronite", homeWorld: "Pyros" },
  { name: "FOUR ARMS", image: "/images/aliens/fourarms.png", type: "Power form", ability: "Super Strength", secondary: "Shockwave", strength: "Extreme Durability", weakness: "Agility", species: "Tetramand", homeWorld: "Khoros" },
  { name: "XLR8", image: "/images/aliens/xlr8.png", type: "Speed form", ability: "Hyper Speed", secondary: "Rapid Reflexes", strength: "Acceleration", weakness: "Traction", species: "Kineceleran", homeWorld: "Kinet" },
  { name: "DIAMONDHEAD", image: "/images/aliens/diamondhead.png", type: "Crystalline form", ability: "Crystal Projection", secondary: "Energy Deflection", strength: "Armor", weakness: "Resonance", species: "Petrosapien", homeWorld: "Petropia" },
  { name: "CANNONBOLT", image: "/images/aliens/cannonbolt.png", type: "Kinetic form", ability: "Impact Roll", secondary: "Ballistic Launch", strength: "Impact Resistance", weakness: "Turning Radius", species: "Arburian Pelarota", homeWorld: "Arburia" },
  { name: "UPGRADE", image: "/images/aliens/upgrade.png", type: "Tech form", ability: "Tech Integration", secondary: "System Override", strength: "Adaptability", weakness: "EMP", species: "Galvanic Mechamorph", homeWorld: "Galvan Prime" },
];

const glass = "border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl";

export default function AlienSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [locked, setLocked] = useState(false);
  const alien = aliens[selected];

  const sceneRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const alienRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<HTMLDivElement>(null);

  // One orchestrated intro
  useEffect(() => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .fromTo(".core-shell", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.15)" })
      .fromTo(".hud-header", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.6")
      .fromTo(".info-panel", { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.7 }, "-=0.5")
      .fromTo(".data-panel", { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.7 }, "<")
      .fromTo(".bottom-dock", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    return () => { intro.kill(); };
  }, []);

  // Ambient loops
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tweens = [
      gsap.to(coreRef.current, { y: -8, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" }),
      gsap.to(".energy-ring", { opacity: 0.6, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }),
      gsap.to(".ring-a", { rotate: 360, duration: 60, repeat: -1, ease: "none" }),
      gsap.to(".ring-b", { rotate: -360, duration: 90, repeat: -1, ease: "none" }),
    ];
    return () => tweens.forEach((t) => t.kill());
  }, []);

  // Transition on alien change
  useEffect(() => {
    if (!alienRef.current || !nameRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(alienRef.current, { opacity: 0, scale: 0.7, rotate: -4 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.45, ease: "back.out(1.5)" })
      .fromTo(nameRef.current, { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.45 }, "<")
      .fromTo(".ghost-name", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "<");
    gsap.fromTo(".stat-item", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" });
    return () => { tl.kill(); };
  }, [selected]);

  const changeAlien = useCallback(
    (direction: number) => {
      if (locked) return;
      setSelected((c) => (c + direction + aliens.length) % aliens.length);
    },
    [locked]
  );

  const selectAlien = useCallback(() => {
    if (locked) return;
    setLocked(true);
    localStorage.setItem("selectedAlien", alien.name);

    // Compress, snap, surge, spin
    gsap.timeline({ defaults: { overwrite: "auto" } })
      .to(coreRef.current, { scale: 0.91, duration: 0.12, ease: "power4.in" })
      .to(coreRef.current, { scale: 1.035, duration: 0.16, ease: "power3.out" })
      .to(coreRef.current, { scale: 1, duration: 0.12, ease: "power2.inOut" })
      .to(".energy-ring", { boxShadow: "0 0 60px rgba(140,255,0,.95), inset 0 0 40px rgba(140,255,0,.5)", borderWidth: 4, duration: 0.16 }, "<")
      .to(".hero-core", { scale: 1.08, duration: 0.18, ease: "power2.out" })
      .to(".hero-core", { scale: 1, duration: 0.22, ease: "power3.in" });

    // Alien pulled out of the core
    gsap.timeline()
      .to(alienRef.current, { scale: 0.72, opacity: 0.45, duration: 0.18, ease: "power2.in" })
      .to(alienRef.current, { scale: 1.12, opacity: 1, filter: "brightness(0) drop-shadow(0 0 14px rgba(140,255,0,.9))", duration: 0.32, ease: "back.out(2)" })
      .to(alienRef.current, { scale: 1, filter: "brightness(0)", duration: 0.28, ease: "power3.out" });

    // Shockwaves
    gsap.fromTo(".activation-ring", { opacity: 1, scale: 0.45, borderWidth: 3 }, { opacity: 0, scale: 2.25, borderWidth: 1, duration: 0.8, ease: "power3.out" });
    gsap.fromTo(".activation-ring", { opacity: 0.8, scale: 0.55 }, { opacity: 0, scale: 1.7, duration: 0.55, delay: 0.12, ease: "power2.out" });

    // Sparks
    if (sparksRef.current) {
      const sparks = Array.from(sparksRef.current.children);
      gsap.fromTo(sparks, { opacity: 0, scale: 0, x: 0, y: 0 }, { opacity: 1, scale: 1, duration: 0.12, stagger: 0.015, ease: "power2.out" });
      gsap.to(sparks, {
        opacity: 0,
        scale: 0.1,
        duration: 0.75,
        ease: "power3.out",
        x: (i) => Math.cos((i / sparks.length) * Math.PI * 2) * (110 + Math.random() * 55),
        y: (i) => Math.sin((i / sparks.length) * Math.PI * 2) * (110 + Math.random() * 55),
      });
    }

    // Flash, then navigate
    gsap.timeline({ delay: 0.9 })
      .set(flashRef.current, { opacity: 0, scale: 0.05 })
      .to(flashRef.current, { opacity: 0.92, scale: 1, duration: 0.22, ease: "power2.in" })
      .to(flashRef.current, { opacity: 0, duration: 0.28, ease: "power2.out", onStart: () => router.push("/transform") });
  }, [alien.name, locked, router]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") changeAlien(-1);
      if (e.key === "ArrowRight") changeAlien(1);
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectAlien();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [changeAlien, selectAlien]);

  // Pointer parallax
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(".hero-core", { rotationY: x * 6, rotationX: -y * 6, duration: 0.7, ease: "power3.out", overwrite: "auto" });
      gsap.to(".ambient-grid", { x: x * -12, y: y * -6, duration: 1, ease: "power2.out", overwrite: "auto" });
    };
    scene.addEventListener("pointermove", move);
    return () => scene.removeEventListener("pointermove", move);
  }, []);

  const stats = [
    ["Primary", alien.ability],
    ["Secondary", alien.secondary],
    ["Strength", alien.strength],
    ["Weakness", alien.weakness],
  ];

  return (
    <main
      ref={sceneRef}
      className="relative min-h-screen overflow-hidden bg-[#040605] text-white selection:bg-[#8CFF00] selection:text-black"
    >
      <div
        ref={flashRef}
        className="pointer-events-none fixed inset-0 z-[100] opacity-0"
        style={{ background: "radial-gradient(circle, rgba(140,255,0,.95) 0%, rgba(140,255,0,.35) 35%, transparent 72%)" }}
      />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="ambient-grid absolute inset-[-5%] opacity-[0.045]"
          style={{
            backgroundImage: "linear-gradient(rgba(140,255,0,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(140,255,0,.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 70%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8CFF00]/[0.07] blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_15%,rgba(0,0,0,.85)_85%)]" />
        {/* Giant outlined name behind the core */}
        <div
          key={alien.name}
          className="ghost-name absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[12vw] font-black leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(140,255,0,.07)" }}
        >
          {alien.name}
        </div>
      </div>

      {/* Header */}
      <header className="hud-header absolute inset-x-0 top-0 z-40 flex h-[72px] items-center justify-between px-6 md:px-12">
        <div className="font-mono text-lg font-black tracking-[0.18em]">
          OMNI<span className="text-[#8CFF00]">-X</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="font-mono text-sm font-light tabular-nums text-white/60">
            <span className="font-semibold text-[#8CFF00]">{String(selected + 1).padStart(2, "0")}</span>
            <span className="mx-1 text-white/20">/</span>
            {String(aliens.length).padStart(2, "0")}
          </div>
          <div className="hidden h-[3px] w-24 overflow-hidden rounded-full bg-white/10 sm:block">
            <div
              className="h-full rounded-full bg-[#8CFF00] shadow-[0_0_12px_#8CFF00] transition-all duration-500"
              style={{ width: `${((selected + 1) / aliens.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main composition */}
      <div className="relative z-10 flex min-h-screen items-center px-5 pb-44 pt-24 sm:pb-36 md:px-10 lg:px-14">
        {/* Left: identity + combat profile */}
        <section className="info-panel hidden w-[28%] max-w-[360px] shrink-0 lg:block" style={{ containerType: "inline-size" }}>
          <p className="font-mono text-xs text-[#8CFF00]">{alien.type}</p>
          <h1
            ref={nameRef}
            className="mt-2 font-black leading-[0.95] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2rem, 12cqw, 4rem)" }}
          >
            {alien.name.split(" ").map((w, i) => (
              <span key={w} className="block">{w}</span>
            ))}
          </h1>
          <div className="mt-6 h-px w-14 bg-gradient-to-r from-[#8CFF00] to-transparent" />
          <p className="mt-5 max-w-[290px] font-mono text-[12px] leading-6 text-white/45">
            Browse the available forms, check the combat profile, then activate the core to transform.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
            {stats.map(([label, value]) => (
              <div key={label} className="stat-item border-l border-white/10 pl-3 transition-colors hover:border-[#8CFF00]">
                <div className="font-mono text-[10px] text-white/35">{label}</div>
                <div className="mt-1 font-mono text-[12px] font-semibold leading-5 text-white/85">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Center: the Omnitrix */}
        <section className="flex min-w-0 flex-1 items-center justify-center">
          <div
            className="hero-core relative flex h-[min(82vw,620px,62vh)] w-[min(82vw,620px,62vh)] items-center justify-center"
            style={{ perspective: "1100px" }}
          >
            {/* Tick ring + dashed ring */}
            <div className="ring-a absolute h-[92%] w-[92%]">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(140,255,0,.35)" strokeWidth="1.2" strokeDasharray="0.25 1.85" />
              </svg>
            </div>
            <div className="ring-b absolute h-[78%] w-[78%] rounded-full border border-dashed border-[#8CFF00]/[0.12]" />
            <div className="absolute h-[66%] w-[66%] rounded-full border border-[#8CFF00]/[0.14] bg-[#8CFF00]/[0.02] shadow-[0_0_140px_rgba(140,255,0,.12)]" />

            <div
              ref={coreRef}
              className="core-shell relative z-10 h-[52%] w-[52%] cursor-pointer rounded-full outline-none transition-[filter] duration-300 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#8CFF00] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              onClick={selectAlien}
              role="button"
              tabIndex={0}
              aria-label={`Transform into ${alien.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  e.preventDefault();
                  selectAlien();
                }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Machined metal bezel */}
              <div
                className="absolute inset-0 rounded-full shadow-[0_30px_90px_rgba(0,0,0,.95),inset_0_2px_6px_rgba(255,255,255,.15)]"
                style={{ background: "conic-gradient(from 210deg, #262626, #7a7a7a, #1a1a1a, #4d4d4d, #0e0e0e, #6a6a6a, #262626)" }}
              />
              <div className="absolute inset-[9px] rounded-full bg-[radial-gradient(circle_at_30%_22%,#3a3a3a,#111_50%,#030303)] shadow-[inset_0_0_30px_rgba(0,0,0,.9)]" />
              <div className="energy-ring absolute inset-[16px] rounded-full border-2 border-[#8CFF00] shadow-[0_0_30px_rgba(140,255,0,.55),inset_0_0_28px_rgba(140,255,0,.2)]" />

              {/* Diamond plate */}
              <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rotate-45 overflow-hidden rounded-[6px] border-[6px] border-zinc-800 bg-[#8CFF00] shadow-[0_0_50px_rgba(140,255,0,.5)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.35),transparent_40%,rgba(0,0,0,.18))]" />
                <div className="absolute inset-2 rounded-[3px] border border-black/20" />
                <div className="absolute inset-0 flex -rotate-45 items-center justify-center">
                  <img
                    ref={alienRef}
                    src={alien.image}
                    alt={alien.name}
                    draggable={false}
                    className="h-[74%] w-[74%] object-contain"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
              </div>

              {/* Cardinal studs */}
              <div className="absolute left-1/2 top-[-2px] h-6 w-11 -translate-x-1/2 rounded-full border-2 border-black bg-[#8CFF00] shadow-[0_0_16px_rgba(140,255,0,.85)]" />
              <div className="absolute bottom-[-2px] left-1/2 h-6 w-11 -translate-x-1/2 rounded-full border-2 border-black bg-zinc-700" />
              <div className="absolute left-[-2px] top-1/2 h-11 w-6 -translate-y-1/2 rounded-full border-2 border-black bg-zinc-700" />
              <div className="absolute right-[-2px] top-1/2 h-11 w-6 -translate-y-1/2 rounded-full border-2 border-black bg-[#8CFF00] shadow-[0_0_16px_rgba(140,255,0,.75)]" />

              <div className="activation-ring pointer-events-none absolute inset-[-8%] rounded-full border-2 border-[#8CFF00] opacity-0" />
            </div>

            <div ref={sparksRef} className="pointer-events-none absolute left-1/2 top-1/2 z-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="absolute h-1 w-1 rounded-full bg-[#8CFF00] opacity-0 shadow-[0_0_8px_#8CFF00]" />
              ))}
            </div>
          </div>
        </section>

        {/* Right: form card */}
        <aside className="data-panel hidden w-[24%] max-w-[320px] shrink-0 xl:block">
          <div className={`${glass} relative overflow-hidden rounded-3xl p-5 shadow-[0_30px_80px_rgba(0,0,0,.5)]`}>
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#8CFF00]/70 to-transparent" />

            <div className="relative mb-5 flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#A6FF33] to-[#6FD400]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,.4),transparent_55%)]" />
              <img
                src={alien.image}
                alt=""
                className="relative h-28 w-28 object-contain transition-transform duration-500 hover:scale-110"
                style={{ filter: "brightness(0)" }}
              />
            </div>

            <dl className="space-y-3 font-mono text-[12px]">
              <div className="flex justify-between gap-4 border-b border-white/[0.06] pb-3">
                <dt className="font-light text-white/35">Species</dt>
                <dd className="font-semibold text-white/85">{alien.species}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/[0.06] pb-3">
                <dt className="font-light text-white/35">Home world</dt>
                <dd className="font-semibold text-white/85">{alien.homeWorld}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-light text-white/35">Status</dt>
                <dd className="flex items-center gap-2 font-semibold text-[#8CFF00]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00] shadow-[0_0_10px_#8CFF00]" />
                  Ready
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {/* Mobile title */}
      <div className="absolute left-5 top-[84px] z-30 lg:hidden">
        <div className="font-mono text-[11px] text-[#8CFF00]">{alien.type}</div>
        <div className="text-4xl font-black leading-none">
          {alien.name}
        </div>
      </div>

      {/* Bottom dock: browse + transform */}
      <div className="bottom-dock fixed inset-x-0 bottom-5 z-40 flex flex-col items-center gap-3 px-4 sm:bottom-7 sm:flex-row sm:justify-center">
        <div className={`${glass} flex items-center gap-1.5 rounded-full p-1.5 shadow-[0_20px_60px_rgba(0,0,0,.6)]`}>
          <button
            onClick={() => changeAlien(-1)}
            disabled={locked}
            aria-label="Previous form"
            className="nav-control flex h-10 w-10 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-[#8CFF00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8CFF00] disabled:opacity-20"
          >
            ←
          </button>

          {aliens.map((a, i) => (
            <button
              key={a.name}
              onClick={() => !locked && setSelected(i)}
              aria-label={a.name}
              aria-current={i === selected}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8CFF00] ${
                i === selected
                  ? "scale-110 bg-[#8CFF00] shadow-[0_0_22px_rgba(140,255,0,.55)]"
                  : "bg-white/[0.04] hover:bg-white/10"
              }`}
            >
              <img
                src={a.image}
                alt=""
                draggable={false}
                className={`h-7 w-7 object-contain transition-opacity ${i === selected ? "" : "opacity-50"}`}
                style={{ filter: i === selected ? "brightness(0)" : "brightness(0) invert(1)" }}
              />
            </button>
          ))}

          <button
            onClick={() => changeAlien(1)}
            disabled={locked}
            aria-label="Next form"
            className="nav-control flex h-10 w-10 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-[#8CFF00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8CFF00] disabled:opacity-20"
          >
            →
          </button>
        </div>

        <button
          onClick={selectAlien}
          disabled={locked}
          className="group relative overflow-hidden rounded-full bg-[#8CFF00] px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_rgba(140,255,0,.35)] transition hover:shadow-[0_0_60px_rgba(140,255,0,.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8CFF00] disabled:opacity-60"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-md transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
          <span className="relative">Transform into {alien.name.charAt(0) + alien.name.slice(1).toLowerCase()}</span>
        </button>
      </div>
    </main>
  );
}