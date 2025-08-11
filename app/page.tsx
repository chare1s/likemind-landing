"use client"
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('lm-ready')
      return () => document.documentElement.classList.remove('lm-ready')
    }
  }, [])
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
      {/* Abstract Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 w-full h-full">
        {/* Large red blob top right */}
        <div
          className="absolute rounded-full blur-3xl opacity-40 mix-blend-screen"
          style={{
            top: '-210px',
            right: '-250px',
            width: '560px',
            height: '560px',
            background: 'radial-gradient(circle at 60% 40%, #7A0F1A 65%, #8C1C2A 25%, #A12438 10%, transparent 100%)',
            filter: 'blur(120px)',
            backdropFilter: 'blur(6px)'
          }}
        />
        {/* Huge red blob bottom left */}
        <div
          className="absolute rounded-full blur-3xl opacity-35 mix-blend-screen"
          style={{
            bottom: '-250px',
            left: '-230px',
            width: '720px',
            height: '720px',
            background: 'radial-gradient(circle at 60% 60%, #8C1C2A 65%, #7A0F1A 25%, #A12438 10%, transparent 100%)',
            filter: 'blur(140px)',
            backdropFilter: 'blur(8px)'
          }}
        />
        {/* Medium red blob left mid overlapping center */}
        <div
          className="absolute rounded-full blur-3xl opacity-45 mix-blend-screen"
          style={{
            top: '17%',
            left: '2%',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle at 60% 40%, #8C1C2A 60%, #7A0F1A 30%, #A12438 10%, transparent 100%)',
            filter: 'blur(90px)',
            backdropFilter: 'blur(6px)'
          }}
        />
        {/* Medium red blob right mid overlapping center */}
        <div
          className="absolute rounded-full blur-3xl opacity-38 mix-blend-screen"
          style={{
            bottom: '21%',
            right: '14%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle at 40% 60%, #8C1C2A 60%, #7A0F1A 35%, #A12438 10%, transparent 100%)',
            filter: 'blur(80px)',
            backdropFilter: 'blur(6px)'
          }}
        />
        {/* Large red blob center left */}
        <div
          className="absolute rounded-full blur-3xl opacity-32 mix-blend-screen"
          style={{
            top: '39%',
            left: '20%',
            width: '440px',
            height: '440px',
            background: 'radial-gradient(circle at 50% 50%, #7A0F1A 70%, #8C1C2A 20%, #A12438 10%, transparent 100%)',
            filter: 'blur(110px)',
            backdropFilter: 'blur(6px)'
          }}
        />
        {/* Medium red blob center right */}
        <div
          className="absolute rounded-full blur-3xl opacity-34 mix-blend-screen"
          style={{
            top: '59%',
            left: '66%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle at 60% 60%, #8C1C2A 60%, #7A0F1A 30%, #A12438 10%, transparent 100%)',
            filter: 'blur(90px)',
            backdropFilter: 'blur(6px)'
          }}
        />
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10"
          style={{
            backgroundImage: `url('/grain.png'), radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1.5px)`,
            backgroundSize: '400px 400px, 80px 80px',
            backgroundRepeat: 'repeat, repeat'
          }}
        />
      </div>
      {/* Glow */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(closest-side, rgba(225,29,47,0.35), transparent 70%)' }}
      />

      {/* Top-left fixed logo overlay */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <div className="flex items-center gap-3">
          <div className="h-28 w-auto flex items-center">
            <img
              src={"/logo.png?v=" + (typeof window !== 'undefined' ? new Date().getTime() : '1')}
              alt="LikeMind logo"
              className="h-28 w-auto object-contain"
              decoding="async"
              fetchPriority="high"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                // 1) Try without query param in case CDN blocks it
                if (!img.dataset.step) { img.dataset.step = '1'; img.src = '/logo.png'; return; }
                // 2) Try SVG variant
                if (img.dataset.step === '1') { img.dataset.step = '2'; img.src = '/logo.svg'; return; }
                // 3) Try alternate filename
                if (img.dataset.step === '2') { img.dataset.step = '3'; img.src = '/logo-mark.png'; return; }
                // 4) Final fallback: show a simple L mark
                const parent = img.parentElement; if (parent) {
                  img.remove();
                  const span = document.createElement('span');
                  span.textContent = 'L';
                  span.className = 'inline-block h-28 w-28 rounded-xl grid place-content-center text-3xl font-black bg-gradient-to-r from-[#D73248] to-[#E11D2F] shadow-[0_0_30px_rgba(225,29,47,0.35)]';
                  parent.appendChild(span);
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
        {/* Logo row */}
        {/* (Logo now absolutely positioned, so this row can be empty or removed for spacing if needed) */}

        {/* Hero */}
        <div className="w-full aspect-[16/9]">
        <section className="mt-14 grid md:grid-cols-[1.2fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <h1 className="text-5xl md:text-[3.25rem] lg:text-[3.75rem] leading-[1.15] max-w-2xl">
              <span className="block">
                Find your <span style={{ textShadow: '0 0 8px rgba(255,255,255,0.5), 0 0 16px rgba(255,255,255,0.35)', opacity: 1 }}>likeminds</span>.
              </span>
              <span className="block mt-[-0.4rem]">
                <span
                  className="headline-accent headline-edge text-[3.4rem] md:text-[4.6rem] lg:text-[4.7rem]"
                  style={{
                    background: 'linear-gradient(90deg, #FF4D6D, #E11D2F)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    opacity: 1,
                    textShadow: '0 0 8px rgba(225,29,47,0.5), 0 0 16px rgba(225,29,47,0.35)',
                    fontWeight: 'normal'
                  }}
                >Win your </span>
                <span
                  className="headline-accent headline-edge text-[3.4rem] md:text-[4.6rem] lg:text-[4.7rem]"
                  style={{
                    background: 'linear-gradient(90deg, #e33957, #b71526)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    opacity: 1,
                    textShadow: '0 0 8px rgba(225,29,47,0.5), 0 0 16px rgba(225,29,47,0.35)',
                    fontWeight: 'bold'
                  }}
                >goals.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/80 text-lg">
              <span style={{ textShadow: '0 0 8px rgba(255,255,255,0.5), 0 0 16px rgba(255,255,255,0.35)', opacity: 1 }}><strong>LikeMind</strong></span> matches you with accountability partners near you. No fluff. No endless scrolling.
              Just progress with people who move like you do.
            </p>

            {/* Waitlist form */}
            <form
              action="https://formspree.io/f/mwpqavqa"
              method="POST"
              className="mt-8 flex gap-4 max-w-2xl self-start"
              style={{ alignItems: 'flex-start' }}
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
                className="h-12 px-6 rounded-lg bg-gradient-to-r from-[#D73248] to-[#E11D2F] hover:brightness-90 transition shadow-[0_0_20px_rgba(225,29,47,0.6)]"
              >
                Join waitlist
              </button>
            </form>

            <p className="mt-3 text-xs text-white/60">
              By joining you agree to receive early access emails. Unsubscribe anytime.
            </p>

            {/* Video placeholder */}
            <div className="mt-8 w-full aspect-video bg-black/30"></div>

            {/* REMOVED: the scrolling slogan strip */}
          </div>

          {/* Mission Panel: Recon + Leaderboard (unified) */}
          <div
            className="rounded-2xl border border-white/10 p-4 md:p-5 shadow-[0_0_30px_rgba(225,29,47,0.08)]"
            style={{
          background: 'linear-gradient(145deg, rgba(225,29,47,0.08) 0%, rgba(28,33,40,0.75) 100%)'
            }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Progress Hub</h3>
            </div>

            {/* Recon block */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 text-xs bg-black/20">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2F]" />
                  <span className="opacity-90">Live now — members training nearby</span>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                {/* Base map image */}
                <img src="/map-placeholder.png" alt="Map preview" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-10" />

                {/* Ally pins overlay */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <defs>
                    <filter id="toWhite" colorInterpolationFilters="sRGB">
                      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" />
                    </filter>
                    {/* Grain texture filter */}
                    <filter id="grainTexture" x="0" y="0" width="100%" height="100%">
                      <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="2" result="noise" />
                      <feColorMatrix type="saturate" values="0" />
                      <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
                    </filter>
                  </defs>
                  {/* Running event */}
                  <g>
                    <circle cx="102" cy="122" r="15" fill="#E11D2F" opacity="0.6" />
                    <text
                      x="102"
                      y="122"
                      fontSize="20"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >👟</text>
                  </g>
                  {/* Strength event */}
                  <g>
                    <circle cx="255" cy="170" r="15" fill="#E11D2F" opacity="0.6" />
                    <image
                      href="/points-icon2.png"
                      x="245"
                      y="160"
                      width="20"
                      height="20"
                      filter="url(#toWhite)"
                    />
                  </g>
                  {/* Study event */}
                  <g>
                    <circle cx="307" cy="96" r="15" fill="#E11D2F" opacity="0.6" />
                    <text
                      x="307"
                      y="99"
                      fontSize="20"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >📚</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-white/10" />

            {/* Leaderboard */}
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Local Leaderboard</h4>
              </div>

              {/* XP legend */}
              <p className="mt-1 text-[11px] text-white/50">
                Earn points by completing sessions, keeping streaks, and joining challenges.
              </p>
              <div className="text-right">
                <span className="text-xs text-white">Top Points</span>
              </div>

              <ul className="mt-3 space-y-2">
                {/* #1 */}
                <li className="leaderboard-entry leaderboard-rank-1 flex flex-col gap-2 px-2 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#E11D2F] grid place-content-center text-xs font-bold">1</div>
                      <div>
                        <div className="font-medium">Ben</div>
                        <div className="text-xs text-white/60">Running • Iron Will</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">24</span>
                      <div
                        className="h-8 w-8 grid place-content-center text-black"
                        style={{
                          background: 'linear-gradient(90deg, #D73248, #E11D2F)',
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        <img src="/points-icon2.png" alt="Points" className="h-4 w-4 object-contain" />
                      </div>
                    </div>
                  </div>
                  {/* Progress to next rank */}
                  <div className="xp-bar">
                    <div className="xp-fill" style={{ width: '72%' }} />
                  </div>
                </li>

                {/* #2 */}
                <li className="leaderboard-entry leaderboard-rank-2 flex flex-col gap-2 px-2 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#2F353D] grid place-content-center text-xs font-bold">2</div>
                      <div>
                        <div className="font-medium">Marcus</div>
                        <div className="text-xs text-white/60">Running • Marathon Mind</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">18</span>
                      <div
                        className="h-8 w-8 grid place-content-center text-black"
                        style={{
                          background: 'linear-gradient(90deg, #D73248, #E11D2F)',
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        <img src="/points-icon2.png" alt="Points" className="h-4 w-4 object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="xp-bar">
                    <div className="xp-fill" style={{ width: '58%' }} />
                  </div>
                </li>

                {/* #3 */}
                <li className="leaderboard-entry leaderboard-rank-3 flex flex-col gap-2 px-2 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#2F353D] grid place-content-center text-xs font-bold">3</div>
                      <div>
                        <div className="font-medium">Nathan</div>
                        <div className="text-xs text-white/60">Study • Scholar at Arms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">13</span>
                      <div
                        className="h-8 w-8 grid place-content-center text-black"
                        style={{
                          background: 'linear-gradient(90deg, #D73248, #E11D2F)',
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        <img src="/points-icon2.png" alt="Points" className="h-4 w-4 object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="xp-bar">
                    <div className="xp-fill" style={{ width: '44%' }} />
                  </div>
                </li>
              </ul>

              <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                <span>Claim your spot. Level up your game.</span>
                <span className="rounded bg-[#E11D2F]/20 border border-[#E11D2F]/30 text-[#E11D2F] px-2 py-1">Early Access</span>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 pt-8 text-white/70 text-sm">
        Privacy-first • Member-only events, people stay private
        </footer>
      </div>
    </main>
  );
}