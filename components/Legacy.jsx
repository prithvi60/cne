"use client";
import * as React from "react";
import { useInView } from "framer-motion";
import { useRef} from "react";
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
const Legacy = ({ ref }) => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { amount: 0.3 });

  const scrollContainerRef = React.useRef(null);
  React.useEffect(() => {
    // scroll to end
    if (isInView && scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const targetScrollPosition = scrollWidth - clientWidth;
      // smoothScrollTo(scrollContainerRef.current, targetScrollPosition, 1200);
    }
    // scroll to start
    else if (scrollContainerRef.current) {
      // smoothScrollTo(scrollContainerRef.current, 0, 1500);
    }
  }, [isInView]);


  return (
    <section
      className="relative w-full h-full mx-auto space-y-8 md:py-12 mt-36"
      // id="Legacy"
      // ref={ref}
    >
      <h1 className="text-center text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px]">
        Legacy
      </h1>
      <div
        className="overflow-x-scroll lg:overflow-x-hidden lg:hover:overflow-x-scroll custom "
        ref={scrollContainerRef}
      >
        <div ref={targetRef} className="flex w-[1200px] md:w-[150vw]">
        <img src={"/tree.png"} alt="legacy-image" loading="lazy" className="max-w-[300%] md:max-w-[250%]"/>

        </div>
      </div>
    </section>
  );
};
export default Legacy;


