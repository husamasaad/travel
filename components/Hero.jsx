import Image from 'next/image'

import HeroForm from './HeroForm'
import getBase64 from '@/lib/getLocalBase64'


const avatars = [
  {
    id: 0,
    url: "/avatar-01.png"
  },
  {
    id: 1,
    url: "/avatar-02.png"
  },
  {
    id: 2,
    url: "/avatar-03.png"
  },
  {
    id: 3,
    url: "/avatar-04.png"
  },
  {
    id: 4,
    url: "/avatar-05.png"
  },
  {
    id: 5,
    url: "/avatar-01.png"
  },
]

const Hero = async () => {

  const heroBlurUrl = await getBase64("http://localhost:3000/hero-bg.png")

  return (
    <header className='relative min-h-screen max-h-[900px] x-paddings flex items-center py-36'>
      <Image 
        fill
        src="/hero-bg.png"
        alt="Hero BG"
        className='absolute inset-0 object-cover'
        sizes="100vw"
        property
        placeholder='blur'
        blurDataURL={heroBlurUrl}
      />
      <div className='w-full max-w-[800px] relative pt-12'>
        <Image 
          src="/wave-vector.svg"
          width={75}
          height={15}
          alt='wavy icon'
          className='mb-4'
        />
        <h1 className='text-4xl md:text-7xl !leading-[116%] text-white font-bold max-w-[500px]'>
          No matter where you’re going to, we’ll take you there
        </h1>
        <HeroForm />
        <div className='flex justify-center sm:justify-start items-center gap-4 flex-wrap mt-6'>
          <div className='flex items-center ml-3'>
            {avatars.map(avatar => (
              <div className='rounded-full h-9 w-9 bg-primary border -ml-3 relative hover:z-30'>
                <Image
                  key={avatar.id}
                  src={avatar.url}
                  fill
                  className='absolute inset-0 w-full h-full rounded-full'
                />
              </div>
            ))}
            <div className='rounded-full h-9 w-9 bg-primary border relative -ml-3 hover:z-30 flex-center text-xl text-white'>
              +
            </div>
          </div>
          <p className='text-white text-sm !leading-[300%]'>2,500 people booked Tommorowland Event in last 24 hours</p>
        </div>
      </div>
    </header>
  )
}

export default Hero