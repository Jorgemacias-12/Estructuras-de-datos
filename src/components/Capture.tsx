import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react";

type CaptureProps = {
  title: string,
  content: string,
  imageURL: string
}

export const Capture = ({title, content, imageURL}: CaptureProps) => {
  const theme = useStore($theme);
  
  const light = "bg-white-smoke-500 border";
  const dark = "bg-raisin-black-600";

  return (
    <article className={`flex flex-col gap-4 rounded-md p-2 ${theme === 'light' ? light : dark}`}>
      
      <img src={imageURL} alt="" className="" />

      <section className="flex flex-col gap-2">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-left">{content}</p>
      </section>
    </article>
  )
}
