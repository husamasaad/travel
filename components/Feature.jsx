import Image from 'next/image'

const Feature = () => {
  return (
    <section className='paddings mt-12 flex items-start flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <p className='text-lg text-primary uppercase font-semibold mb-2'>Fast & Easy</p>
        <h2 className='text-[#181E4B] text-5xl mb-12 font-bold !leading-[142%]'>Get Your Favourite Resort Bookings</h2>
        <div className='flex items-start gap-6'>
          <Image 
            src="/choose-badge.png"
            alt='Choose Destination'
            width={48}
            height={47}
          />
          <div>
            <h4 className='text-xl font-semibold text-[#1E1D4C]'>Choose Destination</h4>
            <p className='max-w-[320px] text-[#5E6282] !leading-[162%] text-lg'>
              Discover Your Dream Destination in a Click!
            </p>
          </div>
        </div>
        <div className='flex items-start gap-6 mt-6'>
          <Image 
            src="/check-badge.png"
            alt='Check Availability'
            width={48}
            height={47}
          />
          <div>
            <h4 className='text-xl font-semibold text-[#1E1D4C]'>Select Your Adventure Type</h4>
            <p className='max-w-[320px] text-[#5E6282] !leading-[162%] text-lg'>
              Tailor Your Experience, Choose Your Ideal Trip Style with Ease!
            </p>
          </div>
        </div>
        <div className='flex items-start gap-6 mt-6'>
          <Image 
            src="/go-badge.png"
            alt='Let’s Go'
            width={48}
            height={47}
          />
          <div>
            <h4 className='text-xl font-semibold text-[#1E1D4C]'>Let’s Go</h4>
            <p className='max-w-[320px] text-[#5E6282] !leading-[162%] text-lg'>
              Seamlessly Start Your Journey – Effortlessly Book Your Tour Now!
            </p>
          </div>
        </div>
      </div>
      <Image 
        src="/features-img.png"
        width={879}
        height={600}
        alt="features"
        className='w-full md:w-1/2 h-auto'
      />
    </section>
  )
}

export default Feature