import Image from 'next/image'

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number}) => {
  return `https://toucan.earth/_next/image?url=${src}&w=${width}&q=${quality || 75}`
}

const Navbar = () => {
  return (
    <div className='absolute z-20 left-0 right-0 h-20 px-4 sm:px-8 max-w-screen-xl mx-auto text-white flex items-center justify-between'>
      <div className='w-28'>
        <a href='#'>
          <div className='' style={{display:"block", overflow:"hidden", position:"relative", boxSizing:"border-box",margin:0}}>
            <Image
              loader={myLoader}
              src="%2Flogos%2Ftoucan%2Ffull-dark.svg"
              alt="LOGO"
              width={1920}
              height={1920}
            />
          </div>
        </a>
      </div>
      <div className='hidden lg:flex space-x-10'>
        <a className='text-base font-medium text-white hover:text-gray-400' href='#' target="_blank" >Documentation</a>
        <a className='text-base font-medium text-white hover:text-gray-400' href='#' target="_blank" >About</a>
        <a className='text-base font-medium text-white hover:text-gray-400' href='#' target="_blank" >Jobs</a>
        <a className='text-base font-medium text-white hover:text-gray-400' href='#' target="_blank" >Blog</a>
      </div>
      <div className='flex items-center space-x-6 -mr-6 lg:mr-0'>
        <a className='cursor-pointer hover:opacity-75 transition-opacity duration-300 inline-flex items-center px-4 py-2.5 font-semibold rounded-lg shadow-sm ring-2 ring-white text-white hover:text-white' href='#'>Launch App</a>
      </div>

    </div>
  )
}

export default Navbar