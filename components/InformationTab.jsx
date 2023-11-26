import Image from 'next/image'

const InformationTab = ({ tour }) => {


    const {
    name,
    slug,
    description,
    price,
    destination,
    departure,
    departure_time,
    return_time,
    dress_code,
    gallery,
    gallery_text,
  } = tour


  return (
    <div className='w-full lg:w-[60%]'>
      <div className='flex items-center flex-wrap gap-8'>
        <h4 className='text-[#181E4B] text-4xl font-bold capitalize'>{name}</h4>
        <div className='flex items-center gap-4'>
          <span className='block text-2xl text-primary'>{price} $</span>
          <span className='blokc text-lg text-[#7D7D7D]'>/ per couple</span>
        </div>
      </div>
      <p className='text-lg !leading-[162%] my-8'>{description}</p>
      <div className='flex-between w-full md:w-[70%]'>
        <h4 className='text-2xl text-primary'>Destination</h4>
        <p className='text-lg !leading-[162%]'>: {destination}</p>
      </div>
      <div className='flex-between w-full md:w-[70%] my-8'>
        <h4 className='text-2xl text-primary'>Departure</h4>
        <p className='text-lg !leading-[162%]'>: {departure}</p>
      </div>
      <div className='flex-between w-full md:w-[70%] my-8'>
        <h4 className='text-2xl text-primary'>Departure Time</h4>
        <p className='text-lg !leading-[162%]'>: {departure_time}</p>
      </div>
      <div className='flex-between w-full md:w-[70%] my-8'>
        <h4 className='text-2xl text-primary'>Return Time</h4>
        <p className='text-lg !leading-[162%]'>: {return_time}</p>
      </div>
      <div className='flex-between w-full md:w-[70%] my-8'>
        <h4 className='text-2xl text-primary'>Dress Code</h4>
        <p className='text-lg !leading-[162%]'>: {dress_code}</p>
      </div>
      <h4 className='text-[#181E4B] text-4xl font-bold capitalize border-t pt-8'>From Our Gallery</h4>
      <p className='text-lg !leading-[162%] my-4'>{gallery_text}</p>
      <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-4'>
        {gallery.slice(1, 7).map((item, index) =>  (
          <Image 
            key={`${slug.current}-${index}`}
            src={item}
            width={236}
            height={240}
            alt='image'
            className=''
          />
        ))}
      </div>
    </div>
  )
}

export default InformationTab