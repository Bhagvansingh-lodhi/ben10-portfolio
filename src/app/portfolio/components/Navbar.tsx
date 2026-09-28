"use client";

import { useEffect, useState } from "react";

const GREEN = "#91FF16";

const sections = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "work", label: "WORK" },
  { id: "contact", label: "CONTACT" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        if (scrollPosition >= element.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#070707]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* LOGO */}
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-[0.18em]"
        >
          OMNI
          <span style={{ color: GREEN }}>-X</span>
        </a>

        {/* NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((section) => (
            <NavLink
              key={section.id}
              href={`#${section.id}`}
              active={activeSection === section.id}
            >
              {section.label}
            </NavLink>
          ))}
        </nav>

        {/* STATUS */}
        <div
          className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em]"
          style={{ color: GREEN }}
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{
              backgroundColor: GREEN,
              boxShadow: `0 0 10px ${GREEN}`,
            }}
          />

          AVAILABLE
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={`group relative font-mono text-[10px] tracking-[0.3em] transition-colors ${
        active
          ? "text-[#91FF16]"
          : "text-white/40 hover:text-[#91FF16]"
      }`}
    >
      {children}

      <span
        className={`absolute -bottom-2 left-0 h-px bg-[#91FF16] transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
        style={{
          boxShadow: active ? `0 0 8px ${GREEN}` : undefined,
        }}
      />
    </a>
  );
}