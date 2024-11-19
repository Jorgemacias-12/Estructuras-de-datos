import { $theme } from '@/stores/theme'
import { useStore } from '@nanostores/react'
import type { ReactNode } from 'react'

interface Props {
  id?: string
  className?: string
  lightThemeClassNames?: string
  darkThemeClassnames?: string
  children: ReactNode
  href: string
}

export const LinkButton = ({
  id,
  className,
  children,
  darkThemeClassnames,
  lightThemeClassNames,
  href,
}: Props) => {
  const theme = useStore($theme)

  return (
    <a
      id={id}
      className={`${className} ${
        theme === 'light' ? lightThemeClassNames : darkThemeClassnames
      }`}
      href={href}
    >
      {children}
    </a>
  )
}
