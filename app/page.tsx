export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden text-[#F3F4F6]">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(1200px 600px at 80% -10%, rgba(225,29,47,0.12), transparent 60%),
                       radial-gradient(900px 500px at -10% 20%, rgba(59,74,63,0.18), transparent 60%),
                       linear-gradient(180deg, #0E0F12 0%, #0E0F12 40%, #0F1318 100%)`
        }}
      />
      {/* Glow */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(closest-side, rgba(225,29,47,0.35), transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Logo row */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#E11D2F] grid place-content-center shadow-[0_0_30px_rgba(225,29,47,0.35)]">
            <span className="font-black">L</span>
          </div>
          <div className="font-semibold tracking-wide">LikeMind</div>
        </div>

        {/* Hero */}
        <section className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Find your allies. <span className="text-[#E11D2F]">Win your <span className="lm-underline">goals</span>.</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              LikeMind matches you with accountability partners near you. No fluff. No endless scrolling.
              Just progress with people who move like you do.
            </p>

            {/* Waitlist form */}
            <form
              action="https://formspree.io/f/mwpqavqa"
              method="POST"
              className="mt-6 flex gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="lm-glow flex-1 h-12 rounded-lg bg-[#0E0F12] border border-white/15 px-3 outline-none focus:border-[#E11D2F]"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-lg bg-[#E11D2F] hover:bg-[#c81829]"
              >
                Join waitlist
              </button>
            </form>

            <p className="mt-3 text-xs text-white/60">
              By joining you agree to receive early access emails. Unsubscribe anytime.
            </p>

            {/* REMOVED: the scrolling slogan strip */}
          </div>

          {/* Map mock */}
          <div className="relative rounded-2xl border border-white/10 bg-[#1C2128]/70 overflow-hidden aspect-[4/3]">
            <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 300">
              {Array.from({ length: 30 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 14} x2={i * 14} y1="0" y2="300" stroke="#2C3440" strokeWidth="1" />
              ))}
              {Array.from({ length: 22 }).map((_, i) => (
                <line key={`h-${i}`} y1={i * 14} y2={i * 14} x1="0" x2="400" stroke="#2C3440" strokeWidth="1" />
              ))}
              <g>
                <circle cx="110" cy="110" r="9" fill="#E11D2F" />
                <circle cx="248" cy="160" r="6" fill="#3B4A3F" />
                <circle cx="300" cy="90" r="6" fill="#3B4A3F" />
              </g>
            </svg>
            <div className="absolute left-4 top-4 flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2F]" /> Horsham area - nearby allies detected
            </div>
            <div className="absolute right-4 bottom-4 text-xs">
              <span className="inline-flex items-center rounded-full bg-[#2C3440]/60 text-[#F3F4F6] px-3 py-1 tracking-wide border border-white/5">
                Rough location - never exact
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 pt-8 text-white/70 text-sm">
          Privacy-first • Rough location only • Report - block controls
        </footer>
      </div>
    </main>
  );
}