'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductCard from '@/components/productCard'
import Link from 'next/link'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ReviewCard from '@/components/ReviewCard'
import React, { useEffect, useState } from 'react';
import Loader from '@/components/loader'

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    discount?: number;
  }
  const ProductPageUI: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const response = await fetch('https://fakestoreapi.in/api/products');
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
  
          const data = await response.json();
          setProducts(data.products); // Assuming 'products' is an array in the response object
        } catch (error) {
          setError(error instanceof Error ? error.message : 'An error occurred');
        }
  
        setLoading(false);
      };
  
      fetchProducts();
    }, []);
  
    if (loading) return <>
    <Loader />
    </>;
    if (error) return <p>Error: {error}</p>;


  return (
    <div className='bg-slate-50 pb-52 max-lg:pb-64'>
    <section className='pt-20 '>
        <MaxWidthWrapper>
        <div className="grid grid-cols-4 gap-4 mb-14">
            {products.map((product)=>(
                <div key={product.id} className="max-lg:col-span-2 flex justify-center hover:scale-105 transition-all bg-white shadow-sm border border-slate-200 rounded-lg p-4 cursor-pointer">
                <Link href={`/products/${product.id}`}>
                  <div className='flex flex-col gap-y-2 max-lg:gap-y-1 '>
                      <div className='h-60'>
                          <Image src={product.image} alt={product.title} width={100} height={100} unoptimized className='size-full object-contain' />
                      </div>         
                      <ProductCard key={product.id} id={product.id} title={product.title} price={product.price}/> 
                  </div>
                </Link>
              </div>
            ))}
        </div>
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
    </div>
  )
}

export default ProductPageUI
