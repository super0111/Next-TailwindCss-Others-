import Image from 'next/image'

const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number}) => {
  return `https://toucan.earth/_next/image?url=${src}&w=${width}&q=${quality || 75}`
}

const carbonUses = [
  { url: "%2Fsvgs%2Fcarbon-use-cases%2Fcrypto-currency-money.svg", title: "Carbon as Collateral", text: "Add tokenized carbon credits as a diversified collateral type in decentralised finance" },
  { url: "%2Fsvgs%2Fcarbon-use-cases%2Ficon-liquidity-high.svg", title: "Carbon in the Metaverse", text: "Incorporate carbon into the metaverse and incentivise IRL positive impact." },
  { url: "%2Fsvgs%2Fcarbon-use-cases%2Fchristmas-snow-globe.svg", title: "Transparent Compensation", text: "Use Toucan’s upcoming retirement functionality to take public climate action." },
  { url: "%2Fsvgs%2Fcarbon-use-cases%2Ficon-price-signal.svg", title: "Earn Interest on Carbon", text: "Access new ways of turning carbon credits into productive, yield-bearing assets." },
  { url: "%2Fsvgs%2Fcarbon-use-cases%2Ficon-open.svg", title: "Green NFTs", text: "Integrate carbon with your next NFT project for planet positive works of art." },
  { url: "%2Fsvgs%2Fcarbon-use-cases%2Fdigital-asset.svg", title: "Carbon as a Digital Asset", text: "Diversify treasury or portfolio holdings with real-world carbon credits, tokenized." },
]

const CarbonUse = () => {
  return (
    <div className="pt-20 pb-28 lg:pb-40">
      <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
        <div className="text-sm md:text-base xl:text-lg font-semibold text-gray-400">
          Carbon Use Cases
        </div>
        <div className="mt-3 text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight md:leading-tight xl:leading-tight max-w-2xl">
          <span>
            Programmable for builders,
            <br />
            <span className="mr-2 text-candy">
              accessible to all
            </span>
            ✨
          </span>
        </div>
        <div className="mt-5 mb-12 lg:mb-16 text-lg md:text-xl xl:text-2xl leading-relaxed md:leading-relaxed xl:leading-[36px] text-gray-500 max-w-2xl">
          Toucan’s open infrastructure enables a new wave of regenerative innovation. Bring your ideas to the table and help shape the future.
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 xl:gap-y-16">
          { carbonUses.map((item, i)=> (
            <div className="col-span-1 text-lg" key={i}>
              <div className="w-14 h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16">
                <Image
                  loader={myLoader}
                  src={item.url}
                  alt="Header_bg1"
                  width={1920}
                  height={1920}
                />
              </div>
              <div className='mt-5 font-semibold'>
                Carbon as Collateral
              </div>
              <div className='mt-2 text-gray-500'>
                dd tokenized carbon credits as a diversified collateral type in decentralised finance.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarbonUse