import Reveal from './Reveal.jsx'

function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const center = align === 'center'

  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-primea-violet-dark sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-primea-muted sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}

export default SectionTitle
