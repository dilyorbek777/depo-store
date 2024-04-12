import React from "react";
import { CustomCard } from "./customCard";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function ProductSection({
  limit,
  title,
}: {
  limit: number;
  title: string;
}) {
  const data = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=0`
  ).then((d) => d.json());
  const allData: DataType[] = await data.products;

  return (
    <div className="max-w-[1440px] mx-auto flex-col  py-20  flex justify-center  gap-20 min-h-screen max-lg:flex-col items-center">
      {title === "" ? (
        <h1 className="text-6xl font-bold text-foreground max-[580px]:text-4xl max-[400px]:text-2xl text-center">
          Purchase our goods
          <br />
          at <span className="text-primary">budget-friendly </span> rates.
        </h1>
      ) : (
        <h1 className="text-6xl font-bold text-foreground max-[580px]:text-4xl max-[400px]:text-2xl text-center">{title}</h1>
      )}

      <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
        {allData.map((card, i) => (
          <CustomCard
            brand={card.brand}
            category={card.category}
            description={card.description}
            discountPercentage={card.discountPercentage.toString()}
            id={card.id}
            price={card.price.toString()}
            stock={card.stock.toString()}
            thumbnail={card.thumbnail}
            title={card.title}
            key={i}
          />
        ))}
      </div>
      <Link href={"/products"}>
        <Button>Show all products</Button>
      </Link>
    </div>
  );
}
