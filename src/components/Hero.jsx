import { Link } from 'react-router'
import Reveal from './Reveal.jsx'

function Hero() {
  return (
    <section className="section-band-dark overflow-hidden">
      <div className="container-shell relative py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="section-grid gap-10">
          <Reveal className="relative z-10 space-y-8">
            <div className="space-y-5">
              <span className="eyebrow-dark">Cabinet de conseil hybride</span>
              <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Conseil comptable, financier et digital pour mieux piloter votre entreprise
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Prime A accompagne les dirigeants et directions financières dans
                l’amélioration de leur gestion, de leur performance et de leurs systèmes
                d’information.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link className="inline-flex items-center justify-center rounded-full bg-primea-green px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primea-green/90" to="/services">
                Découvrir nos services
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10" to="/contact">
                Demander un diagnostic
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Rigueur comptable', 'Fiabilisation des processus et de la donnée.'],
                ['Pilotage financier', 'Indicateurs utiles à la décision et au contrôle.'],
                ['Digital au service de la gestion', 'Outils concrets pour fluidifier l’exécution.'],
              ].map(([title, text]) => (
                <div className="section-panel p-5 text-white" key={title}>
                  <p className="font-display text-lg font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative z-10 overflow-hidden rounded-[32px] border border-white/12 bg-white shadow-[0_28px_90px_rgba(9,10,24,0.35)]">
            <div className="border-b border-primea-line px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primea-muted">
                Pilotage de performance
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-primea-violet-dark">
                Un visuel de gestion pensé pour les directions
              </h2>
            </div>
            <div className="grid gap-5 p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['Rentabilité', '+12 %'],
                  ['Trésorerie', 'Sous contrôle'],
                  ['Reporting', 'Mensuel'],
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

              <div className="rounded-[28px] border border-primea-line bg-white p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">
                      Tableau de bord financier
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-primea-violet-dark">
                      Suivi de la rentabilité et du cash
                    </h3>
                  </div>
                  <span className="rounded-full bg-primea-soft px-3 py-1 text-xs font-semibold text-primea-violet-dark">
                    Vue direction
                  </span>
                </div>
                <div className="flex h-44 items-end gap-3">
                  {[42, 56, 51, 68, 63, 76, 84].map((height, index) => (
                    <div className="flex-1" key={height}>
                      <div
                        className={`rounded-t-[18px] ${
                          index === 5
                            ? 'bg-primea-green'
                            : index === 6
                              ? 'bg-primea-violet-dark'
                              : 'bg-primea-violet'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    'Suivi de trésorerie',
                    'Reporting financier automatisé',
                    'Indicateurs clés à jour',
                  ].map((item) => (
                    <div className="rounded-[18px] bg-primea-soft px-4 py-3 text-sm text-primea-ink" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] bg-gradient-to-r from-primea-violet-dark via-primea-violet to-primea-violet-dark p-6 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                  Lecture Prime A
                </p>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  Les outils de pilotage sont conçus pour aider la direction à mieux suivre la
                  performance, fiabiliser les données et accélérer les arbitrages, avec une
                  esthétique sobre et professionnelle.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
