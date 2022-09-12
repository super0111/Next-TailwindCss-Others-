import Image from 'next/image'

const News = () => {
  return (
    <div 
      className="pb-28 lg:pb-40 news"
      style={{
        background: "linear-gradient(179.44deg, #FFFFFF 16.41%, rgba(255, 255, 255, 0) 74.5%), conic-gradient(from -32.56deg at 44.65% 33.4%, #FFE9F6 0deg, #FFDBE6 59.85deg, #E9F4FF 120deg, #FFE9F6 360deg)",
      }}
    >
      <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
        <div className="text-sm md:text-base xl:text-lg font-semibold text-gray-400">
          News
        </div>
        <div className="mt-3 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight md:leading-tight xl:leading-tight max-w-2xl">
          <div className="-mt-1 text-3xl">
            Latest from the Flock
          </div>
        </div>
        <div className="mt-5 mb-12 lg:mb-16 text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-relaxed xl:leading-[36px] text-gray-500 max-w-2xl"></div>
        <div className="-mt-6">
          <div className="rounded-2xl overflow-hidden bg-white lg:grid grid-cols-3" style={{boxShadow:"0px 24px 100px -8px rgba(255, 181, 205, 0.4)"}}>
              <div className='item_img'>
                <Image
                  src="/images/blog-2b.webp"
                  alt="Header_bg1"
                  width={1480}
                  height={1400}
                />
              </div>
            <div className='col-span-2 p-12 flex flex-col justify-between'>
              <div className='space-y-4'>
                <div className='text-xl font-semibold'>
                  Regenerative Economies in Web3
                </div>
                <div className='text-xl text-gray-500'>
                  While regenerative economics has been a topic of many papers and discussion for years, there is a promising regenerative movement emerging in web3 at the intersection of blockchain technology and climate action.
                </div>
              </div>
              <div className='space-y-2 sm:flex pt-8 items-center justify-between'>
                <a href='#' target="_blank">
                  <div className='cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group text-gray-800'>
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                  </div>
                </a>
                <div className='flex items-center -mx-1 -my-5'>
                  <div className='px-1 py-5 group cursor-pointer'>
                    <div className='h-1 w-12 rounded-full bg-gray-500'></div>
                  </div>
                  <div className='px-1 py-5 group cursor-pointer'>
                    <div className='h-1 w-12 rounded-full bg-gray-300 group-hover:bg-gray-500 transition-color duration-300'></div>
                  </div>
                  <div className='px-1 py-5 group cursor-pointer'>
                    <div className='h-1 w-12 rounded-full bg-gray-300 group-hover:bg-gray-500 transition-color duration-300'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-3 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight md:leading-tight xl:leading-tight pt-28 lg:pt-40 text-center mx-auto'>
          Join the flight and launch with Toucan
        </div>
        <div className='mt-5 mb-12 lg:mb-16 text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-relaxed xl:leading-[36px] text-gray-500 max-w-2xl text-center mx-auto'>
          The planet needs action now. Read our docs or contact us and together, let’s make change.
        </div>
        <div className='lg:-mt-10 flex justify-center space-x-6'>
          <a
            style={{background:"linear-gradient(121.5deg, #FE5170 9.76%, #F87AA3 82.96%), linear-gradient(90deg, #F34079 0%, #FC894D 95.65%)"}}
            className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center px-4 py-2.5 font-semibold rounded-lg shadow-sm text-white hover:text-white"
            href='#'
            target="_blank"
          >
            Read the Docs  
          </a>
          <a 
            className='cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center px-4 py-2.5 font-semibold rounded-lg shadow-sm btn-bg-dark text-white hover:text-white'
            href='#'
            target="_black"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  )
}

export default News