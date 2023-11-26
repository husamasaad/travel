import Image from 'next/image'
import React from 'react'

const Icon = (iconSrc, width, height) => {
  return (
    <Image 
      src={iconSrc}
      width={width}
      height={height}
      alt='icon'
    />
  )
}

export default Icon