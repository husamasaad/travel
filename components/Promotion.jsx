import Image from 'next/image'
import { Button } from './ui/button'
import { getTours } from '@/sanity/actions'
import { Link } from 'nextjs13-progress'

const Promotion = async () => {

  const promotionTours = await getTours(1, 4, 'nature')


  return (
    <section className='paddings relative'>
      <Image 
        src="/promotion.png"
        width={476}
        height={613}
        className='absolute right-5 hidden lg:block top-10'
      />
      <div className='w-full md:w-1/2'>
        <p className='text-lg text-primary uppercase font-semibold mb-1'>Promotion</p>
        <h2 className='text-[#181E4B] text-5xl font-bold !leading-[142%]'>We Provide You Best Europe Sightseeing Tours</h2>
        <p className='text-lg !leading-[162%] max-w-[570px] my-8'>
          Embark on a journey through the enchanting landscapes and rich history of Europe with our meticulously crafted sightseeing tours. Immerse yourself in the vibrant cultures, iconic landmarks, and hidden gems that make Europe a unique and unforgettable destination. Our expertly curated itineraries ensure you experience the best of each location, creating memories that will last a lifetime. Join us as we turn every moment into an opportunity to explore, learn, and savor the beauty that Europe has to offer.
        </p>
        <Link href='/tours?location=Europe'>
          <Button size="xl">
            View Packages
          </Button>
        </Link>
      </div>
      <div className='flex-center flex-wrap gap-8 relative z-30 mt-12'>
        {promotionTours?.map(item => (
          <Link key={item._id} href={`/tours/${item.slug.current}`} className='relative hover:shadow-cardShadow cursor-pointer'>
            <Image 
              src={item.gallery[0]}
              alt={item.name}
              width={231}
              height={237}
              className='object-cover shadow-xl rounded-2xl'
            />
            <span className='absolute top-3 right-3 tag-gradient px-3 py-1.5 text-white text-sm font-light'>${item.price}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Promotion