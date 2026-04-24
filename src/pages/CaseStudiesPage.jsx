import CTA from '../components/CTA.jsx'
import CaseStudyCard from '../components/CaseStudyCard.jsx'
import PageHero from '../components/PageHero.jsx'
import { caseStudies } from '../data/siteContent.js'

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cas d’usage"
        title="Des exemples de missions orientées gestion, pilotage et fiabilisation"
        description="Quelques illustrations de l’approche Prime A sur des problématiques de reporting financier, d’organisation, de digitalisation et de système d’information."
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-6 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

export default CaseStudiesPage
