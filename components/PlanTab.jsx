import { tourPlan } from '@/constants'

const PlanTab = ({ tour }) => {


  const {
    tour_plan,
  } = tour

  return (
    <div className='w-full lg:w-[60%]'>
      <h2 className='text-[#181E4B] text-4xl font-bold capitalize'>Tour Plan</h2>
      <div className='border-l border-dotted border-primary flex flex-col gap-16 mt-12'>
        {tour_plan.map((step, index) => (
          <div key={step._id} className='flex items-start gap-8 -translate-x-6'>
            <span className='text-xl text-white bg-primary px-4 py-2 flex-center rounded-lg'>{(index + 1).toString().padStart(2, '0')}</span>
            <div>
              <h4 className='text-[#181E4B] text-xl font-bold capitalize'>{step.title}</h4>
              <p className='text-lg text-[#181E4B] !leading-normal mt-4'>{step.summary}</p>
              <ul className='mt-4 list-disc pl-6 flex flex-col gap-4'>
                {step.details?.map(item => (
                  <li key={`${step.id}-${item.id}`} className='text-sm text-[#181E4B]'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanTab