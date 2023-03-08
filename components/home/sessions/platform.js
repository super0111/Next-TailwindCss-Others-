export default function Platform() {
  return (
    <div className="px-12 py-24 md:py-2 h-full md:h-[1100px] flex flex-col justify-around items-center">
      <div className="text-center text-5xl text-[#232323] font-semibold font-arti pt-24">
        Nutzen Sie die Plattform für Ihre Fahrschule
      </div>
      <div className="text-center text-xl text-[#696969] font-arti py-6 px-4 md:px-32">
        Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis
        magna. Ultricies suspendisse a libero lorem sodales eget. Egestas in
        erat porttitor a cursus.
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-[344px] h-[569px] hover:shadow-2xl hover:rounded-3xl flex flex-col justify-center items-center space-y-4">
          <div className="w-16 h-16 rounded-full shadow-2xl flex justify-center items-center">
            <img
              src="/images/IconUserCommunity.svg"
              className="w-full h-full p-3 object-fill"
            />
          </div>
          <div className="text-2xl text-center text-[#343434] font-medium font-arti py-4">
            Small
          </div>
          <div className="text-base text-[#7A7A7A] text-center font-arti py-4">
            learn is a basic character building process to start with full
            readiness
          </div>
          <div className="text-[#4CBA56] text-2xl text-center py-4">60.00</div>
          <div className="cursor-pointer rounded-full bg-gradient-to-r from-[#269E38] to-[#AAFFA3] text-white text-xl font-bold px-6 py-3">
            Join Now
          </div>
        </div>
        <div className="w-full md:w-[344px] h-[569px] hover:shadow-2xl hover:rounded-3xl flex flex-col justify-center items-center space-y-4">
          <div className="w-16 h-16 rounded-full shadow-2xl flex justify-center items-center">
            <img
              src="/images/IconAgency.svg"
              className="w-full h-full p-3 object-fill"
            />
          </div>
          <div className="text-2xl text-center text-[#343434] font-medium font-arti py-4">
            Medium
          </div>
          <div className="text-base text-[#7A7A7A] text-center font-arti py-4">
            learn is a basic character building process to start with full
            readiness
          </div>
          <div className="text-[#4CBA56] text-2xl text-center py-4">60.00</div>
          <div className="cursor-pointer rounded-full bg-gradient-to-r from-[#269E38] to-[#AAFFA3] text-white text-xl font-bold px-6 py-3">
            Join Now
          </div>
        </div>

        <div className="w-full md:w-[344px] h-[569px] hover:shadow-2xl hover:rounded-3xl flex flex-col justify-center items-center space-y-4">
          <div className="w-16 h-16 rounded-full shadow-2xl flex justify-center items-center">
            <img
              src="/images/IconEyeCheck.svg"
              className="w-full h-full p-3 object-fill"
            />
          </div>
          <div className="text-2xl text-center text-[#343434] font-medium font-arti py-4">
            Large
          </div>
          <div className="text-base text-[#7A7A7A] text-center font-arti py-4">
            learn is a basic character building process to start with full
            readiness
          </div>
          <div className="text-[#4CBA56] text-2xl text-center py-4">60.00</div>
          <div className="cursor-pointer rounded-full bg-gradient-to-r from-[#269E38] to-[#AAFFA3] text-white text-xl font-bold px-6 py-3">
            Join Now
          </div>
        </div>
      </div>
    </div>
  );
}
