import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import BrandLogo from './BrandLogo.jsx'
import { navigationItems } from '../data/siteContent.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-3 py-4">
        <BrandLogo compact />

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-primea-violet' : 'text-primea-ink hover:text-primea-violet'
                }`
              }
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link className="inline-flex items-center justify-center rounded-2xl bg-primea-green px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primea-green/90" to="/contact">
            Demander une démo
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Ouvrir le menu"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primea-line lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-primea-violet-dark" />
            <span className="block h-0.5 w-5 rounded-full bg-primea-violet-dark" />
            <span className="block h-0.5 w-5 rounded-full bg-primea-violet-dark" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-primea-line bg-white lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {navigationItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-primea-soft text-primea-violet'
                      : 'text-primea-ink hover:bg-primea-soft hover:text-primea-violet'
                  }`
                }
                key={item.to}
                onClick={() => setIsOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              className="mt-3 inline-flex items-center justify-center rounded-2xl bg-primea-green px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primea-green/90"
              onClick={() => setIsOpen(false)}
              to="/contact"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
