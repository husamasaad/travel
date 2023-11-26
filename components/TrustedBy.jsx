import { trustedBy } from '@/constants'
import Image from 'next/image'

const TrustedBy = () => {
  return (
    <section className='bg-[#F7F7F7] px-6 sm:px-36 y-paddings flex-center md:flex-between gap-16 gap-y-20 flex-wrap'>
      {trustedBy.map(item => (
        <Image 
          key={item.name}
          src={item.imgUrl}
          alt={item.name}
          width={172}
          height={50}
          className='h-[50px] w-auto'
        />
      ))
      }
    </section>
  )
}

export default TrustedBy