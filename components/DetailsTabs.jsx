import { cn } from '@/lib/utils'
import { Calendar, Map, GalleryVertical, Info } from 'lucide-react'

const tabs = [
  {
    value: "info",
    tab: "Information",
    icon: <Info />
  },
  {
    value: "plan",
    tab: "Tour Plan",
    icon: <Calendar />
  },
  {
    value: "location",
    tab: "Location",
    icon: <Map />
  },
  {
    value: "gallery",
    tab: "Gallery",
    icon: <GalleryVertical />
  },
]

const DetailsTabs = ({ currentTab, handleChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-[#F8F8F8]">
      {
        tabs.map(item => (
          <button
            onClick={() => handleChange(item.value)}
            key={item.value} 
            className={cn(
              "flex-start md:flex-center px-6 gap-4 hover:bg-primary/60 py-8 md:flex-1 md:py-12",
              currentTab == item.value && "bg-primary text-white"
            )}
          >
            {item.icon}
            <span className="text=[#343434] text-lg truncate">
              {item.tab}
            </span>
          </button>
        ))
      }
    </div>
  )
}

export default DetailsTabs