import { benefits } from "@/libs/data";
import React from "react";

export const Ayurveda = () => {
  return (
    <section className="space-y-8 wrapper md:space-y-12" id={"Ayurveda"}>
      <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata text-center capitalize">
        Ayurveda
      </h1>
      <h3 className="text-2xl md:text-[40px] text-secondary font-Prata text-center capitalize">
        The Science of Well-Being
      </h3>
      <p className="w-full mx-auto text-base leading-snug tracking-wide text-center capitalize md:text-lg lg:text-xl text-grey-100 lg:w-3/5">
        Ayurveda is a holistic system of medicine that originated in India over
        5,000 years ago. It is based on the belief that health is the balance of
        the body&apos;s three doshas: Vata, Pitta, & Kapha.
        <br />
        <br />
        Our Ayurveda products are made with traditional Ayurvedic herbs and
        ingredients that are carefully selected and sourced from the finest
        farms. Our products are formulated by a Nobel Prize-winning doctor and
        have been trusted by over 1 million customers worldwide.
      </p>
      <h3 className="text-2xl md:text-[32px] lg:text-[40px] text-secondary font-Prata text-center capitalize leading-snug tracking-wide">
        Our Ayurveda products can help you to:
      </h3>
      {/* Benefits of Ayurveda products*/}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 text-secondary font-Prata md:gap-8 place-items-center">
        {benefits.map((list, id) => (
          <div
            className="flex flex-col items-center justify-start gap-4 md:flex-row max-w-max"
            key={id}
          >
            <span className="text-[32px] md:text-6xl lg:text-[64px] text-center md:text-left">
              {`0${id + 1}.`}
            </span>
            <p className="w-full text-xs text-center capitalize md:w-3/5 lg:w-full md:text-lg lg:text-xl md:text-left">
              {list}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
};
