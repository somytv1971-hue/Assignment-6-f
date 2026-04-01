// Footer component

const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Templates', 'Integrations'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'Help Center', 'Community', 'Contact'],
  },
]

const SOCIALS = [
  { icon: '▶', label: 'YouTube' },
  { icon: 'f', label: 'Facebook' },
  { icon: '𝕏', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Top grid ── */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">

          {/* Brand column */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-extrabold text-xl text-white">
                DigiTools
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Link columns container */}
          <div className="flex gap-20 flex-1 md:justify-center">
            {FOOTER_LINKS.map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="font-bold text-white text-sm mb-4">{heading}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links column */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Social Links</h4>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <div
                  key={social.label}
                  className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center cursor-pointer transition-colors text-xs font-bold"
                  title={social.label}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-500 text-xs">
          <span>© 2026 DigiTools. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
