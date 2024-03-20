/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { legacyProducts } from "@/libs/data";

export const Legacy_Products = () => {
  const isWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(isWidth);
  const [count, setCount] = useState(3);

  useEffect(() => {
    const onChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onChange);

    return () => {
      window.removeEventListener("resize", onChange);
    };
  }, []);

  useEffect(() => {
    width >= 1024
      ? setCount(8)
      : width >= 768
      ? setCount(6)
      : width >= 375
      ? setCount(4)
      : setCount(4);
  }, [width]);
  return (
    <section className="relative w-full h-full my-10">
      <div className="space-y-8 wrapper md:space-y-12">
        <div className="relative ">
          <h1 className="text-center text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px]">
            Legacy Products
          </h1>
          <div className="hidden lg:block absolute -top-2 lg:left-32 xl:left-[17rem] -z-10 w-12 h-12  xl:w-[5rem] xl:h-[5rem] animate-pulse">
            <img
              // fill
              loading="lazy"
              src={"/legacy bg 1.svg"}
              alt="svg image"
              className="object-contain"
            />
          </div>
        </div>
        <div className="z-20 flex flex-col items-center justify-center gap-4">
          <Tabs
            classNames={{
              base: "!overflow-hidden w-full h-full justify-center items-center",
              tabList: "!overflow-scroll font-Prata font-semibold",
              tabContent: "group-data-[selected=true]:font-bold",
              panel: "w-full",
            }}
            variant="underlined"
            color="primary"
            size={"lg"}
            aria-label="Tabs sizes"
            className="mb-5"
          >
            {legacyProducts.map((list, id) => (
              <Tab key={id} title={list.type}>
                <div className="grid w-full h-full gap-5 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {list.products.slice(0, count).map((item, idx) => (
                    <div
                      className="z-20 w-full h-full p-3 space-y-3 bg-white rounded-md shadow-xl sm:min-w-40 group md:p-5 md:min-w-48 lg:min-w-56 xl:min-w-80 md:space-y-5"
                      key={idx}
                    >
                      <div className="relative overflow-hidden ">
                        <img
                          // fill
                          loading="lazy"
                          src={item.img}
                          alt={item.alt}
                          className="object-contain w-full h-48 transition-all ease-in-out transform md:p-5 group-hover:scale-105 md:h-60 lg:h-72"
                        />
                      </div>
                      <div className="space-y-4 text-center">
                        <h3 className="text-base font-medium font-Prata md:text-lg lg:text-2xl text-grey-150">
                          {item.title}
                        </h3>
                        <p className="text-sm font-light font-Plus_Jakarta_Sans md:text-lg lg:text-xl text-grey-150">
                          {item.desc}
                        </p>
                        <Button
                          color="primary"
                          variant="shadow"
                          size="md"
                          className="text-sm text-white capitalize md:text-base lg:text-lg font-Prata"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="hidden lg:block absolute top-[30rem] right-0 -z-10 w-[7rem] h-[7rem] animate-pulse">
        <img
          // fill
          src={"/legacy bg 2.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
      <div className="block absolute -bottom-[6.5rem] left-4 xl:bottom-14 md:left-0 2xl:left-10 z-0 w-16 h-16 md:w-[8rem] md:h-[8rem] animate-pulse">
        <img
          loading="lazy"
          src={"/legacy bg 3.svg"}
          alt="svg image"
          className="object-contain"
        />
      </div>
    </section>
  );
};
