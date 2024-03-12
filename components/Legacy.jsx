"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export const Legacy = () => {
  let settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="w-full h-full py-8 mx-auto space-y-8 md:py-12" id="Legacy">
      <h1 className="text-center text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px">
        Legacy
      </h1>
      <Slider {...settings} className="!overflow-hidden focus:!outline-none focus:!border-none">
        <div className="relative w-full h-[270px] md:h-[400px] lg:h-[450px] ">
          <Image
            src={"/CompanyTree.svg"}
            fill
            alt="tree image"
            className="object-cover object-left md:object-center"
          />
        </div>
        <div className="relative w-full h-[270px] md:h-[400px] lg:h-[450px] !overflow-hidden">
          <Image
            src={"/CompanyTree.svg"}
            fill
            alt="tree image"
            className="object-cover object-left md:object-center"
          />
        </div>
      </Slider>
    </section>
  );
};
