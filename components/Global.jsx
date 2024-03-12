import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

export const Global = () => {
  return (
    <section className="wrapper" id={"Global"}>
      <div className="flex flex-col items-start gap-5 mb-6 md:flex-row md:items-start">
        <div className="w-full md:w-1/2">
          <div className="relative w-full overflow-hidden h-80 lg:h-[500px]">
            <Image
              src={"/Mask 1.png"}
              alt="image"
              fill
              className={"object-contain"}
            />
          </div>
        </div>
        <div className="block w-full space-y-8 md:w-1/2">
          <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto">
            Global
          </h1>
          <p className="text-lg font-medium md:text-xl lg:text-2xl font-Plus_Jakarta_Sans text-grey-50">
            &ldquo;We are a global company with a presence in over 10
            countries.&rdquo;
          </p>
          <p className="text-base md:text-lg lg:text-xl text-grey-100">
            We have a strong focus on Asia, where we operate in Sri Lanka,
            Malaysia, the Middle East, Nepal, Philippines, Taiwan and
            Bangladesh. We are committed to providing our customers with
            high-quality products and excellent service.
          </p>
          <div className="hidden space-y-7 lg:block">
            <p className="text-base md:text-lg lg:text-xl">
              We are confident that our global presence will continue to grow in
              the years to come. We are committed to providing our customers
              with the best possible products and services, wherever they are in
              the world.
            </p>
            <Button
              variant="ghost"
              radius="md"
              color="primary"
              className="px-8 py-4 text-xl tracking-wide capitalize font-Prata hover:!text-white"
            >
              Open To Overseas Distribution Partners
            </Button>
          </div>
        </div>
      </div>
      <div className="block space-y-7 lg:hidden">
        <p className="text-base md:text-lg lg:text-xl">
          We are confident that our global presence will continue to grow in the
          years to come. We are committed to providing our customers with the
          best possible products and services, wherever they are in the world.
        </p>
        <Button
          variant="ghost"
          radius="md"
          color="primary"
          className="px-5 py-4 text-xs tracking-wide capitalize sm:text-sm font-Prata md:text-xl hover:!text-white"
        >
          Open To Overseas Distribution Partners
        </Button>
      </div>
    </section>
  );
};
