import React from "react";
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";

export const AyurvedaBanner = () => {
  return (
    <section className="bg-primary ">
    <div className="flex flex-col-reverse w-full h-full max-w-full gap-5 my-6 md:gap-10 lg:flex-row wrapper">
      <p className="w-full text-base text-white font-Plus_Jakarta_Sans md:text-2xl lg:w-1/2">
        Our Ayurveda products are designed to help you achieve your health goals
        and live your best life.
        <br />
        <br />
        We are committed to providing our customers with the highest quality
        Ayurveda products. Our products are made with natural ingredients and
        are free of artificial flavors, colors, and preservatives. We also offer
        a satisfaction guarantee on all of our products.
        <br />
        <br />
        If you are looking for a natural way to improve your health and
        well-being, our Ayurveda products are a great option. We offer a wide
        variety of products to meet your needs, and we are confident that you
        will find the perfect product for you.
      </p>
      <div className="w-full lg:w-1/2 text-2xl md:text-[55px] leading-tight tracking-wide capitalize text-white relative my-auto font-Prata">
        <span className="absolute top-0 left-0 text-xl md:text-6xl md:-left-7 md:-top-3">
          <ImQuotesLeft />
        </span>
        <p className="ms-12">We believe that everyone deserves to live a Healthy & Happy Life.</p>
        <span className="absolute bottom-0 right-0 text-lxl md:text-6xl md:-bottom-4 md:right-0">
          <ImQuotesRight />
        </span>
      </div>
    </div>
    </section>
  );
};
