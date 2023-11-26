import { packages } from "@/constants"
import Image from "next/image"


const GalleryTab = ({ tour }) => {

  const { gallery, slug } = tour
 
  return (
    <div className="w-full lg:w-[60%] py-8">
      <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-4'>
        {gallery.map((item, index) => (
            <Image 
              key={`${slug.current}-gallery-${index}`}
              src={item}
              width={236}
              height={208}
              alt='image'
              className="h-full w-full object-cover"
            />
        ))}
      </div>
    </div>
  )
}

export default GalleryTab