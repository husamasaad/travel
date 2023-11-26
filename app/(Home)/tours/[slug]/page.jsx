import TourDetails from "@/components/TourDetails"
import { getTours, getToursCount } from "@/sanity/actions"
import Image from "next/image"
import Link from "nextjs13-progress"


export const revalidate = 90

export async function generateStaticParams() {
  
  const count = await getToursCount()

  const tours = await getTours(1, count)

  return tours?.map((tour) => ({
    slug: tour.slug.current,
  }))
}

async function page({ params: { slug } }) {

  const count = await getToursCount()
  const tours = await getTours(1, count)

  
  const tour =  tours.find(tour => tour.slug.current === slug)

  if (!tour) {
    return (
      <main className="overflow-hidden">
        <header className='relative h-screen max-h-[700px] x-paddings flex-center py-36'>
          <div className="relative z-20">
            <p className='text-lg text-white uppercase font-semibold text-center mb-2'>Oops!</p>
            <h1 className='text-3xl md:text-5xl cursive text-white text-center capitalize'>Something Went wrong!</h1>
            <Link href="/tours" className="text-sm text-white hover:text-primary uppercase font-semibold text-center block mt-12">⬅ Go Back</Link>
          </div>
          <Image 
            fill
            src="/hero-bg.png"
            priority
            alt="Hero BG"
            className='absolute inset-0 object-cover'
            onLoad={() => console.log("loaded")}
          />
        </header>
      </main>
    )
  }


  return (
    <main className="overflow-hidden">
      <header className='relative h-screen max-h-[700px] x-paddings flex-center py-36'>
          <div className="relative z-20">
            <p className='text-lg text-white uppercase font-semibold text-center mb-2'>Explore</p>
            <h1 className='text-6xl md:text-9xl cursive text-white text-center capitalize'>{tour?.name}</h1>
          </div>
          <Image 
            fill
            src={tour?.landscabe || "/landscabe.png"}
            priority
            alt="Hero BG"
            className='absolute inset-0 object-cover'
            sizes="100vw"
          />
        </header>
        <TourDetails tour={tour} />
    </main>
  )
}

export default page