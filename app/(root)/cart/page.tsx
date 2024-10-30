"use client";

import PaypalButton from "@/components/helper/PaypalButton";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, clearcart, removeItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  //router
  const router = useRouter();

  const dispatch = useDispatch();
  //get our cart items
  const items = useSelector((state: RootState) => state.cart.items);
  //calculating total quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  //total price
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  //calculate gst%
  const gst = (+totalPrice * 0.18).toFixed(2);
  //const totl price of gst
  const totalPriceWithGst = (+totalPrice + +gst).toFixed(2);
  // get authnticate user
  const { user } = useUser();
  // add item
  const addItemHandler = (item: CartItem) => {
    dispatch(addItem(item));
  };
  // remove item
  const removeItemHandler = (id: number) => {
    dispatch(removeItem({ id }));
  };
  //handle payment suucess
  const handleSuccess = (details: any) => {
    router.push("/success");
    dispatch(clearcart());
  };

  return (
    <div className="mt-8 min-h-[60vh] flex">
      {/* cart empty */}
      {items.length == 0 && (
        <div className="flex  items-center w-full h-[800] flex-col justify-center">
          <Image
            src="/images/cartimage.jpg"
            alt="empty_cart"
            width={400}
            height={400}
            className="object-cover mx-aut"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your cart is empty</h1>
          <Link href="/">
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
      )}
      {/* cart item exist */}
      {items.length > 0 && (
        <div className="flex-col lg:flex-row w-[95%] mx-auto  flex gap-10 max-w-screen-lg">
          {/* cart items */}
          <div className="rounded-lg shadow-md sm:text-2xl md:text-3xl lg:w-2/3">
            <h1 className=" font-bold text-black bg-blue-100 md:text-2xl sm:text-xl text-xl">
              {" "}
              Your cart includes ({totalQuantity}) Items
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex pb-6 mt-8 border-b-[1.5px] border-opacity-25 border-gray-600 items-center  space-x-10  ">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-base font-bold text-black">
                        Category :{item.category}
                      </h1>
                      <h1 className="md:text-2xl text-base font-bold text-blue-950">
                        ${item.price}
                      </h1>
                      <h1 className="md:text-xl text-sm font-semibold text-black">
                        Quantity :{item.quantity}
                      </h1>
                      <div className="flex space-x-3 items-center mt-4">
                        <Button onClick={() => addItemHandler(item)}>
                          Add More
                        </Button>
                        <Button
                          onClick={() => removeItemHandler(item.id)}
                          variant={"destructive"}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* cart summary */}

          <div className="bg-indigo-700 sticky top-[25vh] p-6 rounded-lg h-max lg:w-[40%] space-y-3">
            <h1 className="text-center font-semibold text-3xl mt-8 mb-6  ">
              Summary
            </h1>
            <div className="w-full h-[1.2px]"></div>
            <div className="flex mt-4 text-xl uppercase text-white justify-between   ">
              <span>Subtotal: </span>
              <span> ${totalPrice}</span>
            </div>
            <div className="flex justify-between text-xl text-white mb-4">
              <span>GST:</span>
              <span>${gst}</span>
            </div>
            <hr />
            <div className="flex justify-between text-xl text-white font-bold">
              <span>Total:</span>
              <span>${totalPriceWithGst}</span>
            </div>
            {!user && (
              <Link href="/sign-in">
                <Button className="w-full bg-orange-500">
                  Sign in To checkout
                </Button>
              </Link>
            )}
            {user && (
              <PaypalButton
                amount={totalPriceWithGst}
                onSuccess={handleSuccess}
              />
            )  }
            
              </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
