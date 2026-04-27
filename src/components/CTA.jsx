import { Link } from 'react-router'
import Reveal from './Reveal.jsx'

function CTA() {
  return (
    <Reveal>
      <section className="py-10 sm:py-14">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-primea-violet via-primea-violet-dark to-primea-violet px-6 py-10 text-white shadow-[0_28px_90px_rgba(36,0,90,0.26)] sm:px-10 lg:px-14">
            <div className="section-grid gap-8">
            <div className="space-y-4">
              <span className="eyebrow-dark">
                Premier échange
              </span>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Un accompagnement rigoureux pour mieux piloter, fiabiliser et structurer
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                Prime A accompagne les dirigeants, directions financières et organisations
                avec une approche sobre, méthodique et tournée vers les résultats concrets.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primea-violet transition duration-300 hover:-translate-y-0.5"
                to="/contact"
              >
                Demander un diagnostic
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                to="/services"
              >
                Découvrir les services
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Reveal>
  )
}

export default CTA
