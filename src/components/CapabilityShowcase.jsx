import Reveal from './Reveal.jsx'

function CapabilityShowcase() {
  return (
    <Reveal>
      <div className="card-surface overflow-hidden bg-white p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-primea-line pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primea-muted">
              Notre approche
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-primea-violet-dark">
              Structurer, piloter, déployer
            </h3>
          </div>
          <span className="rounded-full bg-primea-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primea-violet-dark">
            Conseil hybride
          </span>
        </div>

        <div className="mt-6 grid gap-4">
          {[
            [
              'Diagnostic et cadrage',
              "Analyse de l'organisation, des flux et des indicateurs pour définir des priorités claires.",
            ],
            [
              'Pilotage et performance',
              "Mise en place d'outils de suivi utiles aux directions, avec une lecture simple des enjeux.",
            ],
            [
              'Mise en œuvre digitale',
              "Conception de solutions internes concrètes lorsque le besoin appelle un outil ou une automatisation.",
            ],
          ].map(([title, text], index) => (
            <div
              className="rounded-[24px] border border-primea-line bg-white p-5 transition duration-300 hover:-translate-y-0.5"
              key={title}
            >
              <div className="flex gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white ${
                    index === 1
                      ? 'bg-primea-green'
                      : index === 2
                        ? 'bg-primea-orange'
                        : 'bg-primea-violet'
                  }`}
                >
                  0{index + 1}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-primea-violet-dark">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-primea-muted">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] bg-primea-soft p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-primea-muted">Ce que nos clients recherchent</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              'Une meilleure lisibilité de la performance',
              'Des processus plus fluides et fiables',
              'Des outils adaptés aux usages réels',
              'Un accompagnement rigoureux et discret',
            ].map((item) => (
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-primea-ink" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default CapabilityShowcase
