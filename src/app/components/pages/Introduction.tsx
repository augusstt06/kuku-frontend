export default function Introduction() {
  return (
    <article className="h-screen relative">
      <BgImage />
      <div className="relative z-10 pt-24 text-white h-full">
        <IntroductionText />
      </div>
    </article>
  )
}

export function BgImage() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center opacity-80 min-h-full"
      style={{ backgroundImage: "url('/forest.png')" }}
    ></div>
  )
}
export function IntroductionText() {
  return (
    <h1 className="text-[4rem] font-bold absolute top-32 left-1/2 -translate-x-1/2">
      KuKu Coin
    </h1>
  )
}
