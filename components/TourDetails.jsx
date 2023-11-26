"use client"

import { useState } from 'react'
import DetailsTabs from './DetailsTabs'
import InformationTab from './InformationTab'
import PlanTab from './PlanTab'
import LocationTab from './LocationTab'
import GalleryTab from './GalleryTab'
import BookingForm from './BookingForm'
import Image from 'next/image'

const TourDetails = ({ tour }) => {

  const [currentTab, setCurrentTab] = useState("info")

  const handleChange = (tab) => {
    console.log(tab);
    setCurrentTab(tab)
  }


  return (
    <section className='px-4 sm:px-52'>
      <div className='bg-white shadow-xl -translate-y-16 pb-4'>
        <DetailsTabs currentTab={currentTab} handleChange={handleChange} />
        <div className='px-8 py-12 flex items-start gap-4 flex-col lg:flex-row'>
          {currentTab == "info" ? (
            <InformationTab tour={tour} />
          ) : currentTab == "plan" ? (
            <PlanTab tour={tour} />
          ) : currentTab == "location" ? (
            <LocationTab tour={tour} />
          ) : currentTab == "gallery" ? (
            <GalleryTab  tour={tour}/>
          ) : ""}
          <div className='w-full max-w-[480px] mx-auto py-8 px-0 md:px-4'>
            <BookingForm tour={tour} />
            <Image
              src="/travel-tour.png"
              alt="travel with us"
              width={519}
              height={420}
              className="object-cover mt-16 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourDetails