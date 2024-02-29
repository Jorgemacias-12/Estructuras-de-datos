import React, { useEffect, useState } from 'react'
import { type Image } from '@/types'

type CarrouselProps = {
  imageList: Image[]
}

export const Carrousel = ({ imageList }: CarrouselProps) => {

  const [currentImage, setCurrentImage] = useState(0);

  const handleIncrementButtonClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
  }

  const handleDecrementButtonClick = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === 0) {
        return imageList.length - 1
      }
      else {
        return prevImage - 1
      }
    });
  }

  useEffect(() => {
    setCurrentImage(0);
  }, [imageList])

  return (
    <section className="p-2 flex gap-2 flex-grow-0 items-center">
      <button className="bg-slate-700 rounded-md p-2" onClick={handleDecrementButtonClick}>
        <span className="fas fa-arrow-left fa-2xl"></span>
      </button>
      <section className='relative'>
        <p className='absolute flex items-center justify-center -top-5 -left-5 p-2 bg-red-500 w-[48px] h-[48px] font-bold rounded-full'>{currentImage + 1}</p>
        <img src={imageList[currentImage].url} alt="" />
        <p className='absolute w-full bg-black/30 bottom-0 p-2 text-center'>
          {imageList[currentImage].caption}
        </p>
      </section>
      <button className='bg-slate-700 rounded-md p-2' onClick={handleIncrementButtonClick}>
        <span className="fas fa-arrow-right fa-2xl"></span>
      </button>
    </section>
  )
}
