"use client";
import { articleItems } from "@/libs/data";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export const Articles = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="relative w-full h-full mt-10 md:mb-40">
      <motion.div  variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1, delay: 0.25 }}  className="mb-24 space-y-8 wrapper md:space-y-12">
        <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px] text-center w-full">
          Read Our Articles
        </h1>
        <div className="bg-white slider-container">
          <Slider {...settings}>
            {articleItems.map((list, id) => (
              <div
                className="w-full h-full pb-4 space-y-3 overflow-hidden rounded-md shadow-xl sm:w-40 group md:w-96 md:space-y-4"
                key={id}
              >
                <div className="relative w-full h-48 overflow-hidden md:h-60 lg:h-72">
                  <Image
                    fill
                    src={list.img}
                    alt={"article image"}
                    className="object-cover transition-all ease-in-out transform group-hover:scale-105"
                  />
                </div>
                <div className="px-3 py-2 space-y-2">
                  <h3 className="text-xs font-medium font-Prata md:text-sm text-grey-150">
                    {list.date}
                  </h3>
                  <p className="text-base font-light font-Plus_Jakarta_Sans md:text-xl text-grey-150">
                    {list.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full h-full text-center">
          <Button
            variant="ghost"
            radius="md"
            color="primary"
            className="!text-[#7D7D7D] font-Plus_Jakarta_Sans uppercase tracking-[0.3em] md:tracking-[0.5em] py-4 px-8 text-sm md:text-lg lg:text-xl hover:!text-white font-medium"
          >
            read all articles
          </Button>
        </div>
      </motion.div>
      <div className="block absolute top-16 md:top-20 lg:top-56 left-0 -z-10 w-[15rem] h-[20rem] lg:w-[20rem] lg:h-[30rem] 2xl:w-[30rem] 2xl:h-[40rem] animate-pulse">
        <Image
          fill
          src={"/Articles bg 1.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
      <div className="block absolute -bottom-28 right-0 w-[10rem] h-[20rem] -z-10
      md:w-[10rem] md:h-[20rem]
      lg:w-[20rem] lg:h-[30rem] 2xl:w-[30rem] 2xl:h-[40rem] animate-pulse">
        <Image
          fill
          src={"/Articles bg 2.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
    </section>
  );
};
