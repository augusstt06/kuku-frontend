import Image from 'next/image'

export default function Header() {
  const menus = ['Home', 'What is Kuku?', 'Menu2', 'Menu3']
  return (
    <header className="bg-red-100 grid grid-cols-6">
      <div className="col-span-1 row-flex items-center justify-center">
        <Image src="/kuku.png" alt="kuku" width={110} height={100} />
      </div>
      <div className="col-span-5 grid grid-cols-4">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="bg-blue-300 row-flex items-center justify-center "
          >
            <span className="text-xl">{menu}</span>
          </div>
        ))}
      </div>
    </header>
  )
}
