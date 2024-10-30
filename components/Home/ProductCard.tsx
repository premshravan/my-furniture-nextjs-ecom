"use client";

import { Product } from "@/typing";
import { HeartIcon, ShoppingCart, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  {
    /* rounds the rating*/
  }
  const ratingNum = Math.round(product.rating.rate);
  {
    /* makes the number of rating into array of elements and we can map through this*/
  }

  const ratingArray = new Array(ratingNum).fill(0);
  const {toast}=useToast();

  const dispatch = useDispatch();

  const addToCartHandler = (product: Product) => {
    toast({
        description:"Item added to cart",
        variant:"success"
    })
    dispatch(addItem(product));
  };

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px] ">
        {/* image */}
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      {/* category */}
      <p className="text-sm capitalize font-bold text-gray-700">
        {product.category}
      </p>
      {/* Title */}
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-lime-700 transition-all hover:underline sm:w-full sm:truncate mt-2 font-semibold">
          {product.title}
        </h1>
      </Link>
      {/* Rating */}
      <div className="flex items-center">
        {ratingArray.map((star) => {
          return (
            <StarIcon
              key={Math.random() * 1000}
              size={18}
              fill="yellow"
              className="text-yellow-700"
            />
          );
        })}
      </div>
      {/* pricing */}
      <div className="flex items-center space-x-2">
        <p className="text-black text-base opacity-70 line-through">{`$${(
          product.price + 10
        ).toFixed(2)}`}</p>
        <p className="font-semibold">{`$${product.price}`}</p>
      </div>
      <div className="flex gap-2 mt-2 items-center">
        <Button
          onClick={() => {
            addToCartHandler(product);
          }}
          size={"sm"}
        >
          <ShoppingCart size={18} />
        </Button>
        <Button className="bg-red-600" size={"sm"}>
          <HeartIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
