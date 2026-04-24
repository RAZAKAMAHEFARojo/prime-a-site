import Reveal from './Reveal.jsx'

function ServiceCard({ title, description, accent = 'violet' }) {
  const accentClass =
    accent === 'green'
      ? 'from-primea-green to-primea-green-light'
      : accent === 'orange'
        ? 'from-primea-orange to-primea-green-light'
        : 'from-primea-violet to-primea-violet-dark'

  return (
    <Reveal className="h-full">
      <article className="card-surface group h-full p-6 transition duration-300 hover:-translate-y-1">
        <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${accentClass}`} />
        <h3 className="mt-6 font-display text-2xl font-semibold text-primea-violet-dark">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-primea-muted">{description}</p>
      </article>
    </Reveal>
  )
}

export default ServiceCard
