import { Link } from 'react-router'
import Reveal from './Reveal.jsx'

function CTA() {
  return (
    <Reveal>
      <section className="container-shell py-10 sm:py-14">
        <div className="card-surface overflow-hidden bg-primea-violet-dark px-6 py-10 text-white sm:px-10 lg:px-14">
          <div className="section-grid relative gap-8">
            <div className="space-y-4">
              <span className="eyebrow border-white/15 bg-white/10 text-white">
                Echange initial
              </span>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Un diagnostic pour relier vos enjeux de performance à des solutions utiles
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                Prime A intervient avec méthode, discrétion et exigence. Nous clarifions les
                priorités, puis nous aidons à mettre en œuvre des outils adaptés à votre
                contexte.
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
                Voir les services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default CTA
