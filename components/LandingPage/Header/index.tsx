import Image from 'next/image'
import { useState } from 'react'
import Navbar from './Navbar'

const Header = () => {
  const [ isShowMenu, setIsShowMenu ] = useState(false);
  return (
    <div className="h-[1210px] sm:h-[1200px] lg:h-[1030px] xl:h-[1140px] relative overflow-hidden bg-gradient-to-b from-[#0C111D] via-[#0C111D] to-[#2D4165]">
      <div className="absolute lg:-top-36 left-1/2 sm:left-1/4 w-[801px] h-[467px] lg:block sm:hidden xs:hidden">
        <div className="" style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px", }}>
          <Image
            src="/images/top-poly.svg"
            alt="Header_bg1"
            width={1920}
            height={1120}
          />
        </div>
      </div>
      <div className='absolute bottom-0 left-0'>
        <div className='' style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px", }} >
          <Image
            src="/images/bottom-left-poly.svg"
            alt="Header_bg1"
            width={530}
            height={460}
          />
        </div>
      </div>
      <div className='absolute hidden lg:block bottom-0 right-0'>
        <div style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px",}}>
          <Image
            src="/images/main-visual.svg"
            alt="Header_bg1"
            width={256}
            height={610}
          />
        </div>
      </div>
      {
        isShowMenu === true && 
        <div className='fixed z-50 inset-0 bg-[#0D121E] bg-opacity-90 text-white flex flex-col'>
          <div className='flex justify-end'>
            <div className='p-4' onClick={()=>setIsShowMenu(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
          </div>
          <div className='overflow-y-auto'>
            <a className='px-4 py-6 text-center text-lg font-semibold block text-white hover:text-white' href='#'>
              Documentation
            </a>
            <a className='px-4 py-6 text-center text-lg font-semibold block text-white hover:text-white' href='#'>
              About
            </a>
            <a className='px-4 py-6 text-center text-lg font-semibold block text-white hover:text-white' href='#'>
              Jobs
            </a>
            <a className='px-4 py-6 text-center text-lg font-semibold block text-white hover:text-white' href='#'>
              Blog
            </a>
          </div>
          <div className='flex-auto flex items-end justify-center'>
            <div className='p-8 space-y-8'>
              <div className='flex justify-center gap-x-4'>
                <a className='text-gray-500 hover:text-gray-400' href='#'>
                  <svg viewBox="0 0 27 20" className="fill-current transition-colors duration-300 w-6 h-6 text-white"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M26.6172 15.9656C26.6172 8.79784 23.4117 2.9879 23.4117 2.9879C20.2062 0.583794 17.1566 0.650576 17.1566 0.650576L16.8449 1.00674C20.6292 2.16427 22.3877 3.8338 22.3877 3.8338C17.1 0.935699 10.8886 0.935177 5.75931 3.18825C4.93568 3.56667 4.44596 3.8338 4.44596 3.8338C4.44596 3.8338 6.29356 2.07523 10.3004 0.917699L10.0778 0.650576C10.0778 0.650576 7.02815 0.583794 3.82267 2.9879C3.82267 2.9879 0.617188 8.79784 0.617188 15.9656C0.617188 15.9656 2.48705 19.1934 7.40657 19.3492C7.40657 19.3492 8.2302 18.3475 8.89801 17.5016C6.07096 16.6557 5.00246 14.8749 5.00246 14.8749C5.25062 15.0486 5.62082 15.2613 5.80526 15.3673C5.86421 15.4011 5.90418 15.4241 5.91513 15.4314C9.67242 17.5355 15.0095 18.2249 19.8055 16.2105C20.5847 15.9211 21.4528 15.4982 22.3655 14.8972C22.3655 14.8972 21.2525 16.7225 18.3364 17.5461C19.0042 18.392 19.8055 19.3492 19.8055 19.3492C24.7251 19.1934 26.6172 15.9656 26.6172 15.9656ZM19.8341 11.3874C19.8341 12.756 18.8219 13.8656 17.5733 13.8656C16.3247 13.8656 15.3125 12.756 15.3125 11.3874C15.3125 10.0187 16.3247 8.90918 17.5733 8.90918C18.8219 8.90918 19.8341 10.0187 19.8341 11.3874ZM9.48737 13.8656C10.736 13.8656 11.7482 12.756 11.7482 11.3874C11.7482 10.0187 10.736 8.90918 9.48737 8.90918C8.23876 8.90918 7.22656 10.0187 7.22656 11.3874C7.22656 12.756 8.23876 13.8656 9.48737 13.8656Z" fill="currentColor"></path></g></svg>
                </a>
                <a className='text-gray-500 hover:text-gray-400' href='#'>
                  <svg viewBox="0 0 25 24" className="fill-current transition-colors duration-300 w-6 h-6 text-white"><g><path d="M24.7839 2.36748C23.8948 2.76911 22.9391 3.04056 21.9363 3.1625C22.9598 2.53765 23.746 1.54821 24.1162 0.369149C23.1582 0.947852 22.0971 1.36794 20.9677 1.59435C20.0634 0.613033 18.7748 0 17.3487 0C14.6107 0 12.3906 2.26055 12.3906 5.04885C12.3906 5.44458 12.4344 5.82997 12.519 6.19949C8.39837 5.98895 4.74497 3.97881 2.29967 0.924103C1.87289 1.66978 1.62832 2.53716 1.62832 3.46249C1.62832 5.21423 2.50364 6.75961 3.83401 7.66501C3.02129 7.6388 2.25677 7.41165 1.58832 7.03352C1.58784 7.05456 1.58784 7.0756 1.58784 7.09701C1.58784 9.54324 3.29691 11.5839 5.56507 12.0478C5.14904 12.1632 4.71102 12.225 4.25886 12.225C3.93938 12.225 3.62872 12.1932 3.32603 12.1343C3.9569 14.1401 5.78789 15.6 7.95757 15.6406C6.26071 16.9949 4.12293 17.8021 1.7999 17.8021C1.3997 17.8021 1.00506 17.7781 0.617188 17.7315C2.8114 19.164 5.41753 20 8.21748 20C17.3371 20 22.3243 12.3064 22.3243 5.63432C22.3243 5.41542 22.3193 5.19774 22.3098 4.98117C23.2786 4.26921 24.1191 3.38005 24.7839 2.36748Z" fill="currentColor"></path></g></svg>
                </a>
                <a className='text-gray-500 hover:text-gray-400' href='#'>
                  <svg viewBox="0 0 21 20" className="fill-current transition-colors duration-300 w-5 h-5 text-white"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25748 0H19.3009C20.1167 0 20.7812 0.645556 20.7812 1.44153V18.5568C20.7812 19.3535 20.1167 20 19.3009 20H2.25748C1.44305 20 0.78125 19.3535 0.78125 18.5568V1.44153C0.78125 0.645556 1.44305 0 2.25748 0ZM14.8639 17.0428H17.8283V11.8074C17.8283 9.23755 17.2737 7.26074 14.2699 7.26074C12.8267 7.26074 11.8591 8.05199 11.4632 8.80227H11.4238V7.49824H8.57812V17.0428H11.5424V12.3212C11.5424 11.0762 11.7788 9.87033 13.3225 9.87033C14.8436 9.87033 14.8639 11.2939 14.8639 12.4013V17.0428ZM5.22821 6.19377C4.27738 6.19377 3.50781 5.42279 3.50781 4.47335C3.50781 3.5246 4.27738 2.75391 5.22821 2.75391C6.17653 2.75391 6.94721 3.5246 6.94721 4.47335C6.94721 5.42279 6.17653 6.19377 5.22821 6.19377ZM6.71649 17.0426H3.75V7.49805H6.71649V17.0426Z" fill="currentColor"></path></g></svg>
                </a>
                <a className='text-gray-500 hover:text-gray-400' href='#'>
                  <svg viewBox="0 0 36 20" className="fill-current transition-colors duration-300 w-6 h-6 text-white"><g fill="none"><g clip-path="url(#clip0_4053_195171)"><path d="M20.6449 10.0002C20.6449 15.5229 16.1982 20 10.7133 20C5.22828 20 0.78125 15.5219 0.78125 10.0002C0.78125 4.47841 5.22794 0 10.7133 0C16.1986 0 20.6449 4.4774 20.6449 10.0002Z" fill="currentColor"></path><path d="M31.5414 9.99934C31.5414 15.1978 29.318 19.4137 26.5754 19.4137C23.8327 19.4137 21.6094 15.1978 21.6094 9.99934C21.6094 4.80085 23.8324 0.584961 26.575 0.584961C29.3177 0.584961 31.541 4.7995 31.541 9.99934" fill="currentColor"></path><path d="M35.9928 10.0002C35.9928 14.6568 35.2109 18.434 34.2462 18.434C33.2815 18.434 32.5 14.6578 32.5 10.0002C32.5 5.34262 33.2818 1.56641 34.2462 1.56641C35.2106 1.56641 35.9928 5.34228 35.9928 10.0002Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4053_195171"><rect width="35.2155" height="20" fill="white" transform="translate(0.78125)"></rect></clipPath></defs></g></svg>
                </a>
                <a className='text-gray-500 hover:text-gray-400' href='#'>
                  <svg viewBox="0 0 24 24" className="fill-current transition-colors duration-300 w-6 h-6 text-white"><svg viewBox="0 0 28 27" fill="none"><path d="M27.038 24.1564L26.7566 24.2868C25.0529 25.0632 23.1418 25.2608 21.3152 24.8494C20.3411 24.6355 19.4121 24.2523 18.5705 23.7172C20.2384 24.1484 22.007 23.9429 23.5316 23.1409L23.7512 23.0242L24.0462 22.8595L23.2228 21.4117L22.9277 21.5832L22.7631 21.6724C21.9603 22.0987 21.0603 22.3083 20.1518 22.2806C19.2433 22.2529 18.3577 21.9889 17.5824 21.5146C16.8947 21.1032 16.3075 20.5435 15.8635 19.8764C15.4195 19.2093 15.1301 18.4515 15.0161 17.6583C19.0003 17.2893 22.7398 15.5733 25.6176 12.7933L25.9195 12.4776C26.4256 11.973 26.8178 11.366 27.0699 10.6973C27.322 10.0286 27.4281 9.31375 27.381 8.60067C27.2642 7.32022 26.695 6.12331 25.7754 5.22467C24.8778 4.30358 23.6803 3.73404 22.3994 3.61901C21.2828 3.54039 20.1733 3.84807 19.2567 4.49045C19.066 3.38669 18.4956 2.38425 17.6441 1.65652C16.6588 0.830181 15.4099 0.384645 14.124 0.400816C12.848 0.385004 11.6079 0.822699 10.6245 1.63593C9.77703 2.36697 9.20753 3.36786 9.012 4.46987C8.09565 3.82697 6.98585 3.51922 5.86928 3.5984C4.58883 3.71521 3.39191 4.28449 2.49328 5.20409C1.5727 6.10126 1.00526 7.29942 0.894463 8.58009C0.846532 9.29325 0.952201 10.0084 1.20434 10.6772C1.45648 11.3461 1.84923 11.953 2.35603 12.457C2.4521 12.5668 2.55503 12.6697 2.65795 12.7727C5.53334 15.5522 9.27049 17.2683 13.2526 17.6377C13.14 18.4314 12.8511 19.1897 12.407 19.857C11.9629 20.5244 11.3749 21.0837 10.6863 21.494C9.91224 21.9684 9.02773 22.2325 8.12031 22.2602C7.21289 22.2878 6.31397 22.0782 5.51245 21.6519L5.34091 21.5627L5.04585 21.3911L4.22243 22.8389L4.52435 23.0036C4.59295 23.0466 4.66397 23.0855 4.73706 23.1203C6.26165 23.9223 8.03032 24.1278 9.69818 23.6967C8.85723 24.233 7.92799 24.6163 6.95346 24.8289C5.12685 25.2402 3.21578 25.0426 1.512 24.2662L1.23069 24.1358L0.400391 25.5768L0.736655 25.7346C2.79568 26.6783 5.10769 26.9194 7.31711 26.4208C9.56561 25.9364 11.5804 24.6965 13.0261 22.9076L13.2869 22.5713V26.7364H14.9474V22.5576C15.0298 22.6811 15.119 22.7978 15.2082 22.9076C16.6459 24.7208 18.6645 25.9833 20.9241 26.4826C21.6605 26.6492 22.4129 26.7344 23.1679 26.7364C24.669 26.7345 26.1515 26.4043 27.5114 25.7689L27.8408 25.6111L27.038 24.1564ZM10.5696 6.15787C10.5696 6.05494 10.5696 5.95888 10.5696 5.86281C10.5696 5.76675 10.5696 5.60207 10.5696 5.47855C10.5692 5.01622 10.6623 4.55856 10.8433 4.1331C11.0242 3.70764 11.2893 3.32314 11.6225 3.00269C11.9558 2.68223 12.3504 2.43246 12.7826 2.26834C13.2148 2.10422 13.6758 2.02915 14.1378 2.04765C14.5997 2.02915 15.0607 2.10422 15.4929 2.26834C15.9251 2.43246 16.3197 2.68223 16.653 3.00269C16.9862 3.32314 17.2513 3.70764 17.4323 4.1331C17.6132 4.55856 17.7063 5.01622 17.7059 5.47855C17.7059 5.60207 17.7059 5.73244 17.7059 5.86281C17.7059 5.99319 17.7059 6.06181 17.7059 6.16474L17.651 8.40167L19.2086 6.75484L19.4008 6.56271L19.6752 6.28824C20.0026 5.9632 20.3922 5.70751 20.8206 5.53648C21.2491 5.36544 21.7076 5.28256 22.1689 5.29281C22.6301 5.30306 23.0845 5.40624 23.5049 5.59614C23.9253 5.78604 24.3032 6.05877 24.6158 6.39804C24.955 6.71064 25.2278 7.08846 25.4177 7.50889C25.6076 7.92932 25.7107 8.38373 25.721 8.84494C25.7312 9.30616 25.6483 9.76471 25.4773 10.1932C25.3063 10.6216 25.0506 11.0112 24.7255 11.3386L24.4579 11.6199C21.6612 14.2703 18.0127 15.8391 14.1652 16.0457C10.3171 15.8415 6.66782 14.2723 3.87247 11.6199L3.59802 11.3386C3.27297 11.0112 3.01729 10.6216 2.84625 10.1932C2.67522 9.76471 2.59234 9.30616 2.60259 8.84494C2.61284 8.38373 2.71599 7.92932 2.90589 7.50889C3.09579 7.08846 3.36852 6.71064 3.70779 6.39804C4.38462 5.6998 5.30881 5.29562 6.28097 5.27269C7.17297 5.2865 8.02358 5.6514 8.6483 6.28824L8.92966 6.55586L9.13551 6.77543L10.6794 8.40167L10.5696 6.15787Z" fill="currentColor"></path></svg></svg>
                </a>
              </div>
              <div className='text-gray-400 text-xs'>
                © 2022 Toucan Protocol •
                <a className='text-gray-400 hover:text-gray-600 mx-1' href='#'>
                  Privacy Policy
                </a>
                •
                <a className='text-gray-400 hover:text-gray-600 mx-1' href='#'>
                  Terms
                </a>
                •
                <a className='text-gray-400 hover:text-gray-600 mx-1' href='#'>
                  Legal Notice
                </a>
              </div>
            </div>
          </div>
        </div>
      }

      <Navbar setIsShowMenu={setIsShowMenu} />

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
                src="/images/main-visual.svg"
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