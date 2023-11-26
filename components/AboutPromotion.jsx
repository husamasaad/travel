import Image from "next/image"
import { Button } from "./ui/button"
import { Link } from "nextjs13-progress"

const AboutPromotion = () => {
  return (
    <section className='py-20 px-6 gap-16 sm:px-52 flex items-center flex-col md:flex-row'>
      <div className='w-full md:w-1/2 shrink-0'>
        <p className='text-lg text-primary uppercase font-semibold mb-2'>About Us</p>
        <h2 className='text-[#181E4B] text-5xl mb-12 font-bold !leading-[142%]'>Crafting Unforgettable Journeys</h2>
        <p className='text-lg !leading-[162%] max-w-[570px] my-8'>
          At Travel, we are more than just a travel agency – we are architects of extraordinary experiences. With a passion for exploration and a commitment to exceptional service, we curate journeys that go beyond the ordinary. Our team of seasoned travel enthusiasts is dedicated to providing you with the finest in travel, ensuring each adventure is a masterpiece of discovery.
          <br /><br />
          Our philosophy revolves around creating more than just vacations; we design immersive encounters that leave an indelible mark on your heart. From meticulously planned itineraries to personalized attention, we strive to exceed your expectations at every turn. Whether you seek the historical charm of European cities, the awe-inspiring wonders of nature, or the vibrant tapestry of diverse cultures, we are here to turn your travel dreams into reality.
          <br /><br />
          Join us on a voyage of unparalleled exploration, where every trip becomes a chapter in the story of your life. Welcome to Travel, where the world is your canvas, and the possibilities are boundless.
        </p>
        <Link href="/tours">
          <Button size="xl">
            View Packages
          </Button>
        </Link>
      </div>
      <Image 
        src="/about-promo.png"
        width={858}
        height={600}
        alt="About Us"
        className="w-full md:w-1/2"
      />
    </section>
  )
}

export default AboutPromotion