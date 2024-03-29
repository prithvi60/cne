/* eslint-disable @next/next/no-img-element */
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5 bg-white bg-opacity-50">
      {/* <div className="relative w-32 h-32 md:w-56 md:h-56 animate-bounce"> */}
        <img
          src={"/logo.svg"}
          alt="Logo"
          // fill
          className="mt-3.5 md:mt-0 w-32 h-32 md:w-56 md:h-56 animate-bounce"
        />
      {/* </div> */}
      {/* <h3 className="text-base font-semibold tracking-wider font-Prata md:text-4xl text-primary"><span className="px-3 animate-pulse md:px-8">Loading...</span></h3> */}
    </div>
  );
};

export default loading;
