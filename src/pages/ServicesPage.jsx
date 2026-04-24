import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { serviceGroups } from '../data/siteContent.js'

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Quatre blocs d’intervention pour renforcer la gestion, le pilotage et l’organisation"
        description="Les missions Prime A s’adressent aux entreprises qui souhaitent fiabiliser leur information, mieux piloter leur performance et utiliser le digital comme un levier utile à la gestion."
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-8">
          {serviceGroups.map((group, index) => (
            <Reveal className="card-surface p-8" key={group.title}>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.05fr_0.8fr]">
                <div>
                  <span
                    className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white ${
                      group.accent === 'green'
                        ? 'bg-primea-green'
                        : group.accent === 'orange'
                          ? 'bg-primea-orange'
                          : 'bg-primea-violet'
                    }`}
                  >
                    Pôle {index + 1}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-semibold text-primea-violet-dark">
                    {group.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-primea-muted">{group.description}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primea-muted">
                    Prestations
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-primea-ink">
                    {group.services.map((item) => (
                      <li className="rounded-[20px] bg-primea-soft px-4 py-3" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primea-muted">
                    Bénéfices client
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-primea-ink">
                    {group.benefits.map((item) => (
                      <li className="rounded-[20px] border border-primea-line bg-white px-4 py-3" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

export default ServicesPage
