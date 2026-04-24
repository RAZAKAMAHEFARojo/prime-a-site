import Reveal from './Reveal.jsx'

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="container-shell py-12 sm:py-16">
      <Reveal className="card-surface bg-white/85 px-6 py-10 sm:px-10 sm:py-14">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold text-primea-violet-dark sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-primea-muted sm:text-lg">
          {description}
        </p>
      </Reveal>
    </section>
  )
}

export default PageHero
