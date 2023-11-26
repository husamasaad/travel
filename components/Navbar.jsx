import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'
import { Button } from './ui/button'
import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const Navbar = () => {
  return (
    <navbar className="absolute top-5 x-paddings flex-between w-full z-30">
      <Link href="/">
        <Image 
          src="/logo.png"
          alt="travel logo"
          width={126}
          height={64}
        />
      </Link>
      <ul className='gap-12 hidden md:flex-center'>
        <Link href="/">
          <li className='text-xl font-bold text-white hover:text-primary transition-colors'>Home</li>
        </Link>
        <Link href="/about">
          <li className='text-xl font-bold text-white hover:text-primary transition-colors'>About</li>
        </Link>
        <Link href="/tours">
          <li className='text-xl font-bold text-white hover:text-primary transition-colors'>Tours</li>
        </Link>
      </ul>
      <Link href="/" className='hidden md:block'>
        <Button size="xl">Get in touch</Button>
      </Link>
      <Popover className="md:hidden">
        <PopoverTrigger asChild className='md:hidden'>
          <Menu color="#fff" size={28} />
        </PopoverTrigger>
        <PopoverContent className="w-[70vw] max-w-[350px] p-0 z-50 bg-white border-none mr-2 shadow-2xl">
          <ul className="shadow-xl">
            <Link href="/">
              <li className="p-6 text-xl">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="p-6 text-xl">
                About
              </li>
            </Link>
            <Link href="/tours">
              <li className="p-6 text-xl">
                Tours
              </li>
            </Link>
          </ul>
        </PopoverContent>
      </Popover>
    </navbar>
  )
}

export default Navbar