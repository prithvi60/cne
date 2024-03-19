"use client";
import Image from "next/image";
import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export const Hero = () => {
  return (
    <section className="w-full h-full" id="Home">
      <ParallaxBanner className="h-[800px] lg:h-[950px] xl:h-[1200px] 2xl:h-[1500px] w-auto">
        <ParallaxBannerLayer className="w-full h-auto" speed={-20}>
          <div className="block absolute top-48 md:top-52 lg:top-36 w-full h-[640px] lg:h-[850px] xl:h-[1200px] ">
            <Image
              src={"/parallexlayer.png"}
              fill
              alt="image"
              className="object-cover md:object-center"
            />
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="relative w-full h-auto" speed={0}>
          <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full md:h-[640px] lg:h-[850px] xl:h-[1200px] ">
            <Image
              src={"/parallaxlg.png"}
              fill
              alt="image"
              className="object-contain scale-110 2xl:scale-100"
            />
          </div>
          <div className="hidden md:block lg:hidden absolute top-12 -left-5 md:left-0 w-full h-[650px]">
            <Image
              src={"/parallaxmd.png"}
              fill
              alt="image"
              className="object-contain scale-125"
            />
          </div>
          <div className="block md:hidden absolute top-10 -left-5 md:left-0 w-full h-[650px]">
            <Image
              src={"/parallaxsm.png"}
              fill
              alt="image"
              className="object-contain scale-125"
            />
          </div>
        </ParallaxBannerLayer>
        {/* <ParallaxBannerLayer
          className="relative w-full h-auto"
          speed={0}
        >
          <div className="absolute -top-48 -left-20 w-full md:h-[640px] lg:h-[850px] xl:h-[1200px] ">
            <Image
              src={"/paralaxlayer1.png"}
              fill
              alt="image"
              className="object-contain xl:scale-90 2xl:scale-[0.60]"
            />
          </div>
        </ParallaxBannerLayer> */}
      </ParallaxBanner>
      {/* <div className="w-full h-auto">
        <HeroSvg/>
      </div> */}
      {/* <div className="hidden md:block relative w-full md:h-[640px] lg:h-[850px] xl:h-[1200px] ">
        <Image
          src={"/Hero.svg"}
          fill
          alt="image"
          className="object-cover object-center"
        />
      </div>
      <div>
        <div className="relative w-full h-[425px] block md:hidden ">
          <Image
            src={"/HeroMobile.svg"}
            fill
            alt="image"
            className="object-contain"
          />
        </div>
        <div className="absolute hidden h-full space-y-4 2xl:space-y-5 w-52 2xl:w-64 md:block lg:top-64 lg:left-40 xl:top-96 xl:left-56 2xl:top-[22rem] 2xl:left-[26rem]">
          <h1 className="font-Prata text-primary text-[50px] 2xl:[60px] tracking-wider leading-snug">
            Care &Beyond
          </h1>
          <p className="w-full text-xl 2xl:text-2xl font-Plus_Jakarta_Sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Button
            color="secondary"
            size="lg"
            radius="sm"
            variant="shadow"
            className="text-xl text-white 2xl:text-2xl"
          >
            Know More
          </Button>
        </div>
        <div className="absolute block w-40 h-full space-y-2 md:hidden top-20 left-7">
          <h1 className="w-1/2 text-xl leading-relaxed tracking-wider font-Prata text-primary">
            Care &Beyond
          </h1>
          <p className="text-sm font-Plus_Jakarta_Sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Button
            color="secondary"
            radius="sm"
            size="sm"
            variant="shadow"
            className="text-sm text-white"
          >
            Know More
          </Button>
        </div>
      </div> */}
    </section>
  );
};
