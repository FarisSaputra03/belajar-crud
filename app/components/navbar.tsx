import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Image width={50} height={50} src='/img/handphone.png' alt=''/>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"}>
        <button>
        <p className="mr-5 text-black hover:text-gray-500 font-bold">Home</p>
        </button>
        </Link>
    </nav>
  </div>
</header>
  )
}
