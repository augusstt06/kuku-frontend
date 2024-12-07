import Image from 'next/image'

export default function Header() {
  const menus = ['Home', 'What is Kuku?', 'Menu2', 'Menu3']
  return (
    <header className="bg-[#a0a0a0] grid grid-cols-6">
      <div className="col-span-1 row-flex items-center justify-center">
        <Image src="/kuku.png" alt="kuku" width={110} height={100} />
      </div>
      <div className="col-span-5 grid grid-cols-4">
        {menus.map((menu, index) => (
          <div key={index} className="row-flex items-center justify-center ">
            <span className="text-xl cursor-pointer px-2 py-2 border-2 border-transparent hover:border-b-white simple-transition hover:text-white">
              {menu}
            </span>
          </div>
        ))}
      </div>
    </header>
  )
}
