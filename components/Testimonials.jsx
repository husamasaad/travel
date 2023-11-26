import TestimonialsList from './TestimonialsList'

const Testimonials = () => {
  return (
    <section className='bg-[#F8F8F8] paddings'>
      <p className='text-lg text-primary uppercase font-semibold text-center mb-2'>Testimonials</p>
      <h2 className='text-[#181E4B] text-5xl text-center mb-16 font-bold !leading-[142%]'>See What Our Clients Say About Us</h2>
      <TestimonialsList />
    </section>
  )
}

export default Testimonials