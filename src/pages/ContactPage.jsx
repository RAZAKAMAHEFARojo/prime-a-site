import CTA from '../components/CTA.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Échangeons sur vos enjeux de gestion, de pilotage et de digitalisation"
        description="Vous souhaitez améliorer votre gestion, fiabiliser vos données ou digitaliser vos processus ? Contactez Prime A pour un premier échange."
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="section-grid gap-8">
          <Reveal className="card-surface p-8">
            <h2 className="font-display text-3xl font-semibold text-primea-violet-dark">
              Formulaire de contact
            </h2>
            <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Nom
                <input
                  className="rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="Votre nom"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Société
                <input
                  className="rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="Nom de votre société"
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
                Téléphone
                <input
                  className="rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="+261 00 000 00"
                  type="tel"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Sujet
                <input
                  className="rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="Objet de votre demande"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-primea-ink">
                Message
                <textarea
                  className="min-h-36 rounded-2xl border border-primea-line px-4 py-3 outline-none transition focus:border-primea-violet"
                  placeholder="Présentez brièvement votre contexte, vos enjeux ou le type d’accompagnement recherché."
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
                  <span className="font-semibold text-primea-ink">Positionnement :</span> conseil comptable,
                  financier, management, systèmes d’information et digitalisation
                </p>
              </div>
            </div>
            <div className="card-surface bg-primea-soft p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">Premiers sujets abordés</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-primea-ink">
                <li>Fiabilisation des données comptables et financières</li>
                <li>Organisation du reporting et du pilotage de performance</li>
                <li>Digitalisation et automatisation de processus de gestion</li>
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
