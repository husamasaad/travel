"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Subscribe = () => {
  return (
    <div className='mt-6 flex-center gap-2'>
      <Input placeholder="Your Email Address" className="no-focus bg-[#EEF]" />
      <Button>Subscribe</Button>
    </div>
  )
}

export default Subscribe