import Image from 'next/image'

type TSubTitle = {
  step: string
  subTitle: string
}
type TWalletIcon = {
  src: string
  alt: string
}

export default function Guide() {
  const wallets = [
    {
      src: '/metamask.png',
      alt: 'Metamask',
    },
    {
      src: '/phantom.png',
      alt: 'Phantom',
    },
    {
      src: '/exodus.png',
      alt: 'Exodus',
    },
  ]
  return (
    <article className="h-screen text-white">
      <div className="row-flex justify-start items-center">
        <h1 className="text-4xl px-16 py-4">Simple Guide to Buy</h1>
      </div>
      {/* FIXME: 아래 코드 컴포넌트화 하기 */}
      <div className="w-[30rem] border-2 border-white rounded-lg bg-[#353535] bg-opacity-90">
        <SubTitle step="01." subTitle="Install Wallet" />
        <div className="px-4">
          <p>Install the cryptocurrency wallet below to purchase KukuCoin.</p>
          <p>Click the icon below to go to the installation page.</p>
        </div>
        <div className="row-flex items-center justify-around mt-4">
          {wallets.map((data) => (
            <WalletIcon key={data.src} src={data.src} alt={data.alt} />
          ))}
        </div>
      </div>
      {/*  */}
    </article>
  )
}
// function GuideCard (){
//   return ()
// }

function SubTitle(props: TSubTitle) {
  const { step, subTitle } = props
  return (
    <div className="row-flex items-center space-x-4 px-4 pt-4 pb-2">
      <div className="bg-blue-400 rounded-lg row-flex items-center justify-center w-12 h-12 text-2xl">
        {step}
      </div>
      <h1 className="text-3xl">{subTitle}</h1>
    </div>
  )
}

function WalletIcon(props: TWalletIcon) {
  const { src, alt } = props
  // FIXME: hover event 작동 확인하기
  return (
    <div className="col-flex items-center justify-center h-20">
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        className="h-12 hover:scale-105 simple-transition cursor-pointer "
      />
      <p>{alt}</p>
    </div>
  )
}
