import Tours from "@/components/Tours"
import { getLocations, getTours } from "@/sanity/actions"
import Image from "next/image"
import { getTypes } from "../../../sanity/actions"
import getBase64 from "@/lib/getLocalBase64"


async function page({ searchParams }) {


  const tours = await getTours(1, 10, searchParams?.type || null, searchParams.sort || "date", searchParams.location || null)
  const tourTypes = await getTypes()
  const tourLocations = await getLocations()

  const heroBlurUrl = await getBase64("http://localhost:3000/tour-hero.png")

  return (
    <main className="overflow-hidden">
      <header className='relative h-screen max-h-[700px] x-paddings flex-center py-36'>
          <div className="relative z-20">
            <p className='text-lg text-white uppercase font-semibold text-center mb-2'>Pick a Tour</p>
            <h1 className='text-6xl md:text-9xl cursive text-white text-center'>Travel With Us</h1>
          </div>
          <Image 
            fill
            src="/tour-hero.png"
            alt="Hero BG"
            className='absolute inset-0 object-cover'
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={heroBlurUrl}
          />
        </header>
        <Tours tours={tours} tourTypes={tourTypes} tourLocations={tourLocations} />
    </main>
  )
}

export default page