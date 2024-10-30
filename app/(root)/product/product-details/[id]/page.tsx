import { getProductsByCategory, getSingleProduct } from "@/Request/requests";
import { Product } from "@/typing";
import { StarIcon } from "lucide-react";
import Image from "next/image";

import React from "react";
import AddToCart from "./addToCart";
import ProductCard from "@/components/Home/ProductCard";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProducts: Product[] = await getProductsByCategory(
    singleProduct.category
  );
  const num = Math.round(singleProduct?.rating?.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 grid grid-cols-1 lg:grid-cols-8 items-center justify-center gap-12 mx-auto">
        {/* image */}
        <div className="col-span-3 mb-6 lg-mb-0">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400}
            height={400}
          />
        </div>
        {/* content */}
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-lg font-bold text-black">
            {singleProduct.title}
          </h1>
          {/* Ratings */}
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center">
              {starArray.map((star) => {
                return (
                  <StarIcon
                    key={Math.random() * 1000}
                    size={25}
                    fill="yellow"
                    className="text-yellow-700"
                  />
                );
              })}
            </div>
            {/* Reviews */}
            <p className="text-base font-semibold text-gray-700">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          {/* Line */}
          <span className="w-1/2 h-[1.5px]  bg-gray-200 mt-4 rounded-lg block mb-4"></span>
          {/* price */}
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-blue-950">
            $ {singleProduct?.price.toFixed(2)}
          </h1>
          <span className="w-1/2 h-[1.5px]  bg-gray-200 mt-4 rounded-lg block mb-4"></span>
          {/* description */}
          <p className=" opacity-80 text-base">{singleProduct?.description}</p>
          <span className="w-1/2 h-[1.5px]  bg-gray-200 mt-4 rounded-lg block mb-4"></span>
          <p className="text-sm text-opacity-50 font-semibold">
            Category: {singleProduct?.category}
          </p>
          <p className="text-sm text-black text-opacity-70 ">PCD:{Math.random() * 1000}</p>
          {/* add to Cart */}
          <AddToCart product={singleProduct}/>
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto">
              <h1 className="font-semibold text-black text-2xl">Related Products</h1>
              <hr className="h-[10px]"/>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

                {relatedProducts.map((product)=>{
                  return(
                    <ProductCard key={product.id} product={product}/>
                  )
                })}
              </div>
      </div>
    </div>
  );
};

export default ProductDetails;
