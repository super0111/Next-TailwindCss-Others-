import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Landing() {
  return (
    <div className="">
      <div className="fixed w-full bottom-0">
        <div className="relative">
          <img src="/images/road.png" />
          <img
            src="/images/car.png"
            className="absolute w-[120px] sm:w-[180px] bottom-4 md:bottom-4 sm:bottom-12 right-9 effect_car"
          />
        </div>
      </div>
      <div className="w-full">
        <img
          src="/images/cloud1.png"
          className="absolute w-[60px] top-12 sm:top-48 right-[700px] effect_cloud1"
        />
        <img
          src="/images/cloud2.png"
          className="absolute w-[80px] top-16 sm:top-32 right-[550px] effect_cloud2"
        />
        <img
          src="/images/cloud3.png"
          className="absolute w-[80px] top-20 sm:top-36 right-[300px] effect_cloud3"
        />
        <img
          src="/images/cloud4.png"
          className="absolute w-[60px] top-32 sm:top-52 right-[200px] effect_cloud4"
        />
        <img
          src="/images/cloud5.png"
          className="absolute w-[60px] top-28 sm:top-48 right-[100px] effect_cloud5"
        />
      </div>

      <div className="bg-[url('/images/background.png')] bg-cover bg-center pt-40 sm:pt-56 pb-24 px-4 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="effect1">
            <div className="text-3xl sm:text-5xl text-[#515151] font-extrabold">
              Zeit für den Führerschein.
            </div>
            <div className="text-[#333333] lg:w-2/3 sm:w-full mt-4">
              Lorem ipsum dolor sit amet, consectetur adipis Elit morbi dictum
              justo nec tellus vulputate nel.
            </div>
            <div className="flex items-center gap-4 pt-12 sm:pt-20">
              <button
                className="rounded-3xl text-lime-500 shadow shadow-green-300 bg-white hover:bg-lime-200 font-bold border-0 py-2 px-8"
                onClick={() => {}}
              >
                Jetzt Anmelden
              </button>
              <button
                className="rounded-3xl text-white shadow shadow-green-300 bg-white hover:bg-lime-200 font-bold border-0 py-2 px-2"
              >
                <PlayArrowIcon className="text-lime-500"/>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full flex justify-around">
              <img src="/images/driverCard.png" className="w-96" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
