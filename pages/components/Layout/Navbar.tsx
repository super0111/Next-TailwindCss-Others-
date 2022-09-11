import Image from 'next/image'

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number}) => {
  return `https://toucan.earth/_next/image?url=${src}&w=${width}&q=${quality || 75}`
}
const Navbar = () => {
  return (
    <div className="">
      <div className="">
      <Image
        loader={myLoader}
        src="%2Flogos%2Ftoucan%2Ffull-dark.svg"
        alt="LOGO"
        width={1920}
        height={60}
        // quality={75}
      />
        Toucan
      </div>
    </div>
  )
}

export default Navbar