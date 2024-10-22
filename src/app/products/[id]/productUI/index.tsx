'use client'

import { useParams } from 'next/navigation'
import { products } from '@/components/data'
import React, { useState } from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductCard from '@/components/productCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import productImage from "@/../public/prodimg.svg"
import Image from 'next/image'
import { Minus, Plus, Star } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ReviewCard from '@/components/ReviewCard'






const ProductUI = () => {
    const params = useParams();
    const {id} = params;

    const [quantity, quantityState] = useState(0);

    const addQuantity=()=>{
        
        quantityState(prev => prev + 1);
    }
    const minusQuantity=()=>{
        quantity >= 1 &&
        quantityState(prev => prev - 1);
    }




  return (
    <>
    {/* ------------Product details section ---------*/}
    <section className='mt-20'>
        <MaxWidthWrapper>
            {
                products.map((product)=>{

                    if (!product) return <p>Product not found</p>;
                    return(

                        product.id.toString() === id && 
                        (
                        <div className='grid grid-cols-2 gap-x-4'>

                            <div className='col-span-1 max-lg:col-span-2 max-lg:mb-10 relative'>
                                <Image src={productImage} loading='lazy' alt='product image' />
                                {product.percentageOff && <p className='absolute right-0 top-0 text-white h-12 w-12 text-xs flex items-center justify-center rounded-full bg-red-500'>-{product.percentageOff}%</p>}
                            </div>

                            <div className='col-span-1 max-lg:col-span-2'>
                                <h2 className='font-extrabold text-5xl max-md:text-3xl'>{product.name}</h2>

                                <div className='flex items-center gap-2 mt-3'>
                                    <Star size={"25px"} fill='#ffaa00' color='#ffaa00' />
                                    <p className='text-lg  text-gray-500'>{product.rating}/5</p>
                                </div>

                                {
                                    !product.discountedPrice ?
                                <h3 className='mt-3 text-4xl font-semibold max-md:text-3xl'>${product.price} </h3> :
                                <h3 className='mt-3 text-4xl font-semibold max-md:text-3xl'>${product.discountedPrice}  <span className='text-gray-300 line-through'>${product.price}</span> </h3>
                         }

                            <p className='text-gray-500 text-sm mt-3 mb-6 '>{product.description}</p>

                            <hr/>

                            <RadioGroup defaultValue="small" className='my-3 flex'>
                              
                                <div className={`flex items-center space-x-2 bg-slate-200  text-black px-4 py-3 rounded-full`}>
                                    <RadioGroupItem value="small" id="small" />
                                    <Label htmlFor="small">Small</Label>
                                </div>
                                <div className="flex items-center space-x-2 bg-slate-200  text-black px-4 py-3 rounded-full">
                                    <RadioGroupItem value="medium" id="medium"/>
                                    <Label htmlFor="medium">Medium</Label>
                                </div>
                            </RadioGroup>

                            <hr/>

                            <div className='grid grid-cols-3 gap-4 mt-3'>
                                <div className='flex items-center gap-4 h-12 justify-center bg-slate-200 rounded-full col-span-1'>
                                <Minus className='cursor-pointer' onClick={minusQuantity}/>
                                <h4>{quantity}</h4>
                                <Plus className='cursor-pointer' onClick={addQuantity}/>
                                </div>
                                <Button className='col-span-2 h-12 rounded-full'>Add to Cart</Button>
                            </div>



                            </div>
                                

                        </div>
                        ) 

                        
                    )
                })
            }
        </MaxWidthWrapper>
    </section>


    {/* ------------Review FAQ and product details section ---------*/}

        <MaxWidthWrapper className='mt-20'>
            <Tabs defaultValue="ratings" className="w-full gap-3 ">
                <TabsList className='w-full justify-evenly h-12 '>
                    <TabsTrigger value="product details" className='w-full font-bold py-2'>Product Details</TabsTrigger>
                    <TabsTrigger value="ratings" className='w-full font-bold py-2'>Ratings and Reviews</TabsTrigger>
                    <TabsTrigger value="FAQ" className='w-full font-bold py-2'>FAQ</TabsTrigger>
                </TabsList>


                <TabsContent value="product details">Make changes to your account here.</TabsContent>


                <TabsContent value="ratings" className='mt-14'>
                    <Carousel className=''>       
                        <div className='absolute right-14'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div> 
                        
                        <CarouselContent className="flex pt-4 gap-x-5">
                            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-2/4">     
                                <ReviewCard />
                            </CarouselItem>
                            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-2/4">     
                                <ReviewCard />
                            </CarouselItem>
                            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-2/4">     
                                <ReviewCard />
                            </CarouselItem>
                            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-2/4">     
                                <ReviewCard />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </TabsContent>


                <TabsContent value="FAQ">Your questions will be answered shortly</TabsContent>
            </Tabs>
        </MaxWidthWrapper>
   

    {/* ------------You may also like ---------*/}

    <section className="mt-24 mb-72 max-lg:mb-56">
      <MaxWidthWrapper className="">
        <h2 className="font-extrabold text-4xl text-center max-lg:text-3xl mb-20">YOU MAY ALSO LIKE</h2>

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