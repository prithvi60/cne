"use client";
import { brands } from "@/libs/data";
import Image from "next/image";
import React from "react";

export const Our_Brands = () => {
  return (
    <section
      id={"Brands"}
      className="relative space-y-16 wrapper">
        <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata text-center capitalize">Our Brands</h1>
      <div className="z-auto flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12 sm:flex-row sm:justify-around sm:flex-wrap">
        {brands.map((list, index) => (
          <div
            className="relative overflow-hidden transition-all ease-linear transform rounded-md shadow-xl w-36 h-28 md:h-44 md:w-48 lg:h-[250px] lg:w-[350px] hover:shadow-primary z-20 bg-white"
            key={index}
          >
            <Image
              fill
              src={list.img}
              alt={list.alt}
              className="object-contain p-6 transition-all ease-linear transform md:p-8 lg:p-10 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-64 w-full h-full -left-[38rem] z-0">
      <Image fill src={"/brand bg 1.svg"} alt="svg image" className="object-contain" />
      </div>
      {/* <Image width={350} height={350} src={"/brand bg 1.svg"} alt="svg image" className="absolute left-0 object-contain -z-40 top-64" /> */}
    </section>
  );
};
