import { $theme } from '@/stores/theme'
import { useStore } from '@nanostores/react'

interface Props {
  iconClassName?: string
  title: string
  description: string
}

export const Card = ({ iconClassName, title, description }: Props) => {
  const theme = useStore($theme)

  const themeClassNames = theme === 'light' ? 'bg-white' : ' border-black_rain-900 bg-black_rain-800'

  return (
    <article
      className={`flex border flex-col rounded-md justify-between ${themeClassNames} p-2 items-center gap-2`}
    >
      <span className={`fas fa-dw text-6xl mt-2 ${iconClassName}`}></span>
      <h4 className="text-sm text-balance text-center">{title}</h4>
      <p className="text-xs">{description}</p>
    </article>
  )
}
