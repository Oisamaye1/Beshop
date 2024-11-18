'use client'

import { useParams } from 'next/navigation'
import { products } from '@/components/data'
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
import ProductList from '@/components/products'
import React, { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton'
import Loader from '@/components/loader'

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    discount?: number;
    popular? : string;
  }
  const PopularProductsUI: React.FC = () => {
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
  
    if (loading) return (
      <Loader/>
    );

    if (error) return <p>Error: {error}</p>;


  return (
    <div className='bg-slate-50 '>
    <section className='pt-20 '>
        <MaxWidthWrapper>
        <div className="grid grid-cols-4 gap-4 pb-14">
            {products.map((product)=>( product.popular &&
                <div className="max-lg:col-span-2 flex justify-center hover:scale-105 transition-all bg-white shadow-sm border border-slate-200 rounded-lg p-4 cursor-pointer">
                <Link href={`/products/${product.id}`}>
                  <div className='flex flex-col gap-y-2 max-lg:gap-y-1 '>
                      <div className='h-60'>
                          <img src={product.image} alt={product.title} className='size-full object-contain' />
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

export default PopularProductsUI