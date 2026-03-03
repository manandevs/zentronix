import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 py-3 md:px-6 /70 backdrop-blur-xl border-b border-border transition-colors duration-300">
      <Link href="/" className="flex items-center gap-2 cursor-pointer text-2xl font-bold">
        <Image
          src={"/images/favicon.png"}
          alt='favicon'
          width={40}
          height={40}
        />
        <span>Zentronix</span>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/beta-program"
          className="inline-flex items-center justify-center rounded-full leading-none transition-colors cursor-pointer px-4 py-2.5 bg-black text-white text-xl hover:opacity-80"
        >
          Join Beta
        </Link>
      </div>
    </header>
  )
}

export default Header