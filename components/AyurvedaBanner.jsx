"use client";
import Image from "next/image";
import React from "react";
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";

export const AyurvedaBanner = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <section className="relative w-full h-full">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1, delay: 0.25 }}
        className="z-20 bg-primary"
      >
        <div className="flex flex-col-reverse w-full h-full max-w-full gap-5 my-6 md:gap-10 lg:flex-row wrapper">
          <p className="w-full text-base text-white font-Plus_Jakarta_Sans md:text-2xl lg:w-1/2">
            Our Ayurveda products are designed to help you achieve your health
            goals and live your best life.
            <br />
            <br />
            We are committed to providing our customers with the highest quality
            Ayurveda products. Our products are made with natural ingredients
            and are free of artificial flavors, colors, and preservatives. We
            also offer a satisfaction guarantee on all of our products.
            <br />
            <br />
            If you are looking for a natural way to improve your health and
            well-being, our Ayurveda products are a great option. We offer a
            wide variety of products to meet your needs, and we are confident
            that you will find the perfect product for you.
          </p>
          <div className="w-full lg:w-1/2 text-2xl md:text-[55px] leading-tight tracking-wide capitalize text-white relative my-auto font-Prata">
            {/* <span className="absolute top-0 left-0 text-xl md:text-6xl md:-left-7 md:-top-3">
              <ImQuotesLeft />
            </span> */}
            <p className="ms-12">
              <span>
                We
                <span className="absolute top-0 text-xl left-4 md:text-6xl md:-left-7 md:-top-3">
                  <ImQuotesLeft />
                </span>
              </span>{" "}
              believe that everyone deserves to live a Healthy & Happy{" "}
              <span className="relative">
                Life.
                <span className="absolute bottom-0 text-xl -right-7 md:text-6xl md:-right-20">
                  <ImQuotesRight />
                </span>
              </span>
            </p>
            {/* <span className="absolute bottom-0 right-0 text-lxl md:text-6xl md:-bottom-4 md:right-0">
              <ImQuotesRight />
            </span> */}
          </div>
        </div>
      </motion.div>
      <div className="block absolute -top-20 right-0 w-[10rem] h-[10rem] animate-pulse -z-10 md:-top-24  xl:-top-[10.5rem] md:h-[12rem] md:w-[12rem] xl:h-[18rem] xl:w-[18rem]">
        <Image
          fill
          src={"/Ayurveda bg 5.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
      <div className="block absolute -bottom-28 right-0 w-[8rem] h-[8rem] animate-pulse -z-10 md:h-[14rem] md:w-[14rem] md:-bottom-36 xl:h-[20rem] xl:w-[20rem] xl:-bottom-[14rem] 2xl:-bottom-[15rem]">
        <Image
          fill
          src={"/Ayurveda bg 4.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
    </section>
  );
};
