import { getAllCategories } from "@/Request/requests";
import React from "react";

const Category = async () => {
  const categoeries: string[] = await getAllCategories();

  return (
    <div className="pt-10 pb-24">
      <h1 className="text-center font-bold text-2xl capitalize">
        Shop by Categories
      </h1>
      {/* grid defining */}
      <div className="grid grid-cols-2 lg:grid-cols-4 w-4/5 mx-auto gap-6 mt-10">
        {categoeries.map((category) => (
          <div
            key={category}
            className="text-center hover:scale-105 shadow-xl p-4 bg-gradient-to-tl from-blue-600 to-pink-800 rounded-md cursor-pointer"
          >
            <h1 className="text-sm sm:text-base md:text-lg font-bold capitalize text-white">
              {category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
