import Image from 'next/image'
import Navbar from './Navbar'

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number}) => {
  return `https://toucan.earth/_next/image?url=${src}&w=${width}&q=${quality || 75}`
}

const Header = () => {
  return (
    <div className="h-[1210px] sm:h-[1200px] lg:h-[1030px] xl:h-[1140px] relative overflow-hidden bg-gradient-to-b from-[#0C111D] via-[#0C111D] to-[#2D4165]">
      <div className="absolute lg:-top-36 left-1/2 sm:left-1/4 w-[801px] h-[467px] lg:block sm:hidden xs:hidden">
        <div className="" style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px", }}>
          <Image
            loader={myLoader}
            src="%2Fsvgs%2Ftop-poly.svg"
            alt="Header_bg1"
            width={1920}
            height={1120}
          />
        </div>
      </div>
      <div className='absolute bottom-0 left-0'>
        <div className='' style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px", }} >
          <Image
            loader={myLoader}
            src="%2Fsvgs%2Fbottom-left-poly.svg"
            alt="Header_bg1"
            width={530}
            height={460}
          />
        </div>
      </div>
      <div className='absolute hidden lg:block bottom-0 right-0'>
        <div style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px",}}>
          <Image
            loader={myLoader}
            src="%2Fsvgs%2Fbottom-right-poly.svg"
            alt="Header_bg1"
            width={256}
            height={610}
          />
        </div>
      </div>
      
      <Navbar />

      <div className='absolute z-10 inset-0 px-4 sm:px-8 pt-20 max-w-screen-xl mx-auto'>
        <div className='overflow-hidden py-8 flex'>
          <div className='text-center max-w-2xl mx-auto lg:mx-0 lg:text-left lg:mt-32' style={{letterSpacing:"-0.02em"}}>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-6 xl:mb-8'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F46780] to-[#FB8275]">
                Carbon
              </span>
              <div className='text-white'>On-Chained</div>
            </h1>
            <div 
              style={{letterSpacing:"-0.02em"}}
              className="text-lg sm:text-xl lg:text-2xl xl:text-[32px] max-w-md lg:max-w-lg xl:max-w-2xl leading-relaxed sm:leading-relaxed lg:leading-relaxed xl:leading-[48px] text-[#A3B4CC]"
            >
              Toucan’s infrastructure brings programmable carbon to Web3, unlocking its potential for a regenerative economy.
            </div>
          </div>
          <div className='absolute top-0 mt-16 header_img'>
            <div className="header_md_img">
              <Image
                loader={myLoader}
                src="%2Fsvgs%2Fmain-visual.svg"
                alt="Header_bg1"
                width={3840}
                height={3040}
                className="header_md_img"
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 sm:mt-32 pt-80 lg:pt-0 pb-52 xl:pb-56'>
          <div className='col-span-2 sm:col-span-1 p-4 text-center space-y-2'>
            <div className="text-white flex justify-center">
            <svg viewBox="0 0 24 24" className="fill-current w-10 h-10"><g fill="none"><path d="M17 5C17 8.31371 14.7614 11 12 11C9.23857 11 7 8.31371 7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 5C7 8.31371 4.76143 11 2 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 11C19.2386 11 17 8.31371 17 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 16L2 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 19V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 19V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            </div>
            <div className='text-white font-semibold text-xl lg:text-2xl xl:text-3xl'>
              21.9M
            </div>
            <div className='text-base font-medium text-[#A3B4CC]'>
              Tonnes of C02 Bridged
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1 p-4 text-center space-y-2'>
            <div className="text-white flex justify-center">
            <svg viewBox="0 0 24 24" className="fill-current w-10 h-10"><g fill="none"><path d="M8 8.57735C8.6188 8.22008 9.3812 8.22008 10 8.57735L14.0622 10.9226C14.681 11.2799 15.0622 11.9402 15.0622 12.6547V17.3453C15.0622 18.0598 14.681 18.7201 14.0622 19.0774L10 21.4226C9.3812 21.7799 8.6188 21.7799 8 21.4226L3.93782 19.0774C3.31902 18.7201 2.93782 18.0598 2.93782 17.3453V12.6547C2.93782 11.9402 3.31902 11.2799 3.93782 10.9226L8 8.57735Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.521 5.55056C10.8116 4.90024 11.2237 4.29104 11.7574 3.75736C14.1005 1.41421 17.8995 1.41421 20.2426 3.75736C22.5858 6.10051 22.5858 9.8995 20.2426 12.2426C19.512 12.9733 18.6398 13.4761 17.7143 13.7511" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            </div>
            <div className='text-white font-semibold text-xl lg:text-2xl xl:text-3xl'>
              $12.5M
            </div>
            <div className='text-base font-medium text-[#A3B4CC]'>
              Total DEX Liquidity
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1 p-4 text-center space-y-2'>
            <div className="text-white flex justify-center">
            <svg viewBox="0 0 24 24" className="fill-current w-10 h-10"><g fill="none"><path d="M4.40613 4.424V4.424C5.72443 4.424 6.79313 5.4947 6.79313 6.813V6.813" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.79264 4.668V4.668C6.79264 4.668 6.79264 4.668 6.79264 4.668C2.66495 7.57567 1.67594 13.2789 4.58361 17.4066C7.49128 21.5343 13.1945 22.5233 17.3222 19.6156C21.4499 16.708 22.4389 11.0047 19.5312 6.87703C17.4808 3.9662 13.9268 2.51069 10.4236 3.14701" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.6211 8.369C9.61576 8.369 7.99011 9.99465 7.99011 12C7.99011 14.0054 9.61576 15.631 11.6211 15.631C13.3573 15.631 14.3246 14.3798 15.1701 13.1504C16.0205 11.914 16.2029 9.91377 14.8886 9.18955C13.9019 8.64584 12.7789 8.35557 11.6211 8.369Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0589 11.605C10.0284 11.9447 8.23886 13.1337 7.13892 14.874" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            </div>
            <div className='text-white font-semibold text-xl lg:text-2xl xl:text-3xl'>
              188M
            </div>
            <div className='text-base font-medium text-[#A3B4CC]'>
              Climate Projects Tokenized
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1 p-4 text-center space-y-2'>
            <div className="text-white flex justify-center">
            <svg viewBox="0 0 40 40" className="fill-current w-10 h-10"><g fill="none"><path d="M8.33333 5H31.6667C33.5083 5 35 6.49167 35 8.33333V31.6667C35 33.5083 33.5083 35 31.6667 35H8.33333C6.49167 35 5 33.5083 5 31.6667V8.33333C5 6.49167 6.49167 5 8.33333 5Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3359 25V28.3333" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 18.3333V28.3333" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.6641 11.6667V28.3334" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            </div>
            <div className='text-white font-semibold text-xl lg:text-2xl xl:text-3xl'>
              $4B+
            </div>
            <div className='text-base font-medium text-[#A3B4CC]'>
              Carbon Trading Volumn
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header