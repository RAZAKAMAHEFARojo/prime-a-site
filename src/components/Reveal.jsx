import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()} ref={ref}>
      {children}
    </div>
  )
}

export default Reveal
