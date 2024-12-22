import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-35 text-white h-20 w-full border-t border-gray-800">
      <div className="flex items-center justify-center h-full">
        <p>© 2024 Kuku Coin. All Rights Reserved</p>
        <Link href="https://github.com/augusstt06/kuku-frontend">
          <FaGithub className="text-2xl ml-4" />
        </Link>
      </div>
    </footer>
  )
}
