'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
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
import { Skeleton } from '@/components/ui/skeleton'



interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    discount?: number;
  }


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
  
    if (loading) return(
      <div className="grid grid-cols-12 justify-between items-center mb-10 gap-2 ">

        <div className='col-span-3 max-lg:col-span-6'>
          <Skeleton className="h-[125px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100%]" />
            <Skeleton className="h-4 w-[100%]" />
          </div>
        </div>
        <div className='col-span-3 max-lg:col-span-6'>
          <Skeleton className="h-[125px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100%]" />
            <Skeleton className="h-4 w-[100%]" />
          </div>
        </div>
        <div className='col-span-3 max-lg:col-span-6'>
          <Skeleton className="h-[125px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100%]" />
            <Skeleton className="h-4 w-[100%]" />
          </div>
        </div>
        <div className='col-span-3 max-lg:col-span-6'>
          <Skeleton className="h-[125px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100%]" />
            <Skeleton className="h-4 w-[100%]" />
          </div>
        </div>
       
        
      </div>
    );
    if (error) return <p>Error: {error}</p>;




  return (
    <div className=''>
    {/* ------------Product details section ---------*/}
    <section className='mt-20 '>
        <MaxWidthWrapper>
            {
                products.map((product)=>{

                    if (!product) return <p>Product not found</p>;
                    return(

                        product.id.toString() === id && 
                        (
                        <div className='grid grid-cols-2 gap-x-4'>

                            <div className='col-span-1 max-lg:col-span-2 max-lg:mb-10 relative p-10'>
                                <img src={product.image} alt={product.title} className='w-[100%]' loading='lazy' />
                            </div>

                            <div className='col-span-1 max-lg:col-span-2'>
                                <h2 className='font-extrabold text-[25px] mb-8'>{product.title}</h2>
                                <h3 className='mt-3 text-5xl font-semibold mb-8 max-md:text-3xl'>${product.price} </h3>

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
            {products.map((product)=>
                product.id.toString() === id &&
                (<Tabs defaultValue="ratings" className="w-full gap-3 ">
                    <TabsList className='w-full justify-evenly h-12 '>
                        <TabsTrigger value="product details" className='w-full font-bold py-2'>Product Details</TabsTrigger>
                        <TabsTrigger value="ratings" className='w-full font-bold py-2'>Ratings and Reviews</TabsTrigger>
                        <TabsTrigger value="FAQ" className='w-full font-bold py-2'>FAQ</TabsTrigger>
                    </TabsList>
    
    
                    <TabsContent value="product details">
                        <div className='py-6'>
                            <h4 className='text-lg font-[600] mb-4'>{product.title}</h4>
                            <p className='text-sm font-normal text-gray-500'>{product.description}</p>
                        </div>
                    </TabsContent>
    
    
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
                </Tabs>)
            )

            }
            
        </MaxWidthWrapper>
   

    {/* ------------You may also like ---------*/}

    <section className="mt-24 mb-72 max-lg:mb-56">
      <MaxWidthWrapper className="">
        <h2 className="font-extrabold text-4xl text-center max-lg:text-3xl mb-20">YOU MAY ALSO LIKE</h2>

        <div className="grid grid-cols-4 gap-4 mb-14">
            {products.filter((item, index) => index < 12).map((product)=>(
            
            <div className="max-lg:col-span-2 flex justify-center hover:scale-105 transition-all bg-white p-4 rounded-lg cursor-pointer">
                <Link href={`/products/${product.id}`}>
                    <div className='flex flex-col gap-y-2 max-lg:gap-y-1'>
                        <div className='w-full'>
                            <img src={product.image} alt={product.title} width={100} className='w-[100%]' height={100} />
                        </div>
                        <ProductCard key={product.id} id={product.id} title={product.title} price={product.price}/>
                    </div>
                </Link>
            </div>
            ))}
        </div>    
      </MaxWidthWrapper>
    </section>
    </div>
  )
}

export default ProductUI