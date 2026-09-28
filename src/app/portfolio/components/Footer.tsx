export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* BRAND */}
          <a
            href="#home"
            className="font-mono text-sm font-bold tracking-[0.18em] text-white"
          >
            OMNI
            <span className="text-[#91FF16]">-X</span>
          </a>

          {/* CENTER */}
          <p className="font-mono text-[8px] tracking-[0.25em] text-white/20">
            BUILT WITH CODE // CREATIVITY // AI
          </p>

          {/* STATUS */}
          <div className="flex items-center gap-2 font-mono text-[8px] tracking-[0.2em] text-[#32B531]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#91FF16] shadow-[0_0_8px_#91FF16]" />
            SYSTEM ONLINE
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[#222222] pt-5 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[7px] tracking-[0.25em] text-white/15">
            © {new Date().getFullYear()} BHAGVAN SINGH LODHI
          </span>

          <span className="font-mono text-[7px] tracking-[0.25em] text-white/15">
            OMNI-X // END OF TRANSMISSION
          </span>
        </div>
      </div>
    </footer>
  );
}