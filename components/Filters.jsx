"use client"

import { cn } from "@/lib/utils"
import { Calendar, Download, Upload, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { Next13NProgress } from "nextjs13-progress"
import nProgress from "nprogress"
import { useState } from "react"

const tabs = [
  {
    value: "date",
    tab: "Date",
    icon: <Calendar />
  },
  {
    value: "price-low",
    tab: "Price low to high",
    icon: <Upload />
  },
  {
    value: "price-high",
    tab: "Price high to low",
    icon: <Download />
  },
  {
    value: "name",
    tab: "Name (A to Z)",
    icon: <User />
  },
]

const Filters = () => {

  const Router = useRouter()
  const [currentTab, setCurrentTab] = useState("date")

  const handleChange = (tab) => {

    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set('sort', tab)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    setCurrentTab(tab)
    
    nProgress.start()
    Router.push(newPathname)
    nProgress.done()
  }

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

export default Filters