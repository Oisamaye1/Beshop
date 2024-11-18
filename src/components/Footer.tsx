import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Facebook, Github, IdCard, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (<>
    <div className='pb-52 max-lg:pb-64 bg-slate-50'></div>
    <section className='bg-slate-200'>
        
      <MaxWidthWrapper >
        <div className='bg-black text-white py-20 px-10 grid grid-cols-5 items-center lg:gap-6 max-lg:gap-y-6 relative -top-32 max-lg:-top-48 rounded-3xl'>
            <h2 className='text-4xl font-extrabold col-span-3 max-lg:col-span-5'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>

            <div className="flex flex-col gap-y-2 col-span-2 max-lg:col-span-5">
                <Input type="email" className='h-14 bg-white text-black font-bold text-base rounded-full pl-4' placeholder="Enter your email address" />
                <Button type="submit" className='h-14 bg-white text-black font-bold text-base rounded-full'>Subscribe to Newletter</Button>
            </div>
        </div> 

        <div className='relative max-lg:-top-40 -top-20'>
            <div className='grid grid-cols-12 mt-12  pb-12 border-b-2 border-gray-300 max-lg:gap-y-10'>

    <div className='flex flex-col gap-y-4 col-span-4 max-lg:col-span-12 pr-5'>
        <h2 className='text-3xl font-extrabold'>BESHOP</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus assumenda iusto omnis!</p>
        <div className='flex gap-x-4 hoverscale-105'>
        <Twitter color="#737373" className='hover:scale-105 cursor-pointer' strokeWidth={2} absoluteStrokeWidth />
        <Facebook color="#737373" className='hover:scale-105 cursor-pointer' strokeWidth={2} absoluteStrokeWidth />
        <Instagram color="#737373" className='hover:scale-105 cursor-pointer' strokeWidth={2} absoluteStrokeWidth />
        <Github color="#737373" className='hover:scale-105 cursor-pointer' strokeWidth={2} absoluteStrokeWidth />
        </div>
    </div>

    <div className='flex flex-col gap-y-4 col-span-2 max-lg:col-span-3'>
        <h4 className='max-lg:text-sm text-xl text-gray-800 font-bold'>COMPANY</h4>
        <ul className='flex flex-col gap-y-4 text-gray-500 max-lg:text-[12px]'>
            <Link href={"#"}><li>About</li></Link>
            <Link href={"#"}><li>Feature</li></Link>
            <Link href={"#"}><li>Work</li></Link>
            <Link href={"#"}><li>Career</li></Link>
        </ul>
        
    </div>

    <div className='flex flex-col gap-y-4 col-span-2 max-lg:col-span-3'>
        <h4 className='max-lg:text-sm text-xl text-gray-800 font-bold'>HELP</h4>
        <ul className='flex flex-col gap-y-4 text-gray-500 max-lg:text-[12px]'>
            <Link href={"#"}><li>About</li></Link>
            <Link href={"#"}><li>Feature</li></Link>
            <Link href={"#"}><li>Work</li></Link>
            <Link href={"#"}><li>Career</li></Link>
        </ul>
        
    </div>

    <div className='flex flex-col gap-y-4 col-span-2 max-lg:col-span-3'>
        <h4 className='max-lg:text-sm text-xl text-gray-800 font-bold'>FAQ</h4>
        <ul className='flex flex-col gap-y-4 text-gray-500 max-lg:text-[12px]'>
            <Link href={"#"}><li>About</li></Link>
            <Link href={"#"}><li>Feature</li></Link>
            <Link href={"#"}><li>Work</li></Link>
            <Link href={"#"}><li>Career</li></Link>
        </ul>
    
    </div>

    <div className='flex flex-col gap-y-4 col-span-2 max-lg:col-span-3'>
        <h4 className='max-lg:text-sm text-xl text-gray-800 font-bold'>RESOURCES</h4>
        <ul className='flex flex-col gap-y-4 text-gray-500 max-lg:text-[12px]'>
            <Link href={"#"}><li>About</li></Link>
            <Link href={"#"}><li>Feature</li></Link>
            <Link href={"#"}><li>Work</li></Link>
            <Link href={"#"}><li>Career</li></Link>
        </ul>
        
    </div>

            </div>

            <div className='flex justify-between items-center mt-5 pb-10 max-lg:block max-lg:text-center'>
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className='flex gap-x-5 max-lg:justify-center'>
                <IdCard color="#737373" strokeWidth={3} absoluteStrokeWidth />
                <IdCard color="#737373" strokeWidth={3} absoluteStrokeWidth />
                <IdCard color="#737373" strokeWidth={3} absoluteStrokeWidth />
                <IdCard color="#737373" strokeWidth={3} absoluteStrokeWidth />
            </div>
            </div>
        </div>

        
      </MaxWidthWrapper>
    </section>
    </>
  )
}

export default Footer