import React from 'react'

type CaptureProps = {
  title: string,
  content: string,
  imageURL: string
}

export const Capture = ({title, content, imageURL}: CaptureProps) => {
  return (
    <article className="bg-surface-300 rounded-md">
      
      <img src={imageURL} alt="" className="p-4" />

      <section className="flex flex-col gap-2 p-4">
        <h4 className="font-bold text-xl">{title}</h4>
        <p>{content}</p>
      </section>
    </article>
  )
}
