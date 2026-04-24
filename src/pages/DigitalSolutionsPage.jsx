import CTA from '../components/CTA.jsx'
import CapabilityShowcase from '../components/CapabilityShowcase.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

function DigitalSolutionsPage() {
  return (
    <>
      <PageHero
        description="Prime A conçoit des solutions digitales comme des prolongements de la stratégie d’organisation et de pilotage. L’outil vient après le besoin, avec un souci constant de simplicité d’usage et de fiabilité."
        eyebrow="Solutions digitales"
        title="Des outils concrets pour mieux voir, mieux traiter et mieux décider"
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <SectionTitle
            description="Nos solutions couvrent les tableaux de bord, les workflows documentaires, l’automatisation de tâches, l’OCR et les outils internes utiles à la coordination des équipes."
            eyebrow="Ce que nous concevons"
            title="Des solutions sobres, solides et orientées usage"
          />
          <CapabilityShowcase />
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <SectionTitle
          align="center"
          description="Le bon outil digital n’est pas un gadget. Il clarifie la donnée, fluidifie les traitements et fait gagner du temps sur les sujets répétitifs."
          eyebrow="Principes"
          title="Comment nous abordons la digitalisation"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ['Comprendre le flux', 'Nous partons des acteurs, des données et des points de friction existants.'],
            ['Simplifier avant d’automatiser', 'Nous évitons de figer un mauvais processus dans un outil.'],
            ['Assurer l’adoption', 'Les interfaces, restitutions et contrôles sont pensés pour les usages réels.'],
          ].map(([title, text]) => (
            <Reveal className="card-surface p-6" key={title}>
              <p className="font-display text-2xl font-semibold text-primea-violet-dark">{title}</p>
              <p className="mt-4 text-sm leading-7 text-primea-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

export default DigitalSolutionsPage
