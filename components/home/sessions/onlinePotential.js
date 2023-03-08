import React from "react";

export default function OnlinePotential() {
  return (
    <div className="relative px-4 md:px-16 py-32 md:py-2 h-full md:h-[700px] flex justify-end items-center bg-white md:bg-transparent">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -z-2 hidden md:block">
        <img src="/images/BackEffect3.png" />
      </div>
      <div className="w-full md:w-1/2">
        <div className="text-5xl text-[#232323] text-center md:text-left font-semibold font-arti pb-24">
          Das Online Potential <br />
          komplett ausschöpfen!
        </div>
        <div className="text-xl text-[#696969] text-center md:text-left font-arti py-4">
          Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis
          magna. Ultricies suspendisse a libero lorem sodales eget. Egestas in
          erat porttitor a cursus.
        </div>
        <div className="flex flex-row justify-center md:justify-start items-center space-x-4">
          <div className="text-[#4CBA56] text-xl ">Mehr Dazu</div>
          <img src="/images/IconReadMore.svg" />
        </div>
      </div>
    </div>
  );
}
