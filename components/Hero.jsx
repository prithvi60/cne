/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export const Hero = ({ handleIntersection }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    handleIntersection("Home", inView);
  }, [inView, handleIntersection]);

  return (
    <section className="w-full h-full" id="Home" ref={ref}>
      <ParallaxBanner className="h-[800px] lg:h-[950px] xl:h-[1200px] 2xl:h-[1500px] w-auto">
        <ParallaxBannerLayer className="w-full h-auto" speed={-20}>
          {/* <div className="block absolute top-48 md:top-52 lg:top-36 w-full h-[640px] lg:h-[850px] xl:h-[1200px] "> */}
          <img
            src={"/parallexlayer.png"}
            alt="image"
            loading="eager"
            className="object-cover md:object-center block absolute top-40 md:top-52 lg:top-36 w-full h-[640px] lg:h-[850px] xl:h-[1200px]"
          />
          {/* </div> */}
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="relative w-full h-auto" speed={0}>
          {/* <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full md:h-[640px] lg:h-[850px] xl:h-[1200px] "> */}
          <img
            src={"/parallaxlg.png"}
            alt="image"
            loading="lazy"
            className="object-contain scale-110 2xl:scale-100 hidden lg:block absolute top-[4.5rem] left-0 w-full md:h-[640px] lg:h-[850px] xl:h-[1200px] "
          />
          {/* </div> */}
          {/* <div className="hidden md:block lg:hidden absolute top-12 -left-5 md:left-0 w-full h-[650px]"> */}
          <img
            src={"/parallaxmd.png"}
            // fill
            alt="image"
            loading="lazy"
            className="object-contain scale-125 hidden md:block lg:hidden absolute top-12 -left-5 md:left-0 w-full h-[650px]"
          />
          {/* </div> */}
          {/* <div className="block md:hidden absolute top-10 -left-5 md:left-0 w-full h-[650px]"> */}
          <img
            src={"/parallaxsm.png"}
            // fill
            alt="image"
            loading="lazy"
            className="object-contain scale-125 block md:hidden absolute top-10 -left-5 md:left-0 w-full h-[650px]"
          />
          {/* </div> */}
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};
