import { $theme } from '@/stores/theme'
import { appendbaseUrl } from '@/utils'
import { useStore } from '@nanostores/react'

type CaptureProps = {
  title: string
  content: string
  imageURL: string
  alt?: string
}

export const Capture = ({ title, content, imageURL, alt }: CaptureProps) => {
  const theme = useStore($theme)

  const light = 'border'
  const dark = 'border border-black_rain-900'

  return (
    <article className={`flex flex-col gap-2 rounded-md p-2 ${theme === 'light' ? light : dark}`}>
      <img src={appendbaseUrl(imageURL)} className='' alt={alt!} />

      <section className="flex flex-col gap-2">
        <h4 className="font-bold">{title}</h4>
        <p className="text-left">{content}</p>
      </section>
    </article>
  )
}
