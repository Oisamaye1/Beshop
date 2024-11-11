'use client'

import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"


interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    discount?: number;
  }
  const ProductList: React.FC = () => {
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
  )
}

{/* <Link href={`/products/${product.id}`}>  */}
 




export default ProductList;

