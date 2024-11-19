import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Input } from './ui/input'
import {ChevronDown, CircleUserRound,  Menu, Search, ShoppingCart,  } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export default async function Navbar() {

  return (
    <div className="bg-white py-5 sticky top-0 z-50 ">
        <MaxWidthWrapper>
            <div className="grid grid-cols-12 gap-3 items-center justify-between overflow-hidden max-lg:hidden">

              <div className='col-span-2'>
                <Link href={'/'}><h2 className="font-extrabold text-[32px] max-lg:text-[30px]">BeSHOP</h2></Link>
              </div>

              <div className="text-slate-600 text-base col-span-5 flex justify-center">
                <ul className="flex gap-8 lg:gap-4 items-center max-lg:hidden">
                  <Link href="/onsale"><li>On Sale</li></Link>
                  <Link href="/popular"><li>Popular</li></Link>
                  <Link href="#"><li>Brands</li></Link>
                </ul>
              </div>

              <div className="flex items-center bg-slate-100 px-3 py-1 rounded-full col-span-4">
                <Search size={20} color="grey" />
                <Input className="border-none outline-none shadow-none" type="text" placeholder="Search for products..." />
              </div>
              
              <div className="flex gap-4 col-span-1 items-center justify-end">
                <Link href={'/cart'}><ShoppingCart /></Link>
                <DropdownMenu>
                <DropdownMenuTrigger><CircleUserRound /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
              

            </div>


{/*------------------- Mobile Navbar-------------------- */}

            <div className="grid grid-cols-12 gap-3 items-center justify-between overflow-hidden lg:hidden">


              <div className=" col-span-2 gap-2">
                
                  <Sheet>
                    <SheetTrigger asChild>
                    <div className='col-span-1'><Menu /></div>
                    </SheetTrigger>

                    <SheetContent className='grid' side={'left'}>
                      <SheetHeader>
                        <SheetTitle>BeSHOP</SheetTitle>
                      </SheetHeader>

                      <div className="text-slate-600 z-50 text-base flex flex-row justify-center ">
                        <ul className="flex flex-col gap-8 lg:gap-4 items-center ">
                          <DropdownMenu>
                            <DropdownMenuTrigger className='bg-transparent shadow-none' asChild>
                            <Link href="#" className='flex gap-1 items-center'><li>Shop</li><ChevronDown size={20}/></Link>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 text-center">
                              <DropdownMenuGroup>

                                <DropdownMenuItem>
                                  <span>Brand</span>  
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                  <span>Categories</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                  <span>Just for you</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                  <span>Best value</span>
                                </DropdownMenuItem>

                              </DropdownMenuGroup>

                            
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <Link href="#"><li>On Sale</li></Link>
                          <Link href="#"><li>New Arrival</li></Link>
                          <Link href="#"><li>Brands</li></Link>
                        </ul>
                      </div>
                    </SheetContent>
                  </Sheet>
                
              </div>  

              <div className='col-span-7'>
                <Link href={'/'}><h2 className="font-extrabold text-[32px] max-lg:text-[30px]">BeSHOP</h2></Link>
                
              </div>

              <div className="flex items-center col-span-3 justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger className='bg-transparent shadow-none' asChild>
                <Search size={20} />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[300px] rounded-none flex justify-center text-center">
                  
                    <Input className="border-none outline-none shadow-none" type="text" placeholder="Search for products..." />  

                </DropdownMenuContent>
              </DropdownMenu>


              <ShoppingCart />
              
              
              <DropdownMenu>
                <DropdownMenuTrigger><CircleUserRound /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
                
              </div> 

            </div>
        </MaxWidthWrapper>
    </div>
  )
}