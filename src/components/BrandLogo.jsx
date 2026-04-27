import { Link } from 'react-router'

function BrandLogo({ to = '/', compact = false, inverse = false }) {
  return (
    <Link className="inline-flex min-w-0 items-center gap-2.5 sm:gap-3" to={to}>
      <span className="primea-mark relative block h-12 w-12 shrink-0 sm:h-14 sm:w-14">
        <span className="primea-mark-top absolute left-2.5 top-0 h-4.5 w-7 rounded-[0.7rem] sm:left-3 sm:h-5 sm:w-8" />
        <span className="primea-mark-left absolute bottom-0 left-0 h-9 w-6.5 rounded-[0.8rem] sm:h-10 sm:w-7" />
        <span className="primea-mark-right absolute bottom-0 right-0 h-9 w-7 rounded-[0.8rem] sm:h-10 sm:w-8" />
      </span>
      <span className="min-w-0">
        <span className="flex items-baseline gap-1.5 font-display text-2xl font-bold leading-none sm:gap-2 sm:text-3xl">
          <span className={inverse ? 'text-white' : 'text-primea-violet'}>Prime</span>
          <span className="text-primea-green">A</span>
        </span>
        {!compact ? (
          <span className={`mt-1 block text-xs sm:text-sm ${inverse ? 'text-white/70' : 'text-primea-muted'}`}>
            Conseil comptable, financier et digital
          </span>
        ) : (
          <span className={`mt-1 hidden text-[11px] uppercase tracking-[0.18em] sm:block ${inverse ? 'text-white/70' : 'text-primea-muted'}`}>
            Conseil, finance & pilotage
          </span>
        )}
      </span>
    </Link>
  )
}

export default BrandLogo
