'use client'
import React from 'react'


type ProductProps = {
  key:number;
  id: number;
  title: string;
  price: number;
}

const ProductCard = ({key, title, price}: ProductProps) => {
  return (
    <div className='flex flex-col gap-y-2 max-lg:gap-y-1 mt-10' key={key}>
        <h4 className="text-sm  font-normal">{title.slice(0, 30)}.....</h4>
        <h3 className="text-lg text-[#04691f] font-[600]">${price}</h3>   
    </div>
  )
}

export default ProductCard