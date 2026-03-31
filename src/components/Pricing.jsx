const PLANS = [
  {
    name: 'Starter',
    price: 0,
    period: 'forever',
    desc: 'Perfect for individuals just getting started.',
    features: ['5 tools access', 'Basic templates', 'Community support', '1 GB storage'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: 29,
    period: 'month',
    desc: 'Everything you need for a productive workflow.',
    features: [
      'Unlimited tools',
      'All premium templates',
      'Priority support',
      '50 GB storage',
      'Team collaboration',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    desc: 'Advanced features for growing organizations.',
    features: [
      'All Pro features',
      'Custom integrations',
      'Dedicated manager',
      'Unlimited storage',
      'SLA guarantee',
      'SSO & SAML',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

function CheckMark({ popular }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 ${popular ? 'text-purple-200' : 'text-purple-500'}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <span className="text-purple-500 font-semibold text-sm uppercase tracking-wider">
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mt-2">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* ── Plans grid ── */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col border transition-all ${
                plan.popular
                  ? 'pricing-card-popular shadow-2xl shadow-purple-400/30 scale-105'
                  : 'bg-white border-gray-100 shadow-sm hover:border-purple-200'
              }`}
            >
              {plan.popular && (
                <span className="self-start bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  ⭐ Most Popular
                </span>
              )}

              <h3
                className={`font-display font-bold text-xl mb-1 ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`text-sm mb-5 ${
                  plan.popular ? 'text-purple-200' : 'text-gray-500'
                }`}
              >
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className={`font-display font-extrabold text-4xl ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span
                    className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-gray-400'}`}
                  >
                    /{plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      plan.popular ? 'text-purple-100' : 'text-gray-600'
                    }`}
                  >
                    <CheckMark popular={plan.popular} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-purple-50 shadow-lg'
                    : 'bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 shadow-md shadow-purple-300/30'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
