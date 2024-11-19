import type { Theme } from '@/types'
import type { ReactNode } from 'react'

interface Props {
  id?: string
  className?: string
  innerContainerClassName?: string
  children: ReactNode
  background?: Theme
}

export const Section = ({
  id,
  className,
  children,
  background,
  innerContainerClassName,
}: Props) => {
  return (
    <section id={id} className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
      <div
        className={`w-full max-w-2xl mx-auto px-4 md:px-6 ${innerContainerClassName}`}
      >
        {children}
      </div>
    </section>
  )
}
