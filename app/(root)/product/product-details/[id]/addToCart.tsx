"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addItem, CartItem } from "@/store/cartSlice";
import { Product } from "@/typing";

import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const {toast}=useToast();
  const addCarthandler = () => {

toast({
  description:"Item add to the cart",
  variant:"success",
})
    dispatch(addItem(product));}
  return (
    <Button
      onClick={() => {
        addCarthandler();
      }}
      className="mt-6"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
