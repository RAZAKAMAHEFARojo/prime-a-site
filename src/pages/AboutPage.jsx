import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

function AboutPage() {
  return (
    <>
      <PageHero
        description="Prime A est né d’un constat simple : les entreprises ont besoin à la fois d’un regard structurant sur leur performance et d’une capacité réelle à mettre en œuvre les outils qui soutiennent leurs décisions."
        eyebrow="À propos"
        title="Un cabinet de conseil hybride, entre exigence méthodologique et mise en œuvre terrain"
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <SectionTitle
            description="Nous intervenons avec les codes d’un cabinet de conseil : analyse, cadrage, priorisation et accompagnement des décideurs. Notre différence est de pouvoir prolonger cette mission par la conception d’outils internes, de tableaux de bord et d’automatisations utiles."
            eyebrow="Positionnement"
            title="Ni simple agence digitale, ni conseil déconnecté de l’exécution"
          />
          <Reveal className="card-surface p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['Méthodes claires', 'Analyse de l’existant, qualification des enjeux et feuille de route progressive.'],
                ['Culture du résultat', 'Chaque intervention vise des gains de lisibilité, de fiabilité ou de temps.'],
                ['Discrétion', 'Nous traitons souvent des sujets de performance, de gestion et d’information sensibles.'],
                ['Approche sur mesure', 'Le niveau d’outillage dépend du contexte, pas d’un standard imposé.'],
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
          description="Une intervention Prime A suit une logique simple, rassurante et actionnable."
          eyebrow="Notre méthode"
          title="Comprendre, structurer, déployer, accompagner"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {[
            ['1. Diagnostic', 'Analyse de l’organisation, des flux, des indicateurs et des irritants.'],
            ['2. Cadrage', 'Définition des priorités, des objectifs et des arbitrages utiles.'],
            ['3. Mise en œuvre', 'Construction des tableaux de bord, automatisations ou outils internes.'],
            ['4. Accompagnement', 'Montée en compétence des équipes et ajustements progressifs.'],
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
