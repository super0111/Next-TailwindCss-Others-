export default function Advantage() {
  return (
    <div className="px-12 h-full  md:h-[830px] flex flex-col justify-around items-center">
      <div className="text-center text-5xl text-[#232323] font-semibold font-arti pt-24">
        vorteile Ihrer Fahrschule
      </div>
      <div className="text-center text-xl text-[#696969] font-arti py-6 px-4 md:px-32">
        Elit ut arcu fringilla felis malesuada imperdiet. Id quis scelerisque
        quis neque eu enim. Morbi nisi tellus nec elit. Nunc lorem sit rhoncus
        sit nibh nulla.
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        <div className="w-full md:w-[392px] h-[415px] hover:shadow-2xl hover:rounded-3xl flex flex-col justify-center items-center space-y-4">
          <div className="w-16 h-16 rounded-full shadow-2xl flex justify-center items-center">
            <img
              src="/images/IconDaily.svg"
              className="w-full h-full p-3 object-fill"
            />
          </div>
          <div className="text-2xl text-center text-[#343434] font-medium font-arti py-4">
            Digital
          </div>
          <div className="text-base text-[#7A7A7A] text-center font-arti py-4">
            Purus nibh ultrices velit in et imperdiet. Etiam luctus auctor at
            condimentum viverra.
          </div>
        </div>
        <div className="w-full md:w-[392px] h-[415px] hover:shadow-2xl hover:rounded-3xl flex flex-col justify-center items-center space-y-4">
          <div className="w-16 h-16 rounded-full shadow-2xl flex justify-center items-center">
            <img
              src="/images/IconGlobal.svg"
              className="w-full h-full p-3 object-fill"
            />
          </div>
          <div className="text-2xl text-center text-[#343434] font-medium font-arti py-4">
            Planung
          </div>
          <div className="text-base text-[#7A7A7A] text-center font-arti py-4">
            Purus nibh ultrices velit in et imperdiet. Etiam luctus auctor at
            condimentum viverra.
          </div>
        </div>
        <div className="w-full md:w-[392px] h-[415px] hover:shadow-2xl hover:rounded-3xl flex flex-col justify-center items-center space-y-4">
          <div className="w-16 h-16 rounded-full shadow-2xl flex justify-center items-center">
            <img src="/images/IconLamp.svg" className="w-full h-full p-3 object-fill" />
          </div>
          <div className="text-2xl text-center text-[#343434] font-medium font-arti py-4">
            Bekanntheitsgrad
          </div>
          <div className="text-base text-[#7A7A7A] text-center font-arti py-4">
            Purus nibh ultrices velit in et imperdiet. Etiam luctus auctor at
            condimentum viverra.
          </div>
        </div>
      </div>
    </div>
  );
}
