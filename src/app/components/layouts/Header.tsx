'use client'
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

type Props = {
  introductionRef: React.RefObject<HTMLDivElement>
  guideRef: React.RefObject<HTMLDivElement>
}
type DropdownMenuProps = {
  toggleDropdown: () => void
  isDropdownOpen: boolean
  dropdownRef: React.RefObject<HTMLDivElement>
  menus: string[]
  handleClick: (menu: string) => void
}
type NormalMenuProps = {
  menus: string[]
  handleClick: (menu: string) => void
}
export default function Header(props: Props) {
  const { introductionRef, guideRef } = props
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const menus = ['About Kuku', 'Guide', 'Menu2', 'Menu3']

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
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleClick = (menu: string) => {
    if (menu === 'About Kuku') {
      scrollTo(introductionRef)
    } else if (menu === 'Guide') {
      scrollTo(guideRef)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <header className="grid grid-cols-6 h-24 fixed top-0 left-0 w-full bg-opacity-90 bg-black z-50 text-white">
      <div className="row-flex items-center justify-center w-24 h-24 col-span-1">
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
        handleClick={handleClick}
      />
      <NormalMenu menus={menus} handleClick={handleClick} />
    </header>
  )
}

function DropdownMenu(props: DropdownMenuProps) {
  const { isDropdownOpen, dropdownRef, menus, toggleDropdown, handleClick } =
    props
  return (
    <div className="md:hidden grid grid-cols-4 col-span-5">
      <GiHamburgerMenu
        onClick={toggleDropdown}
        className="top-8 right-12 absolute w-10 h-10 cursor-pointer"
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed left-0 w-full bg-black shadow-lg text-center "
        >
          {menus.map((menu, index) => (
            <div
              key={index}
              className="hover:bg-gray-200 simple-transition px-4 py-4 text-xl hover:text-black cursor-pointer"
              onClick={() => {
                handleClick(menu)
              }}
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
  const { menus, handleClick } = props

  return (
    <div className="md:grid hidden grid-cols-4 col-span-5">
      {menus.map((menu, index) => (
        <div
          key={index}
          className="row-flex items-center justify-center"
          onClick={() => {
            handleClick(menu)
          }}
        >
          <span className="hover:border-b-white simple-transition hover:text-white px-2 py-2 text-xl border-2 border-transparent cursor-pointer">
            {menu}
          </span>
        </div>
      ))}
    </div>
  )
}
