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
  title: string;
  price: number;
}

const ProductCard = ({key, id, title, price}: ProductProps) => {
  return (
    <div className='flex flex-col gap-y-2 max-lg:gap-y-1' key={key}>
        <h4 className="text-sm  font-normal">{title.slice(0, 30)}.....</h4>
        <h3 className="text-lg text-[#04691f] font-[600]">${price}</h3>   
    </div>
  )
}

export default ProductCard