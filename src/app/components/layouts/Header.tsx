'use client'
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

type DropdownMenuProps = {
  toggleDropdown: () => void
  isDropdownOpen: boolean
  dropdownRef: React.RefObject<HTMLDivElement>
  menus: string[]
}
type NormalMenuProps = {
  menus: string[]
}
export default function Header() {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const menus = ['Home', 'What is Kuku?', 'Menu2', 'Menu3']

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <header className="bg-[#a0a0a0] grid grid-cols-6 h-24">
      <div className="col-span-1 row-flex items-center justify-center h-24 w-24">
        <Image
          src="/kuku.png"
          alt="kuku"
          width={110}
          height={100}
          className="ml-8"
        />
      </div>
      <DropdownMenu
        isDropdownOpen={isDropdownOpen}
        dropdownRef={dropdownRef}
        menus={menus}
        toggleDropdown={toggleDropdown}
      />
      <NormalMenu menus={menus} />
    </header>
  )
}

function DropdownMenu(props: DropdownMenuProps) {
  const { isDropdownOpen, dropdownRef, menus, toggleDropdown } = props
  return (
    <div className="col-span-5 grid grid-cols-4 md:hidden">
      <GiHamburgerMenu
        onClick={toggleDropdown}
        className="cursor-pointer w-10 h-10 absolute top-8 right-12"
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed left-0 w-full bg-[#a0a0a0] shadow-lg text-center"
        >
          {menus.map((menu, index) => (
            <div
              key={index}
              className="px-4 py-4 cursor-pointer hover:bg-gray-200 simple-transition text-xl "
            >
              {menu}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function NormalMenu(props: NormalMenuProps) {
  const { menus } = props
  return (
    <div className="hidden md:grid col-span-5 grid-cols-4">
      {menus.map((menu, index) => (
        <div key={index} className="row-flex items-center justify-center ">
          <span className="text-xl cursor-pointer px-2 py-2 border-2 border-transparent hover:border-b-white simple-transition hover:text-white">
            {menu}
          </span>
        </div>
      ))}
    </div>
  )
}
