import Image from 'next/image'

type Props = {
  guideRef: React.RefObject<HTMLDivElement>
}
type TGuideTitle = {
  title: string
}
type TGuideCard = {
  isWallet: boolean
  step: string
  subTitle: string
  content: React.ReactNode
  icons?: TWalletIcon[]
  button?: string
  clickButton?: () => void
}
type TGuideCardSubTitle = {
  step: string
  subTitle: string
}
type TWalletIcon = {
  src: string
  alt: string
}

export default function Guide(props: Props) {
  const { guideRef } = props
  const walletArr = [
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
  const contents = [
    {
      isWallet: true,
      step: '01.',
      subTitle: 'Install Wallet',
      content: (
        <>
          <p>Install the cryptocurrency wallet below to purchase KukuCoin.</p>
          <p>Click the icon below to go to the installation page.</p>
        </>
      ),
      icons: walletArr,
    },
    {
      isWallet: false,
      step: '02.',
      subTitle: 'Connect Wallet',
      content: (
        <>
          <p>
            Open the installed wallet and create a wallet. Set a password and
            keep your recovery phrase safe.
          </p>
          <p>
            Add funds to your wallet by purchasing Ethereum (ETH) or another
            cryptocurrency on an exchange.
          </p>
        </>
      ),
      // FIXME: 버튼 클릭 이벤트 수정하기
      button: 'More Info',
      clickButton: () => {
        console.log('click')
      },
    },
    {
      isWallet: false,
      step: '03.',
      subTitle: 'Buy Kuku Coin',
      content: (
        <>
          <p>
            Sign up for an exchange to purchase Cookcoin, connect your wallet,
            and purchase the desired amount of Cookcoin.
          </p>
          <p>Afterwards, transfer the purchased Cookcoin to your wallet.</p>
        </>
      ),
      // FIXME: 버튼 클릭 이벤트 수정하기
      button: 'Go to Exchange',
      clickButton: () => {
        console.log('click')
      },
    },
  ]
  return (
    <article ref={guideRef} className=" text-white pt-24 pb-10">
      <GuideTitle title="Simple Guide to Buy" />
      <div className="xl:row-flex col-flex justify-around items-center h-68 xl:space-y-0 space-y-6">
        {contents.map((data) => (
          <GuideCard
            key={data.step}
            isWallet={data.isWallet}
            step={data.step}
            subTitle={data.subTitle}
            content={data.content}
            icons={data.icons}
            button={data.button}
            clickButton={data.clickButton}
          />
        ))}
      </div>
    </article>
  )
}
function GuideTitle(props: TGuideTitle) {
  const { title } = props
  return (
    <div className="row-flex justify-center xl:justify-start items-center mb-6">
      <h1 className="text-4xl px-16 py-4">{title}</h1>
    </div>
  )
}
function GuideCard(props: TGuideCard) {
  const { isWallet, step, subTitle, content, icons, button, clickButton } =
    props
  return (
    <div className="w-[27rem] h-[18rem] border-2 border-[#353535] rounded-lg bg-[#222222] bg-opacity-90 grid grid-rows-4 px-4 py-2 hover:scale-110 simple-transition">
      <GuideCardSubTitle step={step} subTitle={subTitle} />
      <div className="py-2 px-4 text-lg row-span-2 items-start justify-center col-flex">
        {content}
      </div>
      {isWallet ? (
        <div className="row-flex items-center justify-around row-span-1">
          {icons?.map((data) => (
            <WalletIcon key={data.src} src={data.src} alt={data.alt} />
          ))}
        </div>
      ) : (
        <div className="row-flex items-center justify-around row-span-1">
          <button
            className="bg-blue-400 hover:bg-blue-500 simple-transition text-white px-4 py-2 rounded-md"
            onClick={clickButton}
          >
            {button}
          </button>
        </div>
      )}
    </div>
  )
}

function GuideCardSubTitle(props: TGuideCardSubTitle) {
  const { step, subTitle } = props
  return (
    <div className="row-flex items-center space-x-4 px-4 row-span-1 ">
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
        className="h-12 hover:scale-125 simple-transition cursor-pointer "
      />
      <p>{alt}</p>
    </div>
  )
}
