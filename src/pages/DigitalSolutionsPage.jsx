import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { digitalSolutions } from '../data/siteContent.js'

function DigitalSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions digitales"
        title="Des solutions digitales au service de la gestion et de la performance"
        description="Prime A présente le digital comme un levier de pilotage comptable, financier et opérationnel. Les outils sont conçus pour améliorer la qualité de l’information, simplifier les traitements et soutenir la décision."
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <SectionTitle
            eyebrow="Ce que nous concevons"
            title="Des solutions concrètes pour mieux suivre, rapprocher et exploiter la donnée"
            description="Les dispositifs mis en place sont pensés comme des outils de gestion, de reporting financier et de fluidification des processus."
          />
          <Reveal className="card-surface bg-primea-soft p-8">
            <ul className="grid gap-3 text-sm leading-7 text-primea-ink">
              {digitalSolutions.map((item) => (
                <li className="rounded-[22px] bg-white px-4 py-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <SectionTitle
          align="center"
          eyebrow="Principes"
          title="Une logique de gestion avant une logique technologique"
          description="Le digital est mobilisé pour fiabiliser, rapprocher, automatiser et mieux piloter. Les outils sont sélectionnés pour leur utilité en gestion et en reporting, jamais pour un effet technologique."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ['Pilotage financier', 'Les tableaux de bord et reportings servent d’abord la lecture des performances, des marges et du cash.'],
            ['Automatisation ciblée', 'Les automatisations sont retenues lorsqu’elles réduisent les ressaisies, les délais ou les risques d’erreur.'],
            ['Système d’information utile', 'Les connexions entre Excel, bases de données et outils métiers visent la cohérence de l’information de gestion.'],
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
