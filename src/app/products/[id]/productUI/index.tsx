'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ReviewCard from '@/components/ReviewCard'
import ProductFilter from '@/components/categories-link'
import Loader from '@/components/loader'



interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand?: string;
    model?: string;
    color?: string;
    category?: string;
    popular?: string;
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


       // State to hold the array of numbers
       const [numbers, setNumbers] = useState<string[]>([]);


       // Load numbers from localStorage on initial render
       useEffect(() => {
       const storedNumbers = localStorage.getItem("numbers");
       if (storedNumbers) {
         setNumbers(JSON.parse(storedNumbers)); // Parse the stringified array
       }
       console.log(storedNumbers)
       }, []);
   
       // Save numbers to localStorage whenever they change
       useEffect(() => {
       localStorage.setItem("numbers", JSON.stringify(numbers));
       }, [numbers]);
   
       const GetNewNumberAsString = (): string => {
         const number = id;
         console.log(number.toString()) 
         return number.toString();
       };

       const addNumber = () => {
        const newNumber = GetNewNumberAsString(); // Get a new number (as a string) from the external file
        setNumbers([...numbers, newNumber]); // Add the new string number to the array
        };
    
       
  
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
      <Loader/>
    );
    if (error) return <p>Error: {error}</p>;


     

  


  return (
    <div className='bg-slate-50 pb-52 max-lg:pb-64'>

    <section className='py-32 bg-white'>
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
                                <h2 className='font-[700] text-[24px] mb-6'>{product.title}</h2>
                                <h3 className='mt-3 text-3xl font-extrabold mb-8'>${product.price} </h3>

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
                                <Button className='col-span-2 h-12 rounded-full' onClick={addNumber} >Add to Cart</Button>
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
                            <h4  className='text-lg font-[600] mb-3'>{product.title}</h4>
                            <h5 className='text-lg font-[600] mb-3'>{product.brand}</h5>
                            <h5 className='text-lg font-[600] mb-3'>{product.color}</h5>
                            <p className='text-sm font-normal text-gray-500 text-justify'>{product.description}</p>
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

    <div className='mt-20'>
      <ProductFilter />
    </div>
    </div>
  )
}


export  default ProductUI