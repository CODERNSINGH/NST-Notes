import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-center gap-10 w-full border-amber-600'>
        <Link className='text-blue-500' href='/'>Home</Link>
        <Link className='text-blue-500' href='/about'>about</Link>
        <Link className='text-blue-500' href='/products'>products</Link>
    </div>
  )
}
