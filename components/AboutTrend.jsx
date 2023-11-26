import Image from 'next/image'
import React from 'react'
import CircularProgress from './CircularProgress'

const AboutTrend = () => {
  return (
    <section className='py-12 px-6 gap-16 sm:px-24 flex items-center flex-col-reverse md:flex-row relative'>
      <Image
        src="/trend-pattern.png"
        alt="pattern"
        width={340}
        height={255}
        className='absolute top-0 right-[-30px] hidden md:block'
      />
      <Image 
        src="/about-trend.png"
        width={556}
        height={645}
        alt="About Us"
      />
      <div className='w-full md:w-1/2 relative z-20'>
        <p className='text-lg text-primary uppercase font-semibold mb-2'>Trend</p>
        <h2 className='text-[#181E4B] text-5xl font-bold !leading-[142%]'>Our Popular Tour Plans</h2>
        <p className='text-lg !leading-[162%] max-w-[570px] my-8'>Immerse yourself in the allure of our most sought-after tour plans, where every itinerary is a symphony of discovery and delight. Each journey is crafted with precision, offering a seamless blend of cultural richness, scenic wonders, and unparalleled experiences.</p>
        <div className='flex items-center gap-4 flex-wrap'>
          <CircularProgress percentage={78} circleWidth="155" color="#DF6951" title="Vacations" />
          <CircularProgress percentage={55} circleWidth="155" color="#DF6951" title="Honeymoon" />
          <CircularProgress percentage={30} circleWidth="155" color="#DF6951" title="Religious Tours" />
        </div>
      </div>
    </section>
  )
}

export default AboutTrend