
import Image from 'next/image'

const WhyCarbon = () => {
  return (
    <div 
      className="pt-80"
      style={{
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(179.44deg, rgba(255, 255, 255, 0) 16.41%, #FFFFFF 74.5%), conic-gradient(from -46.49deg at 50% 12.09%, #FFE9F6 0deg, #FFDBE6 59.85deg, #E9F4FF 120deg, #FFE9F6 360deg)"
      }}
    >
      <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
        <div className="text-sm md:text-base xl:text-lg font-semibold text-gray-400 text-center">
          Why Carbon and Web3
        </div>
        <div className="mt-3 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight md:leading-tight xl:leading-tight max-w-4xl text-center mx-auto">
          <span>Towards a Regenerative Economy</span>
        </div>
        <div className="mt-5 mb-12 lg:mb-16 text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-relaxed xl:leading-[36px] text-gray-500 max-w-4xl text-center mx-auto">
          Programmable carbon opens new opportunities for a regenerative and
          distributive economic system — one in balance with the planet’s
          boundaries.
        </div>
        <div className="relative flex justify-between flex-col -mt-20 lg:mt-0 space-y-24 lg:space-y-0 lg:flex-row">
          <div className="hidden absolute lg:flex left-0 right-0 top-0 items-center justify-center space-x-4" style={{height:"230px"}}>
            {[...Array(24)].map((x, i) =>
              <div className="w-2 h-2 bg-red-200 rounded-full" key={i}></div>
            )}
          </div>
          <div className="absolute lg:hidden left-0 right-0 pt-8 top-80 bottom-0 space-y-4">
            {[...Array(24)].map((x, i) =>
              <div className="mx-auto w-2 h-2 bg-red-200 rounded-full" key={i}></div>
            )}
          </div>

          <div className="py-4 z-10 space-y-2 text-center lg:bg-white">
            <div className="img_item">
              <Image
                src="/images/why-1.svg"
                alt="Header_bg1"
                width={200}
                height={200}
              />
            </div>
            <div className='font-semibold text-xl leading-[30px]'>
              Tokenize Carbon Credits
            </div>
            <div className='max-w-xs mx-auto text-gray-500'>
              Deposit transferrable tokens that contain a 1:1 verifiable reference to carbon credits in a supported registry.
            </div>
          </div>
          <div className="py-4 z-10 space-y-2 text-center bg-white">
            <div className="img_item">
              <Image
                src="/images/why-2.svg"
                alt="Header_bg1"
                width={200}
                height={200}
              />
            </div>
            <div className='font-semibold text-xl leading-[30px]'>
              Embed Climate Action
            </div>
            <div className='max-w-xs mx-auto text-gray-500'>
              Weave planet-positive impact into the fabric of Web3 interactions and create systems that are regenerative by design.
            </div>
          </div>
          <div className="py-4 z-10 space-y-2 text-center bg-white">
            <div className="img_item">
              <Image
                src="/images/why-3.svg"
                alt="Header_bg1"
                width={200}
                height={200}
              />
            </div>
            <div className='font-semibold text-xl leading-[30px]'>
              Scale Environmental Projects
            </div>
            <div className='max-w-xs mx-auto text-gray-500'>
              Drive carbon credit demand and higher price signals to catalyze new environmental project development.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyCarbon