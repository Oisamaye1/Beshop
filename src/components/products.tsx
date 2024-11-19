'use client'

import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from "@/components/ui/skeleton"
import Loader from './loader';


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
      <Loader/>
    );
    if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-4 gap-4 mb-14">
    {products.filter((item, index) => index < 12).map((product)=>(
        
        <div className="max-lg:col-span-2 flex justify-center hover:scale-105 transition-all bg-white shadow-sm border border-slate-200 rounded-lg p-4 cursor-pointer">
          <Link href={`/products/${product.id}`}>
            <div className='flex flex-col gap-y-2 max-lg:gap-y-1 items-end'>
                <div className='w-[100%]'>
                    <Image src={product.image} alt={product.title} className='size-full' unoptimized width={100} height={100} />
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

