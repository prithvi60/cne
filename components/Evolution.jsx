"use client";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

export const Evolution = () => {
  return (
    <section className="wrapper">
      <div className="flex flex-col items-start gap-4 mb-6 lg:flex-row lg:items-center">
        <div className="w-full mb-5 text-center lg:text-right space-y-7 lg:w-1/2">
          <h1 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto leading-[50px]">
            Evolution of Products
          </h1>
          <h3 className="text-2xl md:text-[45px] lg:text-[54px] text-primary font-Prata capitalize h-auto">
            Since 1970’s
          </h3>
          <p className="text-lg font-medium md:text-xl lg:text-2xl font-Plus_Jakarta_Sans text-grey-50">
            Ac varius lectus tellus tellus quisque tristique aenean. Volutpat
            velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui
            vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in
            nullam tortor orci. Nulla tellus sed purus vestibulum sagittis
            pretium donec nec mattis ollis porta sit ut.
            <br />
            <br />
            Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis pretium
            amet hac. Justo tristique sagittis sodales viverra venenatis integer
            fringilla.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full overflow-hidden h-64 md:h-96 lg:h-[500px]">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              url="https://youtu.be/bACMBZ-0nCQ?si=HEM-qm6w-OGPNHcr"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
