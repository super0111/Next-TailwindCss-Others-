import React from "react";

export default function Welcome() {
  return (
    <div className="relative px-4 md:px-16 h-screen md:h-[960px] flex items-center bg-[#3ad62c] md:bg-transparent">
      <div className="absolute top-0 left-0 -z-2 ">
        <img src="/images/BackEffect1.png" className="relative" />
        <div className="absolute bottom-0 right-0 hidden md:block">
          <div className="relative w-[400px] h-[515px] rounded-3xl bg-[#F1F1F1] shadow-2xl ">
            <div className="absolute w-[400px] h-[515px] rounded-3xl bg-[#F1F1F1] shadow-2xl -top-1/2 -left-1/2"></div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
        <div className="text-6xl text-white font-semibold font-arti text-center md:text-left">
          Es wird zeit für den Führerschein.
        </div>
        <div className="text-xl text-white font-arti text-center md:text-left py-16">
          Nisl quisque nunc at cras tristique. Lectus scelerisque sed id nisi
          vitae venenatis.
        </div>
        <div className="flex flex-row items-center space-x-4 h-16">
          <div className="cursor-pointer h-14 flex justify-center items-center bg-white rounded-full  text-[#AAFFA3] text-xl font-arti font-bold px-8 py-3">
            Jetzt Anmelden
          </div>
          <div className="cursor-pointer h-14 bg-white rounded-full text-[#AAFFA3] text-xl font-arti font-bold  aspect-square flex justify-center items-center">
            <img src="/images/IconPlay.svg" className="h-6" />
          </div>
          <div className="cursor-pointer text-base font-medium text-white font-arti underline">
            Warum Driveclass?
          </div>
        </div>
      </div>
    </div>
  );
}
