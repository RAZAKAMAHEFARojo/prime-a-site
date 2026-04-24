import { Link } from 'react-router'
import { navigationItems } from '../data/siteContent.js'
import BrandLogo from './BrandLogo.jsx'

function Footer() {
  return (
    <footer className="border-t border-primea-line bg-white/90">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <BrandLogo />
          <p className="max-w-xl text-sm leading-7 text-primea-muted">
            Cabinet de conseil hybride en conseil comptable, finance, management,
            digitalisation et systèmes d’information.
          </p>
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-primea-violet-dark">Navigation</p>
          <div className="mt-4 grid gap-3 text-sm text-primea-muted">
            {navigationItems.map((item) => (
              <Link className="transition hover:text-primea-violet" key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-primea-violet-dark">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-primea-muted">
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
