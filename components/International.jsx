import { packages } from '@/constants'
import { getTours } from '@/sanity/actions'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'


const International = async () => {

  const tours = await getTours(1, 8)

  return (
    <section className='py-12 px-6 md:px-24'>
      <p className='text-lg text-primary uppercase font-semibold mb-2 text-center'>Explore more</p>
      <h2 className='text-[#181E4B] text-5xl mb-12 font-bold !leading-[142%] text-center'>Our International Packages</h2>
      <div className='flex-center gap-4 flex-wrap'>
        {tours.map(item => (
          <Link href={`/tours/${item.slug.current}`} key={item._id} className='h-96 w-96 aspect-square relative rounded-2xl hover:shadow-cardShadow'>
            <Image
              src={item.gallery[0]}
              alt={item.name}
              fill
              className='absolute inset-0'
            />
            <div className='flex-between absolute bottom-0 left-0 w-full p-4'>
              <span className='text-white text-xl font-semibold'> {item.name}</span>
              <span className=' text-white text-xl block'> ${item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default International