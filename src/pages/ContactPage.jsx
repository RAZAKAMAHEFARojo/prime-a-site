import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

function ContactPage() {
  return (
    <>
      <PageHero
        description="Vous pouvez utiliser ce formulaire pour une première prise de contact. Il est volontairement statique à ce stade et pourra ensuite être relié à l’outil de votre choix."
        eyebrow="Contact"
        title="Parlons de vos enjeux d’organisation, de pilotage ou de digitalisation"
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <Reveal className="card-surface p-8">
            <h2 className="font-display text-3xl font-semibold text-primea-violet-dark">
              Demande de diagnostic
            </h2>
            <form
              className="mt-8 grid gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Nom
                <input
                  className="rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="Votre nom"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Email
                <input
                  className="rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="vous@entreprise.com"
                  type="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Entreprise
                <input
                  className="rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="Nom de l’entreprise"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Votre besoin
                <textarea
                  className="min-h-36 rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="Quelques lignes sur votre contexte, vos priorités ou les outils envisagés"
                />
              </label>
              <button className="primary-button w-fit" type="submit">
                Envoyer la demande
              </button>
            </form>
          </Reveal>

          <Reveal className="grid gap-6">
            <div className="card-surface p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">Coordonnées</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-primea-muted">
                <p>
                  <span className="font-semibold text-primea-ink">Email :</span> contact@primea-conseil.com
                </p>
                <p>
                  <span className="font-semibold text-primea-ink">Téléphone :</span> +254 700 000 000
                </p>
                <p>
                  <span className="font-semibold text-primea-ink">Disponibilité :</span> Diagnostic,
                  mission ciblée ou accompagnement global
                </p>
              </div>
            </div>
            <div className="card-surface bg-primea-soft p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">Ce que nous privilégions</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-primea-ink">
                <li>Un premier cadrage simple et confidentiel</li>
                <li>Une formulation claire des enjeux métier</li>
                <li>Des recommandations pragmatiques et proportionnées</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default ContactPage
