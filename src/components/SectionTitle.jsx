import Reveal from './Reveal.jsx'

function SectionTitle({ eyebrow, title, description, align = 'left', inverse = false }) {
  const center = align === 'center'

  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className={inverse ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
      <h2 className={`mt-4 font-display text-3xl font-semibold sm:text-4xl ${inverse ? 'text-white' : 'text-primea-violet-dark'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${inverse ? 'text-white/72' : 'text-primea-muted'}`}>{description}</p>
      ) : null}
    </Reveal>
  )
}

export default SectionTitle
