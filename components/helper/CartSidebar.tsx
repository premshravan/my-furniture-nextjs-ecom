import { addItem, CartItem, removeItem } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";
type Props = {
  items: CartItem[];
};

const CartSidebar = ({ items }: Props) => {
  const dispatch = useDispatch();
  const addcartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (id: number) => dispatch(removeItem({ id }));
  return (
    <div className="mt-6 h-full mb-6">
      {/* Heading */}
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {/* empty image */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center ">
          <Image
            src="/images/cartimage.jpg"
            alt="empty cart"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold"> Your Cart is empty</h1>
        </div>
      )}
      {/* if cart is available */}
      {items.length > 0 && (
        <div>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 border-b-2 border-gray-500 border-opacity-50 p-4"
              >
                {/* cart item image */}
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover mb-4"
                  />
                </div>
                <div>
                  {/* title */}
                  <h1 className="text-sm font-semibold truncate">
                    {item?.title}
                  </h1>
                  {/* price */}
                  <h1 className="font-bold">
                    ${(item?.price * item?.quantity).toFixed(2)}
                  </h1>
                  {/* quantity */}
                  <h1 className="text-base font-bold mb-2">
                    Quantity:{item?.quantity}
                  </h1>
                  {/* button */}
                  <div className="flex items-center space-x-4">
                    <Button onClick={()=>{removeCartHandler(item.id)}} size={"sm"} variant={"destructive"}>
                      Remove
                    </Button>
                    <Button onClick={()=>{addcartHandler(item)}} size={"sm"}>Add</Button>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <Link href="/cart">
              <SheetClose>
                <Button className="w-full mb-6 mt-6">View all in cart</Button>
              </SheetClose>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
