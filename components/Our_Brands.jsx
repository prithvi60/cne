/* eslint-disable @next/next/no-img-element */
import { brands } from "@/libs/data";
import Link from "next/link";
import React from "react";
// import { motion } from "framer-motion";

export const Our_Brands = () => {
  // const variants = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //   },
  // };
  return (
    <section className="relative w-full h-full my-[7.5rem]">
      <div
        id={"Brands"}
        // variants={variants}
        // initial="initial"
        // whileInView="animate"
        // transition={{ duration: 1, delay: 0.25 }}
        className="space-y-16 wrapper"
      >
        <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata text-center capitalize">
          Our Brands
        </h1>
        <div className="z-auto flex flex-col items-center justify-center gap-5 sm:gap-2 sm:flex-row sm:justify-around sm:flex-wrap">
          {brands.map((list, index) => (
            <Link
            href={list.ref}
              className="relative z-20 overflow-hidden transition-all ease-linear transform bg-white rounded-md shadow-xl hover:shadow-primary"
              key={index}
              target="_blank"
            >
              <img
                // fill
                loading="lazy"
                src={list.img}
                alt={list.alt}
                className="object-contain p-6 transition-all ease-linear transform cursor-pointer md:p-4 lg:p-10 hover:scale-105 w-[320px] h-44 md:h-44 md:w-52 lg:h-[250px] lg:w-[350px] xl:w-[425px]"
              />
            </Link>
          ))}
        </div>
        <div className="absolute z-0 top-2 -left-64 w-[23rem] h-[23rem] md:w-[30rem] md:h-[30rem] md:top-10 md:-left-[18rem] lg:w-[40rem] lg:h-[40rem] lg:-left-72 xl:-left-52 2xl:left-0 animate-pulse">
          <img
            // fill
            loading="lazy"
            src={"/brand bg 1.svg"}
            alt="svg image"
            className="object-contain"
          />
        </div>
        {/* <div
          className="absolute top-24 md:left-[14rem]
        lg:left-[28rem] 2xl:left-[42rem] z-0 left-40 h-12 w-12 md:w-[8rem] md:h-[8rem] animate-pulse"
        > */}
          <img
            // fill
            loading="lazy"
            src={"/brand bg 3.svg"}
            alt="svg image"
            className="object-contain absolute top-24 md:left-[14rem]
            lg:left-[28rem] 2xl:left-[42rem] z-0 left-40 h-12 w-12 md:w-[8rem] md:h-[8rem] animate-pulse"
          />
        {/* </div> */}
        {/* <div className="absolute hidden w-32 h-32 lg:block -bottom-10 right-10 2xl:right-48 animate-pulse"> */}
          <img
            // fill
            loading="lazy"
            src={"/brand bg 5.svg"}
            alt="svg image"
            className="absolute hidden object-contain w-32 h-32 lg:block -bottom-10 right-10 2xl:right-48 animate-pulse"
          />
        {/* </div> */}
      </div>
    </section>
  );
};
