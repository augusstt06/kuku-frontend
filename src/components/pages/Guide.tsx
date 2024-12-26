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
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        console.log('Wallet Connected!')
      } catch (error) {
        console.error('User denied account access or error occurred:', error)
      }
    } else {
      alert('Please install MetaMask')
    }
  }
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
      step: '01',
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
      step: '02',
      subTitle: 'Connect Wallet',
      content: (
        <>
          <p>
            Open the installed wallet and create a wallet.
            <br />
            Set a password and keep your recovery phrase safe.
          </p>
          <p>
            Add funds to your wallet by purchasing Ethereum (ETH) or another
            cryptocurrency on an exchange.
          </p>
        </>
      ),

      button: 'Connect Wallet',
      clickButton: () => {
        void connectWallet()
      },
    },
    {
      isWallet: false,
      step: '03',
      subTitle: 'Buy Kuku Coin',
      content: (
        <>
          <p>
            Sign up for an exchange to purchase KukuCoin, connect your wallet,
            and purchase the desired amount of KukuCoin.
          </p>
          <p>Afterwards, transfer the purchased KukuCoin to your wallet.</p>
        </>
      ),
      // FIXME: 버튼 클릭 이벤트 -> 거래소로 이동 기능
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
    <div className="row-flex justify-center xl:justify-start items-center mb-6 text-center">
      <h1 className="md:text-[3.5rem] text-4xl px-16 py-4">{title}</h1>
    </div>
  )
}
function GuideCard(props: TGuideCard) {
  const { isWallet, step, subTitle, content, icons, button, clickButton } =
    props
  return (
    <div className="md:w-[27rem] sm:w-[20rem] w-[18rem] h-[18rem] border-2 border-[#353535] rounded-lg bg-[#222222] bg-opacity-90 grid grid-rows-4 px-4 py-2 simple-transition">
      <GuideCardSubTitle step={step} subTitle={subTitle} />
      <div className="py-2 px-4 md:text-lg text-sm row-span-2 items-start justify-center col-flex">
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
            className="bg-blue-400 hover:bg-blue-500 simple-transition md:text-lg text-sm text-white px-4 py-2 rounded-md"
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
    <div className="row-flex items-center space-x-4 px-4 row-span-1 simple-transition">
      <div className="bg-blue-400 rounded-lg row-flex items-center justify-center md:w-12 md:h-12 w-10 h-10 md:text-2xl text-xl">
        {step}
      </div>
      <h1 className="md:text-3xl text-2xl">{subTitle}</h1>
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
