import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import { products } from './data'
import productimage from "@/../public/prodimg.svg"
import { Star } from 'lucide-react'


type ProductProps = {
  key:number;
  _id: number;
  name: string;
  rating: number;
  price: number;
  discountedPrice?: number;
  percentageOff?: number,
}

const ProductCard = ({_id, name, rating, price, discountedPrice, percentageOff}: ProductProps) => {
  return (
  
    <div className='flex flex-col gap-y-2 max-lg:gap-y-1'>
        <div className='w-full'>
            <Image src={productimage} alt='Product image'/>
        </div>
        <h4 className="text-lg max-lg:text-sm font-bold">{name}</h4>
        <div className="flex gap-3">s
            <span className="flex">
                <Star size={"20px"} color='#ffaa00' />
                <Star size={"20px"} color='#ffaa00' />
                <Star size={"20px"} color='#ffaa00' />
                <Star size={"20px"} color='#ffaa00' />
                <Star size={"20px"} color='#ffaa00' />
                   
            </span>
            <h3>{rating}/5</h3>
        </div>
        <h3 className="text-2xl max-lg:text-lg font-extrabold">${price}</h3>
    </div>
  )
}

export default ProductCard