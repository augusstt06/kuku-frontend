import { useState } from 'react'

import Image from 'next/image'
import { FaTwitter } from 'react-icons/fa'
import { MdEmojiEvents } from 'react-icons/md'
type Props = {
  introductionRef: React.RefObject<HTMLDivElement>
}
type TSubIntroductionText = {
  image: React.ReactNode
  text: React.ReactNode
  button: React.ReactNode
}
export default function Introduction(props: Props) {
  const { introductionRef } = props
  const subIntroductions = [
    {
      image: (
        <Image
          src={'/kuku.png'}
          alt={'kuku'}
          width={110}
          height={100}
          className="xl:w-28 xl:h-28 w-16 h-16"
        />
      ),
      text: (
        <div className="pt-5 md:text-lg text-sm">
          <p>
            <span className="text-blue-400">Kuku Coin</span> is a special meme
            coin created to commemorate the adorable cat Kuku.
          </p>
          <p>
            Kuku is a cute friend in our house, and his unique personality and
            charm are loved by many people.
          </p>
          <p>
            <span className="text-blue-400">Kuku Coin</span> aims to go beyond a
            simple cryptocurrency and become a platform that connects cat lovers
            and the community.
          </p>
        </div>
      ),
      button: null,
    },
    {
      image: (
        <MdEmojiEvents className="xl:w-28 xl:h-24 w-12 h-12 text-yellow-300" />
      ),
      text: (
        <div className="md:text-lg text-sm">
          <p>
            Participate in Kuku Coin’s first{' '}
            <span className="text-blue-400">Development Event!</span>
          </p>

          <p>
            This event is a place to discuss the future of Kuku Coin and share
            ideas with the community.
          </p>
          <p>
            If you would like to participate, please pre-register through the
            button below.
          </p>
        </div>
      ),
      // FIXME: 버튼 클릭 이벤트 -> 이벤트 페이지 이동
      button: (
        <button className="bg-blue-400 hover:bg-blue-500 simple-transition md:text-lg text-sm text-white px-4 py-2 rounded-md">
          Pre-register
        </button>
      ),
    },
    {
      image: <FaTwitter className="xl:w-28 xl:h-24 w-12 h-12 text-blue-400" />,
      text: (
        <div className="md:text-lg text-sm">
          <p>
            Check out Kuku Coin’s latest news and announcements on{' '}
            <span className="text-blue-400">Twitter!</span>
          </p>
          <p>
            We plan to provide more information, such as{' '}
            <span className="text-blue-400">events</span> and{' '}
            <span className="text-blue-400">development roadmaps</span>, through
            communication with the community, so we ask for your interest and
            participation!
          </p>
        </div>
      ),
      // FIXME: 버튼 클릭 이벤트 -> 트위터 이동
      button: (
        <button className="bg-blue-400 hover:bg-blue-500 simple-transition md:text-lg text-sm text-white px-4 py-2 rounded-md">
          Go Twitter
        </button>
      ),
    },
  ]
  return (
    <article ref={introductionRef} className="xl:h-screen h-[170vh] relative">
      <BgImage />
      <div className="z-10 pt-24 text-white h-full">
        <div className="h-1/6 xl:h-1/4 relative ">
          <IntroductionText />
          <WalletButton />
          <Balance />
        </div>
        <div className="absolute w-full h-[100vh] grid grid-cols-1 xl:grid-cols-3 justify-items-center gap-5 pt-6">
          {subIntroductions.map((subIntroduction, index) => (
            <SubIntroductionText key={index} {...subIntroduction} />
          ))}
        </div>
      </div>
    </article>
  )
}

function BgImage() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center opacity-80 h-[170vh] xl:h-full"
      style={{ backgroundImage: "url('/forest.png')" }}
    ></div>
  )
}
function IntroductionText() {
  return (
    <h1 className="text-[3.5rem] md:text-[5rem] font-bold absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
      KuKu Coin
    </h1>
  )
}

function WalletButton() {
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
  return (
    <button
      onClick={() => {
        void connectWallet()
      }}
      className="bg-blue-400 hover:bg-blue-500 hover:scale-110 simple-transition text-xl text-white px-4 py-2 rounded-md  absolute top-[65%] left-1/2 -translate-x-1/2"
    >
      Connect Wallet
    </button>
  )
}
function SubIntroductionText(props: TSubIntroductionText) {
  const { image, text, button } = props
  const isButtonExist = button !== null
  return (
    <div className="bg-black bg-opacity-80 xl:w-[23rem] xl:h-[30rem] md:w-[30rem] sm:w-[20rem] w-[18rem] sm:h-[18rem] h-[20rem] rounded-lg px-10 py-6 grid grid-rows-5">
      <div className="row-flex xl:items-center items-start justify-center h-24 row-span-1">
        {image}
      </div>
      <div
        className={`px-2 py-2 xl:text-lg text-md ${isButtonExist ? 'row-span-3' : 'row-span-4'} col-flex items-start justify-center`}
      >
        {text}
      </div>
      <div className="row-span-1 row-flex items-center justify-center">
        {button}
      </div>
    </div>
  )
}

// FIXME: Test 필요
function Balance() {
  // 지갑 잔액
  const [balance, setBalance] = useState<string | null>(null)

  const fetchBalance = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    if (accounts.length > 0) {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      })
      const balanceInEth: string = window.ethereum.utils.fromWei(
        balance as string,
        'ether',
      )
      setBalance(balanceInEth)
      return balanceInEth
    }
  }

  return (
    <div>
      {balance && <p className="text-white">Balance: {fetchBalance()} ETH</p>}{' '}
    </div>
  )
}
