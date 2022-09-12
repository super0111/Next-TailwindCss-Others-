import Image from 'next/image'

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number}) => {
  return `https://toucan.earth/_next/image?url=${src}&w=${width}&q=${quality || 75}`
}
const Navbar = () => {
  return (
    <div className="absolute z-20 left-0 right-0 h-20 px-4 sm:px-8 max-w-screen-xl mx-auto text-white flex items-center justify-between">
      <div className="w-28">
        <div className='display:block;overflow:hidden;position:relative;box-sizing:border-box;margin:0'>
          <Image
            loader={myLoader}
            src="%2Flogos%2Ftoucan%2Ffull-dark.svg"
            alt="LOGO"
            width={1920}
            height={1920}
          />
          <div className=''>Toucan</div>
        </div>
        <div className='hidden lg:flex space-x-10'>
          <a href='#' target="_blank" className='text-base font-medium text-white hover:text-gray-400'>Documentaion</a>
          <a href='#' target="_blank" className='text-base font-medium text-white hover:text-gray-400'>About</a>
          <a href='#' target="_blank" className='text-base font-medium text-white hover:text-gray-400'>Jobs</a>
          <a href='#' target="_blank" className='text-base font-medium text-white hover:text-gray-400'>Blog</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar