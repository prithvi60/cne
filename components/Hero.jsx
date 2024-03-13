"use client";
import Image from "next/image";
import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export const Hero = () => {
  const background = {
    image: "/parallexlayer3.png",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  // const headline = {
  //   translateY: [0, 30],
  //   scale: [1, 1.05, 'easeOutCubic'],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (
  //     <div className="absolute inset-0 flex items-center justify-center">
  //       <h1 className="text-6xl font-thin text-white md:text-8xl">
  //         Hello World!
  //       </h1>
  //     </div>
  //   ),
  // };

  const foreground = {
    image: "/parallexlayer2.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  // const gradientOverlay = {
  //   opacity: [0, 0.9],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (
  //     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
  //   ),
  // };
  return (
    <section className="w-full h-full" id="Home">
      {/* <ParallaxBanner
      layers={[background, foreground]}
      className="w-screen h-screen bg-gray-900"
    /> */}
      {/* <ParallaxBanner scale={[0, 1]}
      layers={[
        { image: '/parallexlayer3.png', speed: -20 },
        { image: '/parallexlayer2.png', speed: -10 },
      ]}
      className=" w-full md:h-[640px] lg:h-[850px] xl:h-[1200px]"
    /> */}
      <ParallaxBanner className="h-[800px] lg:h-[950px] xl:h-[1200px] 2xl:h-[1500px] w-auto">
        <ParallaxBannerLayer
          className="w-full h-auto"
          speed={-20}
        >
          <div className="block absolute top-44 w-full h-[640px] lg:h-[850px] xl:h-[1200px] ">
            <Image
              src={"/parallexlayer3.png"}
              fill
              alt="image"
              className="object-cover md:object-center"
            />
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
          className="relative w-full h-auto"
          speed={0}
        >
          <div className="hidden lg:block absolute top-[5.5rem] left-0 w-full md:h-[640px] lg:h-[850px] xl:h-[1200px] ">
            <Image
              src={"/parallaxstyle.png"}
              fill
              alt="image"
              className="object-cover scale-90 lg:scale-95 2xl:scale-100"
            />
          </div>
          <div className="hidden md:block lg:hidden absolute top-10 -left-5 md:left-0 w-full h-[650px]">
            <Image
              src={"/parallaxstyleMd.png"}
              fill
              alt="image"
              className="object-contain"
            />
          </div>
          <div className="block md:hidden absolute top-10 -left-5 md:left-0 w-full h-[650px]">
            <Image
              src={"/parallaxstyleSm.png"}
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
