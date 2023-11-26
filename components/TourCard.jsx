import { getMinDate } from '@/lib/utils'
import { Calendar, Star, User } from 'lucide-react'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'

const TourCard = ({ tour }) => {


  const { name, price, summary, thumbnail, slug, group, upcoming_dates } = tour

  console.log(thumbnail);

  return (
    <Link href={`/tours/${slug.current}`} className='max-w-[340px] p-[20px] bg-white hover:shadow-altCardShadow md:hover:-translate-x-4 md:hover:-translate-y-4 cursor-pointer transition-all rounded-2xl border'>
      <Image 
        src={thumbnail}
        alt={name}
        width={328}
        height={303}
        className='object-cover'
      />
      <div className='flex-between flex-wrap gap-4 p-2 bg-primary'>
        <span className='flex items-center gap-2 text-white text-sm'> <Calendar />{getMinDate(upcoming_dates)}</span>
        <span className='flex items-center gap-2 text-white text-sm'> <User /> {group}</span>
      </div>
      <div className='p-4'>
        <h4 className='text-4xl mt-2 text-[#181E4B] font-bold capitalize'>{name}</h4>
        <p className='my-4 text-lg !leading-[162%] max-w-[310px] text-[#181E4B]'>{summary}</p>
        <div className='flex items-center gap-6'>
          <span className='text-lg text-[#181E4B] font-semibold'>{price} $</span>
          <span className=' text-[#181E4B] flex items-center gap-2 text-sm font-semibold'>
            <Star size={14} color='#DF6951' />
            <span className='text-lg'>
              5
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default TourCard