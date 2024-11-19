import React, { useEffect, useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProductCard from "./productCard";
import { Skeleton } from "./ui/skeleton";




interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  discount?: number;
  popular?: string;
}

type FilterProp = {
  property: string;
}


const ProductFilter = () => {
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
    <section className="">
      <MaxWidthWrapper className="">
        <h2 className="font-extrabold text-4xl text-center max-lg:text-3xl mb-20">OUR POPULAR PRODUCTS</h2>

        <div className="grid grid-cols-4 gap-4 mb-14">
            {products.map((product)=>(
              product.popular &&

            <div className="max-lg:col-span-2 flex justify-center hover:scale-105 transition-all bg-white shadow-sm border border-slate-200 rounded-lg p-4 cursor-pointer">
                <Link href={`/products/${product.id}`}>
                    <div className='flex flex-col gap-y-2 max-lg:gap-y-1'>
                        <div className='h-60'>
                            <img src={product.image} alt={product.title} className='size-full object-contain'  />
                        </div>
                        <ProductCard key={product.id} id={product.id} title={product.title} price={product.price}/>
                    </div>
                </Link>
            </div>
            ))}
        </div>    
      </MaxWidthWrapper>
    </section>
  );
};


export default ProductFilter;