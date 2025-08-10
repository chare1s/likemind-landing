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
              Find your allies.{" "}
              <span className="bg-gradient-to-r from-[#E11D2F] via-[#ff4d5e] to-[#E11D2F] bg-clip-text text-transparent">Win your </span>
              <span className="bg-gradient-to-r from-[#E11D2F] via-[#ff4d5e] to-[#E11D2F] bg-clip-text text-transparent lm-underline">goals</span>.
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

          {/* Mission Panel: Recon + Leaderboard (unified) */}
          <div
            className="rounded-2xl border border-white/10 p-4 md:p-5 shadow-[0_0_30px_rgba(225,29,47,0.08)]"
            style={{
          background: 'linear-gradient(145deg, rgba(225,29,47,0.08) 0%, rgba(28,33,40,0.75) 100%)'
            }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Mission Control</h3>
            </div>

            {/* Recon block */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2F]" />
                  <span className="opacity-90">Recon online — allies detected nearby</span>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                {/* Base map image */}
                <img src="/map-placeholder.png" alt="Map preview" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-10" />

                {/* Ally pins overlay */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="none">
                  {/* Running event */}
                  <g>
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
                    <text
                      x="255"
                      y="170"
                      fontSize="20"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >🏋️</text>
                  </g>
                  {/* Study event */}
                  <g>
                    <text
                      x="307"
                      y="97"
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
                <span className="text-xs text-white/60">Top Streaks</span>
              </div>

              {/* XP legend */}
              <p className="mt-1 text-[11px] text-white/50">
                Earn points by sessions, streaks, and hosting missions.
              </p>

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
                    <div className="flex items-center gap-2 text-xs">
                      <span className="leaderboard-stat">Streak 18d</span>
                      <span className="leaderboard-stat">Missions 12</span>
                      <span className="leaderboard-xp">1,240 XP</span>
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
                      <div className="h-8 w-8 rounded-full bg-[#C0C0C0] grid place-content-center text-xs font-bold">2</div>
                      <div>
                        <div className="font-medium">Marcus</div>
                        <div className="text-xs text-white/60">Running • Marathon Mind</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="leaderboard-stat">Streak 12d</span>
                      <span className="leaderboard-stat">Missions 9</span>
                      <span className="leaderboard-xp">980 XP</span>
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
                      <div className="h-8 w-8 rounded-full bg-[#C0C0C0] grid place-content-center text-xs font-bold">3</div>
                      <div>
                        <div className="font-medium">Nathan</div>
                        <div className="text-xs text-white/60">Study • Scholar at Arms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="leaderboard-stat">Streak 9d</span>
                      <span className="leaderboard-stat">Missions 7</span>
                      <span className="leaderboard-xp">740 XP</span>
                    </div>
                  </div>
                  <div className="xp-bar">
                    <div className="xp-fill" style={{ width: '44%' }} />
                  </div>
                </li>
              </ul>

              <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                <span>Claim your spot. Earn your rank.</span>
                <span className="rounded bg-[#E11D2F]/20 border border-[#E11D2F]/30 text-[#E11D2F] px-2 py-1">Early Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/5 pt-8 text-white/70 text-sm">
          Privacy-first • Rough location only • Report
        </footer>
      </div>
    </main>
  );
}