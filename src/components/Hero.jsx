import { Link } from 'react-router'
import Reveal from './Reveal.jsx'

function Hero() {
  return (
    <section className="container-shell pt-8 pb-20 sm:pt-12 sm:pb-24">
      <div className="section-grid gap-10">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <span className="eyebrow">Cabinet de conseil hybride</span>
            <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-primea-violet-dark sm:text-5xl lg:text-6xl">
              Conseil comptable, financier et digital pour mieux piloter votre entreprise
            </h1>
            <p className="max-w-2xl text-base leading-8 text-primea-muted sm:text-lg">
              Prime A accompagne les dirigeants, directions financières et organisations
              dans l’amélioration de leur gestion, de leur performance et de leurs systèmes
              d’information.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link className="primary-button" to="/services">
              Découvrir nos services
            </Link>
            <Link className="secondary-button" to="/contact">
              Demander un diagnostic
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Rigueur comptable', 'Fiabilisation des processus et de la donnée.'],
              ['Pilotage financier', 'Indicateurs utiles à la décision et au contrôle.'],
              ['Digital au service de la gestion', 'Outils concrets pour fluidifier l’exécution.'],
            ].map(([title, text]) => (
              <div className="rounded-[24px] border border-primea-line bg-white/80 p-4" key={title}>
                <p className="font-display text-lg font-semibold text-primea-violet-dark">{title}</p>
                <p className="mt-2 text-sm leading-6 text-primea-muted">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="card-surface overflow-hidden bg-white">
          <div className="border-b border-primea-line px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primea-muted">
              Pilotage financier
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primea-violet-dark">
              Visibilité renforcée sur la performance
            </h2>
          </div>
          <div className="grid gap-5 p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Trésorerie', 'À jour'],
                ['Reporting', 'Fiabilisé'],
                ['Pilotage', 'Structuré'],
              ].map(([label, value], index) => (
                <div
                  className={`rounded-[24px] p-5 ${
                    index === 1 ? 'bg-primea-soft' : 'bg-white ring-1 ring-primea-line'
                  }`}
                  key={label}
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-primea-muted">{label}</p>
                  <p className="mt-3 font-display text-2xl font-semibold text-primea-violet-dark">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] bg-primea-violet-dark p-6 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                Exemple d’intervention
              </p>
              <div className="mt-4 grid gap-4">
                {[
                  'Organisation comptable et revue des processus',
                  'Tableaux de bord de gestion et reporting financier',
                  'Automatisation ciblée des traitements et rapprochements',
                ].map((item) => (
                  <div className="rounded-[20px] bg-white/8 px-4 py-3 text-sm leading-6" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-primea-soft p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">
                Positionnement Prime A
              </p>
              <p className="mt-3 text-sm leading-7 text-primea-ink">
                L’IT, la digitalisation et l’automatisation sont abordées comme des leviers
                au service de la comptabilité, de la finance, du management et du pilotage
                global de l’entreprise.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
