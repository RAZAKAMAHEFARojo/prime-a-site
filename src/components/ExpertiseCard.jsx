import Reveal from './Reveal.jsx'

function ExpertiseCard({ title, description, accent = 'violet' }) {
  const accentClass =
    accent === 'green'
      ? 'bg-primea-green'
      : accent === 'orange'
        ? 'bg-primea-orange'
        : 'bg-primea-violet'

  return (
    <Reveal className="h-full">
      <article className="card-surface h-full p-6 transition duration-300 hover:-translate-y-1">
        <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${accentClass} text-sm font-bold text-white`}>
          {title.charAt(0)}
        </span>
        <h3 className="font-display text-2xl font-semibold text-primea-violet-dark">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-primea-muted">{description}</p>
      </article>
    </Reveal>
  )
}

export default ExpertiseCard
