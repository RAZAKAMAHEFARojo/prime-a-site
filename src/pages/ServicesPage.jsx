import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { serviceItems } from '../data/siteContent.js'

function ServicesPage() {
  return (
    <>
      <PageHero
        description="Nos services couvrent l’organisation, la performance financière et la digitalisation de processus, avec une même exigence de clarté, de fiabilité et d’appropriation par les équipes."
        eyebrow="Services"
        title="Des interventions utiles aux directions, aux fonctions support et aux opérations"
      />

      <section className="container-shell py-10 sm:py-14">
          <SectionTitle
          description="Chaque mission peut être autonome ou s’intégrer dans une démarche plus globale de pilotage et de transformation."
          eyebrow="Offre"
          title="Huit services structurants pour faire avancer l’organisation"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service, index) => (
            <ServiceCard
              accent={index % 3 === 1 ? 'green' : index % 3 === 2 ? 'orange' : 'violet'}
              description={service.description}
              key={service.title}
              title={service.title}
            />
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

export default ServicesPage
