import { useState } from 'react'
import { CartIcon, LogoIcon, HamburgerIcon } from './Icons'

const NAV_LINKS = ['Features', 'Pricing', 'Testimonials', 'FAQ']

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar-glass sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
            <LogoIcon />
          </div>
          <span className="font-display font-extrabold text-white text-xl tracking-tight">
            Digi<span className="gradient-text">Tools</span>
          </span>
        </div>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-8 text-sm text-purple-200 font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* ── Right side ── */}
        <div className="flex items-center gap-4">
          <CartIcon count={cartCount} />
          <button className="hidden md:inline-flex text-purple-200 hover:text-white text-sm font-semibold transition-colors">
            Login
          </button>
          <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
            Get Started
          </button>

          {/* ── Hamburger (mobile) ── */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden bg-purple-900/95 px-4 py-3 flex flex-col gap-3 text-purple-200 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
