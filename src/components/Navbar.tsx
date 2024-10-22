import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Input } from './ui/input'
import { Camera, ChevronDown, CircleUserRound, Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, Menu, MessageSquare, Plus, PlusCircle, Search, Settings, ShoppingCart, User, UserPlus, Users } from 'lucide-react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'







const Navbar = () => {
  return (
    <div className="bg-white py-8 sticky top-0 z-50 ">
        <MaxWidthWrapper>
            <div className="grid grid-cols-12 gap-3 items-center justify-between overflow-hidden max-lg:hidden">

              <div className='col-span-2'>
                <h2 className="font-extrabold text-[32px] max-lg:text-[24px]">BeSHOP</h2>
              </div>

              <div className="text-slate-600 text-base col-span-5 flex justify-center">
                <ul className="flex gap-8 lg:gap-4 items-center max-lg:hidden">
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

              <div className="flex items-center bg-slate-100 px-3 py-1 rounded-full col-span-4">
                <Search size={20} color="grey" />
                <Input className="border-none outline-none shadow-none" type="text" placeholder="Search for products..." />
              </div>
              
              <div className="flex gap-4 col-span-1 items-center justify-end">
                <ShoppingCart />
                <CircleUserRound />
              </div>
              

            </div>


{/*------------------- Mobile Navbar-------------------- */}

            <div className="grid grid-cols-12 gap-3 items-center justify-between overflow-hidden lg:hidden">

              <div className='col-span-1'><Menu /></div>

              <div className='col-span-4'>
                <h2 className="font-extrabold text-[32px] max-lg:text-[24px]">BeSHOP</h2>
              </div>

              {/* <div className="text-slate-600 text-base col-span-5 flex justify-center">
                <ul className="flex gap-8 lg:gap-4 items-center max-lg:hidden">
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
              </div> */}

              <div className="flex items-center  px-3 py-1 rounded-full col-span-5 justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger className='bg-transparent shadow-none' asChild>
                <Search size={20} />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[100vw] rounded-none flex justify-center text-center">
                  
                    <Input className="border-none outline-none w- shadow-none" type="text" placeholder="Search for products..." />  

                </DropdownMenuContent>
              </DropdownMenu>

                
                
              </div>
              
              <div className="flex gap-4 col-span-2 items-center justify-end">
                <ShoppingCart />
                <CircleUserRound />
              </div>
              

            </div>
        </MaxWidthWrapper>
    </div>
  )
}





export default Navbar