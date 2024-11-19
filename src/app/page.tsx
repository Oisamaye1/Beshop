
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import versace from "@/../public/versace.svg"
import calvin from "@/../public/calvin.svg"
import gucci from "@/../public/gucci-logo-1 1.svg"
import prada from "@/../public/prada-logo-1 1.svg"
import zara from "@/../public/zara-logo-1 1.svg"
import hero from "@/../public/hero.png"
import tv from "@/../public/television.jpg"
import appliances from "@/../public/home.jpg"
import laptop from "@/../public/laptop.jpg"
import mobile from "@/../public/phone.jpg"
import gaming from "@/../public/gaming.jpg"
import audio from "@/../public/audio.jpg"
import ReviewCard from "@/components/ReviewCard";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import ProductList from "@/components/products";
import PopularProductsUI from "./popular/PopularUI";


async function getCategories() {
  return ["tv", "audio", "laptop", "mobile", "gaming", "appliances"];
}

const images = [tv, audio, laptop, mobile, gaming, appliances];



export default async function Home() {
  const categories = await getCategories();
  
  return (
   <div className="bg-slate-50">

    <section className="bg-gray-100">
      <MaxWidthWrapper className="pb-24 pt-16 md:grid md:grid-cols-12 lg:gap-x-0 xl:gap-x-8 xl:pt-32">
        <div className="flex lg:col-span-6 max-lg:col-span-12">
          <div>
            <h1 className="text-[36px] font-[900] mb-5">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima repudiandae similique, aliquam soluta dolorum beatae fugiat modi nam ullam ipsum!</p>

            <Button>Shop Now</Button>

            <div className="flex gap-6 mt-10">
              <div>
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-xs">International Brands</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">2,000+</h3>
                <p className="text-xs">High-Quality Products</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">30,000+</h3>
                <p className="text-xs">Happy Customers</p>
              </div>
            </div>

          </div>
        </div>
        <div className="lg:col-span-6 max-lg:hidden flex justify-center items-center">
          <Image src={hero} className="w-[100%]" alt="Hero image"/>
        </div>
      </MaxWidthWrapper>
    </section>


{/*-------------------- Affiliated brand section --------------------------------------- */}


    <div className="bg-black py-9">
      <MaxWidthWrapper className="flex flex-wrap justify-evenly base:gap-y-6">
        <Image src={versace} className="max-lg:w-[60px]" alt="verace logo"></Image>
        <Image src={calvin} className="max-lg:w-[60px]" alt="calvin logo"></Image>
        <Image src={gucci} className="max-lg:w-[60px]" alt="gucci logo"></Image>
        <Image src={prada} className="max-lg:w-[60px]" alt="prada logo"></Image>
        <Image src={zara} className="max-lg:w-[60px]" alt="zara logo"></Image>
      </MaxWidthWrapper>
    </div>



{/*-------------------- New Arrival section --------------------------------------- */}

    <section className="mt-24">
      <MaxWidthWrapper className="">
        <h2 className="font-extrabold text-4xl text-center mb-16">NEW ARRIVALS</h2>
        <ProductList />
        <div className="flex flex-col items-center pb-24">
          <Button asChild variant="outline" className="w-2/12 max-md:w-4/12 bg-transparent"><Link href={'/products'}>View All</Link></Button>
        </div>   
      </MaxWidthWrapper>
    </section>


    {/*-------------------- Top Selling section --------------------------------------- */}

    <section className="mt-24">
      
        <h2 className="font-extrabold text-4xl text-center mb-16">TOP SELLING</h2>
          <PopularProductsUI />
        <div className="flex flex-col items-center pb-24">
          <Button asChild variant="outline" className="w-2/12 max-md:w-4/12 bg-transparent"><Link href={'/products'}>View All</Link></Button>
        </div>   
     
    </section>



    {/*-------------------- Browse by Categories --------------------------------------- */}

    <section className="mb-20">
      <MaxWidthWrapper>
        <div className="px-6 py-14 bg-gray-100 rounded-3xl">
          <h2 className="font-extrabold text-4xl text-center mb-14">BROWSE BY DRESS STYLE</h2>  
          <div className="grid grid-cols-12 gap-6">


          {categories.map((category: string, index) => (
          <div className="max-lg:col-span-12 col-span-4 h-[400px]  rounded-xl relative hover:scale-105 transition-all" key={index}>
          <Link href={`/categories/${category}`}>
            <Image src={images[index]} alt={category} className="object-cover rounded-xl h-[100%]"/>
            <h2 className="absolute top-2/4 left-6 text-white text-4xl font-extrabold" style={{textShadow:'6px 2px 6px black'}}>{category}</h2>
          </Link>
        </div>
        ))}

              

            
          </div>
        </div> 
      </MaxWidthWrapper>
    </section>


    {/*-------------------- How Happy Customers section --------------------------------------- */}

    <section >
      <MaxWidthWrapper> 

        <Carousel>

          <div className="mb-10 flex justify-between relative items-end">
            <h2 className="font-extrabold text-4xl">OUR HAPPY CUSTOMER</h2>
            <div className="flex relative top-3 bg-black right-14">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          <CarouselContent className="-ml-1 flex gap-x-5">
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

      </MaxWidthWrapper>
    </section>


   </div>
  );
}

