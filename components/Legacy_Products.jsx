/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { legacyProducts } from "@/libs/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const smoothScrollTo = (element, target, duration) => {
  const start = element.scrollLeft;
  const change = target - start;
  let startTime = null;

  const animateScroll = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const newPos = start + change * easeInOutQuad(progress);
    element.scrollLeft = newPos;
    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
};

export const Legacy_Products = () => {
  // const isWidth = typeof window !== "undefined" && window.innerWidth;
  // const [width, setWidth] = useState(isWidth);
  // const [count, setCount] = useState(3);
  const [selected, setSelected] = useState("All Genre");
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { amount: 0.3 });
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // scroll to end
    if (isInView && scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const targetScrollPosition = scrollWidth - clientWidth;
      smoothScrollTo(scrollContainerRef.current, targetScrollPosition, 1200);
    }
    // scroll to start
    else if (scrollContainerRef.current) {
      smoothScrollTo(scrollContainerRef.current, 0, 1500);
    }
  }, [isInView]);

  // useEffect(() => {
  //   const onChange = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", onChange);

  //   return () => {
  //     window.removeEventListener("resize", onChange);
  //   };
  // }, []);

  // useEffect(() => {
  //   width >= 1024
  //     ? setCount(8)
  //     : width >= 768
  //     ? setCount(6)
  //     : width >= 375
  //     ? setCount(4)
  //     : setCount(4);
  // }, [width]);

  const handleNext = () => {
    setSelected((prev) => String(Number(prev) + 1));
  };

  const handlePrev = () => {
    setSelected((prev) => String(Number(prev) - 1));
  };

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
        <div className="relative z-20 flex flex-col items-center justify-center">
          <Button
            size="sm"
            radius="lg"
            isDisabled={selected <= 0 ? true : false}
            color="primary"
            className="absolute hidden text-lg font-bold text-white lg:block lg:top-2 lg:left-20 xl:left-72"
            onPress={handlePrev}
          >
            Prev
          </Button>
          <Button
            size="sm"
            radius="lg"
            isDisabled={legacyProducts.length - 1 <= selected ? true : false}
            color="primary"
            className="absolute hidden text-lg font-bold text-white lg:block lg:top-2 lg:right-20 xl:right-72"
            onPress={handleNext}
          >
            Next
          </Button>
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              base: "!overflow-hidden w-full h-full justify-center items-center",
              tabList: "!overflow-scroll font-Prata font-semibold",
              tabContent: "group-data-[selected=true]:font-bold capitalize",
              panel: "w-full",
            }}
            variant="underlined"
            color="primary"
            size={"lg"}
            className="lg:mb-5"
          >
            {legacyProducts.map((list, id) => (
              <Tab key={id} title={list.type}>
                <div className="flex items-center justify-center gap-8 pb-10 lg:hidden">
                  <Button
                    size="sm"
                    radius="lg"
                    isDisabled={selected <= 0 ? true : false}
                    color="primary"
                    className="text-lg font-bold text-white "
                    onPress={handlePrev}
                  >
                    Prev
                  </Button>
                  <Button
                    size="sm"
                    radius="lg"
                    isDisabled={
                      legacyProducts.length - 1 <= selected ? true : false
                    }
                    color="primary"
                    className="text-lg font-bold text-white "
                    onPress={handleNext}
                  >
                    Next
                  </Button>
                </div>
                <div
                  className="w-full h-full overflow-x-scroll lg:overflow-x-hidden"
                  ref={scrollContainerRef}
                >
                  <motion.div
                    className="grid w-full h-full grid-flow-col grid-rows-2 gap-3 px-0 py-4 bg-white md:gap-5 md:p-4 grid-col-3 md:grid-rows-3 xl:grid-cols-4"
                    ref={targetRef}
                  >
                    {list.products.map((item, idx) => (
                      <div
                        className="z-20 h-full p-3 space-y-3 bg-white rounded-md shadow-xl min-w-36 group md:p-5 md:min-w-48 lg:min-w-56 xl:min-w-80 md:space-y-5"
                        key={idx}
                      >
                        <div className="relative overflow-hidden ">
                          <img
                            // fill
                            loading="lazy"
                            src={item.img}
                            alt={item.title}
                            className="object-contain w-full h-48 transition-all ease-in-out transform md:p-5 group-hover:scale-105 md:h-60 lg:h-72"
                          />
                        </div>
                        <div className="space-y-4 text-center">
                          <h3 className="text-base font-medium capitalize font-Prata md:text-lg lg:text-2xl text-grey-150 line-clamp-2 lg:line-clamp-3">
                            {item.title}
                          </h3>
                          {/* <p className="text-sm font-light font-Plus_Jakarta_Sans md:text-lg lg:text-xl text-grey-150">
                          {item.desc}
                        </p>
                        <Button
                          color="primary"
                          variant="shadow"
                          size="md"
                          className="text-sm text-white capitalize md:text-base lg:text-lg font-Prata"
                        >
                          Buy Now
                        </Button> */}
                        </div>
                      </div>
                    ))}
                  </motion.div>
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
