'use client'
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import { products } from './data'
import productimage from "@/../public/prodimg.svg"
import { Star } from 'lucide-react'
import Link from 'next/link'



type ProductProps = {
  key:number;
  id: number;
  name: string;
  rating: number;
  price: number;
  discountedPrice?: number;
  percentageOff?: number,
}

const ProductCard = ({key, id, name, rating, price, discountedPrice, percentageOff}: ProductProps) => {
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push(`/product/${id}`);
  // };

  return (

  
    <div className='flex flex-col gap-y-2 max-lg:gap-y-1'>
        <div className='w-full'>
            <Image src={productimage} alt='Product image'/>
        </div>
        <h4 className="text-lg max-lg:text-sm font-bold">{name}</h4>
        <div className="flex gap-3">
            <span className="flex">
                <Star size={"20px"} fill='#ffaa00' color='#ffaa00' />
               
                   
            </span>
            <h3>{rating}/5</h3>
        </div>
        {!discountedPrice ?
        <h3 className="text-2xl max-lg:text-lg font-[700]">${price}</h3> : 
        <div className='flex items-center gap-2'>
          <h3 className="text-2xl max-lg:text-lg font-[700]">${discountedPrice} <span className='line-through text-gray-500'>${price}</span></h3>
          <h3 className='text-red-500 py-1 px-4 bg-red-100 inline rounded-full text-sm'>-{percentageOff}%</h3>
        </div>
        }
    </div>
  )
}

export default ProductCard