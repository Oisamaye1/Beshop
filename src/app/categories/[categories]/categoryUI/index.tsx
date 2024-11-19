'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductCard from '@/components/productCard'
import Link from 'next/link'
import Loader from '@/components/loader'
import Image from 'next/image'

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

const CategoriesUI: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
    const {categories} = params;

  const filteredProducts = products.filter((product) => product.category === categories);

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

    <section className="pt-24 bg-slate-50">
      <MaxWidthWrapper className="">
        <div className="grid grid-cols-4 gap-4 pb-14">
            {filteredProducts.map((product)=>
           
            <div key={product.id} className="max-lg:col-span-2 flex justify-center hover:scale-105 transition-all bg-white shadow-sm border border-slate-200 rounded-lg p-4 cursor-pointer">
                <Link href={`/products/${product.id}`}>
                    <div className='flex flex-col gap-y-2 max-lg:gap-y-1'>
                        <div className='h-60'>
                            <Image src={product.image} alt={product.title} width={100} height={100} unoptimized className='size-full object-contain' />
                        </div>
                        <ProductCard key={product.id} id={product.id} title={product.title} price={product.price}/>
                    </div>
                </Link>
            </div>
            )}
        </div>    
      </MaxWidthWrapper>
    </section>

  )
}

export default CategoriesUI;