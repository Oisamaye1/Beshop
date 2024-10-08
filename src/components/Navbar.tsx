import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Input } from './ui/input'
import { Camera, CircleUserRound, Search, ShoppingCart } from 'lucide-react'



const Navbar = () => {
  return (
    <div className="bg-white p-5">
        <MaxWidthWrapper>
            <div className="flex items-center justify-between overflow-hidden ">
              <div>
                <h2 className="font-extrabold text-3xl lg:text-2xl">BeSHOP</h2>
              </div>

              <div className="text-slate-600 text-base">
                <ul className="flex gap-8 lg:gap-4 md:hidden">
                  <Link href="#"><li>Shop</li></Link>
                  <Link href="#"><li>On Sale</li></Link>
                  <Link href="#"><li>New Arrival</li></Link>
                  <Link href="#"><li>Brands</li></Link>
                </ul>
              </div>

              <div className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
                <Search color="grey" />
                <Input className="border-none shadow-none w-96 lg:w-52 md:hidden" type="text" placeholder="Search for products..." />
              </div>
              
              <div className="flex gap-5">
                <ShoppingCart />
                <CircleUserRound />
              </div>
              

            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Navbar