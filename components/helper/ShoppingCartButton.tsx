"use client";

import { RootState } from "@/store/store";
import {  ShoppingCartIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import CartSidebar from "./CartSidebar";


const ShoppingCartButton = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <span className="absolute -top-4 -right-1 h-5 w-5 bg-red-500 rounded-full text-center  flex  items-center flex-col text-sm text-white">
            {totalQuantity}
          </span>
          <ShoppingCartIcon cursor={"pointer"} size={25} />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto h-full">
        <CartSidebar items={items}/>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartButton;
