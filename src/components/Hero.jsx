import { PlayFillIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero-bg text-white py-20 px-4 overflow-hidden relative">

      {/* ── Decorative blobs ── */}
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* ── Left: copy ── */}
        <div>
          <span className="inline-block bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs px-3 py-1 rounded-full mb-4 font-medium">
            🚀 New: AI-Powered Tools Available
          </span>

          <h1 className="hero-title font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
            Supercharge Your{' '}
            <span className="gradient-text">Digital Workflow</span>
          </h1>

          <p className="text-purple-200 text-lg leading-relaxed mb-8 max-w-md">
            All the premium tools you need to create, automate, and scale—bundled
            into one powerful platform built for modern teams.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white px-7 py-3 rounded-full font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
              Explore Products
            </button>
            <button className="border border-purple-400/50 text-purple-200 hover:text-white hover:border-purple-300 px-7 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              <PlayFillIcon />
              Watch Demo
            </button>
          </div>
        </div>

        {/* ── Right: banner image ── */}
        <div className="relative flex justify-center">
         <img src="/src/assets/banner.png" alt="Digital Workflow Banner" />
        </div>
      </div>
    </section>
  )
}
