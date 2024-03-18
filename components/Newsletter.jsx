"use client"
import React from "react";
import { Input } from "@nextui-org/input";
import Image from "next/image";

const Newsletter = () => {

  return (
    <section className="relative w-full h-full my-10">
      <div
        className="flex flex-col-reverse items-center justify-center gap-5 mx-auto wrapper md:flex-row"
      >
        <div className="relative block w-full space-y-5 md:w-1/2 lg:w-2/5">
          <h1 className="hidden md:block text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px]">
            Subscribe to our newsletter
          </h1>
          <h3 className="text-base md:text-2xl lg:text-[28px] text-black font-Prata capitalize h-auto">
            Send me your email address
          </h3>
          <p className="text-base font-medium md:text-xl lg:text-2xl font-Plus_Jakarta_Sans text-[#848383]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
          <Input
            variant="bordered"
            color="primary"
            size="lg"
            radius="md"
            placeholder="Enter Your Email"
            className="w-full placeholder:text-zinc-400 md:w-4/5"
          />
          <div className="hidden lg:block absolute  -z-10 w-[4rem] h-[4rem] -left-28 top-32 animate-pulse">
            <Image
              fill
              src={"/legacy bg 1.svg"}
              alt="svg image"
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[40%] space-y-5">
          <h1 className="block h-auto text-2xl capitalize md:hidden text-primary font-Prata">
            Subscribe to our newsletter
          </h1>
          <div className="relative w-full h-full">
            <div className="relative w-full h-[300px] md:h-[375px] lg:w-[450px] lg:h-[500px] overflow-hidden group">
              <Image
                src={"/evolution.png"}
                fill
                alt="product Image"
                className="object-cover transition-all ease-in-out transform cursor-pointer group-hover:scale-105"
              />
            </div>
            <div className="block absolute -bottom-14 md:-bottom-20 left-0 -z-10 w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] animate-pulse">
              <Image
                fill
                src={"/newsletter bg 1.svg"}
                alt="svg image"
                className="object-contain"
              />
            </div>
            <div className="hidden md:block absolute -bottom-14 md:right-0 lg:right-20 -z-10 w-[5rem] h-[5rem] animate-pulse rotate-45">
              <Image
                fill
                src={"/legacy bg 1.svg"}
                alt="svg image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
