import React from "react";

export default function Review() {
  return (
    <div className="px-4 md:px-16 h-full md:h-[1072px] py-24 md:py-4 gap-8">
      <div className="w-full md:h-[560px] flex flex-col md:flex-row justify-center md:justify-start py-[120px]">
        <div className="w-full md:w-1/2">
          <div className="text-5xl text-[#232323] text-center md:text-left font-semibold font-arti pb-24">
            Bewertungen
          </div>
          <div className="text-xl text-[#696969] text-center md:text-left font-arti py-4">
            Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis
            magna. Ultricies suspendisse a libero lorem sodales eget.
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="rounded-3xl shadow-2xl w-[470px] h-[300px] px-12 py-6 flex flex-col items-start justify-between">
            <img src="/images/IconQuote.svg" className="h-8"></img>
            <div className="text-base text-[#7A7A7A] font-arti">
              At in pellentesque integer netus enim purus. Tempor nulla porta
              pretium venenatis sem tellus duis. Rhoncus eu lectus interdum
              tellus pellentesque.
            </div>
            <div className="cursor-pointer h-16 flex justify-center space-x-4 items-center bg-white rounded-full px-8 py-3 shadow-xl">
              <div className="h-14 shadow-lg bg-[#F1F1F1] rounded-full  aspect-square flex justify-center items-center"></div>
              <div className="flex flex-col space-y-2">
                <div className="text-lg text-[#4F4F4F] font-medium">
                  narendra gates
                </div>
                <div className="flex flex-row space-x-2">
                  <img src="/images/IconStar.svg" />
                  <img src="/images/IconStar.svg" />
                  <img src="/images/IconStar.svg" />
                  <img src="/images/IconStar.svg" />
                  <img src="/images/IconStar.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[512px] flex items-center justify-center">
        <div className="border-2 rounded-3xl border-[#4CBA56] w-[970px] h-[400px] shadow-2xl flex flex-col justify-between items-center gap-4 px-10 py-14">
          <div className="text-[#232323] text-4xl font-semibold text-center  font-arti">
            alles rundum die Ausbildung zum Fahrlehrer
          </div>
          <div className="text-xl text-[#696969] font-arti px-0 md:px-12 text-center">
            Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis
            magna. Ultricies suspendisse a libero lorem sodales eget.
          </div>
          <div className="cursor-pointer rounded-full bg-gradient-to-r from-[#269E38] to-[#AAFFA3] text-white text-xl font-bold px-6 py-3">
            Mehr dazu
          </div>
        </div>
      </div>
    </div>
  );
}
