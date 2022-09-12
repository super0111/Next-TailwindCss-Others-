import Image from 'next/image'

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number}) => {
  return `https://toucan.earth/_next/image?url=${src}&w=${width}&q=${quality || 75}`
}

const ecoSystems = [
  { url: "%2Fsvgs%2Fpartners%2Fclimate-chain-coalition.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fpolygon.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fcurve-labs.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fcrypto-climate-accord." },
  { url: "%2Fsvgs%2Fpartners%2Fregen-network.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fgitcoin.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fmai-finance.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fmarket.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fcelo.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fmoss.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fkolektivo.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fklimadao.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fstar-cb.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fdsv.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fkernel.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fporini.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fvlinder.svg" },
  { url: "%2Fsvgs%2Fpartners%2Fbsci.svg" },
]

const Ecosystem = () => {
  return (
    <div 
      className="pt-28 lg:pt-40 pb-32"
      style={{
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(179.44deg, #FFFFFF 16.41%, rgba(255, 255, 255, 0) 74.5%), conic-gradient(from -43.98deg at 44.86% 60.61%, #FFE9F6 0deg, #E9F4FF 120deg, #FFE9F6 360deg)",
      }}  
    >
      <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
        <div className="text-sm md:text-base xl:text-lg font-semibold text-gray-400 text-center">
          Regenerative Ecosystem
        </div>
        <div className="mt-3 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight md:leading-tight xl:leading-tight max-w-2xl text-center mx-auto">
          Driving a movement for 
          <br />
          <div className="sm:inline text-greeny">
            planet-positive innovation
          </div>
          <div className="sm:inline sm:ml-2">
            ♻️
          </div>
        </div>
        <div className="mt-5 mb-12 lg:mb-16 text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-relaxed xl:leading-[36px] text-gray-500 max-w-2xl text-center mx-auto">
          Transitioning to a regenerative economy requires all hands on deck. Here are some of our amazing partners working with us for a more sustainable future.
        </div>
        <div className="space-y-20 sm:space-y-24 xl:space-y-32 mt-16 sm:mt-20 xl:mt-24">
          <div className="flex flex-row flex-wrap justify-between items-center px-4 md:px-8 gap-y-5 md:gap-y-10 gap-x-3 sm:gap-x-6 md:gap-x-16 lg:gap-x-8 xl:gap-x-20">
            {ecoSystems.map((item, i)=>(
              <a href="#" target="_blank" key={i}>
                <Image
                  className="img_bg"
                  loader={myLoader}
                  src={item.url}
                  alt="Header_bg1"
                  width={100}
                  height={60}
                />
              </a>
            ))}
          </div>
          <div className='rounded-2xl overflow-hidden' style={{boxShadow:"0px 24px 100px -8px rgba(255, 181, 205, 0.4)"}}>
            <div className='bg-white px-8 pt-8 pb-10 sm:px-12 sm:pt-12 lg:px-16 lg:pt-14 xl:px-20 space-y-16'>
              <div style={{letterSpacing:"-0.02em"}} className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-candy leading-tight md:leading-tight lg:leading-tight">
                “Toucan brings long-sought transparency and efficiency into
                the voluntary carbon ecosystem. This benefits both the supply
                and demand sides of the markets.”
              </div>
              <div className='space-y-4 md:flex items-end justify-between'>
                <div className='text-center md:text-left text-xl'>
                  <div className='font-semibold'>
                    Toni Caradonna
                  </div>
                  <div className=''>
                    CTO, Porini Foundation
                  </div>
                </div>
                <div className='flex items-center -mx-1 -my-5 justify-center'>
                  <div className='px-1 py-5 group cursor-pointer'>
                    <div className='h-1 w-12 rounded-full bg-gray-500'></div>
                  </div>
                  <div className='px-1 py-5 group cursor-pointer'>
                    <div className='h-1 w-12 rounded-full bg-gray-300 group-hover:bg-gray-500 transition-color duration-300'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:flex py-8 bg-[#FEF6F9] text-lg items-center justify-center'>
              Want to join the movement? Partner with Toucan and together, let&apos;s build
              something great.
              <a className='cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center px-4 py-2.5 font-semibold rounded-lg shadow-sm ml-4 bg-[#0A1F45] text-white hover:text-white' href='#'>
                Let&apos;s Partner Up
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem