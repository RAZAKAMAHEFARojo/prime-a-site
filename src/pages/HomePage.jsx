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
  expertiseDomains,
  methodSteps,
  serviceHighlights,
} from '../data/siteContent.js'

function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <SectionTitle
            eyebrow="Prime A"
            title="Un cabinet de conseil pour mieux structurer la gestion et la performance"
            description="Prime A accompagne les entreprises dans l’amélioration de leur gestion, de leur performance financière, de leur organisation et de leurs outils digitaux, avec une logique de cabinet de conseil et non d’agence informatique."
          />
          <Reveal className="card-surface bg-primea-soft p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-primea-muted">Présentation</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ['Rigueur', 'Une méthode structurée inspirée des cabinets de conseil, d’audit et d’expertise.'],
                ['Confidentialité', 'Une attention particulière aux données financières, comptables et opérationnelles.'],
                ['Proximité', 'Un accompagnement adapté aux dirigeants, DAF, PME, groupes et directions générales.'],
                ['Résultats concrets', 'Des livrables, outils et plans d’action utiles au pilotage quotidien.'],
              ].map(([title, text]) => (
                <div className="rounded-[24px] bg-white p-5" key={title}>
                  <p className="font-display text-lg font-semibold text-primea-violet-dark">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-primea-muted">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
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

      <section className="container-shell py-10 sm:py-14">
        <SectionTitle
          eyebrow="Services principaux"
          title="Des interventions conçues pour la gestion, le contrôle et la performance"
          description="Quelques exemples de missions récurrentes menées auprès des directions financières, des directions générales et des organisations en transformation."
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
      </section>

      <section className="container-shell py-10 sm:py-14">
        <SectionTitle
          align="center"
          eyebrow="Méthode"
          title="Une démarche d’accompagnement claire et maîtrisée"
          description="Chaque mission est pensée pour sécuriser le cadrage, l’exécution et l’appropriation par les équipes."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {methodSteps.map((step, index) => (
            <MethodStep key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <SectionTitle
          eyebrow="Cas d’usage"
          title="Des exemples concrets de missions orientées pilotage"
          description="Prime A intervient sur des sujets de gestion, de reporting, de rapprochement de données et de structuration des processus."
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

      <section className="container-shell py-10 sm:py-14">
        <SectionTitle
          align="center"
          eyebrow="Pourquoi choisir Prime A"
          title="Une approche crédible, sobre et pluridisciplinaire"
          description="Le positionnement Prime A repose sur la rigueur, la compréhension des réalités opérationnelles et la mise en œuvre de solutions utiles."
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
      </section>

      <section className="container-shell py-8">
        <Reveal className="card-surface bg-gradient-to-r from-primea-soft via-white to-primea-soft px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">Prochaine étape</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-primea-violet-dark">
                Clarifier vos enjeux comptables, financiers, organisationnels et digitaux
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link className="primary-button" to="/contact">
                Demander un diagnostic
              </Link>
              <Link className="secondary-button" to="/services">
                Découvrir nos services
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
