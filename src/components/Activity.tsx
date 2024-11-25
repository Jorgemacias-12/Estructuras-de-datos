import { $theme } from '@/stores/theme'
import { appendbaseUrl } from '@/utils'
import { useStore } from '@nanostores/react'
import { useRef, useState } from 'react'
import { type MouseEvent } from 'react'

interface Props {
  id: string
  title: string
  description: string
  publicationDate: Date
  updatedDate: Date
  heroImage: string
  lang: string
}

export const Activity = ({
  id,
  title,
  description,
  publicationDate,
  updatedDate,
  heroImage,
  lang,
}: Props) => {
  const theme = useStore($theme)

  const lightClassNames = 'bg-white'
  const darkClassNames = 'bg-black_rain-800 border border-black_rain-900'
  const themeClassNames = theme === 'light' ? lightClassNames : darkClassNames

  const detailsEl = useRef<HTMLDetailsElement | null>(null)
  const summaryEl = useRef<HTMLElement | null>(null)
  const contentEl = useRef<HTMLDivElement | null>(null)

  const [isAnimating, setIsAnimating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  let animation: Animation | null = null

  const onAnimationEnd = (expanded: boolean) => {
    setIsAnimating(false)
    setIsOpen(expanded)

    if (!detailsEl.current) return

    detailsEl.current.open = expanded
    detailsEl.current.style.height = expanded ? 'auto' : ''
  }

  const expand = () => {
    if (!detailsEl.current || !summaryEl.current || !contentEl.current) return

    const startHeight = `${detailsEl.current.offsetHeight}px`
    const endHeight = `${
      summaryEl.current.offsetHeight + contentEl.current.offsetHeight
    }px`

    if (animation) animation.cancel()

    animation = detailsEl.current.animate(
      { height: [startHeight, endHeight] },
      { duration: 400, easing: 'ease-out' }
    )

    animation.onfinish = () => onAnimationEnd(true)
    animation.oncancel = () => setIsAnimating(false)
  }

  const collapse = () => {
    if (!detailsEl.current || !summaryEl.current) return

    setIsAnimating(true)
    const startHeight = `${detailsEl.current.offsetHeight}px`
    const endHeight = `${summaryEl.current.offsetHeight}px`

    if (animation) animation.cancel()

    detailsEl.current.style.overflow = 'hidden'

    animation = detailsEl.current.animate(
      { height: [startHeight, endHeight] },
      { duration: 400, easing: 'ease-out' }
    )

    animation.onfinish = () => onAnimationEnd(false)
    animation.oncancel = () => setIsAnimating(false)
  }

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) {
      return
    }
    e.preventDefault()

    if (isAnimating) return

    if (!isOpen) {
      expand()
    } else {
      collapse()
    }
  }

  const summaryLangText = lang === 'es' ? 'Más detalles' : 'More details'

  const createdLabel = lang === 'es' ? 'Fecha de creación: ' : ''
  const updatedLabel = lang === 'es' ? 'Actualizado el: ' : ''

  const visitLabel = lang === 'es' ? 'Ir al documento' : 'Go to article'

  return (
    <article
      className={`flex flex-col items-center rounded-lg border p-2 gap-2 self-start ${themeClassNames}`}
    >
      <img
        alt="Activity/project card image"
        className="rounded-md w-full"
        width={300}
        height={300}
        src={heroImage}
      />

      <h3 className="font-bold text-xl text-center text-balance">{title}</h3>

      <p className="text-xs text-center text-balance mb-2">{description}</p>

      <section>
        <span
          onClick={handleClick}
          className={`hover:text-blue-500 hover:underline border px-2 py-1 rounded-md cursor-pointer ${
            theme === 'light' ? '' : 'border-gray-500'
          }`}
        >
          {summaryLangText}
        </span>

        <a
          className="bg-persimmon active:bg-persimmon-100 active:text-persimmon-800 px-2 py-1 rounded-md text-white m-2 w-full"
          href={appendbaseUrl(`/activities/${id}`)}
        >
          {visitLabel}
        </a>
      </section>

      <details className="flex flex-col gap-2 w-full" ref={detailsEl}>
        <summary
          className={`justify-between items-center gap-2 cursor-pointer p-2 border-b hidden ${
            theme === 'light' ? '' : 'border-black_rain-900 border-b-2'
          }`}
          onClick={handleClick}
          ref={summaryEl}
        >
        </summary>
        <div className="flex justify-between gap-2 p-2" ref={contentEl}>
          <p className="bg-indigo-200 text-indigo-900 p-2 w-full rounded-md text-xs text-wrap text-center ">
            {createdLabel}
            {publicationDate.toLocaleDateString()}
          </p>
          {updatedDate && (
            <p className="bg-rose-200 text-rose-900 p-2 w-full rounded-md text-xs text-wrap text-center">
              {updatedLabel}
              {updatedDate.toLocaleDateString()}
            </p>
          )}
        </div>
      </details>
    </article>
  )
}
