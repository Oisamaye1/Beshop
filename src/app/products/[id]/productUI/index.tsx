'use client'

import { useParams } from 'next/navigation'
import { products } from '@/components/data'
import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductCard from '@/components/productCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import productImage from "@/../public/prodimg.svg"
import Image from 'next/image'
import { Star } from 'lucide-react'




const ProductUI = () => {
    const params = useParams();
    const {id} = params;
  return (
    <>
    <section>
        <MaxWidthWrapper>
            {
                products.map((product)=>{

                    if (!product) return <p>Product not found</p>;
                    return(

                        product.id.toString() === id && 
                        (
                        <div className='grid grid-cols-2'>

                            <div className='col-span-1'>
                                <Image src={productImage} alt='product image' />
                            </div>

                            <div className='col-span-1'>
                                <h2>{product.name}</h2>
                                <div className='flex gap-2'>
                                    <Star size={"20px"} color='#ffaa00' />
                                    <p>{product.rating}/5</p>
                                </div>
                                <h3>${product.price}</h3>
                            </div>

                        </div>
                        ) 

                        
                    )
                })
            }
        </MaxWidthWrapper>
    </section>


    <section className="mt-24">
      <MaxWidthWrapper className="">
        <h2 className="font-extrabold text-4xl text-center mb-20">TOP SELLING</h2>

        <div className="grid grid-cols-4 gap-4 mb-14">
            {products.map((product)=>{
                return ( 
                    product.discountedPrice &&
                <div className="max-lg:col-span-2 flex justify-center hover:scale-105 transition-all cursor-pointer">
                    <Link href={`/products/${product.id}`}>
                    <ProductCard key={product.id} id={product.id} name={product.name} rating={product.rating} price={product.price} discountedPrice={product.discountedPrice===null? 0 : product.discountedPrice} percentageOff={product.percentageOff===null ? 0 : product.percentageOff} />
                    </Link>
                    </div> )
                })
            }  
        </div>    
      </MaxWidthWrapper>
    </section>
    </>
  )
}

export default ProductUI