import AboutPromotion from "@/components/AboutPromotion"
import AboutTrend from "@/components/AboutTrend"
import Banner from "@/components/Banner"
import International from "@/components/International"
import Testimonials from "@/components/Testimonials"
import getBase64 from "@/lib/getLocalBase64"
import Image from "next/image"

// Yesteryear

async function page() {

  const heroBlurUrl = await getBase64("http://localhost:3000/about-hero.png")

  return (
    <main className="overflow-hidden">
        <header className='relative h-screen max-h-[700px] x-paddings flex-center py-36'>
          <div className="relative z-20">
            <p className='text-lg text-white uppercase font-semibold text-center mb-2'>Read</p>
            <h1 className='text-6xl md:text-9xl cursive text-white text-center'>About Us</h1>
          </div>
          <Image 
            fill
            src="/about-hero.png"
            alt="Hero BG"
            className='absolute inset-0 object-cover'
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={heroBlurUrl}
          />
        </header>
        <AboutPromotion />
        <Banner text="We'll ensure your next holiday is incredible!" image="/about-banner.png"  />
        <AboutTrend />
        <International />
        <Testimonials />
    </main>
  )
}

export default page