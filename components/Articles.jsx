"use client"
import { articleItems } from "@/libs/data";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export const Articles = () => {
  let settings = {
    arrows:false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="mb-24 space-y-8 wrapper md:space-y-12">
      <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px] text-center w-full">
        Read Our Articles
      </h1>
      <div className="slider-container">
      <Slider {...settings}>
        {articleItems.map((list, id) => (
          <div
            className="w-full h-full pb-4 space-y-3 overflow-hidden rounded-md shadow-sm sm:w-40 group shadow-grey-150 md:w-96 md:space-y-4"
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
        className="!text-[#7D7D7D] font-Plus_Jakarta_Sans uppercase tracking-wider py-4 px-16 text-sm md:text-lg lg:text-xl hover:!text-white font-medium"
      >
        read all articles
      </Button>
      </div>
    </section>
  );
};