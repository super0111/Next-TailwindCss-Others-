export default function Course() {
  return (
    <div className="px-12 py-32 md:py-4 h-full md:h-[1024px] flex flex-col justify-between items-center">
      <div className="text-center text-5xl text-[#232323] font-semibold font-arti pt-24">
        Die nötigen Kurse zur Fahrprüfung
      </div>
      <div className="text-center text-xl text-[#696969] font-arti py-6 px-4 md:px-32">
        Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis
        magna. Ultricies suspendisse a libero lorem sodales eget. Egestas in
        erat porttitor a cursus.
      </div>
      <div className="flex flex-col md:flex-row  items-center gap-8">
        <div className="w-full  md:w-[482px] h-[596px] rounded-3xl shadow-2xl flex flex-col justify-center items-center space-y-4">
          <div className="h-1/2 w-full rounded-t-3xl bg-[#F1F1F1]"></div>
          <div className="h-1/2 p-8 flex flex-col justify-between ">
            <div className="text-2xl text-[#343434] font-medium">
              Nothelferkurs
            </div>
            <div className="text-base text-[#7A7A7A] py-4">
              Magnis accumsan vel morbi urna pellentesque lacus aliquam.
              Dignissim orci ipsum lorem quis sit.
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="cursor-pointer h-16 flex justify-center items-center bg-white rounded-full px-8 py-3 shadow-xl">
                <div className="h-14 shadow-lg bg-white rounded-full text-[#696969] text-xl font-arti font-bold  aspect-square flex justify-center items-center">
                  <img src="/images/IconPlay.svg" className="h-6" />
                </div>
                15x Lesson
              </div>
              <div className=" flex flex-row items-center space-x-2">
                <div className="font-arti text-xl text-[#4CBA56]">1000+</div>
                <div className="font-arti text-[#696969] text-xs">
                  Join Members
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  md:w-[482px] h-[596px] rounded-3xl shadow-2xl flex flex-col justify-center items-center space-y-4">
          <div className="h-1/2 w-full rounded-t-3xl bg-[#F1F1F1]"></div>
          <div className="h-1/2 p-8 flex flex-col justify-between ">
            <div className="text-2xl text-[#343434] font-medium">
              Nothelferkurs
            </div>
            <div className="text-base text-[#7A7A7A] py-4">
              Magnis accumsan vel morbi urna pellentesque lacus aliquam.
              Dignissim orci ipsum lorem quis sit.
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="cursor-pointer h-16 flex justify-center items-center bg-white rounded-full px-8 py-3 shadow-xl">
                <div className="h-14 shadow-lg bg-white rounded-full text-[#696969] text-xl font-arti font-bold  aspect-square flex justify-center items-center">
                  <img src="/images/IconPlay.svg" className="h-6" />
                </div>
                15x Lesson
              </div>
              <div className=" flex flex-row items-center space-x-2">
                <div className="font-arti text-xl text-[#4CBA56]">1000+</div>
                <div className="font-arti text-[#696969] text-xs">
                  Join Members
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
