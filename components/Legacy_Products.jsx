"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { legacyProducts } from "@/libs/data";

export const Legacy_Products = () => {
  const [width, setWidth] = useState(window.innerWidth);
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
    <section className="space-y-8 wrapper md:space-y-12">
      <h1 className="text-center text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px]">
        Legacy Products
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <Tabs
          classNames={{
            base: "!overflow-hidden w-full h-full justify-center items-center",
            tabList: "!overflow-scroll font-Prata font-semibold",
            tabContent: "group-data-[selected=true]:font-bold",
          }}
          variant="underlined"
          color="primary"
          size={"lg"}
          aria-label="Tabs sizes"
          className="mb-5"
        >
          {legacyProducts.map((list, id) => (
            <Tab key={id} title={list.type}>
              <div className="grid w-full h-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {list.products.slice(0, count).map((item, idx) => (
                  <div
                    className="w-full h-full p-3 space-y-3 rounded-md shadow-sm sm:min-w-40 group shadow-grey-150 md:p-5 md:min-w-48 lg:min-w-56 xl:min-w-80 md:space-y-5"
                    key={idx}
                  >
                    <div className="relative w-full h-48 overflow-hidden md:h-60 lg:h-72 ">
                      <Image
                        fill
                        src={item.img}
                        alt={item.alt}
                        className="object-contain transition-all ease-in-out transform md:p-5 group-hover:scale-105"
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
                        className="text-sm text-white capitalize md:text-base lg:text-lg"
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
    </section>
  );
};
