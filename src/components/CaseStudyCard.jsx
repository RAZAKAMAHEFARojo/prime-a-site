import Reveal from './Reveal.jsx'

function CaseStudyCard({ title, problem, solution, result }) {
  return (
    <Reveal className="h-full">
      <article className="card-surface h-full p-6">
        <h3 className="font-display text-2xl font-semibold text-primea-violet-dark">{title}</h3>
        <div className="mt-6 grid gap-4">
          <div className="rounded-[22px] bg-primea-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primea-muted">Problème</p>
            <p className="mt-2 text-sm leading-7 text-primea-ink">{problem}</p>
          </div>
          <div className="rounded-[22px] bg-white p-4 ring-1 ring-primea-line">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primea-muted">Solution</p>
            <p className="mt-2 text-sm leading-7 text-primea-ink">{solution}</p>
          </div>
          <div className="rounded-[22px] bg-primea-violet-dark p-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Résultat attendu</p>
            <p className="mt-2 text-sm leading-7 text-white/88">{result}</p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default CaseStudyCard
