"use client"

import { testimonials } from "@/constants"
import Image from "next/image"
import { useState } from "react"

import { ArrowLeft, ArrowRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"


const TestimonialsList = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const { name, subtitle, imageUrl, raitings, message, } = testimonials[currentIndex]

  const handleNext = () => {
    if (currentIndex == testimonials.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex == 0) {
      setCurrentIndex(testimonials.length - 1)
    } else {
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }

  return (
    <div className="px-6 flex-center flex-col">
      <div className="flex-center flex-col gap-8 mt-24 z-10 bg-white mx-auto max-w-[530px] p-8 relative rounded-xl shadow-xl">
        <Image 
          src={imageUrl}
          width={115}
          height={115}
          alt={name}
          className="rounded-full border-2 shadow-xl absolute top-[-57.5px] left-1/2 -translate-x-1/2"
        />
        <p className="text-lg !leading-[200%] max-w-[392px] text-center mt-[57.5px] relative">
          {message}
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none" className="absolute top-[-50px] left-[-25px]">
            <path d="M15.6586 59.18C12.1394 55.4422 10.25 51.2499 10.25 44.4542C10.25 32.4958 18.6447 21.7778 30.8525 16.4785L33.9036 21.1867C22.509 27.3503 20.2813 35.3488 19.393 40.3918C21.2278 39.4419 23.6297 39.1105 25.9838 39.3292C32.1474 39.8998 37.0059 44.9598 37.0059 51.2499C37.0059 54.4215 35.746 57.4631 33.5034 59.7058C31.2608 61.9484 28.2191 63.2083 25.0476 63.2083C23.2937 63.1929 21.5603 62.8289 19.9484 62.1373C18.3365 61.4458 16.8783 60.4405 15.6586 59.18ZM49.8253 59.18C46.3061 55.4422 44.4167 51.2499 44.4167 44.4542C44.4167 32.4958 52.8114 21.7778 65.0192 16.4785L68.0703 21.1867C56.6757 27.3503 54.448 35.3488 53.5597 40.3918C55.3944 39.4419 57.7963 39.1105 60.1504 39.3292C66.3141 39.8998 71.1726 44.9598 71.1726 51.2499C71.1726 54.4215 69.9127 57.4631 67.6701 59.7058C65.4274 61.9484 62.3858 63.2083 59.2142 63.2083C57.4603 63.1929 55.727 62.8289 54.1151 62.1373C52.5032 61.4458 51.045 60.4405 49.8253 59.18Z" fill="black" fill-opacity="0.19"/>
          </svg>
        </p>
        <button onClick={handlePrev}  className="absolute rounded-full w-16 h-16 flex-center bg-[#737373] hover:bg-primary transition-all top-1/2 -translate-y-1/2 left-[-32px]">
          <ArrowLeft size={24} color="white" />
        </button>
        <button onClick={handleNext} className="absolute rounded-full w-16 h-16 flex-center bg-[#737373] hover:bg-primary transition-all top-1/2 -translate-y-1/2 right-[-32px]">
          <ArrowRight size={24} color="white" />
        </button>
      </div>
      <div className='flex gap-2 items-center mt-12 mx-auto'>
        {testimonials.map((testimonial, index) => (
          <button 
            key={testimonial.id}
            className={cn(
              "text-[#B8B8B8]",
              index == currentIndex && "text-primary"
            )}
            type="button"
            onClick={() => setCurrentIndex(index)}
          >
            <Circle 
              fill={index == currentIndex ? "#274C5B" : "#B8B8B8"}
              size={8} 
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsList