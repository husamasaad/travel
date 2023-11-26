import Image from 'next/image'
import { User, Calendar, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'nextjs13-progress'
import { getTours } from '@/sanity/actions'

const Trendy = async () => {

  const trendyTours = await getTours(1, 3)

  return (
    <section className='paddings'>
      <p className='text-lg text-primary uppercase font-semibold text-center mb-2'>Trendy</p>
      <h2 className='text-[#181E4B] text-5xl text-center mb-12 font-bold !leading-[142%]'>Our Trending Tour Packages</h2>
      <div className='flex-center flex-wrap gap-8'>
        {trendyTours.map(item => (
          <div className='shadow-cardShadow p-2 rounded-xl max-w-[320px]'>
            <Image 
              src={item.thumbnail}
              alt={item.name}
              width={397}
              height={312}
            />
            <div className='relative py-8 px-4 w-full'>
              <div className='flex-between'>
                <span className='flex items-center gap-2 text-[#7D7D7D] text-lg'> <Calendar /> {item.duration} Days</span>
                <span className='flex items-center gap-2 text-[#7D7D7D] text-lg'> <User /> {item.group}</span>
              </div>
              <h4 className='text-[#2F2F2F] text-5xl my-4'>{item.name}</h4>
              <span className='flex items-center gap-2 text-[#7D7D7D] text-lg'> <MapPin /> {item.tour_location}</span>
              <div className='flex items-center gap-8 mt-6'>
                <p className='text-4xl text-primary'>${item.price}</p>
              </div>
              <p className='my-6 text-lg !leading-[162%] max-w-[310px]'>{item.summary}</p>
              <Link href={`/tours/${item.slug.current}`} className='block w-full'>
                <Button size="xl">
                  View Package
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trendy