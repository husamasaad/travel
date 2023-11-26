
import Filters from './Filters'
import TourCard from './TourCard'
import SearchFilter from './SearchFilter'

const Tours = ({ tours, tourTypes, tourLocations }) => {

  


  return (
    <section className='px-6 sm:px-52'>
      <div className='bg-white shadow-xl -translate-y-16 pb-4'>
        <Filters />
        <div className='w-full flex flex-col-reverse items-start justify-center lg:flex-row'>
          <div className='flex-1 flex-center lg:justify-start flex-wrap gap-4'>
            {tours?.map(tour => (
              <TourCard key={tour._id} tour={tour} />
            ))}
          </div>
          <SearchFilter tourTypes={tourTypes} tourLocations={tourLocations} />
        </div>
      </div>
    </section>
  )
}

export default Tours