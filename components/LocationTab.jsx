import Image from 'next/image'

const LocationTab = ({ tour }) => {


  const { location_summary, location_details, location_image } = tour

  return (
    <div className='w-full lg:w-[60%]'>
      <div className='relative z-10'>
      <h4 className='text-[#181E4B] text-4xl font-bold capitalize'>Tour Location</h4>
      <p className='text-lg text-[#181E4B] !leading-normal mt-4 max-w-[600px]'>{location_summary}</p>
      <Image 
        src={location_image}
        alt="Map"
        width={704}
        height={694}
        className='object-fill my-8'
      />
      <p className='text-lg text-[#181E4B] !leading-normal mt-4 max-w-[600px]'>{location_details}</p>
      </div>
      <Image 
        src="/trees-decor.png"
        alt="decor"
        width={380}
        height={250}
        className='absolute bottom-0 left-0 z-0 hidden lg:block'
      />
    </div>
  )
}

export default LocationTab