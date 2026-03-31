const STATS = [
  { value: '50K+', label: 'Active Users'   },
  { value: '200+', label: 'Digital Tools'  },
  { value: '4.9',  label: 'Average Rating' },
  { value: '99%',  label: 'Uptime SLA'     },
]

export default function Stats() {
  return (
    <div className="stats-bar text-white py-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <div className="font-display font-extrabold text-2xl md:text-3xl">{value}</div>
            <div className="text-purple-200 text-sm mt-0.5">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
