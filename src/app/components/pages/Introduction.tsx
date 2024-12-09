import Image from 'next/image'
import { FaTwitter } from 'react-icons/fa'
import { MdEmojiEvents } from 'react-icons/md'

type TSubIntroductionText = {
  image: React.ReactNode
  text: React.ReactNode
  button: React.ReactNode
}
export default function Introduction() {
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
        <div className="pt-5">
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
        <>
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
        </>
      ),
      // FIXME: 버튼 클릭 이벤트 추가하기
      button: (
        <button className="bg-blue-400 hover:bg-blue-500 simple-transition text-white px-4 py-2 rounded-md">
          Pre-register
        </button>
      ),
    },
    {
      image: <FaTwitter className="xl:w-28 xl:h-24 w-12 h-12 text-blue-400" />,
      text: (
        <>
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
        </>
      ),
      // FIXME: 버튼 클릭 이벤트 추가하기
      button: (
        <button className="bg-blue-400 hover:bg-blue-500 simple-transition text-white px-4 py-2 rounded-md">
          Go Twitter
        </button>
      ),
    },
  ]
  return (
    <article className="h-screen relative">
      <BgImage />
      <div className="z-10 pt-24 text-white h-full">
        <div className="h-1/4 relative">
          <IntroductionText />
        </div>
        <div className="absolute w-full h-full xl:h-3/4 grid grid-cols-1 xl:grid-cols-3 justify-items-center gap-5">
          {subIntroductions.map((subIntroduction, index) => (
            <SubIntroductionText key={index} {...subIntroduction} />
          ))}
        </div>
      </div>
    </article>
  )
}

export function BgImage() {
  return (
    // FIXME: 반응형 대응: 배경화면이 길어져야함 xl 이하일대
    // 현재는 Introduction만 확인했을때는 높이가 맞지만, 아래 RoadMap 페이지 확인시 높이가 맞지 않음 (반응형 크기가 RoadMap 페이지를 침범함)
    <div
      className="absolute inset-0 bg-cover bg-center opacity-80 h-[170vh] xl:h-full"
      style={{ backgroundImage: "url('/forest.png')" }}
    ></div>
  )
}
export function IntroductionText() {
  return (
    <h1 className="text-[5rem] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
      KuKu Coin
    </h1>
  )
}
export function SubIntroductionText(props: TSubIntroductionText) {
  const { image, text, button } = props
  const isButtonExist = button !== null
  return (
    <div className="bg-black bg-opacity-80 xl:w-[23rem] xl:h-[30rem] w-[40rem] h-[18rem] rounded-lg px-10 py-6 grid grid-rows-5">
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
