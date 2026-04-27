import { Link } from 'react-router'
import CTA from '../components/CTA.jsx'
import CaseStudyCard from '../components/CaseStudyCard.jsx'
import ExpertiseCard from '../components/ExpertiseCard.jsx'
import Hero from '../components/Hero.jsx'
import MethodStep from '../components/MethodStep.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import {
  caseStudies,
  differentiators,
  digitalSolutions,
  expertiseDomains,
  methodSteps,
  serviceHighlights,
} from '../data/siteContent.js'

function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-band-soft">
        <div className="container-shell py-12 sm:py-16">
          <div className="section-grid gap-8">
            <SectionTitle
              eyebrow="Positionnement"
              title="Un cabinet de conseil au croisement de la finance, du management et du digital"
              description="Prime A est un cabinet de conseil spécialisé en comptabilité, finance, management et systèmes d’information. Nous aidons les entreprises à fiabiliser leurs données, structurer leur organisation et piloter leur performance grâce à une approche combinant expertise financière et outils digitaux."
            />
            <Reveal className="card-surface bg-primea-soft p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-primea-muted">Prime A</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ['Rigueur', 'Une méthode structurée inspirée des cabinets de conseil, d’audit et d’expertise.'],
                  ['Confidentialité', 'Une attention particulière aux données financières, comptables et opérationnelles.'],
                  ['Pilotage', 'Des indicateurs, reportings et processus conçus pour aider la décision.'],
                  ['Digital utile', 'Des outils mobilisés au service de la gestion, jamais comme une fin en soi.'],
                ].map(([title, text]) => (
                  <div className="rounded-[24px] bg-white p-5" key={title}>
                    <p className="font-display text-lg font-semibold text-primea-violet-dark">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-primea-muted">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 sm:py-16">
        <SectionTitle
          align="center"
          eyebrow="Domaines d’intervention"
          title="Quatre leviers complémentaires pour mieux piloter l’entreprise"
          description="Prime A articule comptabilité, finance, management et systèmes d’information pour apporter une réponse plus globale aux enjeux de pilotage."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {expertiseDomains.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-band-dark">
        <div className="container-shell py-12 sm:py-16">
        <SectionTitle
          inverse
          align="center"
          eyebrow="Services principaux"
          title="Des interventions conçues pour la gestion, le contrôle et la performance"
            description="Des services structurés pour aider les entreprises à mieux fiabiliser leurs données, organiser leurs flux et piloter leurs indicateurs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                accent={index === 1 ? 'green' : index === 2 ? 'orange' : 'violet'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-12 sm:py-16">
        <SectionTitle
          eyebrow="Solutions mises en place"
          title="Des solutions concrètes pour mieux piloter"
          description="Prime A conçoit et met en place des outils de gestion utiles aux directions financières et aux dirigeants."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {digitalSolutions.map((item, index) => (
            <Reveal className="card-surface p-5" key={item}>
              <div className="flex items-start gap-4">
                <span
                  className={`mt-1 flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold text-white ${
                    index % 3 === 1
                      ? 'bg-primea-green'
                      : index % 3 === 2
                        ? 'bg-primea-orange'
                        : 'bg-primea-violet'
                  }`}
                >
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-primea-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-band-soft">
        <div className="container-shell py-12 sm:py-16">
          <SectionTitle
            align="center"
            eyebrow="Méthode"
            title="Une méthode structurée, pragmatique et orientée résultats"
            description="Chaque mission est pensée pour sécuriser le diagnostic, structurer les priorités et déployer des solutions concrètes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {methodSteps.map((step, index) => (
              <MethodStep key={step.title} index={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-12 sm:py-16">
        <SectionTitle
          eyebrow="Cas d’usage"
          title="Cas d’usage"
          description="Des exemples concrets de sujets traités pour améliorer la qualité de l’information, la rapidité du reporting et le pilotage financier."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {caseStudies.slice(0, 4).map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link className="secondary-button" to="/cas-usage">
            Voir tous les cas d’usage
          </Link>
        </div>
      </section>

      <section className="section-band-soft">
        <div className="container-shell py-12 sm:py-16">
          <SectionTitle
            align="center"
            eyebrow="Pourquoi choisir Prime A"
            title="Pourquoi choisir Prime A ?"
            description="Le cabinet se distingue par une approche pluridisciplinaire, une lecture concrète des enjeux opérationnels et des solutions directement applicables."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {differentiators.map((item) => (
              <Reveal className="card-surface p-6" key={item}>
                <div className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primea-violet text-sm font-semibold text-white">
                    +
                  </span>
                  <p className="text-sm leading-7 text-primea-ink">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-8">
        <Reveal className="card-surface bg-gradient-to-r from-primea-soft via-white to-primea-soft px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">Prochaine étape</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-primea-violet-dark">
                Vous souhaitez améliorer votre gestion, fiabiliser vos données ou digitaliser vos processus ?
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link className="primary-button" to="/contact">
                Demander un diagnostic
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTA />
    </>
  )
}

export default HomePage
