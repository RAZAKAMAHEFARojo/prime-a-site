import Reveal from './Reveal.jsx'

function MethodStep({ index, title, description }) {
  return (
    <Reveal className="h-full">
      <article className="card-surface h-full p-6">
        <span className="inline-flex rounded-full bg-primea-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primea-violet-dark">
          Étape {index}
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-primea-violet-dark">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-primea-muted">{description}</p>
      </article>
    </Reveal>
  )
}

export default MethodStep
