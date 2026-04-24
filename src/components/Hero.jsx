import { Link } from 'react-router'
import BrandLogo from './BrandLogo.jsx'
import CapabilityShowcase from './CapabilityShowcase.jsx'
import Reveal from './Reveal.jsx'

function Hero() {
  return (
    <section className="container-shell pt-8 pb-20 sm:pt-12 sm:pb-24">
      <Reveal className="card-surface overflow-hidden bg-white/95 p-3 sm:p-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 rounded-[30px] bg-gradient-to-br from-white via-white to-primea-soft p-5 sm:p-8">
            <BrandLogo />
            <div className="mt-8 grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
              <div className="min-w-0 space-y-6">
                <span className="eyebrow">Bienvenue chez Prime A</span>
                <div className="space-y-5">
                  <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-primea-violet-dark sm:text-5xl xl:text-[4rem] xl:leading-[1.02]">
                    Vos opérations,
                    <span className="block text-primea-violet">mieux suivies,</span>
                    <span className="block text-primea-green">mieux pilotées.</span>
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-primea-muted sm:text-lg">
                    Des solutions digitales pour optimiser la gestion, suivre vos performances
                    et accélérer votre croissance avec une logique de cabinet de conseil.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link className="inline-flex items-center justify-center rounded-2xl bg-primea-green px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primea-green/90" to="/solutions-digitales">
                    Découvrir nos solutions
                  </Link>
                  <Link className="secondary-button rounded-2xl" to="/contact">
                    Nous contacter
                  </Link>
                </div>
              </div>

              <div className="relative min-w-0">
                <div className="absolute left-0 top-8 h-24 w-24 rounded-full bg-primea-violet/10 blur-2xl sm:-left-8 sm:h-28 sm:w-28" />
                <div className="absolute right-0 bottom-8 h-28 w-28 rounded-full bg-primea-green/15 blur-3xl sm:-right-4 sm:h-36 sm:w-36" />
                <CapabilityShowcase />
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-primea-line pt-6 md:grid-cols-4">
              {[
                ['Sécurité renforcée', 'Vos données sont protégées avec les meilleurs standards.'],
                ['Gain de temps', 'Automatisez les taches repetitives.'],
                ['Meilleure performance', 'Des outils puissants pour des décisions éclairées.'],
                ['Support réactif', 'Notre équipe est disponible pour vous accompagner.'],
              ].map(([title, text]) => (
                <div className="flex gap-3" key={title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primea-violet shadow-sm">
                    +
                  </span>
                  <div>
                    <p className="font-semibold text-primea-violet-dark">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-primea-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-5">
            <div className="rounded-[28px] bg-primea-violet-dark px-6 py-7 text-white">
              <p className="text-sm font-semibold text-primea-green">Nos engagements</p>
              <div className="mt-6 space-y-5">
                {[
                  ['Rigueur', 'Une methode claire pour cadrer, prioriser et avancer sans dispersion.', 'violet'],
                  ['Confidentialité', 'Une attention forte à la protection des informations et des données.', 'green'],
                  ['Accompagnement', "Une présence concrète pour aider les équipes à s'approprier les solutions.", 'orange'],
                ].map(([title, text, color]) => (
                  <div className="flex gap-4" key={title}>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white ${
                        color === 'green'
                          ? 'bg-primea-green'
                          : color === 'orange'
                            ? 'bg-primea-orange'
                            : 'bg-primea-violet'
                      }`}
                    >
                      {title.startsWith('Rigueur') ? 'R' : title.startsWith('Confidentialité') ? 'C' : 'A'}
                    </span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/72">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-primea-violet to-primea-violet-dark px-6 py-7 text-white shadow-[var(--shadow-soft)]">
              <p className="font-display text-2xl font-semibold">Prêt à passer au niveau supérieur ?</p>
              <p className="mt-3 text-sm leading-7 text-white/76">
                Échangeons sur vos enjeux d’organisation, de performance ou de digitalisation
                dans un cadre simple, professionnel et concret.
              </p>
              <Link
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-primea-violet transition duration-300 hover:-translate-y-0.5"
                to="/contact"
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero
