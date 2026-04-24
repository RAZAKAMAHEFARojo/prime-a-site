import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { caseStudies } from '../data/siteContent.js'

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        description="Quelques exemples de cas d’usage représentatifs de l’approche Prime A : partir d’un besoin métier, structurer l’information et déployer une solution claire pour le pilotage."
        eyebrow="Réalisations"
        title="Des cas d’usage orientés performance, fiabilité et gain de temps"
      />

      <section className="container-shell py-10 sm:py-14">
          <SectionTitle
          description="Les contextes varient, mais la logique reste la même : clarifier les enjeux, fiabiliser la donnée et construire un dispositif utile aux décideurs."
          eyebrow="Cas d’usage"
          title="Trois exemples de missions types"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal className="card-surface p-6" key={study.title}>
              <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">
                Cas {index + 1} · {study.sector}
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-primea-violet-dark">
                {study.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-primea-muted">{study.result}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

export default CaseStudiesPage
