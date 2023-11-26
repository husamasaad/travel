import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Link } from 'nextjs13-progress'

const Explore = () => {
  return (
    <section className='flex-start flex-col md:flex-row mt-12'>
      <div className='w-full md:w-1/2 relative h-[400px]'>
        <Image 
          src="/explore-nature.png"
          alt="Explore Nature"
          fill
          className='absolute inset-0 object-cover'
        />
        <div className='flex-center flex-col relative z-20 h-full'>
          <p className='text-lg text-[#FFEFEC] uppercase font-semibold'>Promotion</p>
          <h2 className='text-white text-5xl font-bold'>Explore Nature</h2>
          <Link href='/tours?type=nature'>
            <Button variant="outline" size="xl" className="mt-8">
              View Packages
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-full md:w-1/2 relative h-[400px]'>
        <Image 
          src="/explore-city.png"
          alt="Explore City"
          fill
          className='absolute inset-0 object-cover'
        />
        <div className='flex-center flex-col relative z-20 h-full'>
          <p className='text-lg text-[#FFEFEC] uppercase font-semibold'>Promotion</p>
          <h2 className='text-white text-5xl font-bold'>Explore Cities</h2>
          <Link href='/tours?type=exotic'>
            <Button variant="outline" size="xl" className="mt-8">
              View Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Explore