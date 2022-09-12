import Image from 'next/image'

const Technology = () => {
  return (
    <div className="pt-20 lg:pt-40 technology">
      <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
        <div className="text-sm md:text-base xl:text-lg font-semibold text-gray-400">
          Technology
        </div>
        <div className="mt-3 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight md:leading-tight xl:leading-tight max-w-2xl">
          <span>
            Meet the {" "}
            <span className="text-red-400 whitespace-nowrap">
              Carbon Stack 👋
            </span>
            <br />
            From idle credits to powerful Web3 building blocks.
          </span>
        </div>
        <div className="mt-5 mb-12 lg:mb-16 text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-relaxed xl:leading-[36px] text-gray-500 max-w-2xl"></div>
        <div className="grid grid-cols-2 gap-8">
          <div 
            className="overflow-hidden col-span-2 lg:flex lg:space-x-12 items-end rounded-2xl"
            style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(179.44deg, rgba(255, 255, 255, 0.5) 16.41%, rgba(255, 255, 255, 0) 74.5%), conic-gradient(from -45.24deg at 52.55% 35.87%, #FFE9F6 0deg, #FFDBE7 59.85deg, #E9F4FF 120deg, #FFE9F6 360deg)", }}
          >
            <div className="lg:w-1/2 lg:pt-16">
              <div className="p-8 sm:p-12 xl:p-16">
                <div className="w-16 h-16">
                  <div className="item_img">
                    <Image
                      src="/images/bridge.svg"
                      alt="Header_bg1"
                      width={1920}
                      height={1920}
                    />
                  </div>
                </div>
                <div className='mt-4 text-xl sm:text-2xl xl:text-3xl xl:leading-[38px] font-semibold'>
                  Toucan Bridge
                </div>
                <div className='mt-4 sm:text-lg xl:text-xl xl:leading-[30px] text-gray-500'>
                  The Toucan Bridge connects the voluntary carbon market to Web3. For each credit bridged, one Tokenized CO2 token is deposited. TCO2s are semi-fungible, retain valuable metadata, and can be pooled for max liquidity.
                </div>
                <a href='#' target="_black" >
                  <div className='cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group mt-6 text-tc-dark'>
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                  </div>
                </a>
              </div>
            </div>
            <div className='lg:w-1/2 pl-8 sm:pl-12 lg:pl-0 pt-4 sm:pt-6 lg:pt-16'>
              <div style={{boxShadow:"0px 0px 48px -12px rgba(21, 34, 57, 0.2)", maxHeight:"400px"}}>
                <div className='item_img'>
                  <Image
                    src="/images/dashboard.webp"
                    alt="Header_bg1"
                    width={1920}
                    height={1920}
                  />
                </div>
              </div>
            </div>
          </div>
          <div 
            className='col-span-2 lg:col-span-1 rounded-xl' 
            style={{background:"linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(179.44deg, rgba(255, 255, 255, 0.5) 16.41%, rgba(255, 255, 255, 0) 74.5%), conic-gradient(from 197.81deg at -10.22% 10.63%, #FFE9F6 0deg, #FFDBE6 50.65deg, #E9F4FF 120deg, #FFE9F6 360deg)"}}
          >
            <div className='p-8 sm:p-12 xl:p-16'>
              <div className='w-16 h-16'>
                <div className='item_img'>
                  <Image
                    src="/images/meta-registry.svg"
                    alt="Header_bg1"
                    width={1920}
                    height={1920}
                  />
                </div>
              </div>
              <div className='mt-4 text-xl sm:text-2xl xl:text-3xl xl:leading-[38px] font-semibold'>
                Toucan Meta-Registry
              </div>
              <div className='mt-4 sm:text-lg xl:text-xl xl:leading-[30px] text-gray-500'>
                Carbon credits bridged into TCO2s share standardized data, regardless of the source registry. This breaks down market silos while improving accessibility and transparency.
              </div>
              <a href="#" target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group mt-6 text-tc-dark">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
            <div className='item_img'>
              <Image
                src="/images/technology-meta-registry.svg"
                alt="Header_bg1"
                width={1520}
                height={800}
              />
            </div>
          </div>
          <div 
            className='col-span-2  lg:col-span-1 rounded-xl light_red_bg1'
            style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(179.44deg, rgba(255, 255, 255, 0.5) 16.41%, rgba(255, 255, 255, 0) 74.5%), conic-gradient(from -68.1deg at -10.22% 10.63%, #FFE9F6 0deg, #FFDBE6 50.65deg, #E9F4FF 120deg, #FFE9F6 360deg)"}}
          >
            <div className='p-8 sm:p-12 xl:p-16'>
              <div className='w-16 h-16'>
                <div className='item_img'>
                  <Image
                    src="/images/credits.svg"
                    alt="Header_bg1"
                    width={1920}
                    height={1920}
                  />
                </div>
              </div>
              <div className='mt-4 text-xl sm:text-2xl xl:text-3xl xl:leading-[38px] font-semibold'>
                Carbon Pools
              </div>
              <div className='mt-4 sm:text-lg xl:text-xl xl:leading-[30px] text-gray-500'>
                Eligible TCO2s can be deposited into a Carbon Pool in return for fungible reference pool tokens (e.g. BCT). These highly liquid assets may then be redeemed back into TCO2s at any time.
              </div>
              <a href="#" target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group mt-6 text-tc-dark">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
            <div className='item_img'>
              <Image
                src="/images/technology-carbon-pools.svg"
                alt="Header_bg1"
                width={1520}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology