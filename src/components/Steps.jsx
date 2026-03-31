const STEPS = [
  {
    num: '01',
    icon: '👤',
    title: 'Create Account',
    desc: 'Sign up for free in seconds. No credit card required to get started',
  },
  {
    num: '02',
    icon: '📦',
    title: 'Choose Products',
    desc: 'Browse our catalog and select the tools that fit your needs',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Start Creating',
    desc: 'Download and start using your premium tools immediately',
  },
]

export default function Steps() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mt-2">
            Get Started In <span className="gradient-text">3 Steps</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
     
        {/* ─ ─ Steps row ── */}
        <div className="flex flex-col md:flex-row items-start relative">
       {
      STEPS.map((step, idx) => (
        <>
          <div
            key={step.num}
            className="flex-1 flex flex-col items-center text-center px-4 mb-8 md:mb-0"
          >
            {/* Icon block */}
            <div className="relative mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-2xl shadow-lg shadow-purple-300/40">
                {step.icon}
              </div>
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-900 text-white text-xs flex items-center justify-center font-bold font-display">
                {step.num}
              </span>
            </div>

            <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {step.desc}
            </p>
          </div>

          {/* Connector line between steps */}
          {idx < STEPS.length - 1 && (
            <div
              key={`line-${idx}`}
              className="hidden md:block step-line self-auto"
              style={{ marginTop: '30px' }}
            />
          )}
        </>
          ))
    }

        </div>

      </div>  
    </section>
  )  
}  
