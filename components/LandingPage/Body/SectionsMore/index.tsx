import Image from 'next/image'

const SectionsMore = () => {
  return (
    <div className="absolute top-0 left-0 right-0 -mt-52">
      <div className="max-w-screen-xl overflow-x-auto lg:overflow-visible p-8 mx-auto">
        <div 
          className="hidden lg:grid grid-cols-3 gap-10 gap-0 divide-x bg-white py-16 rounded-2xl" 
          style={{boxShadow:"0px 24px 100px -8px rgba(255, 181, 205, 0.4)"}}
        >
          <div className="p-8 lg:py-0 lg:px-16 space-y-4 bg-white rounded-2xl lg:rounded-none flex flex-col" style={{minWidth:"300px"}}>
            <div className="w-10 h-10">
              <div className='item_img'>
                <Image
                  src="/images/action-1.svg"
                  alt="Header_bg1"
                  width={1920}
                  height={1920}
                />
              </div>
            </div>
            <div className='font-semibold text-xl flex items-center whitespace-nowrap'>
              For Web3 Builders
            </div>
            <div className='text-lg text-gray-500'>
              Join an ecosystem leveraging composable carbon for DeFi, NFTs, DAOs, and the metaverse.
            </div>
            <div className='flex-auto flex items-end'>
              <a href='#' target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group text-powerRed">
                  Start building
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
          </div>
          <div className="p-8 lg:py-0 lg:px-16 space-y-4 bg-white rounded-2xl lg:rounded-none flex flex-col" style={{minWidth:"300px"}}>
            <div className="w-10 h-10">
              <div style={{display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0}}>
                <Image
                  src="/images/action-2.svg"
                  alt="Header_bg1"
                  width={1920}
                  height={1920}
                />
              </div>
            </div>
            <div className='font-semibold text-xl flex items-center whitespace-nowrap'>
              For Supply Partners
            </div>
            <div className='text-lg text-gray-500'>
              Unlock newfound utility for carbon credits with secure and verifiable tokenization.
            </div>
            <div className='flex-auto flex items-end'>
              <a href='#' target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group text-powerRed">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
          </div>
          <div className="p-8 lg:py-0 lg:px-16 space-y-4 bg-white rounded-2xl lg:rounded-none flex flex-col" style={{minWidth:"300px"}}>
            <div className="w-10 h-10">
              <div style={{display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0}}>
                <Image
                  src="/images/action-3.svg"
                  alt="Header_bg1"
                  width={1920}
                  height={1920}
                />
              </div>
            </div>
            <div className='font-semibold text-xl flex items-center whitespace-nowrap'>
              For Climate Action
            </div>
            <div className='text-lg text-gray-500'>
              Participate in carbon markets and share your impact story with on-chain transparency.
            </div>
            <div className='flex-auto flex items-end'>
              <a href='#' target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group text-powerRed">
                  Get in touch
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='lg:hidden grid grid-cols-3 gap-10' style={{minWidth:"900px"}}>
          <div className='p-8 lg:py-0 lg:px-16 space-y-4 bg-white rounded-2xl lg:rounded-none flex flex-col' style={{minWidth:"300px"}}>
            <div className='w-10 h-10'>
              <div className='img_item'>
                <Image
                  src="/images/action-1.svg"
                  alt="Header_bg1"
                  width={1920}
                  height={1920}
                />
              </div>
            </div>
            <div className='font-semibold text-xl flex items-center whitespace-nowrap'>
              For Web3 Builders
            </div>
            <div className='text-lg text-gray-500'>
              Join an ecosystem leveraging composable carbon for DeFi, NFTs, DAOs, and the metaverse.
            </div>
            <div className='flex-auto flex items-end'>
              <a href='#' target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group text-powerRed">
                  Start building
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
          </div>
          <div className="p-8 lg:py-0 lg:px-16 space-y-4 bg-white rounded-2xl lg:rounded-none flex flex-col" style={{minWidth:"300px"}}>
            <div className="w-10 h-10">
              <div style={{display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0}}>
                <Image
                  src="/images/action-2.svg"
                  alt="Header_bg1"
                  width={1920}
                  height={1920}
                />
              </div>
            </div>
            <div className='font-semibold text-xl flex items-center whitespace-nowrap'>
              For Supply Partners
            </div>
            <div className='text-lg text-gray-500'>
              Unlock newfound utility for carbon credits with secure and verifiable tokenization.
            </div>
            <div className='flex-auto flex items-end'>
              <a href='#' target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group text-powerRed">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 w-7 h-7 transition ease-in-out group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </a>
            </div>
          </div>
          <div className="p-8 lg:py-0 lg:px-16 space-y-4 bg-white rounded-2xl lg:rounded-none flex flex-col" style={{minWidth:"300px"}}>
            <div className="w-10 h-10">
              <div style={{display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0}}>
                <Image
                  src="/images/action-3.svg"
                  alt="Header_bg1"
                  width={1920}
                  height={1920}
                />
              </div>
            </div>
            <div className='font-semibold text-xl flex items-center whitespace-nowrap'>
              For Climate Action
            </div>
            <div className='text-lg text-gray-500'>
              Participate in carbon markets and share your impact story with on-chain transparency.
            </div>
            <div className='flex-auto flex items-end'>
              <a href='#' target="_blank">
                <div className="cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center font-medium text-lg group text-powerRed">
                  Get in touch
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

export default SectionsMore