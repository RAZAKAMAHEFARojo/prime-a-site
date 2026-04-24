import { Link } from 'react-router'
import CTA from '../components/CTA.jsx'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { differentiators, pillars, serviceItems } from '../data/siteContent.js'

function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <SectionTitle
            description="Prime A combine les standards d’un cabinet de conseil avec une forte capacité de mise en œuvre. Nous aidons à structurer, piloter et outiller les entreprises avec des solutions utiles, lisibles et durables."
            eyebrow="Prime A"
            title="Un cabinet de conseil tourné vers les résultats concrets"
          />
          <Reveal className="card-surface bg-primea-soft p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-primea-muted">Notre posture</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ['Rigueur', 'Une approche methodique pour cadrer, prioriser et deployer.'],
                ['Confidentialité', 'Une exigence forte dans le traitement des données et des sujets sensibles.'],
                ['Clarté', 'Des outils et livrables compréhensibles par les décideurs et les équipes.'],
                ['Exécution', 'Des recommandations reliées à une mise en œuvre pragmatique.'],
              ].map(([title, description]) => (
                <div className="rounded-[24px] bg-white p-5" key={title}>
                  <p className="font-display text-lg font-semibold text-primea-violet-dark">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-primea-muted">{description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <SectionTitle
          align="center"
          description="Trois dimensions complémentaires pour renforcer la performance et faire avancer les transformations utiles."
          eyebrow="Trois piliers"
          title="Conseiller, structurer, puis mettre en œuvre"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ServiceCard
              accent={index === 1 ? 'green' : index === 2 ? 'orange' : 'violet'}
              description={pillar.description}
              key={pillar.title}
              title={pillar.title}
            />
          ))}
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
          <SectionTitle
          description="Des interventions adaptées aux enjeux d’organisation, de pilotage et de digitalisation."
          eyebrow="Services"
          title="Des services qui relient la vision management au terrain"
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

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <SectionTitle
            description="Les solutions digitales Prime A ne sont pas présentées comme des produits standard. Elles sont pensées comme des prolongements utiles du conseil, au service de la lisibilité, de la fiabilité et de l’exécution."
            eyebrow="Solutions digitales"
            title="Des outils internes utiles, discrets et adaptés à votre organisation"
          />
          <Reveal className="card-surface bg-primea-soft p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Automatisation ciblée', 'Pour réduire les tâches répétitives et fiabiliser les traitements.'],
                ['Digitalisation documentaire', 'Pour mieux organiser, retrouver et exploiter les informations.'],
                ['Outils de pilotage', 'Pour aider les directions à suivre les priorités avec clarté.'],
                ['Accompagnement au changement', 'Pour faire adopter les nouveaux modes de travail durablement.'],
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
          description="Prime A est construit pour des organisations qui attendent à la fois du recul, de la méthode et une capacité d’exécution."
          eyebrow="Pourquoi Prime A"
          title="Une expertise transversale utile aux directions et aux équipes"
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
                Clarifier vos priorités et définir les bons leviers d’action
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link className="primary-button" to="/contact">
                Demander un diagnostic
              </Link>
              <Link className="secondary-button" to="/realisations">
                Voir des cas d’usage
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
