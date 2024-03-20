/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/button";
import React from "react";

export const Global = () => {
  return (
    <section className="relative w-full h-full my-12">
      <div className=" wrapper" id={"Global"}>
        <div className="z-20 flex flex-col items-start gap-5 mb-6 bg-white md:flex-row md:items-start">
          <div className="w-full md:w-1/2">
            <div className="relative z-10 overflow-hidden group">
              <img
                src={"/Mask 1.png"}
                alt="image"
                // fill
                loading="lazy"
                className={
                  "object-contain group-hover:scale-105 transition-all ease-in-out transform cursor-pointer h-80 lg:h-[500px] w-full"
                }
              />
            </div>
          </div>
          <div className="z-20 block w-full mt-5 space-y-8 md:w-1/2">
            <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto">
              Global
            </h1>
            <p className="text-lg font-medium md:text-xl lg:text-2xl font-Plus_Jakarta_Sans text-grey-50">
              &ldquo;We are a global company with a presence in over 10
              countries.&rdquo;
            </p>
            <p className="text-base md:text-lg lg:text-xl text-grey-100 font-Plus_Jakarta_Sans">
              We have a strong focus on Asia, where we operate in Sri Lanka,
              Malaysia, the Middle East, Nepal, Philippines, Taiwan and
              Bangladesh. We are committed to providing our customers with
              high-quality products and excellent service.
            </p>
            <div className="z-20 hidden space-y-7 lg:block">
              <p className="text-base md:text-lg lg:text-xl ">
                We are confident that our global presence will continue to grow
                in the years to come. We are committed to providing our
                customers with the best possible products and services, wherever
                they are in the world.
              </p>
              <Button
                variant="shadow"
                color="primary"
                className="px-8 py-6 text-xl tracking-wide text-white capitalize rounded-none font-Prata"
              >
                Open To Overseas Distribution Partners
              </Button>
            </div>
          </div>
        </div>
        <div className="z-20 block bg-white space-y-7 lg:hidden">
          <p className="text-base md:text-lg lg:text-xl font-Plus_Jakarta_Sans">
            We are confident that our global presence will continue to grow in
            the years to come. We are committed to providing our customers with
            the best possible products and services, wherever they are in the
            world.
          </p>
          <Button
            variant="shadow"
            color="primary"
            className="w-full px-5 py-4 text-xs tracking-wide text-white capitalize rounded-none md:py-7 md:w-max sm:text-sm font-Prata md:text-xl"
          >
            Open To Overseas Distribution Partners
          </Button>
        </div>
        <div
          className="hidden lg:block absolute lg:top-60
        lg:left-0 2xl:left-[9rem] -z-10 md:w-[8rem] md:h-[8rem] animate-pulse"
        >
          <img
            // fill
            loading="lazy"
            src={"/brand bg 3.svg"}
            alt="svg image"
            className="object-contain"
          />
        </div>
        <div className="hidden lg:block absolute -top-2 right-0 -z-10 lg:w-[10rem] lg:h-[23rem] animate-pulse">
          <img
            // fill
            loading="lazy"
            src={"/brand bg 2.svg"}
            alt="svg image"
            className="object-contain"
          />
        </div>
        <div className="block lg:hidden absolute -top-6 md:top-0 -left-[11.5rem] z-0 w-[26rem] h-[22rem] md:h-[26rem] animate-pulse">
          <img
            // fill
            loading="lazy"
            src={"/brandbg 7.svg"}
            alt="svg image"
            className="object-contain"
          />
        </div>
      </div>
      <div
        className="hidden lg:block absolute lg:top-60
        lg:left-0 2xl:left-[9rem] -z-10 md:w-[8rem] md:h-[8rem] animate-pulse"
      >
        <img
          // fill
          loading="lazy"
          src={"/brand bg 3.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
      <div className="hidden lg:block absolute -top-2 right-0 -z-10 lg:w-[10rem] lg:h-[23rem] animate-pulse">
        <img
          // fill
          loading="lazy"
          src={"/brand bg 2.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
      <div className="block lg:hidden absolute -top-6 md:top-0 -left-[11.5rem] -z-10 w-[26rem] h-[22rem] md:h-[26rem] animate-pulse">
        <img
          // fill
          loading="lazy"
          src={"/brandbg 7.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
    </section>
  );
};
