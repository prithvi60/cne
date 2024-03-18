"use client";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player/lazy";

export const Evolution = () => {
  return (
    <section className="relative w-full h-full">
      <div className="wrapper">
        <div className="z-20 flex flex-col items-start gap-4 mb-6 bg-white lg:flex-row">
          <div className="z-20 w-full mb-5 text-center bg-white lg:text-right space-y-7 lg:w-[55%] lg:indent-12 tracking-wide mt-1">
            <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px]">
              Evolution of Products
            </h1>
            <h3 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto">
              Since 1970’s
            </h3>
            <p className="text-base font-medium md:text-lg lg:text-2xl font-Plus_Jakarta_Sans text-grey-50">
              Ac varius lectus tellus tellus quisque tristique aenean. Volutpat
              velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui
              vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu
              in nullam tortor orci. Nulla tellus sed purus vestibulum sagittis
              pretium donec nec mattis ollis porta sit ut.
              <br />
              <br />
              Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis
              pretium amet hac. Justo tristique sagittis sodales viverra
              venenatis integer fringilla.
            </p>
          </div>
          <div className="relative w-full lg:w-[45%]">
            <div className="relative w-full overflow-hidden h-64 md:h-96 lg:h-[500px] z-20">
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                controls
                url="https://youtu.be/bACMBZ-0nCQ?si=HEM-qm6w-OGPNHcr"
              />
            </div>
            <div className="absolute right-0 z-0 block w-20 h-20 -top-10 lg:hidden animate-pulse">
              <Image
                fill
                src={"/brand bg 3.svg"}
                alt="svg image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute lg:top-[27rem] xl:top-[20rem] left-0 z-0 w-[20rem] h-[25rem] animate-pulse">
          <Image
            fill
            src={"/evolution bg.svg"}
            alt="svg image"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
