import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-10vh)] bg-cyan-700 flex justify-center flex-col bg-gradient-to-r from-yellow-700   to-pink-500">
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div>
          <h1 className="text-black text-xl  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase  ">
            Mega Sales{" "}
            <span className="bg-gradient-to-b from-pink-200 via-red-500 to-yellow-200 bg-clip-text text-transparent">
              {" "}
              Special{" "}
            </span>{" "}
            Offer upto <span className="text-fuchsia-400"> 60% Off</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-opacity-60 mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            molestias consectetur adipisicing elit. Beatae, molestias
          </p>
          <div className="flex space-x-3 items-center mt-4 ">
            <Button size={"lg"}>Shop Now</Button>
            <Button
              size={"lg"}
              className="bg-gradient-to-tl via-red-300 to-blue-800 hover:opacity-70 "
            >
              Explore More
            </Button>
          </div>
        </div>
        <div className=" lg:block gap-5 flex justify-center items-cente">
          <img
            src="/images/hero.jpg"
            alt="bg-image"
            width={500}
            height={500}
            className="lg:h-[50%] lg:w-[70%] xl:w-[80%] xl:h-[80%] shadow-inner rounded-full p-3 shadow-yellow-400/80 hover:scale-110 hover:row-start-5 transition-all duration-500 ease-in-out"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
