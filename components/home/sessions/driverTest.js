import React from "react";

export default function DriverTest() {
  return (
    <div className="relative px-4 md:px-16 h-screen  md:h-[700px] flex items-center bg-[#71e666] md:bg-transparent">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 -z-2">
        <img src="/images/BackEffect2.png" />
      </div>
      <div className="absolute bottom-8 right-[300px] hidden md:block">
        <div className="relative w-[300px] h-[300px] rounded-3xl bg-[#F1F1F1] shadow-2xl ">
          <div className="absolute w-[300px] h-[300px] rounded-3xl bg-[#F1F1F1] shadow-2xl -top-3/4 -right-2/3"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="text-5xl text-[#232323] font-semibold font-arti pb-24 text-center md:text-left">
          Die Fahrprüfung
        </div>
        <div className="text-xl text-[#696969] font-arti py-4 text-center md:text-left">
          Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis
          magna. Ultricies suspendisse a libero lorem sodales eget. Egestas in
          erat porttitor a cursus.
        </div>
        <div className="flex flex-row items-center justify-center md:justify-start space-x-4">
          <div className="text-[#4CBA56] text-xl ">Mehr Dazu</div>
          <img src="/images/IconReadMore.svg" />
        </div>
      </div>
    </div>
  );
}
