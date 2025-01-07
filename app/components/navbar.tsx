import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link href={"/"} className='text-white font-bold'>
            Devchronicles
        </Link>
        <Link href={"pages/add-post"} className='bg-white p-2 font-bold'>
            Add Post
        </Link>
    </nav>
  )
}

export default Navbar
