import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une approche pluridisciplinaire entre rigueur financière, organisation et systèmes d’information"
        description="Prime A intervient comme cabinet de conseil auprès des entreprises qui souhaitent mieux structurer leur gestion, améliorer leur performance et faire évoluer leurs outils avec méthode."
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <SectionTitle
            eyebrow="Positionnement"
            title="Un cabinet hybride, au croisement du comptable, du financier, du management et du digital"
            description="Prime A ne sépare pas les enjeux de pilotage financier, d’organisation et de système d’information. Le cabinet intervient avec une compréhension fine des réalités opérationnelles et de la donnée de gestion."
          />
          <Reveal className="card-surface p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['Rigueur comptable et financière', 'Une attention forte à la qualité de l’information et à la fiabilité des flux.'],
                ['Réalisme opérationnel', 'Une lecture concrète des contraintes terrain, des circuits de décision et des responsabilités.'],
                ['IT comme levier', 'Les outils digitaux sont mobilisés pour mieux gérer, mieux suivre et mieux décider.'],
                ['Confidentialité', 'Les sujets traités sont souvent sensibles et demandent discrétion et méthode.'],
              ].map(([title, text]) => (
                <div className="rounded-[24px] bg-primea-soft p-5" key={title}>
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
          eyebrow="Ce qui nous caractérise"
          title="Une posture de proximité, avec un niveau d’exigence élevé"
          description="Prime A accompagne les dirigeants et directions avec un souci constant de lisibilité, de discrétion et d’efficacité."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ['Accompagnement de proximité', 'Une relation de travail directe, lisible et adaptée au contexte de l’entreprise.'],
            ['Méthode structurée', 'Un cadrage clair, des priorités assumées et une exécution progressive.'],
            ['Solutions utiles', 'Des recommandations concrètes, éventuellement prolongées par des outils réellement nécessaires.'],
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

export default AboutPage
