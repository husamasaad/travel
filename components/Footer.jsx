import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'
import Subscribe from './Subscribe'

const Footer = () => {
  return (
    <footer className='paddings !pb-0 relative'>
      <Image 
        src="/footer-img.png"
        alt="Footer Image"
        width={577}
        height={484}
        className='absolute top-0 h-full w-[484px] right-0'
      
      />
      <div className="flex items-center flex-wrap md:items-start justify-evenly gap-16 relative z-20 flex-col md:flex-row border-b pb-12">
        <div className='flex-center md:items-start flex-col'>
          <Link href="/">
            <Image 
              src="/logo-dark.png"
              alt="Logo"
              width={126}
              height={64}
            />
          </Link>
          <p className='text-lg text-center md:text-left !leading-[175%] text-[#757095] max-w-[213px] font-semibold mt-4'>Travel helps companies manage payments easily.</p>
        </div>
        <div className='text-center md:text-left'>
          <h4 className='text-xl !leading-[114%] font-bold text-[#181433]'>Company</h4>
          <ul className='mt-4'>
            <Link href="/">
              <li className='text-lg text-[#181433] my-2 hover:text-primary'>Home Page</li>
            </Link>
            <Link href="/about">
              <li className='text-lg text-[#181433] my-2 hover:text-primary'>About US</li>
            </Link>
            <Link href="/tours">
              <li className='text-lg text-[#181433] my-2 hover:text-primary'>Tours</li>
            </Link>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <h4 className='text-xl !leading-[114%] font-bold text-[#181433]'>Tours</h4>
          <ul className='mt-4'>
            <Link href="/tours?type=nature">
              <li className='text-lg text-[#181433] my-2 hover:text-primary'>Nature</li>
            </Link>
            <Link href="/tours?type=exotic">
              <li className='text-lg text-[#181433] my-2 hover:text-primary'>Exotic</li>
            </Link>
            <Link href="/tours?type=cultural">
              <li className='text-lg text-[#181433] my-2 hover:text-primary'>Cultural</li>
            </Link>
            <Link href="/tours?type=beach">
              <li className='text-lg text-[#181433] my-2'>Beach</li>
            </Link>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <h4 className='text-xl !leading-[114%] font-bold text-[#181433]'>Join Our Newsletter</h4>
          <Subscribe />
          <p className='text-md tracking-[-0.32px] max-w-[213px] mt-4'>
            * Will send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>
      <p className='text-[16px] tracking-[-0.32px] text-center text-[#181433] py-8'>Copyright @ Xpro 2022. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer