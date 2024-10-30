"use client";
import { getAllProducts } from "@/Request/requests";
import { Product } from "@/typing";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="pt-10 pb-10">
      <h1 className="text-center font-bold text-2xl">All Products</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader size={30} className="animate-spin" />
        </div>
      ) : (
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
