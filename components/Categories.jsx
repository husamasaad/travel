import { categories } from '@/constants'
import Image from 'next/image'

const Categories = () => {
  return (
    <section className='paddings'>
      <p className='text-lg text-primary uppercase font-semibold text-center mb-2'>Category</p>
      <h2 className='text-[#181E4B] text-5xl text-center mb-12 font-bold !leading-[142%]'>We Offer Best Services</h2>
      <div className='flex-center md:flex-between gap-12 flex-wrap'>
        {categories.map(item => (
          <div key={item.id} className='relative z-10 group transition-all'>
            <div className='px-6 py-8 items-center text-center flex-center transition-all flex-col gap-6 shadow-cardShadow relative z-10 bg-white rounded-[35px]'>
              <Image 
                src={item.badge}
                alt={item.title}
                width={83}
                height={74}
              />
              <h4 className='text-xl font-semibold text-[#1E1D4C]'>{item.title}</h4>
              <p className='max-w-[178px] text-[#5E6282] !leading-[162%] text-lg'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories