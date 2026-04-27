import { Link } from 'react-router'
import { navigationItems } from '../data/siteContent.js'
import BrandLogo from './BrandLogo.jsx'

function Footer() {
  return (
    <footer className="section-band-dark border-t border-white/10 text-white">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <BrandLogo inverse />
          <p className="max-w-xl text-sm leading-7 text-white/72">
            Cabinet de conseil hybride en conseil comptable, finance, management,
            digitalisation et systèmes d’information.
          </p>
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-white">Navigation</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {navigationItems.map((item) => (
              <Link className="transition hover:text-primea-green-light" key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-white">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <p>prima.auditsarl@gmail.com</p>
            <p>+261 34 04 086 80</p>
            <p>Conseil comptable, financier, organisationnel et digital</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
