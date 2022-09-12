import Image from 'next/image'

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number}) => {
  return `https://toucan.earth/_next/image?url=${src}&w=${width}&q=${quality || 75}`
}

const CarbonPools = () => {
  return (
    <div className="pt-28 lg:pt-40">
      <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
        <div className="text-sm md:text-base xl:text-lg font-semibold text-gray-400">
          Carbon Pools
        </div>
        <div className="mt-3 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight md:leading-tight xl:leading-tight max-w-3xl">
          <span>
            <span className="text-greeny mr-2">
              Carbon meets liquidity
            </span>
            🌳
            <br />
            Unlocking new market synergies for innovation and impact.
          </span>
        </div>
        <div className="mt-5 mb-12 lg:mb-16 text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-relaxed xl:leading-[36px] text-gray-500 max-w-3xl"></div>
        <div className="mt-16 grid grid-col-1 lg:grid-cols-2 gap-8">
          <div 
            className="col-span-1 rounded-xl"
            style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(179.44deg, rgba(255, 255, 255, 0.5) 16.41%, rgba(255, 255, 255, 0) 74.5%), conic-gradient(from -71.44deg at 49.05% 35.41%, #F0FFE9 0deg, #DBFFF9 59.85deg, #E9F4FF 120deg, #F0FFE9 360deg)",}}
          >
            <div className="item_img1">
              <Image
                loader={myLoader}
                src="%2Fsvgs%2Fbct-logo.svg"
                alt="Header_bg1"
                width={1920}
                height={1920}
              />
            </div>
            <div className="p-8 sm:p-12 xl:p-16 -mt-20">
              <div className="mt-4 text-xl sm:text-2xl xl:text-3xl xl:leading-[38px] font-semibold">
                Base Carbon Tonne
              </div>
              <div className="mt-4 sm:text-lg xl:text-xl xl:leading-[30px] text-gray-500">
                Our first pooled carbon asset, Base Carbon Tonne (BCT), is a foundational building block for Web3. It’s composed of a basket of carbon tokens that meet select third-party standards.
              </div>
              <a href="#" target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group mt-6 text-tc-dark">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group mt-6 ml-7 text-tc-dark">
                  View price
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
          </div>
          <div 
            className="col-span-1 rounded-xl"
            style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(179.44deg, rgba(255, 255, 255, 0.5) 16.41%, rgba(255, 255, 255, 0) 74.5%), conic-gradient(from -71.44deg at 49.05% 35.41%, #F0FFE9 0deg, #DBFFF9 59.85deg, #E9F4FF 120deg, #F0FFE9 360deg)",}}
          >
            <div className="item_img1">
              <Image
                loader={myLoader}
                src="%2Fsvgs%2Fbct-logo.svg"
                alt="Header_bg1"
                width={1920}
                height={1920}
              />
            </div>
            <div className="p-8 sm:p-12 xl:p-16 -mt-20">
              <div className="mt-4 text-xl sm:text-2xl xl:text-3xl xl:leading-[38px] font-semibold">
                Nature Carbon Tonne
              </div>
              <div className="mt-4 sm:text-lg xl:text-xl xl:leading-[30px] text-gray-500">
                Nature Carbon Tonne is a premium carbon pool that restricts TCO2 qualification to nature-based projects such as forestry and regenerative agriculture.
              </div>
              <a href="#" target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group mt-6 text-tc-dark">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group mt-6 ml-7 text-tc-dark">
                  View price
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CarbonPools