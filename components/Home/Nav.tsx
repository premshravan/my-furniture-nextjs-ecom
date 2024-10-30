import Link from "next/link";
import React from "react";
import SearchBox from "../helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../helper/ShoppingCartButton";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className="h-[10vh] sticky top-0 z-[1] bg-white shadow-lg">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* Logo */}
        <Link href={"/"}>
          <img src="/images/logo.png" alt="logo" width={50} height={50} />
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <SearchBox /> {/* search  icon*/}
          <HeartIcon size={25} cursor={"pointer"} />
          {/* {Shopping cart} */}
          <ShoppingCartButton />
          {/* userButtton */}
          {/* singned In */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/*Not Signed in */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={25} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
