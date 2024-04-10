import React from "react";
import { Button } from "../ui/button";
import CustomImage from "./customImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { title } from "process";
import { ChevronLeft } from "lucide-react";

export default async function ProductView({ id }: { id: string }) {
  const data = await fetch(`https://dummyjson.com/products/${id}`).then((d) =>
    d.json()
  );
  const allData: DataType = await data;
  console.log(allData);

  return (
    <section className="text-foreground body-font relative max-w-[1440px] mx-auto overflow-hidden">
      <Button className="absolute top-5 left-0">
        <ChevronLeft />
      </Button>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex items-center  justify-between gap-20 flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm  title-font text-foreground/50 tracking-widest">
              {allData.brand}
            </h2>
            <h1 className="text-foreground font-bold text-3xl title-font mb-4">
              {allData.title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-primary border-b-2 border-primary py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">{allData.description}</p>
            <div className="flex border-t border-foreground/20 py-2">
              <span className="text-foreground/50">Rating</span>
              <span className="ml-auto text-foreground">{allData.rating}</span>
            </div>
            <div className="flex border-t border-foreground/20 py-2">
              <span className="text-foreground/50">In stock </span>
              <span className="ml-auto text-foreground">
                {allData.stock} available
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-foreground/20 py-2">
              <span className="text-foreground/50">Discount</span>
              <span className="ml-auto text-foreground">
                -{allData.discountPercentage}%
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-foreground">
                ${allData.price}.00
              </span>
              <Button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded">
                Buy {allData.title}
              </Button>
              {/* <button className="rounded-full w-10 h-10 bg-foreborder-foreground/20 p-0 border-0 inline-flex items-center justify-center text-foreground/50 ml-4"></button> */}
            </div>
          </div>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {allData.images.map((im: string) => (
                <CarouselItem key={im}>
                  <CustomImage
                    alt="ecommerce"
                    classname="w-full h-full rounded-2xl"
                    img={im}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
